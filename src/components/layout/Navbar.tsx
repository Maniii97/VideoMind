import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <nav className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" className="font-medium text-foreground">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
}