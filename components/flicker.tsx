"use client";

import { useEffect } from "react";

function scheduleFlicker(el: HTMLElement): void{
  const delay: number = Math.random()*2000 + 200;
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
        const elements = document.querySelectorAll<HTMLElement>(".title, .heading"); 
        console.log("Found elements:", elements.length);
        elements.forEach(scheduleFlicker);
    },[]);

    return null;
}