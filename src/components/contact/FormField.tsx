import React, { useState, useRef } from 'react';
import { Input } from "@/components/ui/input"; // or your own Input component

interface PhoneFieldProps {
  id: string;
  name: string;
  label: string;
  value: string; // store only the raw digits, e.g. "123456789"
  onChange: (newValue: string) => void;
  error?: string;
}

// This helper replaces any non-digit characters
function extractDigits(input: string) {
  return input.replace(/\D/g, '');
}

const PhoneField: React.FC<PhoneFieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Core logic to build the visible string: +38(0xx)xxxxxxx
  // Then update progressively as user enters digits
  const getDisplayValue = (rawDigits: string) => {
    if (!rawDigits) {
      // If empty, show the entire phone mask:
      return "+38(0xx)xxxxxxx";
    }

    // Up to 2 digits for the area code after "0"
    const areaCodeLength = Math.min(rawDigits.length, 2);
    const areaCode = rawDigits.slice(0, areaCodeLength);

    // Fill in any missing area-code digits with 'x'
    const areaCodeMask = areaCode + "x".repeat(2 - areaCode.length);

    // The rest is up to 7 digits
    let restDigits = "";
    if (rawDigits.length > 2) {
      restDigits = rawDigits.slice(2);
    }
    // Fill the remaining with 'x'
    const restMask = restDigits + "x".repeat(7 - restDigits.length);

    return `+38(0${areaCodeMask})${restMask}`;
  };

  // This event runs on user typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Always parse out digits
    const digits = extractDigits(e.target.value);
    // Limit total length to 9 digits
    const limited = digits.slice(0, 9);
    // Store just raw digits in state
    onChange(limited);
  };

  // On click or focus, we position the cursor where the user left off
  const handleCursorPosition = () => {
    if (!inputRef.current) return;

    // Based on how many digits we have
    const rawDigits = value;
    const currentDisplay = getDisplayValue(rawDigits);

    // We look for the correct insertion point
    let cursorIndex = 5; // default after "+38(0"
    if (rawDigits.length <= 2) {
      // Directly after typed area code
      cursorIndex = 5 + rawDigits.length;
    } else {
      // Move after the closing parenthesis + however many extra digits typed
      const closingParen = currentDisplay.indexOf(")");
      // Add 1 for the parenthesis itself
      // Then add (rawDigits.length - 2) for the digits after area code
      cursorIndex = closingParen + 1 + (rawDigits.length - 2);
    }

    // Defer until next tick to ensure text is set
    setTimeout(() => {
      inputRef.current?.setSelectionRange(cursorIndex, cursorIndex);
    }, 0);
  };

  // Render
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input
        ref={inputRef}
        type="tel"
        id={id}
        name={name}
        // Show the full mask with typed digits
        value={getDisplayValue(value)}
        onChange={handleChange}
        onClick={handleCursorPosition}
        onFocus={handleCursorPosition}
        // We do NOT use the placeholder attribute at all:
        // placeholder="+38(0xx)xxxxxxx" // not used due to placeholder 'trauma' :)
        className={error ? "border-red-500" : ""}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneField;
