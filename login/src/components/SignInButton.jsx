import React from 'react';
import { Github, Gitlab, ExternalLink } from 'lucide-react';

function SignInButton({ provider, label }) {
  const getIcon = () => {
    switch (provider) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'gitlab':
        return <Gitlab className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
      {getIcon()}
      <span className="text-sm">{label}</span>
    </button>
  );
}

export default SignInButton;