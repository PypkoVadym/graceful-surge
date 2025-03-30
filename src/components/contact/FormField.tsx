
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
  
  // For phone input, format with prefix
  useEffect(() => {
    if (type === 'tel') {
      // If user has entered digits, format them accordingly
      if (value) {
        // Format first 2 digits as area code, then the rest
        if (value.length <= 2) {
          setDisplayValue(`+38(0${value}`)
        } else {
          const areaCode = value.substring(0, 2);
          const remainingDigits = value.substring(2);
          setDisplayValue(`+38(0${areaCode})${remainingDigits}`);
        }
      } else {
        // If no value, show just the prefix
        setDisplayValue('+38(0');
      }
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
        const rest = parts[1].replace(/\D/g, '');
        digits = areaCode + rest;
      } else {
        // Just get digits from after prefix
        digits = afterPrefix.replace(/\D/g, '');
      }
    } else {
      // Fallback if somehow the prefix is missing
      digits = input.replace(/\D/g, '');
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

  // Determine placeholder visibility based on phone value
  const getPhonePlaceholder = () => {
    if (!value) {
      return "xx)xxxxxxx";
    }
    
    // If user has only entered area code, show placeholder for remaining digits
    if (value.length <= 2) {
      const remainingPlaceholder = "xxxxxxx";
      return value.length === 0 ? "xx)xxxxxxx" : 
             value.length === 1 ? `${value}x)xxxxxxx` :
             value.length === 2 ? `${value})xxxxxxx` : "";
    }
    
    // If user has started entering number after area code
    if (value.length > 2) {
      const areaCode = value.substring(0, 2);
      const enteredDigits = value.substring(2);
      const remainingPlaceholder = "xxxxxxx".substring(enteredDigits.length);
      return remainingPlaceholder ? `${areaCode})${enteredDigits}${remainingPlaceholder}` : "";
    }
    
    return "";
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
          placeholder={value.length === 0 ? "+38(0xx)xxxxxxx" : undefined}
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
