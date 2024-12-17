interface Stat {
  value: string;
  label: string;
}

export function StatsSection() {
  // change this before production
  const stats: Stat[] = [
    { value: '10K+', label: 'Videos Analyzed' },
    { value: '50K+', label: 'Questions Answered' },
    { value: '99%', label: 'Accuracy Rate' },
  ];

  return (
    <div className="border-y bg-muted/50">
      <div className="container mx-auto py-12 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold font-display text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-muted-foreground font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}