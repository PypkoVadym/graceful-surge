
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ImageOptimizer from '@/components/ImageOptimizer';

interface TestimonialPopupProps {
  image: string;
  name: string;
  children: React.ReactNode;
}

const TestimonialPopup = ({ image, name, children }: TestimonialPopupProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">{children}</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full max-w-sm max-h-[70vh] overflow-hidden rounded-lg">
            <ImageOptimizer 
              src={image} 
              alt={`Photo of ${name}`} 
              className="w-full h-auto object-cover"
              priority={true}
            />
          </div>
          <h3 className="text-lg font-medium">{name}</h3>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestimonialPopup;
