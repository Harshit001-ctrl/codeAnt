import React from 'react';
import { Bot } from 'lucide-react';

function CompanyLogo() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Bot className="w-6 h-6 text-red-600" />
      <span className="text-xl font-semibold">CodeAnt AI</span>
    </div>
  );
}

export default CompanyLogo;