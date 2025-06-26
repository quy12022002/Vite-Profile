import type React from "react";
import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  twinkleSpeed: number;
  twinklePhase: number;
  opacity: number;
};

type ShootingStar = {
  x: number;
  y: number;
  length: number;
  speedX: number;
  speedY: number;
  opacity: number;
  active: boolean;
};

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationFrameId = useRef<number>(0);

  // Initialize stars
  const initStars = (width: number, height: number, count: number) => {
    const stars: Star[] = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        opacity: 1,
      });
    }
    return stars;
  };

  // Initialize a shooting star
  const createShootingStar = (width: number, height: number): ShootingStar => {
    return {
      x: Math.random() * width * 0.3,
      y: Math.random() * height * 0.3,
      length: 150 + Math.random() * 100,
      speedX: 6 + Math.random() * 4,
      speedY: 3 + Math.random() * 2,
      opacity: 0,
      active: false,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(devicePixelRatio, devicePixelRatio);

    starsRef.current = initStars(width, height, 200);

    // Create multiple shooting stars (e.g. 3)
    const shootingStarCount = 3;
    shootingStarsRef.current = [];
    for (let i = 0; i < shootingStarCount; i++) {
      shootingStarsRef.current.push(createShootingStar(width, height));
    }

    let lastTime = 0;
    let shootingStarTimers = new Array(shootingStarCount).fill(0);
    const shootingStarIntervals = shootingStarsRef.current.map(
      () => 4000 + Math.random() * 8000
    ); // 4-12 seconds per star

    const drawStar = (star: Star) => {
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(
        star.x,
        star.y,
        0,
        star.x,
        star.y,
        star.radius * 4
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${star.opacity * 0.2})`);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawShootingStar = (star: ShootingStar) => {
      if (!star.active) return;
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 2;
      const gradient = ctx.createLinearGradient(
        star.x,
        star.y,
        star.x - star.length,
        star.y - star.length / 2
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.strokeStyle = gradient;
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x - star.length, star.y - star.length / 2);
      ctx.stroke();
      ctx.restore();
    };

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Update and draw stars (twinkle)
      starsRef.current.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        star.opacity = 0.5 + 0.5 * Math.sin(star.twinklePhase);
        drawStar(star);
      });

      // Update shooting stars
      shootingStarsRef.current.forEach((s, i) => {
        shootingStarTimers[i] += delta;
        if (!s.active && shootingStarTimers[i] > shootingStarIntervals[i]) {
          shootingStarTimers[i] = 0;
          shootingStarIntervals[i] = 4000 + Math.random() * 8000;
          shootingStarsRef.current[i] = createShootingStar(width, height);
          shootingStarsRef.current[i].active = true;
          shootingStarsRef.current[i].opacity = 1;
        }

        if (s.active) {
          s.x += s.speedX;
          s.y += s.speedY;
          s.opacity -= 0.01;
          if (s.opacity <= 0 || s.x > width || s.y > height) {
            s.active = false;
          } else {
            drawShootingStar(s);
          }
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(devicePixelRatio, devicePixelRatio);
      starsRef.current = initStars(width, height, 200);
      shootingStarsRef.current = [];
      for (let i = 0; i < shootingStarCount; i++) {
        shootingStarsRef.current.push(createShootingStar(width, height));
      }
      shootingStarTimers = new Array(shootingStarCount).fill(0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Starry night sky background with twinkling stars and multiple shooting stars"
    />
  );
};

export default Background;
