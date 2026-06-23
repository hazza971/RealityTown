# نشر الموقع

## الجاهز الآن

- الواجهة الجاهزة للنشر موجودة في `publish-site`
- الـ API الجاهز موجود في `api`
- ملف تشغيل الـ API المحلي موجود في `تشغيل-api.bat`
- ملف إعداد قاعدة البيانات موجود في `api/.env`

## أسرع طريقة للنشر

### الواجهة

انشر مجلد `publish-site` على أي استضافة مواقع ثابتة مثل:

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages

ارفع فقط الملفات الموجودة داخل `publish-site`:

- `index.html`
- `app.js`
- `styles.css`
- `api-config.js`
- مجلد `assets`

### الـ API

انشر مجلد `api` على خدمة Node.js مثل:

- Render
- Railway
- VPS

## خطوات نشر الـ API على Render

1. ارفع مجلد `api` إلى GitHub أو إلى مشروع مستقل.
2. أنشئ `Web Service` جديد على Render.
3. اجعل الإعدادات:

- Runtime: `Docker` أو `Node`
- Root Directory: `api`
- Build Command: `npm install`
- Start Command: `npm start`
- Port: `3010`

4. أضف متغيرات البيئة الموجودة في `api/.env`

القيم الحالية:

- `PORT=3010`
- `DB_HOST=127.0.0.1`
- `DB_PORT=3306`
- `DB_USER=root`
- `DB_PASSWORD=`
- `DB_NAME=reality`
- `CORS_ORIGIN=*`
- `ONLINE_PLAYERS_URL=http://127.0.0.1:30120/players.json`
- `TOTAL_FACTIONS=48`
- `TOTAL_SYSTEMS=180`

إذا كان السيرفر وقاعدة البيانات على نفس جهاز FiveM فلا تستخدم `127.0.0.1` داخل Render. ضع عنوان قاعدة البيانات الحقيقي أو استضف الـ API على نفس الجهاز الذي توجد عليه القاعدة.

## بعد نشر الـ API

خذ رابط الخدمة المنشورة، مثال:

`https://reality-town-api.onrender.com/api`

ثم عدل ملف `publish-site/api-config.js`

واجعل:

```js
window.REALITY_API_BASE_URL = "https://reality-town-api.onrender.com/api";
```

أو غيّر قيمة `baseUrl` مباشرة إلى نفس الرابط.

## أفضل نشر فعلي لسيرفرك

بما أن قاعدة البيانات عندك محلية على نفس جهاز السيرفر، أفضل خيارين:

1. تشغيل الـ API على نفس VPS أو نفس جهاز السيرفر
2. أو فتح قاعدة البيانات بشكل آمن لخدمة خارجية

الخيار الأول أفضل وأسهل.

## تشغيل محلي جاهز

لتشغيل الـ API محليًا:

1. تأكد أن `MySQL` أو `MariaDB` شغال
2. شغل الملف `تشغيل-api.bat`

رابط الفحص:

`http://127.0.0.1:3010/api/health`

رابط البيانات:

`http://127.0.0.1:3010/api/bootstrap`

## ملاحظة مهمة

الواجهة ستعمل حتى لو الـ API غير شغال، لكنها ستعرض البيانات المحلية الاحتياطية.
