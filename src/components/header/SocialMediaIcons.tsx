
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

interface SocialMediaIconsProps {
  isMobile?: boolean;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ isMobile = false }) => {
  const iconSize = isMobile ? 24 : 20;
  
  return (
    <div className={`flex items-center space-x-${isMobile ? '6' : '4'} ${isMobile ? 'justify-center mt-6 pt-6 border-t border-gray-100' : ''}`}>
      <a href="https://www.instagram.com/markovych_work/" target="_blank" rel="noopener noreferrer" 
         className="text-gray-600 hover:text-primary transition-colors" 
         aria-label="Instagram">
        <Instagram size={iconSize} />
      </a>
      <a href="https://www.threads.net/@markovych_work?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" 
         className="text-gray-600 hover:text-primary transition-colors" 
         aria-label="Threads">
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
          <path d="M7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 12C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.44 7.5C6.48 8.74 5.25 10.97 5.25 13.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.75 13.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.75 7.5V4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.25 4.5V4.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
      <a href="https://www.tiktok.com/search?q=%D0%B4%D0%B5%D0%BD%D0%B8%D1%81%20%D0%BC%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%B8%D1%87&t=1743145079306" target="_blank" rel="noopener noreferrer" 
         className="text-gray-600 hover:text-primary transition-colors" 
         aria-label="TikTok">
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
          <path d="M9 12.75C7.75736 12.75 6.75 13.7574 6.75 15C6.75 16.2426 7.75736 17.25 9 17.25C10.2426 17.25 11.25 16.2426 11.25 15V8.25C11.25 7.85218 11.408 7.47064 11.6893 7.18934C11.9706 6.90804 12.3522 6.75 12.75 6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.25 10.5C11.25 9.25736 12.2574 8.25 13.5 8.25C14.7426 8.25 15.75 9.25736 15.75 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.25 8.25C14.25 6.17893 15.9289 4.5 18 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 7.5V12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
         className="text-gray-600 hover:text-primary transition-colors" 
         aria-label="LinkedIn">
        <Linkedin size={iconSize} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
