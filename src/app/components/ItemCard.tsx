import { Coins } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface ItemCardProps {
  name: string;
  price: string;
  type: "تجهیزات" | "مصرفی";
  effect: string;
}

export function ItemCard({ name, price, type, effect }: ItemCardProps) {
  return (
    <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-4 hover:border-zinc-700 transition-colors">
      <div className="flex items-start gap-4">
        <ImagePlaceholder label={`عکس ${name}`} size="md" />
        
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="text-lg font-bold mb-1">{name}</h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1 bg-amber-950/50 rounded border border-amber-900/50">
                <Coins className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 text-sm">{price}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded border ${
                type === "تجهیزات"
                  ? "bg-blue-950/50 text-blue-300 border-blue-800"
                  : "bg-green-950/50 text-green-300 border-green-800"
              }`}>
                {type}
              </span>
            </div>
          </div>

          <div className="bg-zinc-800/50 rounded p-3 border border-zinc-700">
            <h4 className="text-sm font-bold text-amber-500 mb-1">اثر:</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{effect}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
