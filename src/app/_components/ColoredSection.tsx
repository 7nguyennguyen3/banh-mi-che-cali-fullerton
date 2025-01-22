"use client";
import { CSSProperties } from "react";

interface SectionProps {
  children: React.ReactNode;
  color?: CSSProperties["backgroundColor"];
}

const ColoredSection = ({ children, color = "#FFDAB9" }: SectionProps) => {
  return (
    <section
      className="flex flex-col items-center justify-center py-12"
      style={{ backgroundColor: color }}
    >
      <div
        className="flex flex-col gap-5 w-[90%] sm:w-[80%] 
      max-w-[1000px] items-center justify-center"
      >
        {children}
      </div>
    </section>
  );
};

export default ColoredSection;
