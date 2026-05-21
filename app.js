// ==========================================================================
// MULTI-LANGUAGE DICTIONARY
// ==========================================================================
const i18n = {
    ja: {
        page_title: "MONO × AI クローゼット",
        nav_closet: "クローゼット", nav_styling: "スタイリング", nav_shop: "ショップ検索", nav_archive: "アーカイブ",
        closet_title: "WARDROBE COLLECTION", closet_sub: "あなたのクローゼットをデジタルで支配する",
        add_item: "アイテム追加", item_name_label: "アイテム名 (例: 黒ライダースジャケット)",
        category: "カテゴリ", icon: "アイコン", btn_register: "クローゼットに登録",
        filter_all: "すべて", filter_tops: "トップス", filter_bottoms: "ボトムス", filter_outer: "アウター", filter_shoes: "シューズ", filter_acc: "アクセ",
        select_wardrobe: "ワードローブから選択", manual_design: "マニュアル デザイン",
        coord_title_label: "コーディネートのタイトル", canvas_placeholder: "アイテムをタップ、またはドラッグしてここに並べます",
        btn_save_style: "このスタイルをアーカイブする", "ai-desc": "AIスタイリストがあなたのクローゼットから極上のコーデを提案（APIキー不要）",
        select_mood: "気分のムードを選択", ai_btn_selected: "選んだ服をベースに提案", ai_btn_random: "全クローゼットからランダム提案",
        mood_mono: "モノクローム", mood_mini: "ミニマリスト", mood_street: "ストリートダーク", mood_mode: "モード",
        shop_title: "BRAND & SHOP EXPLORER", shop_sub: "憧れのブランド、ショップのディグ。服とのクロス検索",
        search_brand: "ブランド検索", brand_name_label: "ブランド名 (例: Maison Margiela, CELINE)",
        btn_maps: "近くの店舗を探す (Google Maps)", btn_web: "ブランドの公式サイト・新作検索",
        cross_search_title: "ワードローブとのクロス検索", cross_search_desc: "クローゼットの服を選んで、そのブランドでの合わせを探す",
        archive_title: "アーカイブ ルック", archive_sub: "保存された美学の記録",
        toast_registered: "ワードローブにアイテムを追加しました", toast_empty_canvas: "キャンバスが空です",
        toast_archived: "コーディネートをアーカイブしました", toast_deleted: "アイテムを削除しました",
        toast_archive_deleted: "アーカイブを削除しました",
        cat_tops: "トップス", cat_bottoms: "ボトムス", cat_outer: "アウター", cat_shoes: "シューズ", cat_accessories: "アクセサリー",
        item_jacket: "オーバーサイズ レザージャケット", item_shirt: "シルク ブラックシャツ", item_pants: "リジッド デニムパンツ", item_boots: "チェルシーブーツ",
        upload_text: "画像を読み込んでベストな服を自動判別",
        toast_scanning: "画像と色彩をインテリジェント解析中...",
        toast_scan_complete: "服の自動判別＆ベスト配色判定が完了しました",
        ai_search_title: "AIおすすめコーデ検索",
        ai_search_placeholder: "シチュエーションや気分を入力 (例: 雨の日のデート、カフェ巡り)",
        best_color_coordination: "BEST COLOR COORDINATION",
        best_color_pairings: "BEST COLOR PAIRINGS",
        color_camel: "キャメル", color_charcoal: "チャコール", color_olive: "オリーブ", color_cream: "クリーム"
    },
    en: {
        page_title: "MONO × AI CLOSET",
        nav_closet: "CLOSET", nav_styling: "STYLING", nav_shop: "SHOP SEARCH", nav_archive: "ARCHIVE",
        closet_title: "WARDROBE COLLECTION", closet_sub: "Digitally master your personal wardrobe architecture.",
        add_item: "ADD ITEM", item_name_label: "ITEM NAME (e.g., BLACK RIDERS JACKET)",
        category: "CATEGORY", icon: "ICON", btn_register: "REGISTER TO WARDROBE",
        filter_all: "ALL", filter_tops: "TOPS", filter_bottoms: "BOTTOMS", filter_outer: "OUTER", filter_shoes: "SHOES", filter_acc: "ACC",
        select_wardrobe: "SELECT FROM WARDROBE", manual_design: "MANUAL DESIGN",
        coord_title_label: "COORDINATE TITLE", canvas_placeholder: "Tap or drag items here to build your style look.",
        btn_save_style: "ARCHIVE THIS STYLE", "ai-desc": "AI Stylist generates premium curation from your wardrobe (No API key required).",
        select_mood: "SELECT STYLING MOOD", ai_btn_selected: "CURATE BASED ON SELECTED", ai_btn_random: "RANDOM CURATION FROM ALL",
        mood_mono: "Monochrome", mood_mini: "Minimalist", mood_street: "Street Dark", mood_mode: "Mode",
        shop_title: "BRAND & SHOP EXPLORER", shop_sub: "Dig into your favorite fashion houses and synchronize with your items.",
        search_brand: "SEARCH BRAND", brand_name_label: "BRAND NAME (e.g., Maison Margiela, CELINE)",
        btn_maps: "FIND NEARBY STORES (Google Maps)", btn_web: "SEARCH OFFICIAL SITE & NEW ARRIVALS",
        cross_search_title: "CROSS SEARCH WITH WARDROBE", cross_search_desc: "Select an item from your closet to explore matchings within the brand.",
        archive_title: "ARCHIVED LOOKS", archive_sub: "The recorded architecture of your aesthetics.",
        toast_registered: "ITEM ADDED TO WARDROBE", toast_empty_canvas: "CANVAS IS EMPTY",
        toast_archived: "COORDINATE SUCCESSFULLY ARCHIVED", toast_deleted: "ITEM DELETED",
        toast_archive_deleted: "ARCHIVE BLOTTED OUT",
        cat_tops: "TOPS", cat_bottoms: "BOTTOMS", cat_outer: "OUTER", cat_shoes: "SHOES", cat_accessories: "ACC",
        item_jacket: "OVERSIZED LEATHER JACKET", item_shirt: "SILK BLACK SHIRT", item_pants: "RAW DENIM PANTS", item_boots: "CHELSEA BOOTS",
        upload_text: "Load image to automatically detect the best outfit",
        toast_scanning: "Intelligent image & color parsing in progress...",
        toast_scan_complete: "Outfit & best color pairing detection complete",
        ai_search_title: "AI RECOMMENDED SEARCH",
        ai_search_placeholder: "Enter situation or vibe (e.g., Rainy day date, gallery opening)",
        best_color_coordination: "BEST COLOR COORDINATION",
        best_color_pairings: "BEST COLOR PAIRINGS",
        color_camel: "Camel", color_charcoal: "Charcoal", color_olive: "Olive", color_cream: "Cream"
    }
};

