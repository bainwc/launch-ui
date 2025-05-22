"use client";

import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "../../ui/section";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Glow from "../../ui/glow";
import Screenshot from "../../ui/screenshot";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "Built for your mind's real moments.",
  description = "No pressure, just start where you are.",
  mockup = false,
  badge = (
    <Badge variant="outline">
      <span className="text-muted-foreground">Mental Health</span>
      <span className="mx-2">•</span>
      <span className="text-muted-foreground">Private by Design</span>
    </Badge>
  ),
  buttons = [
    {
      href: "/start",
      text: "Start Free Trial",
      variant: "default",
    },
    {
      href: "/features/soc",
      text: "Learn More",
      variant: "outline",
      iconRight: <ArrowRightIcon className="ml-2 size-4" />,
    },
  ],
  className,
  ...props
}: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section
      id={props.id}
      {...props}
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="relative">
        <Glow
          variant="top"
          className={cn(
            "absolute inset-0 -z-10 opacity-0 delay-1000 from-[#304269]/30",
            mounted && "animate-appear-zoom"
          )}
        />
      </div>
      <div className="max-w-container mx-auto flex flex-col gap-6 pt-0 sm:pt-1 sm:gap-8">
        <div className="flex flex-col items-center gap-2 text-center sm:gap-6">
          {badge !== false && badge}
          <h1
            className={cn(
              "from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight",
              mounted && "animate-appear"
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "text-md text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl",
              mounted && "animate-appear"
            )}
          >
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div
              className={cn(
                "relative z-10 flex justify-center gap-4 opacity-0 delay-300 mb-16",
                mounted && "animate-appear"
              )}
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className={cn(
                  "opacity-0 delay-700",
                  mounted && "animate-appear"
                )}
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
