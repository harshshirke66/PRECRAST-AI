import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function DisclaimerModal({ isOpen, onClose, onAccept }: DisclaimerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full border border-gray-700 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="text-amber-500" size={24} />
            <h2 className="text-xl font-semibold text-white">Important Disclaimer</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 space-y-4 text-gray-300">
          <p>
            <strong className="text-white">LegalAI is not a substitute for professional legal advice.</strong> The information provided by this service is for general informational purposes only.
          </p>
          
          <p>
            By using LegalAI, you acknowledge and agree that:
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>The AI-generated content is not a replacement for advice from a qualified legal professional.</li>
            <li>The analysis and simplification of legal documents may not capture all nuances or implications.</li>
            <li>LegalAI does not establish an attorney-client relationship.</li>
            <li>The accuracy and completeness of the information cannot be guaranteed.</li>
            <li>Legal requirements vary by jurisdiction and may change over time.</li>
          </ul>
          
          <p>
            For important legal matters, we strongly recommend consulting with a licensed attorney in your jurisdiction.
          </p>
        </div>
        
        <div className="p-4 sm:p-6 border-t border-gray-700 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 sticky bottom-0 bg-gray-800">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Decline
          </button>
          <button
            onClick={onAccept}
            className="w-full sm:w-auto px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );
}