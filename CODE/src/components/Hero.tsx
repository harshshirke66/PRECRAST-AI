import React, { useState } from 'react';
import { Search, FileText, AlertTriangle, Compass, Loader } from 'lucide-react';
import { searchLegalInfo } from '../lib/gemini';

interface HeroProps {
  onNavigate: (section: 'home' | 'simplifier' | 'detector' | 'schemes' | 'lawyers') => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const cleanAnalysisResponse = (text: string): string => {
    // Remove unwanted characters like hash (#) and double asterisks (**)
    let cleanedText = text.replace(/#/g, '').replace(/\*\*/g, '').trim();

    // Ensure proper formatting
    cleanedText = cleanedText.replace(/\n\s*\n/g, '\n\n'); // Remove extra newlines
    cleanedText = cleanedText.replace(/(\d\.)\s+/g, '$1 '); // Fix numbered list formatting

    return cleanedText;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    try {
      const results = await searchLegalInfo(searchQuery);

     
      const cleanedResults = cleanAnalysisResponse(results);
      setSearchResults(cleanedResults);
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResults('An error occurred while searching. Please try again.');
    }
    setIsSearching(false);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900 py-20">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNnKSIgZD0iTTAgMGgyMDB2MjAwSDB6Ii8+PC9zdmc+')]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Making Law Simple – <span className="text-emerald-400">Understand, Protect, Empower</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Harness the power of AI to simplify legal documents, detect hidden clauses, and discover government schemes tailored for you.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search legal documents, schemes, or ask a question..."
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                disabled={isSearching || !searchQuery.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-500 rounded-full hover:bg-emerald-600 transition disabled:opacity-50 disabled:bg-emerald-700"
              >
                {isSearching ? (
                  <Loader className="text-white animate-spin" size={24} />
                ) : (
                  <Search className="text-white" size={24} />
                )}
              </button>
            </form>
          </div>

          {/* Search Results */}
          {searchResults && (
            <div className="max-w-3xl mx-auto mb-16 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">Search Results</h2>
              <div className="text-gray-300 whitespace-pre-wrap prose prose-invert max-w-none">
                {searchResults}
              </div>
            </div>
          )}

          {/* Feature Cards */}
          <div className="grid md:grid-cols-4 gap-8">
            <div
              onClick={() => onNavigate('simplifier')}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-emerald-500/50 transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="bg-emerald-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                <FileText className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Legal Simplifier</h3>
              <p className="text-gray-300">Upload your documents and get clear, simple explanations in seconds.</p>
            </div>

            <div
              onClick={() => onNavigate('detector')}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-emerald-500/50 transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="bg-emerald-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                <AlertTriangle className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hidden Clause Detector</h3>
              <p className="text-gray-300">Identify potentially risky clauses in your agreements automatically.</p>
            </div>

            <div
              onClick={() => onNavigate('schemes')}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-emerald-500/50 transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="bg-emerald-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Compass className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scheme Finder</h3>
              <p className="text-gray-300">Discover government schemes and benefits you're eligible for.</p>
            </div>

            <div
              onClick={() => onNavigate('lawyers')}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-emerald-500/50 transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="bg-emerald-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Search className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Find Lawyers</h3>
              <p className="text-gray-300">Locate legal professionals in your area based on your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}