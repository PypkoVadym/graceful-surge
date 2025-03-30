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

  // Generate the dynamic display value with placeholders
  const getDisplayValue = () => {
    if (!value) {
      return '';
    }
    
    const areaCodeLength = Math.min(value.length, 2);
    const areaCode = value.substring(0, areaCodeLength);
    
    // Add placeholders for incomplete area code
    const fullAreaCode = areaCode + 'x'.repeat(Math.max(0, 2 - areaCode.length));
    
    // Add remaining digits and placeholders
    let remainingDigits = '';
    if (value.length > 2) {
      remainingDigits = value.substring(2);
    }
    
    // Add placeholder x's for remaining digits (up to 7 total)
    const fullRemainingDigits = remainingDigits + 'x'.repeat(Math.max(0, 7 - remainingDigits.length));
    
    return `+38(0${fullAreaCode})${fullRemainingDigits}`;
  };

  // Handle click to position cursor correctly
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      // Calculate cursor position based on visible characters
      const visibleValue = getDisplayValue();
      const length = visibleValue.length;
      const startingPrefixLength = 5; // '+38(0'
      const closingParenPos = visibleValue.indexOf(')');
      
      let cursorPos;
      if (value.length <= 2) {
        // Position after the area code digits entered so far
        cursorPos = startingPrefixLength + value.length;
      } else {
        // Position after the entered digits (accounting for formatting)
        cursorPos = closingParenPos + 1 + (value.length - 2);
      }
      
      setTimeout(() => {
        inputRef.current?.setSelectionRange(cursorPos, cursorPos);
      }, 0);
    }
  };

  // Position cursor correctly on focus
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    handleClick(e as unknown as React.MouseEvent<HTMLInputElement>);
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
          placeholder="+38(0xx)xxxxxxx"
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