const translations = {
    ar: {
        title: "أبطال الفرز",
        dir: "rtl",
        nav: { learn: "تَعَلَّم", game: "اللعبة", scan: "امسح", score: "نقاطي" },
        game: { instruction: "اسحب العنصر إلى السلة الصحيحة!", bins: { organic: "عضوي", plastic: "بلاستيك", paper: "ورق", glass: "زجاج" } },
        feedback: { correct_title: "ممتاز!", correct_text: "أحسنت! هذا يساعد في الحفاظ على كوكبنا.", wrong_title: "حاول مرة أخرى", wrong_text: "تذكر: نوع المادة يحدد مكانها.", btn_next: "استمر!", bonus: "بونص تتابع: +5 نقاط!" },
        learn: { title: "دليل الفرز الشامل", organic: { title: "عضوي", desc: "بقايا الطعام، قشور الفواكه والخضروات، أكياس الشاي، قشر البيض، أوراق الشجر. \n💡 نصيحة: يمكن تحويلها إلى سماد طبيعي (كومبوست) للنباتات!" }, plastic: { title: "بلاستيك", desc: "قوارير الماء، علب الشامبو، علب الزبادي، الأكياس، الألعاب المكسورة. \n💡 نصيحة: اغسل العلب البلاستيكية قبل رميها لتسهيل إعادة تدويرها." }, paper: { title: "ورق", desc: "الجرائد، المجلات، الكرتون المقوى، علب الحبوب، أوراق المكتب، ظروف الرسائل. \n💡 نصيحة: لا ترمِ مناديل الطعام المتسخة مع الورق، بل مع العضوي!" }, glass: { title: "زجاج", desc: "القوارير الزجاجية، البرطمانات، قوارير العطور، المزهريات. \n💡 نصيحة: انزع الغطاء المعدني أو البلاستيكي قبل رمي الزجاج." }, gemini_title: "اسأل الخبير الآلي", gemini_placeholder: "مثال: أين أرمي فرشاة الأسنان؟", gemini_btn: "إرسال السؤال" },
        scan: { title: "الماسح الذكي", desc: "التقط صورة للنفايات وسأخبرك كيف تفرزها!", btn_label: "اضغط للتصوير", loading: "جاري تحليل الصورة..." },
        score: { title: "إنجازاتي", total: "مجموع النقاط", badges_title: "شارات الأبطال", badges: { badge_10: "صديق البيئة", badge_50: "بطل الفرز", badge_100: "أستاذ التدوير", badge_200: "حامي الكوكب", badge_300: "رائد فضاء بيئي", badge_500: "أسطورة الفرز" }, points: "نقاط" },
        gemini_system_prompt: "أنت مساعد ذكي للأطفال تعلمهم فرز النفايات. تكلم بالعربية بأسلوب بسيط ومرح وشجعهم دائماً."
    },
    fr: {
        title: "Héros du Tri",
        dir: "ltr",
        nav: { learn: "Apprendre", game: "Jeu", scan: "Scanner", score: "Score" },
        game: { instruction: "Glissez l'objet dans la bonne poubelle !", bins: { organic: "Organique", plastic: "Plastique", paper: "Papier", glass: "Verre" } },
        feedback: { correct_title: "Bravo !", correct_text: "Excellent ! Tu protèges la planète.", wrong_title: "Essaie encore", wrong_text: "Ce n'est pas la bonne poubelle. Regarde bien la matière.", btn_next: "Continuer !", bonus: "Bonus de série : +5 pts !" },
        learn: { title: "Guide de Tri Complet", organic: { title: "Organique", desc: "Restes de repas, épluchures, sachets de thé, coquilles d'œufs, feuilles mortes. \n💡 Astuce : Parfait pour faire du compost pour le jardin !" }, plastic: { title: "Plastique", desc: "Bouteilles, pots de yaourt, sacs, vieux jouets, flacons. \n💡 Astuce : Rince les pots avant de les jeter pour aider le recyclage." }, paper: { title: "Papier", desc: "Journaux, cartons, boîtes de céréales, enveloppes, vieux livres. \n💡 Astuce : Les mouchoirs sales ne vont pas ici, mais avec l'organique !" }, glass: { title: "Verre", desc: "Bouteilles, bocaux de confiture, flacons de parfum. \n💡 Astuce : Enlève le couvercle en métal ou plastique avant de jeter." }, gemini_title: "Demander à l'Expert IA", gemini_placeholder: "Ex: Où jeter une brosse à dents ?", gemini_btn: "Envoyer" },
        scan: { title: "Scanner Intelligent", desc: "Prends une photo du déchet et je te dirai comment le trier !", btn_label: "Prendre une photo", loading: "Analyse de l'image..." },
        score: { title: "Mes Succès", total: "Score Total", badges_title: "Badges des Héros", badges: { badge_10: "Ami de la Nature", badge_50: "Champion du Tri", badge_100: "Maître Recycleur", badge_200: "Gardien de la Terre", badge_300: "Eco-Astronaute", badge_500: "Légende du Tri" }, points: "pts" },
        gemini_system_prompt: "Tu es un assistant intelligent pour enfants qui leur apprend à trier les déchets. Parle en français simplement, joyeusement et encourage-les."
    },
    en: {
        title: "Sorting Heroes",
        dir: "ltr",
        nav: { learn: "Learn", game: "Game", scan: "Scan", score: "Score" },
        game: { instruction: "Drag the item to the correct bin!", bins: { organic: "Organic", plastic: "Plastic", paper: "Paper", glass: "Glass" } },
        feedback: { correct_title: "Awesome!", correct_text: "Great job! You are saving the planet.", wrong_title: "Try Again", wrong_text: "Remember: check what the item is made of.", btn_next: "Continue!", bonus: "Streak Bonus: +5 pts!" },
        learn: { title: "Complete Sorting Guide", organic: { title: "Organic", desc: "Food scraps, peels, tea bags, eggshells, leaves. \n💡 Tip: Turn this into compost for plants!" }, plastic: { title: "Plastic", desc: "Water bottles, yogurt cups, bags, broken toys, shampoo bottles. \n💡 Tip: Rinse containers before recycling them." }, paper: { title: "Paper", desc: "Newspapers, cardboard boxes, cereal boxes, envelopes, office paper. \n💡 Tip: Dirty napkins go in organic, not here!" }, glass: { title: "Glass", desc: "Glass bottles, jam jars, perfume bottles. \n💡 Tip: Remove the metal or plastic lid before recycling glass." }, gemini_title: "Ask the AI Expert", gemini_placeholder: "Ex: Where to throw a toothbrush?", gemini_btn: "Send Question" },
        scan: { title: "Smart Scanner", desc: "Take a picture of trash and I'll tell you how to sort it!", btn_label: "Take Photo", loading: "Analyzing image..." },
        score: { title: "My Achievements", total: "Total Score", badges_title: "Hero Badges", badges: { badge_10: "Eco Friend", badge_50: "Sorting Champ", badge_100: "Recycle Master", badge_200: "Planet Guardian", badge_300: "Eco Astronaut", badge_500: "Sorting Legend" }, points: "pts" },
        gemini_system_prompt: "You are a smart assistant for kids teaching them how to sort waste. Speak in English simply, cheerfully, and always encourage them."
    }
};

