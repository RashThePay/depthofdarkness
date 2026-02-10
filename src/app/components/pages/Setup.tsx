import { Heart, Shield, Zap } from "lucide-react";

export function Setup() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-red-500">آماده‌سازی</h1>
        <p className="text-zinc-400 text-lg">برای شروع بازی آماده شوید</p>
      </div>

      {/* Character Selection */}
      <section className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800">
        <h2 className="text-2xl font-bold mb-6 text-amber-500">انتخاب شخصیت</h2>
        <div className="space-y-4 text-zinc-300">
          <p className="leading-relaxed">
            هر بازیکن یک شخصیت انتخاب می‌کند. شخصیت شما با <strong className="text-red-400">۲۰ جان</strong> شروع می‌کند.
          </p>
        </div>
      </section>

      {/* Character Stats */}
      <section className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800">
        <h2 className="text-2xl font-bold mb-6 text-amber-500">ویژگی‌های شخصیت</h2>
        <p className="text-zinc-300 mb-6">هر شخصیت دو ویژگی دارد:</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Agility */}
          <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-bold">زرنگی</h3>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              در زمان فرار از تله‌ها استفاده می‌شود.
            </p>
          </div>

          {/* Resistance */}
          <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold">مقاومت</h3>
            </div>
            <p className="text-zinc-300 mb-4 leading-relaxed">
              میزان کاهش آسیب از هر نوع. چهار نوع آسیب وجود دارد:
            </p>
            <ul className="space-y-2 pr-6">
              <li className="flex items-center gap-2 text-zinc-300">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>زخم</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>سوختگی</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>مریضی</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>گیجی</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Starting Stats */}
      <section className="bg-gradient-to-br from-red-950/30 to-amber-950/30 rounded-xl p-8 border border-red-900/50">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-red-500" />
          <h2 className="text-2xl font-bold text-red-400">آمار آغازین</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
            <div className="text-4xl font-bold text-red-500 mb-2">۲۰</div>
            <div className="text-zinc-400">جان</div>
          </div>
          <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
            <div className="text-4xl font-bold text-amber-500 mb-2">۳</div>
            <div className="text-zinc-400">توانایی آغازین</div>
          </div>
          <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
            <div className="text-4xl font-bold text-green-500 mb-2">۳</div>
            <div className="text-zinc-400">توانایی قفل‌شده</div>
          </div>
        </div>
      </section>
    </div>
  );
}
