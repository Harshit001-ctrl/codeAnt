import React from 'react';
import { CheckCircle } from 'lucide-react';

function IssuesBox() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <div className="text-xl text-gray-600">Issues Fixed</div>
        </div>
        <div className="text-green-500 text-lg">
          ↑ 14%
          <div className="text-lg text-gray-500">This week</div>
        </div>
      </div>
      <div className="text-2xl font-bold">500K+</div>
    </div>
  );
}

export default IssuesBox;