const wasteItemsData = [
    { id: 1, type: 'organic', icon: '🍎', name: { ar: 'تفاحة', fr: 'Pomme', en: 'Apple' } },
    { id: 2, type: 'organic', icon: '🍌', name: { ar: 'موزة', fr: 'Banane', en: 'Banana' } },
    { id: 9, type: 'organic', icon: '🥚', name: { ar: 'قشر بيض', fr: 'Coquille d\'œuf', en: 'Eggshell' } },
    { id: 10, type: 'organic', icon: '🍂', name: { ar: 'ورقة شجر', fr: 'Feuille', en: 'Leaf' } },
    { id: 17, type: 'organic', icon: '🍊', name: { ar: 'قشر برتقال', fr: 'Pelure d\'orange', en: 'Orange Peel' } },
    { id: 18, type: 'organic', icon: '🍞', name: { ar: 'خبز يابس', fr: 'Vieux pain', en: 'Stale Bread' } },
    { id: 19, type: 'organic', icon: '🍵', name: { ar: 'كيس شاي', fr: 'Sachet de thé', en: 'Tea Bag' } },
    { id: 20, type: 'organic', icon: '🥀', name: { ar: 'زهور ذابلة', fr: 'Fleurs fanées', en: 'Withered Flowers' } },
    { id: 3, type: 'plastic', icon: '🧴', name: { ar: 'علبة شامبو', fr: 'Shampoing', en: 'Shampoo' } },
    { id: 4, type: 'plastic', icon: '🥤', name: { ar: 'كوب بلاستيك', fr: 'Gobelet', en: 'Plastic Cup' } },
    { id: 11, type: 'plastic', icon: '🛍️', name: { ar: 'كيس بلاستيك', fr: 'Sac plastique', en: 'Plastic Bag' } },
    { id: 12, type: 'plastic', icon: '🧸', name: { ar: 'لعبة قديمة', fr: 'Vieux jouet', en: 'Old Toy' } },
    { id: 21, type: 'plastic', icon: '🍮', name: { ar: 'علبة زبادي', fr: 'Pot de yaourt', en: 'Yogurt Pot' } },
    { id: 22, type: 'plastic', icon: '🖊️', name: { ar: 'قلم فارغ', fr: 'Stylo vide', en: 'Empty Pen' } },
    { id: 23, type: 'plastic', icon: '🧃', name: { ar: 'علبة عصير', fr: 'Brique de jus', en: 'Juice Box' } },
    { id: 24, type: 'plastic', icon: '🍬', name: { ar: 'غلاف حلوى', fr: 'Emballage bonbon', en: 'Candy Wrapper' } },
    { id: 5, type: 'paper', icon: '📰', name: { ar: 'جريدة', fr: 'Journal', en: 'Newspaper' } },
    { id: 6, type: 'paper', icon: '📦', name: { ar: 'كرتون', fr: 'Carton', en: 'Cardboard' } },
    { id: 13, type: 'paper', icon: '✉️', name: { ar: 'ظرف', fr: 'Enveloppe', en: 'Envelope' } },
    { id: 14, type: 'paper', icon: '🥡', name: { ar: 'علبة طعام', fr: 'Boîte repas', en: 'Food Box' } },
    { id: 25, type: 'paper', icon: '🧻', name: { ar: 'رول تواليت', fr: 'Rouleau vide', en: 'Toilet Roll' } },
    { id: 27, type: 'paper', icon: '🎫', name: { ar: 'تذكرة', fr: 'Ticket', en: 'Ticket' } },
    { id: 28, type: 'paper', icon: '📒', name: { ar: 'دفتر قديم', fr: 'Vieux cahier', en: 'Old Notebook' } },
    { id: 7, type: 'glass', icon: '🍾', name: { ar: 'زجاجة', fr: 'Bouteille', en: 'Glass Bottle' } },
    { id: 8, type: 'glass', icon: '🍯', name: { ar: 'برطمان', fr: 'Bocal', en: 'Glass Jar' } },
    { id: 15, type: 'glass', icon: '🏺', name: { ar: 'مزهرية', fr: 'Vase', en: 'Vase' } },
    { id: 16, type: 'glass', icon: '🧪', name: { ar: 'أنبوب', fr: 'Tube essai', en: 'Test Tube' } },
    { id: 29, type: 'glass', icon: '🫙', name: { ar: 'مرطبان مربى', fr: 'Pot confiture', en: 'Jam Jar' } },
    { id: 31, type: 'glass', icon: '🍹', name: { ar: 'زجاجة صودا', fr: 'Soda en verre', en: 'Soda Bottle' } },
    { id: 32, type: 'glass', icon: '🧂', name: { ar: 'مملحة', fr: 'Salière', en: 'Salt Shaker' } }
];

