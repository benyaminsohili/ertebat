<div align="center">

# 🌐 ارتباط | Ertebat
### پلتفرم امن، سبک و ضد فیلتر ارتباط زنده P2P (مشابه اسکای‌روم)
### Secure, Lightweight & Anti-Censorship P2P Live Platform

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![WebRTC](https://img.shields.io/badge/WebRTC-P2P_Mesh-333333?style=for-the-badge&logo=webrtc&logoColor=white)](https://webrtc.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## 🇮🇷 معرفی به زبان فارسی

**ارتباط** یک سامانه متن‌باز و مدرن برای ارتباط صوتی، تصویری و پیام‌رسانی امن است که به صورت سرورلس (Serverless) روی لبه ابری **Cloudflare Workers** اجرا می‌شود. این سیستم با بهره‌گیری از معماری مستقیم نظیربه‌نظیر (P2P Mesh) و پروتکل WebRTC، بدون نیاز به سرور میانی یا پایگاه داده، تماس گروهی تا ۴ نفر را با کیفیتی پایدار و استودیویی ممکن می‌سازد.

### ✨ امکانات و قابلیت‌ها:
- **کیفیت استودیویی تطبیقی:** بهره‌مندی از پردازش Balanced و تنظیم هوشمند رزولوشن (تا Full HD) و فریم‌ریت بر اساس سرعت شبکه بدون لگ.
- **تماس گروهی ۴ نفره پایدار:** گرید ماتریسی مدرن با تفکیک مستقل صدا و هدایت خودکار به بلندگوی اصلی.
- **پنل دو زبانه (فارسی / انگلیسی):** سوئیچ آنی زبان رابط کاربری، متون و پیام‌ها همراه با تغییر جهت (RTL / LTR).
- **پیام‌رسان چندرسانه‌ای:** چت زنده، ارسال ویس با نمایش وضعیت ضبط و اشتراک‌گذاری مستقیم انواع فایل و عکس تا ۲۵ مگابایت.
- **حریم خصوصی قطعی (Zero-Knowledge):** بدون ذخیره دیتابیس یا لاگ؛ رمزنگاری سرتاسری ترافیک با DTLS/SRTP/SCTP.
- **ضد فیلتر و خودترمیم:** چرخه سرورهای STUN چندمسیره و سیستم بازیابی خودکار اتصال در نوسانات اینترنت همراه.
- **کنترل کامل جلسه:** کلیدهای اختصاصی قطع/وصل مجزای دوربین و میکروفون به همراه حالت تمام‌صفحه.

### 🚀 راهنمای راه‌اندازی سریع:
1. در سایت [Cloudflare Dashboard](https://dash.cloudflare.com) وارد شوید.
2. از منوی سمت چپ به **Workers & Pages** رفته و یک Worker جدید بسازید.
3. کد فایل `worker.js` موجود در این ریپازیتوری را در ادیتور آنلاین کپی و جایگزین کنید.
4. دکمه **Save and deploy** را بزنید.
5. *(پیشنهاد برای عدم فیلترینگ)*: در تب **Triggers** ورکر، دامنه یا ساب‌دامین اختصاصی خود را در بخش **Custom Domains** متصل نمایید.

---

## 🇬🇧 English Overview

**Ertebat** is a high-performance, open-source live communication platform running serverless on **Cloudflare Workers**. Engineered with a zero-knowledge WebRTC Full Mesh architecture, it delivers resilient studio-grade multi-party audio/video calls (up to 4 participants) and secure ephemeral media sharing without routing streams through centralized backends.

### ✨ Key Features:
- **Adaptive Studio Stream:** Balanced frame-rate and resolution scaling (up to Full HD) ensuring smooth performance over cellular links.
- **Resilient 4-Way Mesh:** Dynamic 2x2 grid with independent multi-channel audio routed directly to loudspeakers.
- **Bilingual Interface:** Instant real-time UI toggle between Persian (RTL) and English (LTR).
- **Rich Media Messaging:** Live text chat, animated voice recorder/player, and peer-to-peer file/photo transfers up to 25MB.
- **Zero-Knowledge Privacy:** Completely database-free, log-free, with end-to-end media encryption (DTLS/SRTP/SCTP).
- **Anti-Censorship Routing:** Multi-homed STUN fallbacks and automated ICE self-healing for deep network drop recovery.
- **Granular Controls:** Dedicated camera and microphone toggles, fullscreen theater mode, and glassmorphic aesthetic.

### 🚀 Quick Deployment:
1. Access your [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Go to **Workers & Pages** and create a new Worker.
3. Paste the code from `worker.js` into the editor.
4. Click **Save and deploy**.
5. *(Recommended)* Under the **Triggers** tab, bind your Custom Domain for uncensored accessibility.

---

## ☕ حمایت مالی از پروژه | Support & Donate

توسعه و نگهداری پروژه‌های متن‌باز نیازمند زمان و انرژی است. اگر این ابزار به ارتباط بهتر و امن‌تر شما کمک کرده، می‌توانید از طریق آدرس‌های تراست ولت زیر از این پروژه حمایت کنید:

Maintaining open-source privacy software takes continuous dedication. If this project helps you stay connected safely, consider supporting the development via Trust Wallet:

### 🪙 آدرس‌های دریافت / Crypto Wallets (Trust Wallet)

  `آدرس_کیف_پول_تتر_شبکه_ترون_را_اینجا_بگذار`

* **Toncoin (TON):UQCOQAOcSb1BPRr4f_tCod7KH8rl133P5QqUsSS3-YFojdhW
  `آدرس_کیف_پول_تون_را_اینجا_بگذار`

* **Bitcoin (BTC):bc1qq7dynx5kdf6rxc938sny864jvmj8tl6vw4max0
  `آدرس_کیف_پول_بیتکوین_را_اینجا_بگذار`

---
طراحی و مهندسی شده با ❤️ توسط **بنیامین**  
Designed & Engineered with ❤️ by **Benyamin**