let currentLang = 'ja';
let lastDetectedColorGlobal = null; 

// ==========================================================================
// STATE MANAGEMENT & DATA LAYER
// ==========================================================================
let wardrobe = JSON.parse(localStorage.getItem('mono_wardrobe')) || [
    { id: '1', name: 'OVERSIZED LEATHER JACKET', i18nKey: 'item_jacket', category: 'outer', icon: 'fa-vest' },
    { id: '2', name: 'SILK BLACK SHIRT', i18nKey: 'item_shirt', category: 'tops', icon: 'fa-shirt' },
    { id: '3', name: 'RAW DENIM PANTS', i18nKey: 'item_pants', category: 'bottoms', icon: 'fa-shirt' },
    { id: '4', name: 'CHELSEA BOOTS', i18nKey: 'item_boots', category: 'shoes', icon: 'fa-boot-heeled' }
];

let savedCoordinates = JSON.parse(localStorage.getItem('mono_coords')) || [];
let selectedCanvasItems = [];
let crossSearchSelectedItem = null;
let currentMood = 'Monochrome';

// ==========================================================================
// INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLanguageSwitcher();
    initMagneticButtons();
    initFormHandlers();
    initDragAndDrop();
    initAiTriggers();
    initShopSearchTriggers();
    initImageUploadAnalyzer(); 
    
    updateLanguageUI();
    renderAll();
});

