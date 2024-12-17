// currently not in use

import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      content: "VideoMind has revolutionized how I learn from YouTube content. The AI-powered summaries and Q&A feature save me hours of time.",
      author: {
        name: "Sarah Chen",
        role: "Software Engineer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
      }
    },
    {
      content: "As an educator, this tool has become invaluable for helping students extract key information from video lectures.",
      author: {
        name: "Michael Rodriguez",
        role: "University Professor",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
      }
    },
    {
      content: "The accuracy of the summaries and responses is impressive. It's like having a smart study buddy available 24/7.",
      author: {
        name: "Emily Watson",
        role: "Student",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
      }
    }
  ];

  return (
    <div className="py-24 sm:py-32 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-display mb-4">
            Loved by Learners Worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about their experience with VideoMind
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 mr-4 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.author.avatar} 
                      alt={testimonial.author.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.author.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}