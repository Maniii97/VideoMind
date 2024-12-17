import { cn } from '@/lib/utils';
import { colors } from '@/lib/constants/colors';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('text-center mb-16', className)}>
      <h2 className={cn(
        'text-3xl font-bold font-display mb-4',
        colors.text.primary
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'max-w-2xl mx-auto',
          colors.text.secondary
        )}>
          {description}
        </p>
      )}
    </div>
  );
}