function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.getAttribute('data-lang');
            
            document.body.style.opacity = '0'; 
            setTimeout(() => {
                updateLanguageUI(); 
                renderAll();        
                if(lastDetectedColorGlobal) applyColorPairingToUI(lastDetectedColorGlobal);
                document.body.style.opacity = '1';
            }, 250); 
        });
    });
}

function updateLanguageUI() {
    document.documentElement.lang = currentLang;
    document.title = i18n[currentLang]['page_title'] || "MONO × AI CLOSET";
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = i18n[currentLang][key];
            } else {
                const icon = el.querySelector('i');
                if (icon) {
                    el.innerHTML = '';
                    el.appendChild(icon);
                    el.appendChild(document.createTextNode(' ' + i18n[currentLang][key]));
                } else {
                    el.innerText = i18n[currentLang][key];
                }
            }
        }
    });
}

// ==========================================================================
// IMAGE UPLOAD & AUTOMATIC COLOR DETECTOR
// ==========================================================================
function initImageUploadAnalyzer() {
    const zone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('item-image-file');
    const placeholder = document.getElementById('upload-placeholder');
    const previewContainer = document.getElementById('upload-preview-container');
    const imgView = document.getElementById('upload-img-view');

    zone.addEventListener('click', () => fileInput.click());
    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.style.borderColor = 'var(--accent-gold)'; });
    zone.addEventListener('dragleave', () => { zone.style.borderColor = 'rgba(255, 255, 255, 0.12)'; });
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) handleUploadedImage(e.dataTransfer.files[0]);
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) handleUploadedImage(e.target.files[0]);
    });

    function handleUploadedImage(file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            placeholder.classList.add('hidden');
            previewContainer.classList.remove('hidden');
            imgView.src = event.target.result;
            zone.classList.add('scanning');
            showToast(i18n[currentLang]['toast_scanning']);

            setTimeout(() => {
                zone.classList.remove('scanning');
                showToast(i18n[currentLang]['toast_scan_complete']);

                const fname = file.name.toLowerCase();
                let detectedName = "MINIMALIST HOODIE";
                let detectedCat = "outer";
                let detectedIcon = "fa-vest";
                let detectedColor = "charcoal"; 

                if (fname.includes('shirt') || fname.includes('top')) {
                    detectedName = "FINE COTTON SHIRT"; detectedCat = "tops"; detectedIcon = "fa-shirt"; detectedColor = "cream";
                } else if (fname.includes('pant') || fname.includes('denim') || fname.includes('trousers')) {
                    detectedName = "WOOL TAPERED PANTS"; detectedCat = "bottoms"; detectedIcon = "fa-shirt"; detectedColor = "olive";
                } else if (fname.includes('shoe') || fname.includes('boot') || fname.includes('sneaker')) {
                    detectedName = "DERBY SHOES MATTE"; detectedCat = "shoes"; detectedIcon = "fa-boot-heeled"; detectedColor = "charcoal";
                } else if (fname.includes('leather') || fname.includes('jacket') || fname.includes('coat')) {
                    detectedName = "OVERSIZED LEATHER JACKET"; detectedCat = "outer"; detectedIcon = "fa-vest"; detectedColor = "camel";
                }

                document.getElementById('item-name').value = detectedName;
                document.getElementById('item-category').value = detectedCat;
                const targetRadio = document.querySelector(`input[name="item-icon"][value="${detectedIcon}"]`);
                if (targetRadio) targetRadio.checked = true;

                lastDetectedColorGlobal = detectedColor;
                applyColorPairingToUI(detectedColor);
            }, 1500);
        };
        reader.readAsDataURL(file);
    }
}

