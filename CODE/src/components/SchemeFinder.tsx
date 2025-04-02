import React, { useState } from 'react';
import { Compass, Loader } from 'lucide-react';
import { findEligibleSchemes } from '../lib/gemini';

export default function SchemeFinder() {
  const [userInfo, setUserInfo] = useState({
    age: 30,
    occupation: '',
    income: 50000,
    location: '',
  });
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);

  const cleanAnalysisResponse = (text: string): string => {
    // Remove unwanted characters like hash (#) and double asterisks (**)
    let cleanedText = text.replace(/#/g, '').replace(/\*\*/g, '').trim();

    // Ensure proper formatting
    cleanedText = cleanedText.replace(/\n\s*\n/g, '\n\n'); // Remove extra newlines
    cleanedText = cleanedText.replace(/(\d\.)\s+/g, '$1 '); // Fix numbered list formatting

    return cleanedText;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const schemes = await findEligibleSchemes(userInfo);

      // Clean up the response
      const cleanedResults = cleanAnalysisResponse(schemes);
      setResults(cleanedResults);
    } catch (error) {
      console.error('Error finding schemes:', error);
      setResults('An error occurred while searching for schemes. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white/10 rounded-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Compass className="text-emerald-400" size={32} />
          <h2 className="text-2xl font-semibold text-white">Find Eligible Schemes</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
              <input
                type="number"
                value={userInfo.age}
                onChange={(e) => setUserInfo({ ...userInfo, age: parseInt(e.target.value) })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Occupation</label>
              <input
                type="text"
                value={userInfo.occupation}
                onChange={(e) => setUserInfo({ ...userInfo, occupation: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="e.g., Teacher, Engineer, Student"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Annual Income</label>
              <input
                type="number"
                value={userInfo.income}
                onChange={(e) => setUserInfo({ ...userInfo, income: parseInt(e.target.value) })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
              <input
                type="text"
                value={userInfo.location}
                onChange={(e) => setUserInfo({ ...userInfo, location: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="e.g., California, New York"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader className="animate-spin" size={20} />
                <span>Searching for Schemes...</span>
              </div>
            ) : (
              'Find Eligible Schemes'
            )}
          </button>
        </form>

        {results && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Available Schemes</h3>
            <div className="bg-white/5 rounded-lg p-6 text-gray-300 whitespace-pre-wrap">
              {results}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}