import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DocumentAnalyzer from './components/DocumentAnalyzer';
import SchemeFinder from './components/SchemeFinder';
import LawyerFinder from './components/LawyerFinder';
import DisclaimerModal from './components/DisclaimerModal';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'simplifier' | 'detector' | 'schemes' | 'lawyers'>('home');
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<'home' | 'simplifier' | 'detector' | 'schemes' | 'lawyers' | null>(null);

  const handleNavigate = (section: 'home' | 'simplifier' | 'detector' | 'schemes' | 'lawyers') => {
    
    if (activeSection === 'home' && section !== 'home') {
      setShowDisclaimer(true);
      setPendingNavigation(section);
    } else {
      
      setActiveSection(section);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAcceptDisclaimer = () => {
    setShowDisclaimer(false);
    if (pendingNavigation) {
      setActiveSection(pendingNavigation);
      setPendingNavigation(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
    setPendingNavigation(null);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'simplifier':
      case 'detector':
        return <DocumentAnalyzer />;
      case 'schemes':
        return <SchemeFinder />;
      case 'lawyers':
        return <LawyerFinder />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
      <DisclaimerModal 
        isOpen={showDisclaimer} 
        onClose={handleCloseDisclaimer} 
        onAccept={handleAcceptDisclaimer} 
      />
    </div>
  );
}

export default App;