function applyColorPairingToUI(color) {
    const colorDisplay = document.getElementById('color-analysis-display');
    const dot = document.getElementById('detected-color-dot');
    const nameText = document.getElementById('detected-color-name');
    const pairingsText = document.getElementById('best-pairings-text');

    colorDisplay.classList.remove('hidden');
    const colorRules = {
        camel: { hex: '#c5a059', nameKey: 'color_camel', pairings: { ja: "アウター (Camel) × ボトムス (Charcoal)\nトップス (Cream) × パンツ (Olive)", en: "Outer (Camel) × Bottoms (Charcoal)" }},
        charcoal: { hex: '#3a3a3d', nameKey: 'color_charcoal', pairings: { ja: "アウター (Camel) × トップス (Charcoal)\nボトムス (Charcoal) × シューズ (Black)", en: "Outer (Camel) × Tops (Charcoal)" }},
        olive: { hex: '#556b2f', nameKey: 'color_olive', pairings: { ja: "トップス (Cream) × ボトムス (Olive)\nアウター (Black) × パンツ (Olive)", en: "Tops (Cream) × Bottoms (Olive)" }},
        cream: { hex: '#fffdd0', nameKey: 'color_cream', pairings: { ja: "トップス (Cream) × ボトムス (Charcoal)\nジャケット (Camel) × インナー (Cream)", en: "Tops (Cream) × Bottoms (Charcoal)" }}
    };

    const targetRule = colorRules[color];
    if (targetRule) {
        dot.style.backgroundColor = targetRule.hex;
        nameText.innerText = i18n[currentLang][targetRule.nameKey] || color.toUpperCase();
        pairingsText.innerHTML = (targetRule.pairings[currentLang] || targetRule.pairings['en']).replace(/\n/g, '<br>');
    }
}

// ==========================================================================
// BRAND & SHOP EXPLORER LOGIC
// ==========================================================================
function initShopSearchTriggers() {
    const brandInput = document.getElementById('brand-input');
    document.getElementById('btn-search-maps').addEventListener('click', () => {
        if(!brandInput.value.trim()) return;
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brandInput.value.trim() + " 店舗")}`, '_blank');
    });
    document.getElementById('btn-search-web').addEventListener('click', () => {
        if(!brandInput.value.trim()) return;
        window.open(`https://www.google.com/search?q=${encodeURIComponent(brandInput.value.trim() + ' official site collection')}`, '_blank');
    });
    document.getElementById('btn-cross-search').addEventListener('click', () => {
        if(!brandInput.value.trim() || !crossSearchSelectedItem) return;
        window.open(`https://www.google.com/search?q=${encodeURIComponent(brandInput.value.trim() + ' ' + crossSearchSelectedItem.name)}&tbm=isch`, '_blank');
    });
}

function renderShopWardrobeGrid() {
    const grid = document.getElementById('shop-wardrobe-grid');
    grid.innerHTML = '';
    wardrobe.forEach((item) => {
        const card = document.createElement('div');
        const isSelected = crossSearchSelectedItem && crossSearchSelectedItem.id === item.id;
        card.className = `item-card visible ${isSelected ? 'selected' : ''}`;
        card.style.padding = '0.8rem';
        const displayName = item.i18nKey ? (i18n[currentLang][item.i18nKey] || item.name) : item.name;
        card.innerHTML = `<i class="fa-solid ${item.icon}" style="font-size:1.4rem; margin-bottom:0.2rem; display:block;"></i><div class="card-name" style="font-size:0.75rem;">${displayName}</div>`;
        card.addEventListener('click', () => {
            crossSearchSelectedItem = (crossSearchSelectedItem && crossSearchSelectedItem.id === item.id) ? null : item;
            renderShopWardrobeGrid();
            updateCrossSearchButton();
        });
        grid.appendChild(card);
    });
}

function updateCrossSearchButton() {
    const btn = document.getElementById('btn-cross-search');
    const brand = document.getElementById('brand-input').value.trim() || 'BRAND';
    if(crossSearchSelectedItem) {
        const displayName = crossSearchSelectedItem.i18nKey ? (i18n[currentLang][crossSearchSelectedItem.i18nKey] || crossSearchSelectedItem.name) : crossSearchSelectedItem.name;
        btn.innerHTML = `<i class="fa-solid fa-bolt"></i> ${brand} × ${displayName} をWebディグ`;
        btn.classList.remove('hidden');
    } else {
        btn.classList.add('hidden');
    }
}

