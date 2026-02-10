import { useState } from "react";
import { EnemyCard } from "../EnemyCard";
import { ImagePlaceholder } from "../ImagePlaceholder";

export function Enemies() {
  const [selectedLocation, setSelectedLocation] = useState("جنگل");

  const locations = {
    جنگل: {
      description: "جنگلی تاریک و انبوه. درختان به هم تنیده‌اند و صدای جانوران وحشی در هوا پیچیده است.",
      trapType: "مریضی",
      enemies: [
        {
          name: "گرگ شکارچی",
          threat: 3,
          experience: 8,
          health: 9,
          resistances: { wound: 1, burn: 0, disease: 2, confusion: 1 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۶ وجهی آسیب زخم). اگر جانش کمتر از ۵ باشد، ۱ تاس ۸ وجهی آسیب می‌زند.",
        },
        {
          name: "پیچک خونخوار",
          threat: 4,
          experience: 10,
          health: 12,
          resistances: { wound: 2, burn: 1, disease: 4, confusion: 0 },
          behavior: "بازیکن تصادفی را هدف می‌گیرد (۱ تاس ۴ وجهی بیندازید). ۱ تاس ۴ وجهی آسیب مریضی می‌زند و ۲ جان بهبود می‌یابد.",
        },
        {
          name: "خرس مجروح",
          threat: 6,
          experience: 15,
          health: 18,
          resistances: { wound: 3, burn: 2, disease: 1, confusion: 3 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۱۰ وجهی آسیب زخم). اگر در این دور آسیب ببیند، حمله‌ی بعدی +۳ آسیب می‌زند.",
        },
        {
          name: "جن درختان",
          threat: 5,
          experience: 12,
          health: 14,
          resistances: { wound: 1, burn: 0, disease: 3, confusion: 4 },
          behavior: "به بازیکن در خانه‌ی ۴ حمله می‌کند (اگر خالی باشد، خانه‌ی ۳). ۱ تاس ۶ وجهی آسیب گیجی می‌زند.",
        },
        {
          name: "شکارچی وحشی",
          threat: 4,
          experience: 10,
          health: 10,
          resistances: { wound: 0, burn: 1, disease: 1, confusion: 2 },
          behavior: "به بازیکن با کمترین جان حمله می‌کند (۱ تاس ۶ وجهی + ۲ آسیب زخم).",
        },
        {
          name: "درخت متحرک",
          threat: 7,
          experience: 18,
          health: 22,
          resistances: { wound: 4, burn: -1, disease: 2, confusion: 5 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۸ وجهی آسیب زخم). هر ۲ دور یک‌بار به‌جای حمله، ۱ موقعیت به سمت بازیکنان حرکت می‌کند.",
        },
      ],
    },
    بیابان: {
      description: "بیابانی سوزان و بی‌پایان. خورشید بی‌رحمانه می‌تابد و گرمای شن‌ها استخوان را می‌سوزاند.",
      trapType: "سوختگی",
      enemies: [
        {
          name: "عقرب آتشین",
          threat: 3,
          experience: 8,
          health: 8,
          resistances: { wound: 0, burn: 3, disease: 1, confusion: 1 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۴ وجهی آسیب سوختگی). بازیکن هدف در نوبت بعدی خود ۱ تاس ۴ وجهی آسیب سوختگی اضافی می‌خورد.",
        },
        {
          name: "راهزن صحرا",
          threat: 4,
          experience: 10,
          health: 11,
          resistances: { wound: 1, burn: 2, disease: 0, confusion: 2 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۶ وجهی آسیب زخم). اگر در خانه‌ی ۱ دشمن نباشد، ۱ موقعیت جلو می‌رود و سپس حمله می‌کند.",
        },
        {
          name: "جادوگر ریگ",
          threat: 5,
          experience: 12,
          health: 13,
          resistances: { wound: 1, burn: 4, disease: 2, confusion: 0 },
          behavior: "همه‌ی بازیکنان ۱ تاس ۴ وجهی آسیب سوختگی می‌خورند. این دشمن هر ۲ نوبت یک‌بار عمل می‌کند (نوبت‌های فرد را از دست می‌دهد).",
        },
        {
          name: "کرم شنی",
          threat: 6,
          experience: 15,
          health: 20,
          resistances: { wound: 2, burn: 3, disease: 1, confusion: 4 },
          behavior: "به بازیکن تصادفی حمله می‌کند (۱ تاس ۴ وجهی بیندازید). ۱ تاس ۱۰ وجهی آسیب زخم. اگر گیج باشد، به‌جای حمله به بازیکن، به دشمن تصادفی حمله می‌کند.",
        },
        {
          name: "مارمولک غول‌پیکر",
          threat: 5,
          experience: 12,
          health: 15,
          resistances: { wound: 3, burn: 5, disease: 0, confusion: 1 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۸ وجهی آسیب زخم). اگر این حمله بیشتر از ۵ آسیب بزند، ۳ جان بهبود می‌یابد.",
        },
        {
          name: "جن آتش",
          threat: 7,
          experience: 18,
          health: 16,
          resistances: { wound: 0, burn: 6, disease: 1, confusion: 2 },
          behavior: "به همه‌ی بازیکنان در خانه‌های ۱ و ۲ حمله می‌کند (۱ تاس ۶ وجهی آسیب سوختگی). خودش نیز ۲ آسیب می‌خورد (کاهش‌ناپذیر).",
        },
      ],
    },
    قلعه: {
      description: "قلعه‌ای ویران و متروک. دیوارهای سنگی خون‌آلوده‌اند و شمشیرهای شکسته روی زمین پراکنده.",
      trapType: "زخم",
      enemies: [
        {
          name: "سرباز مرده",
          threat: 3,
          experience: 8,
          health: 10,
          resistances: { wound: 2, burn: 0, disease: 3, confusion: 2 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۶ وجهی آسیب زخم).",
        },
        {
          name: "تیرانداز برج",
          threat: 4,
          experience: 10,
          health: 9,
          resistances: { wound: 0, burn: 1, disease: 1, confusion: 3 },
          behavior: "به بازیکن در خانه‌ی ۴ حمله می‌کند (اگر خالی، خانه‌ی ۳). ۱ تاس ۶ وجهی + ۲ آسیب زخم.",
        },
        {
          name: "شوالیه‌ی سیاه",
          threat: 8,
          experience: 20,
          health: 24,
          resistances: { wound: 4, burn: 2, disease: 1, confusion: 3 },
          behavior: "به بازیکن در خانه‌ی ۱ حمله می‌کند (۱ تاس ۱۰ وجهی + ۲ آسیب زخم). اگر خانه‌ی ۱ خالی باشد، ۱ موقعیت جلو می‌رود و سپس حمله می‌کند. وقتی جانش زیر ۱۲ برسد، همه‌ی حملاتش +۲ آسیب می‌زنند.",
        },
        {
          name: "جلاد",
          threat: 5,
          experience: 12,
          health: 14,
          resistances: { wound: 3, burn: 1, disease: 0, confusion: 4 },
          behavior: "به بازیکن با کمترین جان حمله می‌کند (۱ تاس ۸ وجهی آسیب زخم). اگر بازیکن هدف کمتر از ۸ جان داشته باشد، +۴ آسیب اضافی می‌زند.",
        },
        {
          name: "روح شوالیه",
          threat: 6,
          experience: 15,
          health: 16,
          resistances: { wound: 1, burn: 3, disease: 4, confusion: 1 },
          behavior: "به بازیکن تصادفی حمله می‌کند (۱ تاس ۴ وجهی بیندازید). ۱ تاس ۶ وجهی آسیب زخم + ۱ تاس ۴ وجهی آسیب گیجی.",
        },
        {
          name: "فرمانده‌ی قلعه",
          threat: 9,
          experience: 25,
          health: 28,
          resistances: { wound: 4, burn: 2, disease: 2, confusion: 4 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۲ تاس ۶ وجهی آسیب زخم). همه‌ی دشمنان دیگر در این دور +۱ آسیب می‌زنند. اگر این دشمن گیج شود، این اثر لغو می‌شود.",
        },
      ],
    },
    اسکله: {
      description: "اسکله‌ای تاریک و خیس. بوی مرگ و دریای فاسد در هوا پیچیده است. امواج به چوب‌های پوسیده می‌کوبند.",
      trapType: "گیجی",
      enemies: [
        {
          name: "دزد دریایی مست",
          threat: 3,
          experience: 8,
          health: 9,
          resistances: { wound: 1, burn: 1, disease: 2, confusion: 0 },
          behavior: "به بازیکن تصادفی حمله می‌کند (۱ تاس ۴ وجهی بیندازید). ۱ تاس ۶ وجهی آسیب زخم.",
        },
        {
          name: "ماهی‌مرد",
          threat: 4,
          experience: 10,
          health: 12,
          resistances: { wound: 2, burn: 0, disease: 4, confusion: 1 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۴ وجهی آسیب مریضی). آن بازیکن تا پایان دور ۲- آسیب می‌زند.",
        },
        {
          name: "حبشی غول‌پیکر",
          threat: 7,
          experience: 18,
          health: 22,
          resistances: { wound: 3, burn: 1, disease: 3, confusion: 5 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۱۰ وجهی آسیب زخم). بازیکن هدف ۱ موقعیت به عقب پرتاب می‌شود.",
        },
        {
          name: "جادوگر آب",
          threat: 5,
          experience: 12,
          health: 14,
          resistances: { wound: 0, burn: 4, disease: 1, confusion: 2 },
          behavior: "یک بازیکن تصادفی را انتخاب می‌کند. آن بازیکن ۱ تاس ۶ وجهی آسیب گیجی می‌خورد. اگر گیج شود، نوبت بعدی خود را از دست می‌دهد و ۱ موقعیت عقب می‌رود.",
        },
        {
          name: "خرچنگ غول",
          threat: 6,
          experience: 15,
          health: 20,
          resistances: { wound: 5, burn: 1, disease: 2, confusion: 2 },
          behavior: "به بازیکن در خانه‌ی ۱ حمله می‌کند (۱ تاس ۸ وجهی آسیب زخم). اگر آسیب بیشتر از ۶ بزند، آن بازیکن را برای ۱ دور قفل می‌کند (نمی‌تواند حرکت کند).",
        },
        {
          name: "کاپیتان مرده",
          threat: 8,
          experience: 20,
          health: 20,
          resistances: { wound: 2, burn: 2, disease: 5, confusion: 3 },
          behavior: "به بازیکن با بیشترین جان حمله می‌کند (۱ تاس ۸ وجهی آسیب زخم). اگر دشمن دیگری میدان باشد، یک دشمن تصادفی ۴ جان بهبود می‌یابد.",
        },
      ],
    },
    صومعه: {
      description: "صومعه‌ای سوخته و ویران. بت‌های شکسته و شمع‌های خاموش در همه‌جا پراکنده‌اند. سایه‌های عجیب روی دیوارها می‌رقصند.",
      trapType: "سوختگی",
      enemies: [
        {
          name: "راهب دیوانه",
          threat: 3,
          experience: 8,
          health: 8,
          resistances: { wound: 0, burn: 4, disease: 1, confusion: 3 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۴ وجهی آسیب سوختگی). اگر در نوبت قبل آسیب دیده باشد، ۲ تاس ۴ وجهی آسیب می‌زند.",
        },
        {
          name: "شیطان آتش",
          threat: 5,
          experience: 12,
          health: 12,
          resistances: { wound: 1, burn: 6, disease: 0, confusion: 1 },
          behavior: "به همه‌ی بازیکنان ۱ تاس ۴ وجهی آسیب سوختگی می‌زند. خودش ۲ آسیب می‌خورد (کاهش‌ناپذیر).",
        },
        {
          name: "کشیش سوخته",
          threat: 4,
          experience: 10,
          health: 11,
          resistances: { wound: 1, burn: 5, disease: 2, confusion: 2 },
          behavior: "به بازیکن در خانه‌ی ۴ حمله می‌کند (اگر خالی، خانه‌ی ۳). ۱ تاس ۶ وجهی آسیب سوختگی + ۱ تاس ۴ وجهی آسیب گیجی.",
        },
        {
          name: "مجسمه‌ی زنده",
          threat: 6,
          experience: 15,
          health: 20,
          resistances: { wound: 4, burn: 4, disease: 1, confusion: 6 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۱۰ وجهی آسیب زخم). هر ۳ دور یک‌بار به‌جای حمله، ۸ جان بهبود می‌یابد.",
        },
        {
          name: "فرشته‌ی ساقط",
          threat: 7,
          experience: 18,
          health: 18,
          resistances: { wound: 2, burn: 5, disease: 2, confusion: 4 },
          behavior: "به دو بازیکن تصادفی حمله می‌کند (به هر کدام ۱ تاس ۶ وجهی آسیب سوختگی). اگر گیج باشد، فقط به یک بازیکن حمله می‌کند.",
        },
        {
          name: "اسقف کافر",
          threat: 9,
          experience: 25,
          health: 26,
          resistances: { wound: 3, burn: 6, disease: 1, confusion: 3 },
          behavior: "به بازیکن با بیشترین جان حمله می‌کند (۱ تاس ۸ وجهی آسیب سوختگی). همه‌ی دشمنان دیگر این دور +۲ مقاومت به همه انواع می‌گیرند.",
        },
      ],
    },
    بهداری: {
      description: "بهداری متروک و تاریک. بوی مواد شیمیایی و مرگ در هوا است. تخت‌های خونین و ابزارهای جراحی زنگ‌زده همه‌جا پراکنده.",
      trapType: "مریضی",
      enemies: [
        {
          name: "بیمار دیوانه",
          threat: 3,
          experience: 8,
          health: 7,
          resistances: { wound: 0, burn: 1, disease: 5, confusion: 1 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۶ وجهی آسیب مریضی). اگر بمیرد، همه‌ی بازیکنان ۱ تاس ۴ وجهی آسیب مریضی می‌خورند.",
        },
        {
          name: "پرستار شبح",
          threat: 4,
          experience: 10,
          health: 10,
          resistances: { wound: 1, burn: 1, disease: 4, confusion: 2 },
          behavior: "یک دشمن تصادفی را انتخاب می‌کند و او را ۴ جان بهبود می‌دهد. اگر همه‌ی دشمنان جان کامل داشته باشند، به نزدیک‌ترین بازیکن ۱ تاس ۴ وجهی آسیب مریضی می‌زند.",
        },
        {
          name: "جراح پاره‌تن",
          threat: 6,
          experience: 15,
          health: 15,
          resistances: { wound: 2, burn: 1, disease: 5, confusion: 0 },
          behavior: "به بازیکن با کمترین جان حمله می‌کند (۱ تاس ۸ وجهی آسیب زخم + ۱ تاس ۴ وجهی آسیب مریضی). آن بازیکن نمی‌تواند این دور بهبودی دریافت کند.",
        },
        {
          name: "آزمایش شکست‌خورده",
          threat: 5,
          experience: 12,
          health: 14,
          resistances: { wound: 3, burn: 2, disease: 6, confusion: 4 },
          behavior: "به بازیکن تصادفی حمله می‌کند (۱ تاس ۴ وجهی بیندازید). ۱ تاس ۱۰ وجهی آسیب مریضی. خودش نیز ۳ آسیب می‌خورد (کاهش‌ناپذیر).",
        },
        {
          name: "هیولای چرک",
          threat: 7,
          experience: 18,
          health: 20,
          resistances: { wound: 2, burn: 1, disease: 8, confusion: 1 },
          behavior: "به همه‌ی بازیکنان در خانه‌های ۱ و ۲ حمله می‌کند (۱ تاس ۶ وجهی آسیب مریضی). بازیکنان آسیب‌دیده تا پایان دور ۲- به همه‌ی حملاتشان می‌گیرند.",
        },
        {
          name: "دکتر کشتار",
          threat: 8,
          experience: 20,
          health: 22,
          resistances: { wound: 2, burn: 2, disease: 6, confusion: 3 },
          behavior: "به بازیکن با کمترین جان حمله می‌کند (۲ تاس ۶ وجهی آسیب مریضی). اگر بازیکن هدف کمتر از ۱۰ جان داشته باشد، او را گیج می‌کند (بدون تاس).",
        },
      ],
    },
    قبرستان: {
      description: "قبرستانی کهنه و مه‌آلود. سنگ قبرهای شکسته و قبرهای باز در همه‌جا دیده می‌شوند. صدای ناله از زیر زمین می‌آید.",
      trapType: "گیجی",
      enemies: [
        {
          name: "مرده‌ی متحرک",
          threat: 3,
          experience: 8,
          health: 11,
          resistances: { wound: 3, burn: 0, disease: 4, confusion: 4 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۶ وجهی آسیب زخم). بسیار کند است.",
        },
        {
          name: "اسکلت سرباز",
          threat: 4,
          experience: 10,
          health: 9,
          resistances: { wound: 2, burn: 1, disease: 5, confusion: 3 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۸ وجهی آسیب زخم). اگر بمیرد، همه‌ی دشمنان دیگر +۲ آسیب می‌گیرند تا پایان دور.",
        },
        {
          name: "روح گریان",
          threat: 5,
          experience: 12,
          health: 12,
          resistances: { wound: 0, burn: 2, disease: 2, confusion: 5 },
          behavior: "به همه‌ی بازیکنان ۱ تاس ۴ وجهی آسیب گیجی می‌زند. اگر کسی گیج شود، نوبت بعدی خود را از دست می‌دهد.",
        },
        {
          name: "کفن‌سیاه",
          threat: 6,
          experience: 15,
          health: 14,
          resistances: { wound: 1, burn: 2, disease: 3, confusion: 4 },
          behavior: "به بازیکن در خانه‌ی ۴ حمله می‌کند (اگر خالی، خانه‌ی ۳). ۱ تاس ۶ وجهی آسیب گیجی + ۱ تاس ۴ وجهی آسیب زخم. بازیکن هدف ۱ موقعیت عقب می‌رود.",
        },
        {
          name: "غول قبر",
          threat: 7,
          experience: 18,
          health: 24,
          resistances: { wound: 4, burn: 1, disease: 3, confusion: 5 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۱۲ وجهی آسیب زخم). اگر دشمن دیگری در این دور بمیرد، این دشمن ۶ جان بهبود می‌یابد.",
        },
        {
          name: "شاه مردگان",
          threat: 10,
          experience: 30,
          health: 30,
          resistances: { wound: 3, burn: 2, disease: 6, confusion: 6 },
          behavior: "به بازیکن با بیشترین جان حمله می‌کند (۱ تاس ۱۰ وجهی آسیب زخم + ۱ تاس ۶ وجهی آسیب گیجی). وقتی جانش زیر ۱۵ برسد، ۲ مرده‌ی متحرک احضار می‌کند (فقط یک‌بار).",
        },
      ],
    },
    کشتارگاه: {
      description: "کشتارگاهی خونین و وحشتناک. قلاب‌های گوشتی از سقف آویزان‌اند و بوی تعفن و خون تازه در همه‌جا است.",
      trapType: "زخم",
      enemies: [
        {
          name: "قصاب دیوانه",
          threat: 4,
          experience: 10,
          health: 12,
          resistances: { wound: 3, burn: 1, disease: 1, confusion: 2 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۸ وجهی آسیب زخم). اگر این حمله بیشتر از ۶ آسیب بزند، دوباره حمله می‌کند.",
        },
        {
          name: "گوشت متحرک",
          threat: 3,
          experience: 8,
          health: 14,
          resistances: { wound: 4, burn: 1, disease: 2, confusion: 1 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۴ وجهی آسیب زخم). بسیار کند اما سخت‌جان است.",
        },
        {
          name: "سگ جهنمی",
          threat: 5,
          experience: 12,
          health: 10,
          resistances: { wound: 1, burn: 3, disease: 2, confusion: 0 },
          behavior: "به بازیکن با کمترین جان حمله می‌کند (۱ تاس ۱۰ وجهی آسیب زخم). اگر بازیکن هدف کمتر از ۸ جان داشته باشد، +۳ آسیب اضافی.",
        },
        {
          name: "جلاد عظیم",
          threat: 7,
          experience: 18,
          health: 20,
          resistances: { wound: 5, burn: 2, disease: 1, confusion: 4 },
          behavior: "به بازیکن در خانه‌ی ۱ حمله می‌کند (۲ تاس ۸ وجهی آسیب زخم). اگر بیشتر از ۱۰ آسیب وارد شود، بازیکن هدف ۲ موقعیت عقب پرتاب می‌شود.",
        },
        {
          name: "شیطان خونخوار",
          threat: 6,
          experience: 15,
          health: 16,
          resistances: { wound: 2, burn: 1, disease: 3, confusion: 2 },
          behavior: "به بازیکن تصادفی حمله می‌کند (۱ تاس ۴ وجهی بیندازید). ۱ تاس ۸ وجهی آسیب زخم. نصف آسیب وارد شده را (قبل از کاهش) بهبود می‌یابد.",
        },
        {
          name: "ارباب کشتارگاه",
          threat: 9,
          experience: 25,
          health: 28,
          resistances: { wound: 5, burn: 2, disease: 2, confusion: 3 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۲ تاس ۱۰ وجهی آسیب زخم). وقتی جانش زیر ۱۴ برسد، به دو بازیکن نزدیک حمله می‌کند (به هر کدام ۱ تاس ۱۰ وجهی).",
        },
      ],
    },
    دخمه: {
      description: "دخمه‌ای عمیق و تاریک در زیر زمین. سکوت مرگبار و سنگ‌های سرد. چیزی قدیمی و شرورانه در تاریکی منتظر است.",
      trapType: "ندارد",
      enemies: [
        {
          name: "سایه‌ی خزنده",
          threat: 4,
          experience: 10,
          health: 8,
          resistances: { wound: 0, burn: 1, disease: 2, confusion: 4 },
          behavior: "به بازیکن تصادفی حمله می‌کند (۱ تاس ۴ وجهی بیندازید). ۱ تاس ۶ وجهی آسیب گیجی. بازیکن هدف ۱ موقعیت عقب می‌رود.",
        },
        {
          name: "محافظ سنگی",
          threat: 6,
          experience: 15,
          health: 22,
          resistances: { wound: 5, burn: 3, disease: 2, confusion: 6 },
          behavior: "به نزدیک‌ترین بازیکن حمله می‌کند (۱ تاس ۸ وجهی آسیب زخم). اگر گیج نباشد، همه‌ی دشمنان دیگر این دور +۱ مقاومت به همه انواع می‌گیرند.",
        },
        {
          name: "جادوگر تاریکی",
          threat: 7,
          experience: 18,
          health: 14,
          resistances: { wound: 1, burn: 2, disease: 3, confusion: 3 },
          behavior: "به دو بازیکن تصادفی حمله می‌کند. به هر کدام: ۱ تاس ۴ وجهی آسیب گیجی + ۱ تاس ۴ وجهی آسیب مریضی + ۱ تاس ۴ وجهی آسیب سوختگی (سه نوع آسیب جداگانه).",
        },
        {
          name: "مومیایی باستانی",
          threat: 8,
          experience: 20,
          health: 24,
          resistances: { wound: 3, burn: 1, disease: 5, confusion: 4 },
          behavior: "به بازیکن با بیشترین جان حمله می‌کند (۱ تاس ۸ وجهی آسیب زخم + ۱ تاس ۶ وجهی آسیب مریضی). بازیکن هدف تا پایان دور نمی‌تواند بهبودی دریافت کند.",
        },
        {
          name: "شیطان زنجیری",
          threat: 9,
          experience: 25,
          health: 26,
          resistances: { wound: 4, burn: 4, disease: 2, confusion: 5 },
          behavior: "به همه‌ی بازیکنان حمله می‌کند (۱ تاس ۶ وجهی آسیب زخم به هر کدام). وقتی جانش زیر ۱۳ برسد، ۲ تاس ۶ وجهی به‌جای ۱ تاس می‌زند.",
        },
        {
          name: "قدیمی‌ترین",
          threat: 12,
          experience: 40,
          health: 35,
          resistances: { wound: 4, burn: 4, disease: 4, confusion: 4 },
          behavior: "به بازیکن با بیشترین جان حمله می‌کند (۲ تاس ۸ وجهی آسیب از نوع دلخواه). هر ۲ دور یک‌بار، ۱ سایه‌ی خزنده احضار می‌کند. اگر گیج شود، احضار لغو می‌شود.",
        },
      ],
    },
  };

  const locationNames = Object.keys(locations);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-red-500">دشمنان</h1>
        <p className="text-zinc-400 text-lg">۹ مکان مختلف با دشمنان منحصر به فرد</p>
      </div>

      {/* Location Tabs */}
      <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-4">
        <div className="flex flex-wrap gap-2 mb-6">
          {locationNames.map((location) => (
            <button
              key={location}
              onClick={() => setSelectedLocation(location)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedLocation === location
                  ? "bg-red-900/50 text-red-100 border border-red-800"
                  : "bg-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700"
              }`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Location Info */}
        <div className="space-y-4">
          <div className="flex items-start gap-4 bg-zinc-800/50 rounded-lg p-6 border border-zinc-700">
            <ImagePlaceholder label={`عکس ${selectedLocation}`} size="lg" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">{selectedLocation}</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                {locations[selectedLocation as keyof typeof locations].description}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">نوع تله‌ی بعد:</span>
                <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded border border-red-800">
                  {locations[selectedLocation as keyof typeof locations].trapType}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enemies List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-amber-500">دشمنان این مکان</h3>
        {locations[selectedLocation as keyof typeof locations].enemies.map((enemy, index) => (
          <EnemyCard key={index} {...enemy} />
        ))}
      </div>
    </div>
  );
}
