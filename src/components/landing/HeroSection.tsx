import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  youtubeUrl: string;
  onUrlChange: (url: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  showAlert: boolean;
}

export function HeroSection({
  youtubeUrl,
  onUrlChange,
  onSubmit,
  showAlert,
}: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
            Understand YouTube Videos Better
          </h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto font-medium">
            Transform any YouTube video into an interactive learning experience.
            Get summaries and ask questions about the content.
          </p>
        </div>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Youtube className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="url"
                placeholder="Paste YouTube video URL here..."
                className="pl-10 text-foreground"
                value={youtubeUrl}
                onChange={(e) => onUrlChange(e.target.value)}
              />
            </div>
            <Button type="submit" size="lg" className="font-medium">
              Analyze Video
            </Button>
          </div>
          {showAlert && (
            <div className="mt-2 text-red-600 text-sm">
              Please add a valid YouTube link.
            </div>
          )}
        </form>

        <div className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
          <div className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-primary/40 to-secondary/40 opacity-25" />
        </div>
      </div>
    </div>
  );
}
