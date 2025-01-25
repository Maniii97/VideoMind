import { cn } from "@/lib/utils";
import { colors } from "@/lib/constants/colors";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div
      className={cn("flex", role === "user" ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-lg p-4",
          role === "user"
            ? "bg-primary text-primary-foreground"
            : cn("bg-card", colors.text.primary, "dark:bg-white/10")
        )}
      >
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}
