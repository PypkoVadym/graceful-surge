import React, { useState, useEffect, useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  
  // For phone input, format with prefix
  useEffect(() => {
    if (type === 'tel') {
      // Only show the fixed prefix and the entered digits
      if (value) {
        // Format first 2 digits as area code, then the rest
        if (value.length <= 2) {
          setDisplayValue(`+38(0${value}`);
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

  // Get appropriate placeholder based on current value state
  const getPhonePlaceholder = () => {
    if (value.length === 0) {
      return "xx)xxxxxxx";
    } else if (value.length === 1) {
      return `${value}x)xxxxxxx`;
    } else if (value.length === 2) {
      return `${value})xxxxxxx`;
    } else {
      const areaCode = value.substring(0, 2);
      const enteredDigits = value.substring(2);
      const remainingPlaceholder = "xxxxxxx".substring(enteredDigits.length);
      return remainingPlaceholder ? `${areaCode})${enteredDigits}${remainingPlaceholder}` : "";
    }
  };

  // Focus handler to position cursor correctly
  const handlePhoneFocus = () => {
    if (inputRef.current) {
      // Set selection to end of current text
      const end = displayValue.length;
      setTimeout(() => {
        inputRef.current?.setSelectionRange(end, end);
      }, 0);
    }
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
        <div className="relative">
          <Input
            ref={inputRef}
            type="tel"
            id={id}
            name={name}
            value={displayValue}
            onChange={handlePhoneInput}
            onFocus={handlePhoneFocus}
            className={`w-full px-4 py-3 rounded-lg ${error ? 'border-destructive' : 'border-input'}`}
          />
          {/* Custom placeholder element that appears behind the input */}
          <div 
            className="absolute inset-0 flex items-center px-4 pointer-events-none text-gray-400"
            style={{ display: value.length === 9 ? 'none' : 'flex' }}
          >
            <span>{displayValue}</span>
            <span className="text-gray-400">{getPhonePlaceholder()}</span>
          </div>
        </div>
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