import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'tel' | 'textarea';
  placeholder: string;
  error?: string;
  mask?: string;
}

const FormField = ({
  id,
  name,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  error,
  mask
}: FormFieldProps) => {
  const [displayValue, setDisplayValue] = useState('');
  
  // For phone input, format with prefix and placeholder
  useEffect(() => {
    if (type === 'tel') {
      // Base prefix is always shown
      let formatted = '+38(0';
      
      if (value) {
        // Add area code (first 2 digits)
        if (value.length >= 1) {
          formatted += value[0];
          if (value.length >= 2) {
            formatted += value[1];
          } else {
            formatted += 'x';
          }
        } else {
          formatted += 'xx';
        }
        
        // Close the parenthesis
        formatted += ')';
        
        // Add remaining digits (up to 7 more)
        if (value.length > 2) {
          const remainingDigits = value.substring(2);
          formatted += remainingDigits;
          
          // Add placeholder x's for remaining positions
          const missingDigits = 7 - remainingDigits.length;
          if (missingDigits > 0) {
            formatted += 'x'.repeat(missingDigits);
          }
        } else {
          // If no remaining digits yet, show all placeholders
          formatted += 'xxxxxxx';
        }
      } else {
        // If no value at all, show complete placeholder
        formatted += 'xx)xxxxxxx';
      }
      
      setDisplayValue(formatted);
    }
  }, [value, type]);

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    
    // Extract only the digits from the input
    let digits = '';
    
    // If the input includes our prefix format "+38(0"
    if (input.startsWith('+38(0')) {
      // Get everything after the prefix
      const afterPrefix = input.substring(5);
      
      // If there's a closing parenthesis, extract digits before and after it
      if (afterPrefix.includes(')')) {
        const parts = afterPrefix.split(')');
        const areaCode = parts[0].replace(/\D/g, '');
        const rest = parts[1].replace(/[^0-9]/g, ''); // Only keep digits, remove x's
        digits = areaCode + rest;
      } else {
        // Just get digits from after prefix
        digits = afterPrefix.replace(/[^0-9]/g, ''); // Only keep digits, remove x's
      }
    } else {
      // Fallback if somehow the prefix is missing
      digits = input.replace(/[^0-9]/g, ''); // Only keep digits, remove x's
    }
    
    // Limit to 9 digits (2 for area code + 7 for number)
    const truncated = digits.slice(0, 9);
    
    // Create a synthetic event with the extracted digits
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        name: e.target.name,
        value: truncated
      }
    } as React.ChangeEvent<HTMLInputElement>;
    
    onChange(syntheticEvent);
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      
      {type === 'textarea' ? (
        <Textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg ${error ? 'border-destructive' : 'border-input'} min-h-[120px]`}
          placeholder={placeholder}
        />
      ) : type === 'tel' ? (
        <Input
          type="tel"
          id={id}
          name={name}
          value={displayValue}
          onChange={handlePhoneInput}
          className={`w-full px-4 py-3 rounded-lg ${error ? 'border-destructive' : 'border-input'}`}
        />
      ) : (
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg ${error ? 'border-destructive' : 'border-input'}`}
          placeholder={placeholder}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
};

export default FormField;