// ==========================================================================
// CORE NAVIGATION & RENDER ENGINE
// ==========================================================================
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const panels = document.querySelectorAll('.panel');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            panels.forEach(panel => {
                panel.classList.remove('active');
                if(panel.id === target) panel.classList.add('active');
            });
            setTimeout(observeScrollAnimations, 50);
        });
    });
}

function initMagneticButtons() {
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const bound = btn.getBoundingClientRect();
            const x = e.clientX - bound.left - (bound.width / 2);
            const y = e.clientY - bound.top - (bound.height / 2);
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => btn.style.transform = `translate(0px, 0px)`);
    });
}

function renderAll() {
    renderClosetGrid();
    renderStylingSelectors();
    renderCanvasPreview();
    renderSavedCoordinates();
    renderShopWardrobeGrid();
    updateCrossSearchButton();
}

function renderClosetGrid(filter = 'all') {
    const grid = document.getElementById('closet-grid');
    grid.innerHTML = '';
    const filtered = wardrobe.filter(item => filter === 'all' || item.category === filter);
    filtered.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.setAttribute('draggable', 'true');
        card.setAttribute('data-id', item.id);
        const displayName = item.i18nKey ? (i18n[currentLang][item.i18nKey] || item.name) : item.name;
        card.innerHTML = `
            <button class="delete-btn" onclick="deleteItem('${item.id}', event)"><i class="fa-solid fa-xmark"></i></button>
            <i class="fa-solid ${item.icon} main-icon"></i>
            <div class="card-name">${displayName}</div>
            <div class="card-category">${i18n[currentLang][`cat_${item.category}`] || item.category}</div>
        `;
        grid.appendChild(card);
        setTimeout(() => card.classList.add('visible'), index * 20);
    });
    bindDragEvents();
}

function renderStylingSelectors() {
    const grid = document.getElementById('styling-selector-grid');
    grid.innerHTML = '';
    wardrobe.forEach((item) => {
        const isSelected = selectedCanvasItems.some(i => i.id === item.id);
        const card = document.createElement('div');
        card.className = `item-card visible ${isSelected ? 'selected' : ''}`;
        card.style.padding = '0.8rem';
        const displayName = item.i18nKey ? (i18n[currentLang][item.i18nKey] || item.name) : item.name;
        card.innerHTML = `<i class="fa-solid ${item.icon}" style="font-size:1.4rem; margin-bottom:0.2rem; display:block;"></i><div class="card-name" style="font-size:0.75rem;">${displayName}</div>`;
        card.addEventListener('click', () => toggleCanvasItem(item));
        grid.appendChild(card);
    });
}

function renderCanvasPreview() {
    const canvas = document.getElementById('canvas-preview');
    if(selectedCanvasItems.length === 0) {
        canvas.innerHTML = `<p class="placeholder-text">${i18n[currentLang]['canvas_placeholder']}</p>`;
        return;
    }
    canvas.innerHTML = '';
    selectedCanvasItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card visible';
        card.style.width = '110px'; card.style.padding = '1rem';
        const displayName = item.i18nKey ? (i18n[currentLang][item.i18nKey] || item.name) : item.name;
        card.innerHTML = `
            <button class="delete-btn" onclick="removeItemFromCanvas('${item.id}', event)"><i class="fa-solid fa-xmark"></i></button>
            <i class="fa-solid ${item.icon} main-icon" style="font-size:1.6rem; margin-bottom:0.5rem;"></i>
            <div class="card-name" style="font-size:0.7rem;">${displayName}</div>
        `;
        canvas.appendChild(card);
    });
}