let currentLang = 'ar';
let score = 0;
let streak = 0;
let currentWasteItem = null;

let initialX = 0;
let initialY = 0;
let currentX = 0;
let currentY = 0;
let xOffset = 0;
let yOffset = 0;
let isDragging = false;

let cachedBinRects = [];
let activeBin = null;
let itemRect = { width: 0, height: 0, left: 0, top: 0 };
let rAF = null;

document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('lang-selector');
    const pageSections = document.querySelectorAll('.page-section');
    const navButtons = document.querySelectorAll('.nav-btn');
    const wasteItemElement = document.getElementById('waste-item');
    const wasteIcon = document.getElementById('waste-icon');
    const wasteName = document.getElementById('waste-name');
    const miniScore = document.getElementById('mini-score');
    const streakCount = document.getElementById('streak-count');
    const streakContainer = document.getElementById('streak-container');

    function updateLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];
        document.documentElement.dir = t.dir;
        document.documentElement.lang = lang;
        document.getElementById('app-title').innerText = t.title;
        document.getElementById('nav-learn-text').innerText = t.nav.learn;
        document.getElementById('nav-game-text').innerText = t.nav.game;
        document.getElementById('nav-scan-text').innerText = t.nav.scan;
        document.getElementById('nav-score-text').innerText = t.nav.score;
        document.getElementById('game-instruction').innerText = t.game.instruction;
        document.querySelector('#bin-organic .bin-name').innerText = t.game.bins.organic;
        document.querySelector('#bin-plastic .bin-name').innerText = t.game.bins.plastic;
        document.querySelector('#bin-paper .bin-name').innerText = t.game.bins.paper;
        document.querySelector('#bin-glass .bin-name').innerText = t.game.bins.glass;
        document.getElementById('learn-title').innerText = t.learn.title;
        document.getElementById('learn-organic-title').innerText = t.learn.organic.title;
        document.getElementById('learn-organic-desc').innerText = t.learn.organic.desc;
        document.getElementById('learn-plastic-title').innerText = t.learn.plastic.title;
        document.getElementById('learn-plastic-desc').innerText = t.learn.plastic.desc;
        document.getElementById('learn-paper-title').innerText = t.learn.paper.title;
        document.getElementById('learn-paper-desc').innerText = t.learn.paper.desc;
        document.getElementById('learn-glass-title').innerText = t.learn.glass.title;
        document.getElementById('learn-glass-desc').innerText = t.learn.glass.desc;
        document.querySelector('#gemini-title span').nextSibling.nodeValue = " " + t.learn.gemini_title;
        document.getElementById('gemini-prompt').placeholder = t.learn.gemini_placeholder;
        document.getElementById('gemini-ask-btn').innerText = t.learn.gemini_btn;
        document.getElementById('scan-title').innerText = t.scan.title;
        document.getElementById('scan-desc').innerText = t.scan.desc;
        document.getElementById('scan-btn-label').innerText = t.scan.btn_label;
        document.getElementById('scan-loading-text').innerText = t.scan.loading;
        document.getElementById('score-title').innerText = t.score.title;
        document.getElementById('score-total-label').innerText = t.score.total;
        document.getElementById('badges-title').innerText = t.score.badges_title;
        document.querySelectorAll('.badge-name').forEach(el => { el.innerText = t.score.badges[el.dataset.key]; });
        document.querySelectorAll('.badge-points').forEach(el => { el.innerText = el.dataset.val + " " + t.score.points; });
        if (currentWasteItem) { wasteName.innerText = currentWasteItem.name[currentLang]; }
        document.getElementById('next-item-btn').innerText = t.feedback.btn_next;
    }

    langSelector.addEventListener('change', (e) => { updateLanguage(e.target.value); });
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageId = button.dataset.page;
            pageSections.forEach(section => { section.classList.toggle('active', section.id === `page-${pageId}`); });
            navButtons.forEach(btn => {
                const isCurrent = btn.dataset.page === pageId;
                if(isCurrent) { btn.classList.remove('text-gray-400', 'hover:text-green-600', 'hover:bg-green-50'); btn.classList.add('text-green-600', 'bg-green-50', 'border-t-2', 'border-green-600'); }
                else { btn.classList.add('text-gray-400', 'hover:text-green-600', 'hover:bg-green-50'); btn.classList.remove('text-green-600', 'bg-green-50', 'border-t-2', 'border-green-600'); }
            });
            if (pageId === 'score') updateScoreDisplay();
        });
    });

    function setupNewItem() {
        currentWasteItem = wasteItemsData[Math.floor(Math.random() * wasteItemsData.length)];
        wasteIcon.innerText = currentWasteItem.icon;
        wasteName.innerText = currentWasteItem.name[currentLang];
        wasteItemElement.dataset.type = currentWasteItem.type;
        wasteItemElement.classList.remove('opacity-0', 'scale-0');
    }

    wasteItemElement.addEventListener("touchstart", dragStart, { passive: false });
    wasteItemElement.addEventListener("touchend", dragEnd, { passive: false });
    wasteItemElement.addEventListener("touchmove", drag, { passive: false });

    wasteItemElement.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", drag);

    function dragStart(e) {
        if (e.target === wasteItemElement || wasteItemElement.contains(e.target)) {
            isDragging = true;
            wasteItemElement.classList.add('dragging');

            if (e.type === "touchstart") {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }

            const rect = wasteItemElement.getBoundingClientRect();
            itemRect = {
                width: rect.width,
                height: rect.height,
                left: rect.left - xOffset,
                top: rect.top - yOffset
            };

            cachedBinRects = Array.from(document.querySelectorAll('.bin')).map(bin => {
                const bRect = bin.getBoundingClientRect();
                return {
                    element: bin,
                    left: bRect.left,
                    right: bRect.right,
                    top: bRect.top,
                    bottom: bRect.bottom,
                    type: bin.dataset.type
                };
            });
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            if (!rAF) {
                rAF = requestAnimationFrame(updatePositionAndCollision);
            }
        }
    }

    function updatePositionAndCollision() {
        if(!isDragging) { rAF = null; return; }

        setTranslate(currentX, currentY, wasteItemElement);

        const itemCenterX = itemRect.left + currentX + (itemRect.width / 2);
        const itemCenterY = itemRect.top + currentY + (itemRect.height / 2);

        const targetBin = cachedBinRects.find(rect =>
            itemCenterX >= rect.left && itemCenterX <= rect.right &&
            itemCenterY >= rect.top && itemCenterY <= rect.bottom
        );

        if (activeBin !== targetBin) {
            if (activeBin) {
                const b = activeBin.element;
                b.classList.remove('ring-4', 'ring-green-300', 'scale-105', 'bg-green-100', 'bg-yellow-100', 'bg-blue-100', 'bg-gray-100');
            }
            if (targetBin) {
                const b = targetBin.element;
                b.classList.add('ring-4', 'ring-green-300', 'scale-105');
                if(targetBin.type === 'organic') b.classList.add('bg-yellow-100');
                else if(targetBin.type === 'plastic') b.classList.add('bg-blue-100');
                else if(targetBin.type === 'paper') b.classList.add('bg-gray-100');
                else if(targetBin.type === 'glass') b.classList.add('bg-green-100');
            }
            activeBin = targetBin;
        }

        rAF = null;
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    function dragEnd(e) {
        if (!isDragging) return;

        isDragging = false;
        wasteItemElement.classList.remove('dragging');
        if (rAF) { cancelAnimationFrame(rAF); rAF = null; }

        if (activeBin) {
            const b = activeBin.element;
            b.classList.remove('ring-4', 'ring-green-300', 'scale-105', 'bg-green-100', 'bg-yellow-100', 'bg-blue-100', 'bg-gray-100');
        }

        if (activeBin) {
            checkAnswer(currentWasteItem.type === activeBin.type);
            resetPosition();
        } else {
            resetPosition();
        }

        activeBin = null;
        initialX = currentX;
        initialY = currentY;
    }

    function resetPosition() {
        xOffset = 0;
        yOffset = 0;
        initialX = 0;
        initialY = 0;
        currentX = 0;
        currentY = 0;
        setTranslate(0, 0, wasteItemElement);
    }

    const feedbackModal = document.getElementById('feedback-modal');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackText = document.getElementById('feedback-text');
    const nextItemBtn = document.getElementById('next-item-btn');
    const streakBonusMsg = document.getElementById('streak-bonus-msg');

    function checkAnswer(isCorrect) {
        const t = translations[currentLang].feedback;
        wasteItemElement.classList.add('opacity-0');
        feedbackModal.classList.remove('opacity-0', 'pointer-events-none');
        streakBonusMsg.classList.add('hidden');

        if (isCorrect) {
            let pointsAdded = 10;
            streak++;
            if (streak >= 3) {
                pointsAdded += 5;
                streakBonusMsg.innerText = t.bonus;
                streakBonusMsg.classList.remove('hidden');
            }
            score += pointsAdded;
            feedbackIcon.innerText = '🎉';
            feedbackTitle.innerText = t.correct_title;
            feedbackTitle.className = 'text-2xl font-bold mb-2 text-green-600';
            feedbackText.innerText = t.correct_text;
            nextItemBtn.className = 'w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-lg';
        } else {
            streak = 0;
            feedbackIcon.innerText = '🧐';
            feedbackTitle.innerText = t.wrong_title;
            feedbackTitle.className = 'text-2xl font-bold mb-2 text-orange-500';
            feedbackText.innerText = t.wrong_text;
            nextItemBtn.className = 'w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-lg';
        }
        updateScoreDisplay();
        updateStreakDisplay();
    }

    function updateStreakDisplay() {
        if (streak > 1) {
            streakCount.innerText = streak;
            streakContainer.classList.remove('opacity-0');
        } else {
            streakContainer.classList.add('opacity-0');
        }
    }

    nextItemBtn.addEventListener('click', () => {
        feedbackModal.classList.add('opacity-0', 'pointer-events-none');
        wasteItemElement.classList.remove('opacity-0');
        setupNewItem();
    });

    function updateScoreDisplay() {
        document.getElementById('score-display').innerText = score;
        miniScore.innerText = score;
        const badges = ['badge-10', 'badge-50', 'badge-100', 'badge-200', 'badge-300', 'badge-500'];
        const thresholds = { 'badge-10': 10, 'badge-50': 50, 'badge-100': 100, 'badge-200': 200, 'badge-300': 300, 'badge-500': 500 };
        badges.forEach(id => {
            const el = document.getElementById(id);
            if (score >= thresholds[id]) {
                el.classList.remove('opacity-30', 'scale-95');
                el.classList.add('opacity-100', 'scale-105', 'bg-green-50');
            }
        });
    }

    const API_KEY = "AIzaSyAJX9AXD67i2nixvAq2N4Fosh8OjnttKwE";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;
    async function callGemini(payload) {
        try {
            const response = await fetch(API_URL, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload) });
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "Error / Erreur / خطأ";
        } catch (e) { console.error(e); return "Connection Error / Erreur de connexion / خطأ في الاتصال"; }
    }

    const geminiAskBtn = document.getElementById('gemini-ask-btn');
    const geminiPromptInput = document.getElementById('gemini-prompt');
    const geminiLoading = document.getElementById('gemini-loading');
    const geminiAnswer = document.getElementById('gemini-answer');

    if(geminiAskBtn) {
        geminiAskBtn.addEventListener('click', async () => {
            const text = geminiPromptInput.value.trim();
            if(!text) return;
            geminiLoading.classList.remove('hidden');
            geminiAnswer.classList.add('hidden');
            geminiAskBtn.disabled = true;
            const systemPrompt = translations[currentLang].gemini_system_prompt;
            const payload = { contents: [{ parts: [{ text: text }] }], systemInstruction: { parts: [{ text: systemPrompt }] } };
            const reply = await callGemini(payload);
            geminiLoading.classList.add('hidden');
            geminiAnswer.innerHTML = reply.replace(/\n/g, '<br>');
            geminiAnswer.classList.remove('hidden');
            geminiAskBtn.disabled = false;
        });
    }

    const imageUpload = document.getElementById('image-upload');
    const scanLoading = document.getElementById('scan-loading');
    const scanResult = document.getElementById('scan-result');

    if(imageUpload) {
        imageUpload.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if(!file) return;
            scanLoading.classList.remove('hidden');
            scanResult.classList.add('hidden');
            const reader = new FileReader();
            reader.onloadend = async () => {
                const base64 = reader.result.split(',')[1];
                const systemPrompt = translations[currentLang].gemini_system_prompt;
                const userQuery = currentLang === 'ar' ? "ما هذا وكيف أفرزه؟" : (currentLang === 'fr' ? "Qu'est-ce que c'est et comment le trier ?" : "What is this and how do I sort it?");
                const payload = { contents: [{ role: "user", parts: [ { text: userQuery }, { inlineData: { mimeType: file.type, data: base64 } } ] }], systemInstruction: { parts: [{ text: systemPrompt }] } };
                const reply = await callGemini(payload);
                scanLoading.classList.add('hidden');
                scanResult.innerHTML = reply.replace(/\n/g, '<br>');
                scanResult.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        });
    }

    updateLanguage('ar');
    setupNewItem();
});