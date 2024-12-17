// semantic color tokens
export const colors = {
  text: {
    primary: 'text-foreground',
    secondary: 'text-muted-foreground',
    inverse: 'text-background',
  },
  background: {
    primary: 'bg-background',
    secondary: 'bg-muted',
    card: 'bg-card',
    inverse: 'bg-foreground',
  },
  border: {
    default: 'border-border',
    muted: 'border-muted',
  },
} as const;