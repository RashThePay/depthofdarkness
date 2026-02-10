import { ArrowRight, Crosshair, Gift, TrendingUp, Moon, MapPin } from "lucide-react";

export function GameStructure() {
  const phases = [
    {
      number: 1,
      title: "دوراهی",
      icon: MapPin,
      color: "text-purple-500",
      bgColor: "bg-purple-950/30",
      borderColor: "border-purple-900/50",
      description: "مکان و دشمنان مشخص می‌شوند",
    },
    {
      number: 2,
      title: "نبرد",
      icon: Crosshair,
      color: "text-red-500",
      bgColor: "bg-red-950/30",
      borderColor: "border-red-900/50",
      description: "با دشمنان می‌جنگید",
    },
    {
      number: 3,
      title: "پاداش",
      icon: Gift,
      color: "text-amber-500",
      bgColor: "bg-amber-950/30",
      borderColor: "border-amber-900/50",
      description: "تجربه و غنیمت دریافت می‌کنید",
    },
    {
      number: 4,
      title: "ارتقا",
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-950/30",
      borderColor: "border-green-900/50",
      description: "شخصیت خود را تقویت می‌کنید",
    },
    {
      number: 5,
      title: "استراحت",
      icon: Moon,
      color: "text-blue-500",
      bgColor: "bg-blue-950/30",
      borderColor: "border-blue-900/50",
      description: "برای مرحله‌ی بعد آماده می‌شوید",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-red-500">ساختار بازی</h1>
        <p className="text-zinc-400 text-lg">
          بازی از مرحله‌ی ۱ شروع می‌شود و مرحله به مرحله بالا می‌رود
        </p>
      </div>

      {/* Overview */}
      <section className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800">
        <h2 className="text-2xl font-bold mb-6 text-amber-500">نمای کلی</h2>
        <p className="text-zinc-300 leading-relaxed mb-4">
          هر مرحله شامل <strong className="text-red-400">۵ گام</strong> است که به ترتیب انجام می‌شوند.
        </p>
      </section>

      {/* Phases */}
      <section className="space-y-6">
        {phases.map((phase, index) => (
          <div key={phase.number}>
            <div className={`${phase.bgColor} rounded-xl p-6 border ${phase.borderColor}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 ${phase.color} bg-zinc-900 rounded-full flex items-center justify-center font-bold text-xl border-2 ${phase.borderColor}`}>
                  {phase.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                  <p className="text-zinc-400">{phase.description}</p>
                </div>
                <phase.icon className={`w-8 h-8 ${phase.color}`} />
              </div>
              
              <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
                {phase.number === 1 && (
                  <div className="space-y-3 text-zinc-300">
                    <p><strong className="text-amber-400">انتخاب مکان:</strong> دو تاس ۱۰ وجهی بیندازید و یکی از مکان‌ها را انتخاب کنید</p>
                    <p><strong className="text-amber-400">تله:</strong> اگر هر تاسی ۱ بیاید، به تله می‌افتید</p>
                    <p><strong className="text-amber-400">انتخاب دشمنان:</strong> درجه‌ی خطر را محاسبه کنید و دشمنان را انتخاب کنید</p>
                  </div>
                )}
                
                {phase.number === 2 && (
                  <div className="space-y-3 text-zinc-300">
                    <p><strong className="text-amber-400">جبهه و خانه‌ها:</strong> محل نبرد دو جبهه دارد، هر کدام ۴ خانه</p>
                    <p><strong className="text-amber-400">ترتیب نوبت:</strong> بر اساس تاس ۶ وجهی + زرنگی</p>
                    <p><strong className="text-amber-400">اقدامات:</strong> حمله، توانایی، تغییر موضع، یا دفاع</p>
                  </div>
                )}
                
                {phase.number === 3 && (
                  <div className="space-y-3 text-zinc-300">
                    <p><strong className="text-amber-400">تجربه:</strong> از کشتن دشمنان دریافت می‌کنید</p>
                    <p><strong className="text-amber-400">غنیمت:</strong> پشیز و آهن‌پاره بر اساس سرعت پیروزی</p>
                  </div>
                )}
                
                {phase.number === 4 && (
                  <div className="space-y-3 text-zinc-300">
                    <p><strong className="text-amber-400">کارکشتگی:</strong> با تجربه تاس کارکشتگی بخرید و توانایی‌های جدید باز کنید</p>
                    <p><strong className="text-amber-400">خرید:</strong> اقلام و تجهیزات را با پشیز و آهن‌پاره بخرید</p>
                  </div>
                )}
                
                {phase.number === 5 && (
                  <div className="space-y-3 text-zinc-300">
                    <p><strong className="text-amber-400">بازیابی جان:</strong> حداقل ۵ جان بهبود می‌یابید</p>
                    <p><strong className="text-amber-400">آماده‌سازی:</strong> اگر کمتر از ۱۰ جان دارید، تا ۱۰ بهبود می‌یابید</p>
                  </div>
                )}
              </div>
            </div>
            
            {index < phases.length - 1 && (
              <div className="flex justify-center my-4">
                <ArrowRight className="w-6 h-6 text-zinc-600 transform rotate-90" />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Battle Positions */}
      <section className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800">
        <h2 className="text-2xl font-bold mb-6 text-amber-500">موقعیت‌های نبرد</h2>
        
        <div className="bg-zinc-800/50 rounded-lg p-6 mb-6 border border-zinc-700">
          <div className="font-mono text-sm text-center text-zinc-300 overflow-x-auto">
            <div className="inline-block whitespace-nowrap">
              | جبهه‌ی حریف | ۴ | ۳ | ۲ | ۱ | ۱ | ۲ | ۳ | ۴ | جبهه‌ی خودی |
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-950/30 rounded-lg p-6 border border-red-900/50">
            <h3 className="text-xl font-bold mb-3 text-red-400">خانه‌ی ۱ (خط مقدم)</h3>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>• آسیب شما: +۲</li>
              <li>• دشمنان ابتدا شما را هدف می‌گیرند</li>
            </ul>
          </div>

          <div className="bg-amber-950/30 rounded-lg p-6 border border-amber-900/50">
            <h3 className="text-xl font-bold mb-3 text-amber-400">خانه‌های ۲ و ۳ (میانه)</h3>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>• آسیب شما: عادی</li>
              <li>• تحرک بالا</li>
            </ul>
          </div>

          <div className="bg-green-950/30 rounded-lg p-6 border border-green-900/50">
            <h3 className="text-xl font-bold mb-3 text-green-400">خانه‌ی ۴ (عقب)</h3>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>• آسیب شما: -۲</li>
              <li>• دشمنان کمتر شما را هدف می‌گیرند</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
