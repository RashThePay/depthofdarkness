import { Skull, Users, Target, Sword } from "lucide-react";
import { ImagePlaceholder } from "../ImagePlaceholder";

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="flex justify-center mb-6">
          <ImagePlaceholder label="لوگوی بازی" size="xl" />
        </div>
        <h1 className="text-5xl font-bold text-red-500 mb-4">عمق تاریکی</h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          در عمق تاریکی شما دوشادوش همدیگر وارد یک مسیر مرگبار می‌شوید و زنده از آن بیرون نمی‌آیید. اما مرگ مهم نیست. مهم اینجاست که تا کجا پیش بروید.
        </p>
      </section>

      {/* About Game */}
      <section className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800">
        <h2 className="text-3xl font-bold mb-6 text-amber-500">درباره‌ی بازی</h2>
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            این یک بازی تعاونی برای <strong className="text-red-400">۲ تا ۴ نفر</strong> است. بازی تا زمانی ادامه دارد که همه‌ی بازیکنان شکست بخورند.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-red-900/50 transition-colors">
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">بازی تعاونی</h3>
          <p className="text-zinc-400 text-center">
            ۲ تا ۴ بازیکن با هم همکاری می‌کنند
          </p>
        </div>

        <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-amber-900/50 transition-colors">
          <div className="flex justify-center mb-4">
            <Sword className="w-12 h-12 text-amber-500" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">۹ شخصیت منحصر به فرد</h3>
          <p className="text-zinc-400 text-center">
            هر کدام با توانایی‌ها و سبک بازی خاص
          </p>
        </div>

        <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-green-900/50 transition-colors">
          <div className="flex justify-center mb-4">
            <Target className="w-12 h-12 text-green-500" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">نبردهای تاکتیکی</h3>
          <p className="text-zinc-400 text-center">
            موقعیت‌یابی و انتخاب‌های استراتژیک
          </p>
        </div>

        <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-purple-900/50 transition-colors">
          <div className="flex justify-center mb-4">
            <Skull className="w-12 h-12 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">دشمنان متنوع</h3>
          <p className="text-zinc-400 text-center">
            ۹ مکان مختلف با دشمنان منحصر به فرد
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="bg-gradient-to-br from-red-950/30 to-amber-950/30 rounded-xl p-8 border border-red-900/50">
        <h2 className="text-3xl font-bold mb-6 text-red-400">شروع سریع</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center font-bold">۱</div>
              <h3 className="text-lg font-bold">آماده‌سازی</h3>
            </div>
            <p className="text-zinc-300 text-sm pr-10">
              هر بازیکن یک شخصیت انتخاب می‌کند که با ۲۰ جان شروع می‌کند
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold">۲</div>
              <h3 className="text-lg font-bold">مراحل</h3>
            </div>
            <p className="text-zinc-300 text-sm pr-10">
              هر مرحله شامل دوراهی، نبرد، پاداش، ارتقا و استراحت است
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold">۳</div>
              <h3 className="text-lg font-bold">پیروزی</h3>
            </div>
            <p className="text-zinc-300 text-sm pr-10">
              تا جایی که می‌توانید زنده بمانید و به مراحل بالاتر برسید
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
