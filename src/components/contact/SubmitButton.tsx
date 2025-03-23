
import React from 'react';
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-medium transition-colors relative overflow-hidden group"
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Обробка...
        </span>
      ) : (
        <>
          <span className="relative z-10">Надіслати повідомлення</span>
          <span className="absolute inset-0 bg-primary-foreground/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
