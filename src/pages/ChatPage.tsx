import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/layout/Logo";
import getSummary from "../api/summary";
import getAnswers from "../api/query";

type Message = {
  role: "user" | "assistant";
  content: string | JSX.Element;
};

export default function ChatPage() {
  const location = useLocation();
  const videoUrl = location.state?.url;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const hasFetchedSummary = useRef(false);

    const fetchSummary = async () => {
      if (videoUrl && !hasFetchedSummary.current) {
        const summary = await getSummary(videoUrl);
        setMessages([{ role: "assistant", content: summary }]);
      }
    };

    useEffect(() => {
      fetchSummary();
    }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    try {
      const assistantResponse = await getAnswers(input);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: (
            <>
              {assistantResponse.answer}{" "}
              <a
                href={assistantResponse.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {"Click here to watch"}
              </a>
            </>
          ),
        },
      ]);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "An error occurred while fetching the answer. Please try again.",
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-foreground">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-foreground truncate max-w-md hidden sm:block">
              {videoUrl}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <ScrollArea className="flex-1 p-4">
        <div className="container mx-auto max-w-4xl space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-card-foreground dark:bg-white/10"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t border-border p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about the video..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="font-medium text-foreground"
            />
            <Button onClick={handleSend} className="font-medium">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
