import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { colors } from "@/lib/constants/colors";

import { cn } from "@/lib/utils";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask a question about the video..."
        onKeyDown={(e) => e.key === "Enter" && onSend()}
        className={cn("font-medium", colors.text.primary)}
      />
      <Button onClick={onSend} className="font-medium">
        <Send className="h-4 w-4 mr-2" />
        Send
      </Button>
    </div>
  );
}
