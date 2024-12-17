import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { StatsSection } from '@/components/landing/StatsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';

export default function LandingPage() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/chat', { state: { url: youtubeUrl } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <HeroSection
          youtubeUrl={youtubeUrl}
          onUrlChange={setYoutubeUrl}
          onSubmit={handleSubmit}
        />
        <StatsSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}