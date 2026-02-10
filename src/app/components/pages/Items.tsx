import { useState } from "react";
import { ItemCard } from "../ItemCard";
import { Sword, Shield, Sparkles, Heart, Target, Zap } from "lucide-react";

export function Items() {
  const [selectedCategory, setSelectedCategory] = useState("سلاح‌ها");

  const categories = {
    "سلاح‌ها": [
      {
        name: "چکش لگدشده",
        price: "۱۵ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "حملات آسیب زخم شما از خانه‌ی ۱ دارای +۲ آسیب هستند",
      },
      {
        name: "خنجر سمی",
        price: "۱۲ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "حملات آسیب مریضی شما +۱ تاس ۴ وجهی آسیب اضافی می‌زنند",
      },
      {
        name: "مشعل دود‌آلود",
        price: "۱۴ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "حملات آسیب سوختگی شما +۲ آسیب می‌زنند. شما در هر دور ۱ آسیب می‌خورید (کاهش‌ناپذیر)",
      },
      {
        name: "چماق گیج‌کننده",
        price: "۱۳ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "حملات آسیب گیجی شما از ۱ تاس ۴ وجهی به ۱ تاس ۶ وجهی تغییر می‌کنند",
      },
      {
        name: "شمشیر دوزبانه",
        price: "۱۸ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "وقتی حمله می‌کنید، می‌توانید دو نوع آسیب انتخاب کنید و هر دو را جداگانه وارد کنید (هر کدام با تاس خودش)",
      },
      {
        name: "کمان بلند",
        price: "۱۶ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "حملات شما از خانه‌های ۳ و ۴ دارای +۳ آسیب هستند. از خانه‌ی ۱ نمی‌توانید حمله کنید",
      },
      {
        name: "تیغه‌ی خون‌آشام",
        price: "۲۰ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "وقتی دشمنی را می‌کشید، ۴ جان بهبود می‌یابید",
      },
    ],
    "زره‌ها": [
      {
        name: "زره‌ی سنگین",
        price: "۱۸ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "مقاومت زخم شما +۳ می‌شود. زرنگی شما ۲- می‌شود",
      },
      {
        name: "عبای دودزده",
        price: "۱۲ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "مقاومت سوختگی شما +۳ می‌شود. وقتی آسیب سوختگی می‌خورید، می‌توانید بلافاصله ۱ خانه حرکت کنید",
      },
      {
        name: "ماسک بهداری",
        price: "۱۴ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "مقاومت مریضی شما +۴ می‌شود. اثرهای منفی مریضی روی شما نصف می‌شوند (گرد به پایین)",
      },
      {
        name: "کلاه سنگین",
        price: "۱۶ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "مقاومت گیجی شما +۴ می‌شود. اگر گیج شوید، می‌توانید ۱ تاس ۶ وجهی بیندازید - با ۵ یا بیشتر، اثر گیجی لغو می‌شود",
      },
      {
        name: "لباس چرمی",
        price: "۱۰ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "همه‌ی مقاومت‌های شما +۱ می‌شوند",
      },
      {
        name: "زره‌ی خاردار",
        price: "۲۲ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "وقتی آسیب زخم می‌خورید، دشمن حمله‌کننده نصف آن آسیب را می‌خورد (قبل از کاهش شما، بعد از کاهش او)",
      },
    ],
    "جواهرات": [
      {
        name: "سکه‌ی خوش‌یمن",
        price: "۱۰ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "یک‌بار در هر نبرد، می‌توانید هر تاسی را دوباره بیندازید. باید نتیجه‌ی دوم را نگه دارید",
      },
      {
        name: "گردنبند محافظ",
        price: "۱۵ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "اولین باری که در هر نبرد جان شما به ۰ می‌رسد، به‌جای آن در ۱ جان باقی می‌مانید",
      },
      {
        name: "انگشتر سرقت",
        price: "۱۲ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "وقتی دشمنی را می‌کشید، ۱ تاس ۶ وجهی پشیز دریافت می‌کنید",
      },
      {
        name: "دستبند سرعت",
        price: "۱۸ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "در شروع هر نبرد، زرنگی شما برای تعیین ترتیب نوبت +۴ می‌شود",
      },
      {
        name: "تعویذ شفا",
        price: "۱۴ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "در شروع هر دور خود، ۱ جان بهبود می‌یابید",
      },
      {
        name: "حلقه‌ی نفرین",
        price: "۲۰ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "آسیب شما +۳ می‌شود. جان شروع شما در هر مرحله ۵ کمتر می‌شود (حداقل ۱۰)",
      },
      {
        name: "آینه‌ی شکسته",
        price: "۱۶ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "وقتی دشمنی به شما حمله می‌کند، ۱ تاس ۶ وجهی بیندازید. با ۵ یا ۶، آسیب به دشمن حمله‌کننده برمی‌گردد",
      },
    ],
    "ابزارها": [
      {
        name: "طناب بلند",
        price: "۸ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "یک‌بار در هر نبرد، می‌توانید یک دشمن را ۱ موقعیت به سمت خودتان بکشید",
      },
      {
        name: "زنجیر سنگین",
        price: "۱۴ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "یک‌بار در هر نبرد، می‌توانید یک دشمن را برای ۱ دور قفل کنید (نمی‌تواند حرکت کند یا عمل کند)",
      },
      {
        name: "کتاب جادو",
        price: "۲۵ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "توانایی‌های محدود شما را می‌توانید ۲ بار در هر نبرد استفاده کنید (به‌جای ۱ بار)",
      },
      {
        name: "کیسه‌ی بزرگ",
        price: "۶ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "می‌توانید حداکثر ۸ مصرفی حمل کنید (به‌جای ۵)",
      },
      {
        name: "چراغ قدیمی",
        price: "۱۰ آهن‌پاره",
        type: "تجهیزات" as const,
        effect: "در ابتدای هر نبرد، می‌توانید ترتیب نوبت یک دشمن و یک متحد را عوض کنید",
      },
    ],
    "مصرفی - درمانی": [
      {
        name: "باند ساده",
        price: "۳ پشیز",
        type: "مصرفی" as const,
        effect: "۱ تاس ۶ وجهی + ۲ جان بهبود یابید",
      },
      {
        name: "معجون قوی",
        price: "۸ پشیز",
        type: "مصرفی" as const,
        effect: "۲ تاس ۸ وجهی جان بهبود یابید",
      },
      {
        name: "داروی شفابخش",
        price: "۱۵ پشیز",
        type: "مصرفی" as const,
        effect: "به جان کامل (۲۰) برسید. فقط زمانی قابل استفاده که جان شما کمتر از ۱۰ باشد",
      },
      {
        name: "پماد ضدعفونی",
        price: "۵ پشیز",
        type: "مصرفی" as const,
        effect: "یک اثر منفی (سوخته، بیمار، یا گیج) از خود بردارید و ۳ جان بهبود یابید",
      },
      {
        name: "غذای گرم",
        price: "۴ پشیز",
        type: "مصرفی" as const,
        effect: "شما و یک متحد هر کدام ۱ تاس ۶ وجهی جان بهبود می‌یابید",
      },
    ],
    "مصرفی - تاکتیکی": [
      {
        name: "بمب دود",
        price: "۶ پشیز",
        type: "مصرفی" as const,
        effect: "همه‌ی متحدان می‌توانند بلافاصله ۱ خانه حرکت کنند. تا پایان دور، همه‌ی متحدان ۳- آسیب می‌خورند",
      },
      {
        name: "شیشه‌ی آتش",
        price: "۸ پشیز",
        type: "مصرفی" as const,
        effect: "به یک دشمن ۲ تاس ۶ وجهی آسیب سوختگی بزنید",
      },
      {
        name: "سم کشنده",
        price: "۷ پشیز",
        type: "مصرفی" as const,
        effect: "به یک دشمن ۱ تاس ۸ وجهی آسیب مریضی بزنید. او در ۲ نوبت بعدی خود نیز ۱ تاس ۴ وجهی آسیب مریضی می‌خورد",
      },
      {
        name: "چراغ کور‌کننده",
        price: "۶ پشیز",
        type: "مصرفی" as const,
        effect: "به یک دشمن ۱ تاس ۶ وجهی آسیب گیجی بزنید. اگر گیج شود، دو نوبت بعدی خود را از دست می‌دهد (به‌جای یکی)",
      },
      {
        name: "پودر انفجاری",
        price: "۱۲ پشیز",
        type: "مصرفی" as const,
        effect: "به همه‌ی دشمنان در یک موقعیت دلخواه ۱ تاس ۸ وجهی آسیب زخم بزنید",
      },
      {
        name: "دام مرگبار",
        price: "۱۰ پشیز",
        type: "مصرفی" as const,
        effect: "یک دشمن را برای ۲ دور قفل کنید (نمی‌تواند حرکت کند یا عمل کند). دشمن باید زرنگی کمتر از ۱۰ داشته باشد",
      },
    ],
    "مصرفی - تقویتی": [
      {
        name: "روغن سلاح",
        price: "۵ پشیز",
        type: "مصرفی" as const,
        effect: "حمله‌ی بعدی شما +۳ آسیب می‌زند",
      },
      {
        name: "جام شهامت",
        price: "۷ پشیز",
        type: "مصرفی" as const,
        effect: "تا پایان دور، آسیب شما +۲ و همه‌ی مقاومت‌های شما +۲ می‌شوند",
      },
      {
        name: "اکسیر سرعت",
        price: "۸ پشیز",
        type: "مصرفی" as const,
        effect: "بلافاصله نوبت دیگری بگیرید (بعد از این نوبت). نمی‌توانید در نوبت اضافی مصرفی استفاده کنید",
      },
      {
        name: "پودر پرواز",
        price: "۶ پشیز",
        type: "مصرفی" as const,
        effect: "بلافاصله به هر موقعیت دلخواه بروید",
      },
      {
        name: "دعای محافظ",
        price: "۱۰ پشیز",
        type: "مصرفی" as const,
        effect: "تا پایان دور، نمی‌توانید به کمتر از ۱ جان برسید",
      },
      {
        name: "نوشدارو دانش",
        price: "۱۲ پشیز",
        type: "مصرفی" as const,
        effect: "یک توانایی محدود خود را که در این نبرد استفاده کرده‌اید دوباره فعال کنید",
      },
    ],
  };

  const categoryIcons = {
    "سلاح‌ها": Sword,
    "زره‌ها": Shield,
    "جواهرات": Sparkles,
    "ابزارها": Target,
    "مصرفی - درمانی": Heart,
    "مصرفی - تاکتیکی": Target,
    "مصرفی - تقویتی": Zap,
  };

  const categoryNames = Object.keys(categories);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-red-500">اقلام و تجهیزات</h1>
        <p className="text-zinc-400 text-lg">سلاح‌ها، زره‌ها و اقلامی که در فروشگاه یافت می‌شوند</p>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-950/30 rounded-xl p-6 border border-blue-900/50">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold text-blue-400">تجهیزات</h2>
          </div>
          <p className="text-zinc-300 text-sm mb-3">با آهن‌پاره خریداری می‌شوند و همیشه فعال هستند</p>
          <p className="text-zinc-400 text-sm">حداکثر ۳ تجهیزات می‌توانید داشته باشید</p>
        </div>

        <div className="bg-green-950/30 rounded-xl p-6 border border-green-900/50">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-6 h-6 text-green-400" />
            <h2 className="text-xl font-bold text-green-400">مصرفی‌ها</h2>
          </div>
          <p className="text-zinc-300 text-sm mb-3">با پشیز خریداری می‌شوند و با استفاده مصرف می‌شوند</p>
          <p className="text-zinc-400 text-sm">حداکثر ۵ مصرفی می‌توانید حمل کنید</p>
        </div>
      </div>

      {/* Shop Rules */}
      <div className="bg-amber-950/30 rounded-xl p-6 border border-amber-900/50">
        <h2 className="text-xl font-bold text-amber-400 mb-4">قوانین خرید</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
          <div className="space-y-2">
            <p><strong className="text-amber-400">۱:</strong> کالا موجود نیست</p>
            <p><strong className="text-amber-400">۲:</strong> قیمت دوبرابر</p>
            <p><strong className="text-amber-400">۳:</strong> ۳۰٪ افزایش قیمت</p>
          </div>
          <div className="space-y-2">
            <p><strong className="text-amber-400">۴:</strong> قیمت عادی</p>
            <p><strong className="text-amber-400">۵:</strong> قیمت نصف</p>
            <p><strong className="text-amber-400">۶:</strong> با خرید کالای گران‌تر، این را مجانی بگیرید</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categoryNames.map((category) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons];
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-amber-900/50 text-amber-100 border border-amber-800"
                  : "bg-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700"
              }`}
            >
              <Icon className="w-4 h-4" />
              {category}
            </button>
          );
        })}
      </div>

      {/* Items List */}
      <div className="space-y-4">
        {categories[selectedCategory as keyof typeof categories].map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