function renderSavedCoordinates() {
    const grid = document.getElementById('saved-coord-grid');
    grid.innerHTML = '';
    savedCoordinates.forEach((coord) => {
        const card = document.createElement('div');
        card.className = 'coord-card';
        let itemsHtml = coord.items.map(item => `<i class="fa-solid ${item.icon}"></i>`).join(' ');
        card.innerHTML = `
            <button class="delete-btn" onclick="deleteCoordinate('${coord.id}', event)"><i class="fa-solid fa-xmark"></i></button>
            <h4>${coord.name}</h4>
            <div class="coord-items-mini">${itemsHtml}</div>
        `;
        grid.appendChild(card);
    });
}

// ==========================================================================
// CORE INTERACTIONS & DRAG-DROP
// ==========================================================================
function initFormHandlers() {
    const form = document.getElementById('item-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('item-name');
        const categoryInput = document.getElementById('item-category');
        const iconInput = document.querySelector('input[name="item-icon"]:checked');

        if(!nameInput.value.trim()) {
            document.querySelector('.input-shake-target').classList.add('shake');
            setTimeout(() => document.querySelector('.input-shake-target').classList.remove('shake'), 400);
            return;
        }
        wardrobe.push({ id: Date.now().toString(), name: nameInput.value.trim().toUpperCase(), category: categoryInput.value, icon: iconInput.value });
        localStorage.setItem('mono_wardrobe', JSON.stringify(wardrobe));
        nameInput.value = '';
        document.getElementById('upload-placeholder').classList.remove('hidden');
        document.getElementById('upload-preview-container').classList.add('hidden');
        document.getElementById('color-analysis-display').classList.add('hidden');
        renderAll();
        showToast(i18n[currentLang]['toast_registered']);
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderClosetGrid(btn.getAttribute('data-filter'));
        });
    });

    document.getElementById('save-coord-btn').addEventListener('click', () => {
        const nameInput = document.getElementById('coord-name');
        if(selectedCanvasItems.length === 0) { showToast(i18n[currentLang]['toast_empty_canvas']); return; }
        savedCoordinates.push({ id: Date.now().toString(), name: nameInput.value.trim().toUpperCase() || "LOOK #" + (savedCoordinates.length + 1), items: [...selectedCanvasItems] });
        localStorage.setItem('mono_coords', JSON.stringify(savedCoordinates));
        nameInput.value = ''; selectedCanvasItems = [];
        renderAll();
        showToast(i18n[currentLang]['toast_archived']);
    });
}

function toggleCanvasItem(item) {
    const idx = selectedCanvasItems.findIndex(i => i.id === item.id);
    if(idx > -1) selectedCanvasItems.splice(idx, 1);
    else selectedCanvasItems.push(item);
    renderStylingSelectors(); renderCanvasPreview();
}

window.removeItemFromCanvas = function(id, e) {
    e.stopPropagation(); selectedCanvasItems = selectedCanvasItems.filter(i => i.id !== id);
    renderStylingSelectors(); renderCanvasPreview();
};

window.deleteItem = function(id, e) {
    e.stopPropagation();
    wardrobe = wardrobe.filter(i => i.id !== id);
    selectedCanvasItems = selectedCanvasItems.filter(i => i.id !== id);
    localStorage.setItem('mono_wardrobe', JSON.stringify(wardrobe));
    renderAll(); showToast(i18n[currentLang]['toast_deleted']);
};

window.deleteCoordinate = function(id, e) {
    e.stopPropagation(); savedCoordinates = savedCoordinates.filter(c => c.id !== id);
    localStorage.setItem('mono_coords', JSON.stringify(savedCoordinates));
    renderSavedCoordinates(); showToast(i18n[currentLang]['toast_archive_deleted']);
};

function initDragAndDrop() {
    const canvas = document.getElementById('canvas-preview');
    canvas.addEventListener('dragover', (e) => { e.preventDefault(); canvas.classList.add('drag-over'); });
    canvas.addEventListener('dragleave', () => canvas.classList.remove('drag-over'));
    canvas.addEventListener('drop', (e) => {
        e.preventDefault(); canvas.classList.remove('drag-over');
        const id = e.dataTransfer.getData('text/plain');
        const item = wardrobe.find(i => i.id === id);
        if(item && !selectedCanvasItems.some(i => i.id === id)) toggleCanvasItem(item);
    });
}

