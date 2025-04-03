
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ImageOptimizer from '@/components/ImageOptimizer';

interface TestimonialPopupProps {
  popupImage: string;
  name: string;
  children: React.ReactNode;
}

const TestimonialPopup = ({ popupImage, name, children }: TestimonialPopupProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">{children}</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-auto p-1 sm:p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full h-full flex justify-center">
            <ImageOptimizer 
              src={popupImage} 
              alt={`Результат операції ${name}`} 
              className="w-auto max-h-[75vh] object-contain"
              priority={true}
            />
          </div>
          <h3 className="text-lg font-medium mt-2">{name}</h3>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestimonialPopup;
