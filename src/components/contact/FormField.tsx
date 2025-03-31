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
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  
  // For phone input, format with prefix and dynamic formatting
  useEffect(() => {
    if (type === 'tel') {
      if (value) {
        // Format: +38(0XX)XXXXXXX - closing parenthesis after the first 2 digits
        if (value.length >= 2) {
          const areaCode = value.substring(0, 2);
          const restOfNumber = value.substring(2);
          setDisplayValue(`+38(0${areaCode})${restOfNumber}`);
        } else {
          setDisplayValue(`+38(0${value}`);
        }
      } else {
        setDisplayValue('+38(0');
      }
    }
  }, [value, type]);

  // Handle cursor position after format changes
  useEffect(() => {
    if (inputRef.current && cursorPosition !== null && type === 'tel') {
      // Adjust cursor position based on the parenthesis
      let adjustedPosition = cursorPosition;
      
      // If cursor is after the position where ")" would be inserted, move it forward
      if (cursorPosition > 7) {
        adjustedPosition = cursorPosition + 1;
      }
      
      inputRef.current.setSelectionRange(adjustedPosition, adjustedPosition);
      setCursorPosition(null);
    }
  }, [displayValue, cursorPosition, type]);

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const inputElement = e.target;
    
    // Save cursor position for later use
    setCursorPosition(inputElement.selectionStart);
    
    // Extract only the digits after the prefix
    if (input.startsWith('+38(0')) {
      let digits = '';
      
      // Handle the case with closing parenthesis
      if (input.includes(')')) {
        // Format: +38(0XX)XXXXX...
        const match = input.match(/^\+38\(0(\d{0,2})\)(.*)$/);
        if (match) {
          digits = match[1] + match[2];
        }
      } else {
        // Format: +38(0XX...
        digits = input.substring(5);
      }
      
      // Remove any non-digit characters that might have been pasted
      digits = digits.replace(/\D/g, '');
      
      // Create a synthetic event
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          name: e.target.name,
          value: digits
        }
      } as React.ChangeEvent<HTMLInputElement>;
      
      onChange(syntheticEvent);
    } else {
      // If user deleted too much, reset to empty
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          name: e.target.name,
          value: ''
        }
      } as React.ChangeEvent<HTMLInputElement>;
      
      onChange(syntheticEvent);
    }
  };

  // Handle key presses to better manage cursor position and deletion
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === 'tel') {
      const input = e.currentTarget;
      const selectionStart = input.selectionStart || 0;
      
      // Handle special case for backspace at the closing parenthesis
      if (e.key === 'Backspace' && selectionStart === 8 && input.value.charAt(7) === ')') {
        e.preventDefault();
        
        // Simulate backspace on the character before the closing parenthesis
        const newValue = input.value.substring(0, 6) + input.value.substring(8);
        input.value = newValue;
        
        // Create synthetic event for the modified value
        const syntheticEvent = {
          target: {
            name: input.name,
            value: value.substring(0, value.length - 1)
          }
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        
        handlePhoneInput(syntheticEvent);
        
        // Set cursor position to before the closing parenthesis
        setCursorPosition(7);
      }
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
          value={displayValue}
          onChange={handlePhoneInput}
          onKeyDown={handleKeyDown}
          className={`w-full px-4 py-3 rounded-lg ${error ? 'border-destructive' : 'border-input'}`}
          placeholder={placeholder}
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