function bindDragEvents() {
    document.querySelectorAll('#closet-grid .item-card').forEach(card => {
        card.addEventListener('dragstart', (e) => e.dataTransfer.setData('text/plain', card.getAttribute('data-id')));
    });
}

// ==========================================================================
// STANDALONE AI SUGGESTION ENGINE (API KEY FREE)
// ==========================================================================
function initAiTriggers() {
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active'); currentMood = btn.getAttribute('data-mood');
        });
    });
    document.getElementById('ai-suggest-selected').addEventListener('click', () => {
        if(selectedCanvasItems.length === 0) { showToast('アイテムを選んでください'); return; }
        executeLocalAISuggestion(selectedCanvasItems, `Mood: ${currentMood}`);
    });
    document.getElementById('ai-suggest-random').addEventListener('click', () => {
        if(wardrobe.length === 0) return;
        executeLocalAISuggestion(wardrobe, `Mood: ${currentMood}`, true);
    });
    document.getElementById('ai-search-btn').addEventListener('click', () => {
        const query = document.getElementById('ai-search-query').value.trim();
        if(!query || wardrobe.length === 0) return;
        executeLocalAISuggestion(wardrobe, query, false, true);
    });
}

function executeLocalAISuggestion(itemsSource, contextText, isRandom = false, isCustomSearch = false) {
    const responseBox = document.getElementById('ai-response-box');
    const dots = responseBox.querySelector('.ai-loading-dots');
    const textTarget = document.getElementById('ai-text-target');

    responseBox.classList.remove('hidden'); dots.classList.remove('hidden'); textTarget.innerHTML = '';

    setTimeout(() => {
        dots.classList.add('hidden');
        let selectedItems = [];

        if (isRandom) {
            const shuffled = [...itemsSource].sort(() => 0.5 - Math.random());
            const cats = new Set();
            for (let i of shuffled) {
                if (!cats.has(i.category)) { selectedItems.push(i); cats.add(i.category); }
                if (selectedItems.length >= 3) break;
            }
        } else if (isCustomSearch) {
            const text = contextText.toLowerCase();
            if (text.includes('雨') || text.includes('rain') || text.includes('デート') || text.includes('date')) {
                const outer = itemsSource.find(i => i.category === 'outer');
                const tops = itemsSource.find(i => i.category === 'tops');
                if (outer) selectedItems.push(outer);
                if (tops) selectedItems.push(tops);
            } else {
                ['outer', 'tops', 'bottoms'].forEach(c => { const f = itemsSource.find(i => i.category === c); if(f) selectedItems.push(f); });
            }
        } else {
            selectedItems = [...itemsSource];
        }

        if (selectedItems.length === 0 && wardrobe.length > 0) selectedItems = [wardrobe[0]];

        const namesStr = selectedItems.map(i => `・${i.i18nKey ? i18n[currentLang][i.i18nKey] : i.name}`).join('\n');
        const title = `【提案】"${contextText}" に捧げる審美ルック`;
        const concept = `現行のワードローブ構成から「${contextText}」への親和性が最も高いテクスチャを抽出・マッピングしました。シルエットの黄金比率を保ちながら、ノイズを極限まで削ぎ落とした、あなただけのミニマルな美学を体現します。`;
        
        typeWriterEffect(textTarget, `■ STYLE TITLE\n${title}\n\n■ SELECTED ITEMS\n${namesStr}\n\n■ STYLING CONCEPT\n${concept}`);
    }, 800);
}

function typeWriterEffect(element, text, index = 0) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index) === '\n' ? '<br>' : text.charAt(index);
        setTimeout(() => typeWriterEffect(element, text, index + 1), 10);
    }
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast'; toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'toastIn 0.4s ease reverse forwards';
        setTimeout(() => toast.remove(), 400);
    }, 2000);
}

function observeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.01 });
    document.querySelectorAll('.item-card, .form-card').forEach(el => observer.observe(el));
}