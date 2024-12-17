import { Brain, Youtube, MessageSquare, Sparkles, Zap, Users } from 'lucide-react';
import { FeatureCard } from '@/components/features/FeatureCard';
import { SectionHeader } from '@/components/ui/section-header';

const features = [
  {
    icon: Sparkles,
    title: "Smart Summaries",
    description: "Get concise, accurate summaries of any YouTube video content in seconds"
  },
  {
    icon: MessageSquare,
    title: "Interactive Q&A",
    description: "Ask questions and get intelligent answers about specific parts of the video"
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Leverage advanced AI to understand complex topics and extract key information"
  },
  {
    icon: Zap,
    title: "Real-time Analysis",
    description: "Process videos quickly and get instant access to their content"
  },
  {
    icon: Youtube,
    title: "Any YouTube Video",
    description: "Works with any public YouTube video, including long-form content"
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Share insights and summaries with your team or study group"
  }
];

export function FeaturesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto">
        <SectionHeader
          title="Powerful Features for Better Learning"
          description="Our AI-powered platform helps you extract maximum value from educational content"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}