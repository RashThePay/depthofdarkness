import { Heart, Zap, Shield, Lock } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface CharacterCardProps {
  name: string;
  role: string;
  position: string;
  mechanism: string;
  health: number;
  agility: number;
  resistances: {
    wound: number;
    burn: number;
    disease: number;
    confusion: number;
  };
  abilities: Array<{
    name: string;
    type: "آزاد" | "محدود" | "شرطی";
    locked?: boolean;
    description: string;
  }>;
}

export function CharacterCard({ name, role, position, mechanism, health, agility, resistances, abilities }: CharacterCardProps) {
  const typeColors = {
    آزاد: "bg-green-900/50 text-green-300 border-green-800",
    محدود: "bg-amber-900/50 text-amber-300 border-amber-800",
    شرطی: "bg-purple-900/50 text-purple-300 border-purple-800",
  };

  return (
    <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-950/50 to-amber-950/50 p-6 border-b border-zinc-800">
        <div className="flex items-start gap-4">
          <ImagePlaceholder label={`عکس ${name}`} size="lg" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-zinc-400 mb-2">{role}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-zinc-800 rounded-full">{position}</span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full">{mechanism}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="p-6 border-b border-zinc-800">
        <h4 className="text-lg font-bold mb-4 text-amber-500">ویژگی‌ها</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            <div>
              <div className="text-xs text-zinc-500">جان</div>
              <div className="font-bold">{health}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <div>
              <div className="text-xs text-zinc-500">زرنگی</div>
              <div className="font-bold">+{agility}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-500" />
            <div>
              <div className="text-xs text-zinc-500">مقاومت‌ها</div>
              <div className="font-bold text-xs">
                <span className="text-red-400">ز+{resistances.wound}</span>{" "}
                <span className="text-orange-400">س+{resistances.burn}</span>{" "}
                <span className="text-green-400">م+{resistances.disease}</span>{" "}
                <span className="text-purple-400">گ+{resistances.confusion}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abilities */}
      <div className="p-6">
        <h4 className="text-lg font-bold mb-4 text-amber-500">توانایی‌ها</h4>
        <div className="space-y-3">
          {abilities.map((ability, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                ability.locked ? "bg-zinc-800/30 border-zinc-700" : "bg-zinc-800/50 border-zinc-700"
              }`}
            >
              <div className="flex items-start gap-2 mb-2">
                {ability.locked && <Lock className="w-4 h-4 text-zinc-500 mt-1 flex-shrink-0" />}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-bold">{ability.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded border ${typeColors[ability.type]}`}>
                      {ability.type}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{ability.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
