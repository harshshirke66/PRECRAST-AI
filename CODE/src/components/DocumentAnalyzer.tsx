import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, Upload, AlertTriangle, Loader } from 'lucide-react';
import { simplifyLegalDocument, detectHiddenClauses } from '../lib/gemini';

export default function DocumentAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'simplify' | 'detect'>('simplify');
  const [error, setError] = useState('');

  const extractTextFromFile = async (file: File): Promise<string> => {
    // For now, only handle text files
    if (file.type === 'text/plain') {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target?.result as string;
          resolve(text);
        };
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
      });
    }

    
    throw new Error(`Currently, only .txt files are supported. File type "${file.type}" is not supported yet.`);
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setFile(file);
    setError('');
    setAnalysis('');

    try {
      const text = await extractTextFromFile(file);
      if (text.trim().length === 0) {
        throw new Error('The file appears to be empty. Please upload a file with content.');
      }
      setFileContent(text);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error reading file. Please try again.');
      setFile(null);
      setFileContent('');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt'],
    },
    multiple: false,
    maxSize: 10485760, // 10MB
  });

  const cleanAnalysisResponse = (text: string): string => {
    // Remove unwanted characters like hash (#) and double asterisks (**)
    let cleanedText = text.replace(/#/g, '').replace(/\*\*/g, '').trim();

    // Ensure proper formatting
    cleanedText = cleanedText.replace(/\n\s*\n/g, '\n\n'); // Remove extra newlines
    cleanedText = cleanedText.replace(/(\d\.)\s+/g, '$1 '); // Fix numbered list formatting

    return cleanedText;
  };

  const analyzeDocument = async () => {
    if (!fileContent) {
      setError('Please upload a document first.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const result =
        mode === 'simplify'
          ? await simplifyLegalDocument(fileContent)
          : await detectHiddenClauses(fileContent);

      // Clean up the analysis response
      const cleanedResult = cleanAnalysisResponse(result);
      setAnalysis(cleanedResult);
    } catch (error) {
      console.error('Error analyzing document:', error);
      setError('An error occurred while analyzing the document. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => {
            setMode('simplify');
            setAnalysis('');
          }}
          className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${
            mode === 'simplify'
              ? 'bg-emerald-500 text-white'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          <FileText size={20} />
          <span>Simplify Document</span>
        </button>
        <button
          onClick={() => {
            setMode('detect');
            setAnalysis('');
          }}
          className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${
            mode === 'detect'
              ? 'bg-emerald-500 text-white'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          <AlertTriangle size={20} />
          <span>Detect Hidden Clauses</span>
        </button>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition
          ${isDragActive ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-600 hover:border-emerald-500/50'}
          ${error ? 'border-red-500/50 bg-red-500/5' : ''}`}
      >
        <input {...getInputProps()} />
        <Upload className={`mx-auto mb-4 ${error ? 'text-red-400' : 'text-emerald-400'}`} size={48} />
        <p className="text-gray-300 mb-2">
          {isDragActive
            ? 'Drop your document here'
            : 'Drag & drop your legal document here, or click to select'}
        </p>
        <p className="text-sm text-gray-500">Currently only supporting .txt files</p>
        <p className="text-sm text-gray-500 mt-1">Maximum file size: 10MB</p>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {file && !error && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-white">
              <FileText size={20} />
              <span>{file.name}</span>
            </div>
            <button
              onClick={analyzeDocument}
              disabled={loading}
              className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <Loader className="animate-spin" size={20} />
                  <span>Analyzing...</span>
                </div>
              ) : (
                <span>{mode === 'simplify' ? 'Simplify' : 'Detect Clauses'}</span>
              )}
            </button>
          </div>

          {analysis && (
            <div className="bg-white/10 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {mode === 'simplify' ? 'Simplified Explanation' : 'Hidden Clauses Analysis'}
              </h3>
              <div className="text-gray-300 whitespace-pre-wrap prose prose-invert max-w-none">
                {analysis}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}