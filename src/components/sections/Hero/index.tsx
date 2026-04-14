"use client";

import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";
import Button from "@/ui/Button";
import { ArrowDownToLine, ChevronDown } from "lucide-react";
import { SOCIALS } from "@/constants";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const textTranslateY = useTransform(scrollY, [0, 300], [0, 80]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  // Raw mouse position: -0.5 to 0.5
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  const slow = { damping: 40, stiffness: 30, mass: 1.0 };
  const mid  = { damping: 28, stiffness: 45, mass: 0.8 };
  const fast = { damping: 18, stiffness: 65, mass: 0.6 };

  // Content block — moves opposite to cursor, as one unit
  const contentX = useSpring(useTransform(rawX, (v) => v * -50), mid);
  const contentY = useSpring(useTransform(rawY, (v) => v * -36), mid);

  // Background orbs — each at distinct speed & direction for depth
  const o1x = useSpring(useTransform(rawX, (v) => v * -55), slow);
  const o1y = useSpring(useTransform(rawY, (v) => v * -55), slow);

  const o2x = useSpring(useTransform(rawX, (v) => v *  45), mid);
  const o2y = useSpring(useTransform(rawY, (v) => v *  45), mid);

  const o3x = useSpring(useTransform(rawX, (v) => v * -28), fast);
  const o3y = useSpring(useTransform(rawY, (v) => v *  28), fast);

  const o4x = useSpring(useTransform(rawX, (v) => v *  38), slow);
  const o4y = useSpring(useTransform(rawY, (v) => v * -22), slow);

  const o5x = useSpring(useTransform(rawX, (v) => v * -18), mid);
  const o5y = useSpring(useTransform(rawY, (v) => v * -38), mid);

  const o6x = useSpring(useTransform(rawX, (v) => v *  65), fast);
  const o6y = useSpring(useTransform(rawY, (v) => v *  18), fast);

  // Rings
  const r1x = useSpring(useTransform(rawX, (v) => v * -12), slow);
  const r1y = useSpring(useTransform(rawY, (v) => v * -12), slow);
  const r2x = useSpring(useTransform(rawX, (v) => v *  20), mid);
  const r2y = useSpring(useTransform(rawY, (v) => v *   8), mid);
  const r3x = useSpring(useTransform(rawX, (v) => v *  -8), fast);
  const r3y = useSpring(useTransform(rawY, (v) => v *  18), fast);

  // Dot grid — very slow drift
  const gx = useSpring(useTransform(rawX, (v) => v * -8), slow);
  const gy = useSpring(useTransform(rawY, (v) => v * -8), slow);

  return (
    <div className="relative overflow-hidden">

      {/* ── Background ── */}

      {/* Dot grid */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          x: gx, y: gy,
          backgroundImage: "radial-gradient(circle, rgba(44,49,59,0.9) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_transparent_25%,_#1E2228_75%)] pointer-events-none" />

      {/* Orb 1 — green, top-left (brightest) */}
      <motion.div className="absolute -z-10 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{ x: o1x, y: o1y, top: "-15%", left: "-8%",
          background: "radial-gradient(circle, rgba(121,224,193,0.18) 0%, transparent 65%)",
          filter: "blur(50px)" }} />

      {/* Orb 2 — purple, bottom-right (bright) */}
      <motion.div className="absolute -z-10 w-[580px] h-[580px] rounded-full pointer-events-none"
        style={{ x: o2x, y: o2y, bottom: "-10%", right: "-8%",
          background: "radial-gradient(circle, rgba(114,90,193,0.20) 0%, transparent 65%)",
          filter: "blur(55px)" }} />

      {/* Orb 3 — green, top-right (medium) */}
      <motion.div className="absolute -z-10 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ x: o3x, y: o3y, top: "10%", right: "8%",
          background: "radial-gradient(circle, rgba(121,224,193,0.13) 0%, transparent 65%)",
          filter: "blur(36px)" }} />

      {/* Orb 4 — yellow, bottom-left (subtle) */}
      <motion.div className="absolute -z-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ x: o4x, y: o4y, bottom: "5%", left: "5%",
          background: "radial-gradient(circle, rgba(249,223,120,0.10) 0%, transparent 65%)",
          filter: "blur(48px)" }} />

      {/* Orb 5 — purple, top-center (medium) */}
      <motion.div className="absolute -z-10 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ x: o5x, y: o5y, top: "-5%", left: "35%",
          background: "radial-gradient(circle, rgba(114,90,193,0.14) 0%, transparent 65%)",
          filter: "blur(60px)" }} />

      {/* Orb 6 — green, left-center (punchy, small) */}
      <motion.div className="absolute -z-10 w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{ x: o6x, y: o6y, top: "40%", left: "2%",
          background: "radial-gradient(circle, rgba(121,224,193,0.22) 0%, transparent 65%)",
          filter: "blur(24px)" }} />

      {/* Ring 1 — large, centered */}
      <motion.div className="absolute -z-10 w-[780px] h-[780px] rounded-full border border-dim/60 pointer-events-none"
        style={{ x: r1x, y: r1y, top: "50%", left: "50%", translateX: "-50%", translateY: "-50%" }} />

      {/* Ring 2 — medium, green-tinted */}
      <motion.div className="absolute -z-10 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ x: r2x, y: r2y, top: "50%", left: "50%", translateX: "-50%", translateY: "-50%",
          border: "1px solid rgba(121,224,193,0.10)" }} />

      {/* Ring 3 — small, offset top-right */}
      <motion.div className="absolute -z-10 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ x: r3x, y: r3y, top: "20%", right: "15%",
          border: "1px solid rgba(114,90,193,0.07)" }} />

      {/* ── Content ── */}
      <MaxWidthWrapper className="flex flex-col items-center justify-center h-[80vh] md:h-screen pt-20">

        {/* Single motion wrapper for the whole content block */}
        <motion.div
          className="max-w-screen-lg mx-auto text-center w-full"
          style={{ y: textTranslateY, x: contentX }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Extra y applied to the inner content so scroll-y and mouse-y compose cleanly */}
          <motion.div style={{ y: contentY }}>

            {/* Avatar + socials */}
            <motion.div variants={itemVariants} className="inline-flex items-center mb-5 mx-auto gap-3">
              <div
                style={{ backgroundImage: "url('/images/dp.jpeg')" }}
                className="h-12 w-12 rounded-full bg-cover bg-center ring-2 ring-primary-green/40 ring-offset-2 ring-offset-bgColor"
              />
              <div className="flex gap-3">
                {SOCIALS.map((platform) => {
                  const SocialIcon = platform.icon;
                  return (
                    <Link href={platform.url} target="_blank" key={platform.platform}>
                      <span className="hover:text-primary-green transition-all flex items-center gap-1 mix-blend-difference">
                        <SocialIcon size={16} /> {platform.platform}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={cn(getHeadingStyles("h2"), "font-normal mix-blend-difference")}
            >
              Hi! I am <span className="font-bold text-primary-green">Ahmad.</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className={cn(getHeadingStyles("h1"), "no-underline font-bold mix-blend-difference")}
            >
              Full Stack <span className="text-primary-green">Web Engineer</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-md mb-10 max-w-prose mx-auto mix-blend-difference"
            >
              Motivated Full Stack Engineer with years of experience aiming to
              contribute to team success through hard work and excellent
              development, debugging and leadership skills.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="relative inline-flex gap-3 items-center before:content-[''] before:absolute before:h-24 before:w-24 before:bg-[url('/images/scribble.png')] before:-top-14 before:-left-24 before:bg-contain before:bg-center before:bg-no-repeat mb-20"
            >
              <Button type="link" href="/#contact" text="Contact" variant="secondary" />
              <Button
                type="link"
                href="/documents/ahmadzaheer-resume.pdf"
                text="Download CV"
                target="_blank"
                Icon={ArrowDownToLine}
                iconProps={{ size: 20 }}
              />
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-typo-body/40 pointer-events-none select-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>

      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
