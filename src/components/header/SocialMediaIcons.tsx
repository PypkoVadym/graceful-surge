import React from 'react';

// Example: using public folder references
// If you’re using imports instead, you can do:
// import instagramIcon from '/images/instagram.png'; 
// ...and so on, then use it as src={instagramIcon}

interface SocialMediaIconsProps {
  isMobile?: boolean;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ isMobile = false }) => {
  const iconSize = isMobile ? 24 : 20;

  return (
    <div
      className={`flex items-center space-x-${
        isMobile ? '6' : '4'
      } ${isMobile ? 'justify-center mt-6 pt-6 border-t border-gray-100' : ''}`}
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
        href="https://www.tiktok.com/search?q=%D0%B4%D0%B5%D0%BD%D0%B8%D1%81%20%D0%BC%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%B8%D1%87&t=1743145079306"
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
