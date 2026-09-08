# AgroLoci 51 — Ready App

यह एक ready-to-use Progressive Web App (PWA) है।

## इसमें अभी क्या बना है
- Home dashboard
- Courses
- Notes / PDF section
- MCQ Quiz with score
- Video section
- Exam updates
- About AgroLoci 51
- Offline support
- Mobile में Install App support

## सबसे आसान तरीका: GitHub Pages पर डालें
1. GitHub में नया repository बनाएं: `agroloci51`
2. इस ZIP की सारी files repository के root में upload करें.
3. Settings > Pages में जाएं.
4. Source: Deploy from a branch
5. Branch: main / root
6. Save करें.
7. कुछ मिनट बाद website/app link मिल जाएगा.
8. Android Chrome में link खोलकर "Install app" / "Add to Home screen" करें.

## Content बदलना
`content.js` खोलें:
- notes में अपने PDF links डालें
- videos में YouTube links डालें
- updates में notices डालें

## Play Store
यह PWA पहले free में चल सकती है. Play Store के लिए बाद में इसे Android package (AAB) में wrap किया जा सकता है.

## Important
Student login, paid courses, live test backend, notifications और admin panel के लिए बाद में Firebase/Supabase/backend जोड़ना होगा.
