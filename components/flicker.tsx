"use client";

import { useEffect } from "react";

function wrapLetters(el: HTMLElement): void {
  const text = el.innerText;
  el.innerHTML = text
    .split("")
    .map(char =>
      char === " "
        ? " "
        : `<span class="flicker-letter">${char}</span>`
    )
    .join("");
}

function scheduleFlicker(el: HTMLElement, isFirst: boolean = false): void {

  const delay: number = isFirst
  ?0
  :Math.random() * 18000 + 800;
  setTimeout(() => {
    el.classList.add("flicker");
    setTimeout(() => {
      el.classList.remove("flicker");
      scheduleFlicker(el);
    }, 150);
  }, delay);
}

export function Flicker(): null {
  useEffect(() => {
    const start = () => {
      document
        .querySelectorAll<HTMLElement>(".title, .heading")
        .forEach(wrapLetters);

      const flickerTargets =
        document.querySelectorAll<HTMLElement>(".flicker-letter");

      if (flickerTargets.length === 0) return;

      const immediateIndex = Math.floor(Math.random() * flickerTargets.length);

      flickerTargets.forEach((el, index) => {
        scheduleFlicker(el, index === immediateIndex);
      });
    };

    window.addEventListener("typewriterComplete", start);

    return () => {
      window.removeEventListener("typewriterComplete", start);
    };
  }, []);

  return null;
}