
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
      if (value) {
        setDisplayValue(`+38(0${value}`);
      } else {
        setDisplayValue('+38(0');
      }
    }
  }, [value, type]);

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Extract only the digits after +38(0
    if (input.length >= 5) {
      const digits = input.substring(5);
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
          placeholder="xx)xxxxxxx"
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
