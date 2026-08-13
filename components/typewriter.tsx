'use client'
import { useCallback, useEffect, useRef, useState } from "react";

/* 
   Shared Types
 */

type Status = "hidden" | "typing" | "done";

type TypewriterTextProps = {
  text: string;
  playOnce?: boolean;
  isVisible?: boolean;
  speed?: number;
  className?: string;
  onComplete?: ()=> void;
};

type CardWithTypewriterProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

/* 
   TypewriterText
 */

export function TypewriterText({
  text,
  playOnce = false,
  isVisible = false,
  speed = 50,
  className,
  onComplete,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [status, setStatus] = useState<Status>("hidden");

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasPlayedRef = useRef(false);

  const clearTypingInterval = useCallback(() => {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    clearTypingInterval();
    setDisplayed("");
    setStatus("hidden");
  }, [clearTypingInterval]);

  const run = useCallback(() => {
    clearTypingInterval();

    let index = 0;

    setDisplayed("");
    setStatus("typing");

    intervalRef.current = setInterval(() => {
      index += 1;

      setDisplayed(text.slice(0, index));

      if (index <= text.length) return;

      clearTypingInterval();
      setStatus("done");
      onComplete?.();
      window.dispatchEvent(
        new Event("typewriterComplete"));
    }, speed);
  }, [clearTypingInterval, speed, text, onComplete]);

  /* Hero heading */
  useEffect(() => {
    if (!playOnce) return;
    if (hasPlayedRef.current) return;

    hasPlayedRef.current = true;
    const timeOut = setTimeout(() => {
    run();
    }, 1000);

    return clearTypingInterval;
  }, [playOnce, run, clearTypingInterval]);

  /* Card headings */
  useEffect(() => {
    if (playOnce) return;

    if (isVisible) {
      run();
      return;
    }

    reset();

    return clearTypingInterval;
  }, [isVisible, playOnce, run, reset, clearTypingInterval]);

  useEffect(() => clearTypingInterval, [clearTypingInterval]);

  return (
    <span className={className}>
      {displayed}
      <span
        aria-hidden="true"
        className={`cursor cursor-${status}`}
      >
        _
      </span>
    </span>
  );
}

/* 
   CardWithTypewriter
 */

export function CardWithTypewriter({
  title,
  children,
  className,
}: CardWithTypewriterProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
    >
      <TypewriterText
        text={title}
        isVisible={isVisible}
      />

      {children}
    </div>
  );
}