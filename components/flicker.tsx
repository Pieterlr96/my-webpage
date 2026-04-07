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

function scheduleFlicker(el: HTMLElement): void{
  const delay: number = Math.random()*18000 + 4800;
  setTimeout(() => {
    el.classList.add("flicker");
    setTimeout(() => {
      el.classList.remove("flicker");
      scheduleFlicker(el);
    }, 150);
  }, delay);
}

export default function FlickerEffect() {
  useEffect(() => {
    console.log("FlickerEffect mounted");

    const timeout = setTimeout(() => {
      // Wrap each letter in a span
      document.querySelectorAll<HTMLElement>(".title, .heading").forEach(wrapLetters);

      // Apply flicker to each individual letter span
      const flickerTargets = document.querySelectorAll<HTMLElement>(".flicker-letter");
      console.log("Found letters:", flickerTargets.length);
      flickerTargets.forEach(scheduleFlicker);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

    return null;
}