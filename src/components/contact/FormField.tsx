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
  const inputRef = useRef<HTMLInputElement>(null);
  
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

  // Format the display value based on user input
  const getDisplayValue = () => {
    if (!value) {
      return '+38(0';
    }
    
    if (value.length <= 2) {
      return `+38(0${value}`;
    }
    
    const areaCode = value.substring(0, 2);
    const remainingDigits = value.substring(2);
    return `+38(0${areaCode})${remainingDigits}`;
  };

  // Handle click to position cursor at the end
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      const length = inputRef.current.value.length;
      setTimeout(() => {
        inputRef.current?.setSelectionRange(length, length);
      }, 0);
    }
  };

  // Focus handler to position cursor at the end
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      const length = inputRef.current.value.length;
      setTimeout(() => {
        inputRef.current?.setSelectionRange(length, length);
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
        <Input
          ref={inputRef}
          type="tel"
          id={id}
          name={name}
          value={getDisplayValue()}
          onChange={handlePhoneInput}
          onClick={handleClick}
          onFocus={handleFocus}
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