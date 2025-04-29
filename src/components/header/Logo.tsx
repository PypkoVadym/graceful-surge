
import React from 'react';

interface LogoProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <div className="flex items-center">
      <a className="text-2xl font-display font-semibold tracking-tight">
        <span className="text-primary">Денис</span>Маркович
      </a>
    </div>
  );
};

export default Logo;
