import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/constants/colors';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border bg-card">
      <CardContent className="p-6">
        <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className={cn(
          'text-xl font-semibold mb-2 font-display',
          colors.text.primary
        )}>
          {title}
        </h3>
        <p className={colors.text.secondary}>{description}</p>
      </CardContent>
    </Card>
  );
}