"use client";
export default function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 max-w-7xl mx-auto">
      {children}
    </div>
  );
}
