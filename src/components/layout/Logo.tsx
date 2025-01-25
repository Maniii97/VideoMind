import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
    >
      <Brain className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold font-display text-foreground">
        VideoMind
      </span>
    </Link>
  );
}
