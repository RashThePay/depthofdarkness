import { ImageOff } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function ImagePlaceholder({ label, size = "md", className = "" }: ImagePlaceholderProps) {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  return (
    <div
      className={`${sizes[size]} ${className} bg-zinc-800/50 border-2 border-dashed border-zinc-700 rounded-lg flex flex-col items-center justify-center gap-2 text-zinc-500`}
    >
      <ImageOff className="w-6 h-6" />
      <span className="text-xs text-center px-2">{label}</span>
    </div>
  );
}
