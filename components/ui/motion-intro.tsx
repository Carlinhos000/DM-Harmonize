"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./motion-intro.css";

gsap.registerPlugin(ScrollTrigger);

/** A short, scroll-controlled brand reveal before the existing hero. */
export function CinematicIntro() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const hero = document.getElementById("inicio");
    const main = document.getElementById("conteudo");
    const footer = document.querySelector<HTMLElement>("footer.footer");
    if (!overlay || !hero) return;

    // Deep links and restored scroll positions should open at their destination.
    if ((window.location.hash && window.location.hash !== "#inicio") || window.scrollY > 80) {
      overlay.hidden = true;
      return;
    }

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      overlay.hidden = false;
      document.body.classList.add("has-cinematic-intro");

      const update = (progress: number) => {
        const revealed = progress > 0.985;
        document.body.classList.toggle("intro-revealed", revealed);
        overlay.style.visibility = revealed ? "hidden" : "visible";
        overlay.style.pointerEvents = revealed ? "none" : "auto";
        overlay.setAttribute("aria-hidden", revealed ? "true" : "false");
        main?.toggleAttribute("inert", !revealed);
        footer?.toggleAttribute("inert", !revealed);
      };

      update(0);
      const context = gsap.context(() => {
        const timeline = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: () => `+=${Math.max(520, Math.round(window.innerHeight * 0.85))}`,
            pin: true,
            pinSpacing: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: self => update(self.progress),
          },
        });

        timeline
          .to(topRef.current, { autoAlpha: 0, y: -12, duration: 0.19 }, 0)
          .to(bottomRef.current, { autoAlpha: 0, y: 20, duration: 0.19 }, 0)
          .to(centerRef.current, { scale: 1.12, autoAlpha: 0, y: -18, duration: 0.42 }, 0.07)
          .to(leftRef.current, { xPercent: -102, duration: 0.8 }, 0.19)
          .to(rightRef.current, { xPercent: 102, duration: 0.8 }, 0.19);

        triggerRef.current = timeline.scrollTrigger ?? null;
      }, overlay);

      return () => {
        context.revert();
        triggerRef.current = null;
        document.body.classList.remove("has-cinematic-intro", "intro-revealed");
        main?.removeAttribute("inert");
        footer?.removeAttribute("inert");
        overlay.removeAttribute("aria-hidden");
        overlay.style.pointerEvents = "";
        overlay.hidden = true;
      };
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) overlay.hidden = true;
    return () => media.revert();
  }, []);

  const skipIntro = () => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    window.scrollTo({ top: trigger.end + 2, behavior: "instant" });
    requestAnimationFrame(() => document.getElementById("hero-title")?.focus({ preventScroll: true }));
  };

  return (
    <div className="dm-intro" ref={overlayRef} aria-label="Abertura da DM Harmonize">
      <div className="dm-intro-panel dm-intro-panel-left" ref={leftRef} aria-hidden="true" />
      <div className="dm-intro-panel dm-intro-panel-right" ref={rightRef} aria-hidden="true" />
      <div className="dm-intro-top" ref={topRef}>
        <span>Clínica estética · Barueri, SP</span>
        <span>Precisão com delicadeza</span>
      </div>
      <div className="dm-intro-center" ref={centerRef}>
        <svg className="dm-intro-contour" viewBox="0 0 180 220" fill="none" aria-hidden="true">
          <path d="M114 11C66 3 31 36 36 82c2 18 11 31 4 45l-15 21c-3 5 1 9 15 9l-1 18c0 9 8 13 19 13h25c8 0 14 9 13 23M114 11c34 14 45 43 39 72-5 23-20 39-18 68M57 94c12-9 28-9 39-1M69 115c9 4 19 4 28-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
        <span className="dm-intro-monogram">DM</span>
        <span className="dm-intro-name">Harmonize</span>
        <span className="dm-intro-rule" aria-hidden="true" />
        <span className="dm-intro-caption">Estética avançada</span>
      </div>
      <div className="dm-intro-bottom" ref={bottomRef}>
        <span>Um cuidado que começa por você.</span>
        <div className="dm-intro-actions">
          <span className="dm-intro-scroll"><ArrowDown size={15} /> Role para descobrir</span>
          <button type="button" onClick={skipIntro}>Ir para o site <ArrowUpRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}
