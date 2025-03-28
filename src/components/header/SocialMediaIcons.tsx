
import React from 'react';

interface SocialMediaIconsProps {
  isMobile?: boolean;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ isMobile = false }) => {
  const iconSize = isMobile ? 24 : 20;
  
  return (
    <div className={`flex items-center space-x-${isMobile ? '6' : '4'} ${isMobile ? 'justify-center mt-6 pt-6 border-t border-gray-100' : ''}`}>
      {/* Instagram Icon */}
      <a href="https://www.instagram.com/markovych_work/" target="_blank" rel="noopener noreferrer" 
         className="text-gray-600 hover:text-primary transition-colors" 
         aria-label="Instagram">
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2.5H8C4.96243 2.5 2.5 4.96243 2.5 8V16C2.5 19.0376 4.96243 21.5 8 21.5H16C19.0376 21.5 21.5 19.0376 21.5 16V8C21.5 4.96243 19.0376 2.5 16 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 7C18.0523 7 18.5 6.55228 18.5 6C18.5 5.44772 18.0523 5 17.5 5C16.9477 5 16.5 5.44772 16.5 6C16.5 6.55228 16.9477 7 17.5 7Z" fill="currentColor"/>
        </svg>
      </a>
      
      {/* Threads Icon */}
      <a href="https://www.threads.net/@markovych_work?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" 
         className="text-gray-600 hover:text-primary transition-colors" 
         aria-label="Threads">
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 12C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.44 7.5C6.48 8.74 5.25 10.97 5.25 13.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.75 13.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.75 7.5V4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.25 4.5V4.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
      
      {/* TikTok Icon */}
      <a href="https://www.tiktok.com/search?q=%D0%B4%D0%B5%D0%BD%D0%B8%D1%81%20%D0%BC%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%B8%D1%87&t=1743145079306" target="_blank" rel="noopener noreferrer" 
         className="text-gray-600 hover:text-primary transition-colors" 
         aria-label="TikTok">
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 8.25C14.7051 8.25 13.25 6.79493 13.25 5V4.75H10.75V15C10.75 16.2426 9.74264 17.25 8.5 17.25C7.25736 17.25 6.25 16.2426 6.25 15C6.25 13.7574 7.25736 12.75 8.5 12.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 4.75C18.5711 4.75 20.25 6.42893 20.25 8.5V19.25H17.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.75 12V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
      
      {/* LinkedIn Icon */}
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
         className="text-gray-600 hover:text-primary transition-colors" 
         aria-label="LinkedIn">
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
