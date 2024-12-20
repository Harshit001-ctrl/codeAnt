import React from 'react';
import { Code2 } from 'lucide-react';

function DetectionBox() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-2 mb-6">
        <Code2 className="w-6 h-6 text-blue-600" />
        <span className="text-xl font-medium">AI to Detect & Autofix Bad Code</span>
      </div>
      
      <div className="flex justify-between">
        <div className="text-center">
          <div className="font-bold text-lg">30+</div>
          <div className="text-lg text-gray-600">Language Support</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-lg">10K+</div>
          <div className="text-lg text-gray-600">Developers</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-lg">100K+</div>
          <div className="text-lg text-gray-600">Hours Saved</div>
        </div>
      </div>
    </div>
  );
}

export default DetectionBox;