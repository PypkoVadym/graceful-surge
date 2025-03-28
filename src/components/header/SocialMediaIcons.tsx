
import React from 'react';

interface SocialMediaIconsProps {
  isMobile?: boolean;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ isMobile = false }) => {
  const iconSize = isMobile ? 24 : 20;

  return (
    <div
      className={`flex items-center ${
        isMobile 
          ? 'space-x-8 justify-center mt-6 pt-6 border-t border-gray-100' 
          : 'space-x-4'
      }`}
    >
      {/* Instagram PNG */}
      <a
        href="https://www.instagram.com/markovych_work/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-primary transition-colors"
        aria-label="Instagram"
      >
        <img
          src="/images/instagram.png"
          alt="Instagram Icon"
          width={iconSize}
          height={iconSize}
        />
      </a>

      {/* Threads PNG */}
      <a
        href="https://www.threads.net/@markovych_work?igshid=NTc4MTIwNjQ2YQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-primary transition-colors"
        aria-label="Threads"
      >
        <img
          src="/images/threads.png"
          alt="Threads Icon"
          width={iconSize}
          height={iconSize}
        />
      </a>

      {/* TikTok PNG */}
      <a
        href="https://www.tiktok.com/@lifeislplastic?_t=ZM-8v3SeGt8jx9&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-primary transition-colors"
        aria-label="TikTok"
      >
        <img
          src="/images/tiktok.png"
          alt="TikTok Icon"
          width={iconSize}
          height={iconSize}
        />
      </a>

      {/* LinkedIn PNG */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <img
          src="/images/linkedin.png"
          alt="LinkedIn Icon"
          width={iconSize}
          height={iconSize}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
