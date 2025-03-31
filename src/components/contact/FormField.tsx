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

  // Format phone input with +38(0xxx)...
  useEffect(() => {
    if (type === 'tel') {
      if (value) {
        // 1. Remove all non-digit characters
        const digits = value.replace(/\D/g, '');
        // 2. Slice your preferred place for city/operator code
        const cityCode = digits.slice(0, 3); // e.g. '12' or '123'
        const rest = digits.slice(3);
        // 3. Build final display string
        //    If you want the parenthesis after 2 digits, do slice(0, 2)
        //    and slice(2) for the rest
        setDisplayValue(`+38(0${cityCode})${rest}`);
      } else {
        setDisplayValue('+38(0');
      }
    }
  }, [value, type]);

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // We only want to preserve the digits from the entire input
    const allDigits = input.replace(/\D/g, '');
    // Prepare a synthetic event that sets "value" to only those digits
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        name: e.target.name,
        // Store only the clean digits for the actual "value"
        value: allDigits
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
