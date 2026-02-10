import { Heart, Shield, Star, Award } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface EnemyCardProps {
  name: string;
  threat: number;
  experience: number;
  health: number;
  resistances: {
    wound: number;
    burn: number;
    disease: number;
    confusion: number;
  };
  behavior: string;
}

export function EnemyCard({ name, threat, experience, health, resistances, behavior }: EnemyCardProps) {
  return (
    <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-4 hover:border-zinc-700 transition-colors">
      <div className="flex items-start gap-4">
        <ImagePlaceholder label={`عکس ${name}`} size="md" />
        
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <div className="flex items-center gap-1 px-2 py-1 bg-red-950/50 rounded border border-red-900/50">
                <Star className="w-4 h-4 text-red-400" />
                <span className="text-red-300">خطر: {threat}</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-amber-950/50 rounded border border-amber-900/50">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300">تجربه: {experience}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <div>
                <span className="text-zinc-500">جان: </span>
                <span className="font-bold">{health}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <div className="text-xs">
                <span className="text-red-400">ز+{resistances.wound}</span>{" "}
                <span className="text-orange-400">س+{resistances.burn}</span>{" "}
                <span className="text-green-400">م+{resistances.disease}</span>{" "}
                <span className="text-purple-400">گ+{resistances.confusion}</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800/50 rounded p-3 border border-zinc-700">
            <h4 className="text-sm font-bold text-amber-500 mb-1">رفتار:</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{behavior}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
