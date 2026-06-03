const productsData = [
    { id: 1, name: "Agnes Tachyon", price: 745000,
        gender: "stallion",
        age: 6, origin: "Japan",
        totalRaces: 12, wins: 8, places: 2,
        winRate: 67,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV18KHy8zimzJu8GfPylznDEn6hFiqf2d8Jg&s",
        video: "video1.mp4",
        races: [
            { name: "Japan Cup 2024",       pos: 1, dist: "2400m", date: "2024-11-24" },
            { name: "Arima Kinen 2024",     pos: 2, dist: "2500m", date: "2024-12-22" },
            { name: "Tenno Sho Spring",     pos: 1, dist: "3200m", date: "2024-04-28" },
            { name: "Osaka Hai 2024",       pos: 1, dist: "2000m", date: "2024-03-24" },
            { name: "Arima Kinen 2023",     pos: 3, dist: "2500m", date: "2023-12-24" },
        ]
    },
    { id: 2, name: "Calstone Light O", price: 560000,
        gender: "gelding",
        age: 5, origin: "Japan",
        totalRaces: 20, wins: 6, places: 5,
        winRate: 30,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeo_RGADDWrKeikvKWNBVLgxUMhbM8DFe8ng&s",
        video: "video2.mp4",
        races: [
            { name: "Sprinters Stakes",     pos: 1, dist: "1200m", date: "2024-09-29" },
            { name: "Takamatsunomiya Kinen",pos: 2, dist: "1200m", date: "2024-03-24" },
            { name: "CBC Sho 2024",         pos: 1, dist: "1200m", date: "2024-07-07" },
            { name: "Kokura Sprint 2023",   pos: 3, dist: "1200m", date: "2023-09-03" },
        ]
    },
    { id: 3, name: "Daiwa Scarlet", price: 950000,
        gender: "mare",
        age: 7, origin: "Japan",
        totalRaces: 18, wins: 10, places: 4,
        winRate: 56,
        img: "https://preview.redd.it/new-photos-of-daiwa-scarlet-and-curren-chan-released-by-v0-nydqp98ugabg1.png?width=1080&crop=smart&auto=webp&s=e925ac5ff93601e5d6c7957f8f20a0c11ea28bec",
        video: "video3.mp4",
        races: [
            { name: "Shuka Sho 2024",       pos: 1, dist: "2000m", date: "2024-10-13" },
            { name: "Victoria Mile 2024",   pos: 1, dist: "1600m", date: "2024-05-12" },
            { name: "Oka Sho 2024",         pos: 2, dist: "1600m", date: "2024-04-07" },
            { name: "Hanshin JF 2023",      pos: 1, dist: "1600m", date: "2023-12-10" },
        ]
    },
    { id: 4, name: "Daitaku Helios", price: 400000,
        gender: "stallion",
        age: 8, origin: "Japan",
        totalRaces: 30, wins: 9, places: 6,
        winRate: 30,
        img: "https://nxsnjqfqtwiaoedulnpr.supabase.co/storage/v1/object/public/tag-images/characters/c5fc69d6-cafa-4a74-a0b8-a4344d2c0309/1775073071215.jpg",
        video: "video4.mp4",
        races: [
            { name: "Milers Cup 2024",      pos: 3, dist: "1600m", date: "2024-11-17" },
            { name: "Yasuda Kinen 2024",    pos: 2, dist: "1600m", date: "2024-06-02" },
            { name: "Mainichi Hai 2024",    pos: 1, dist: "1800m", date: "2024-04-07" },
            { name: "Kyoto Kinen 2024",     pos: 1, dist: "2200m", date: "2024-02-11" },
        ]
    },
    { id: 5, name: "Gold Ship", price: 3500000,
        gender: "stallion",
        age: 9, origin: "Japan",
        totalRaces: 28, wins: 13, places: 5,
        winRate: 46,
        img: "https://64.media.tumblr.com/9f25d5ebe99da19cfc679b1758ea03df/56b1604c6cb60460-64/s250x400/4e87a4a983f79a904093341114c25344ff93a83c.pnj",
        video: "video5.mp4",
        races: [
            { name: "Arima Kinen 2024",     pos: 1, dist: "2500m", date: "2024-12-22" },
            { name: "Tenno Sho Autumn",     pos: 1, dist: "2000m", date: "2024-10-27" },
            { name: "Takarazuka Kinen",     pos: 2, dist: "2200m", date: "2024-06-23" },
            { name: "Tenno Sho Spring",     pos: 1, dist: "3200m", date: "2024-04-28" },
            { name: "Hanshin Daishoten",    pos: 1, dist: "3000m", date: "2024-03-24" },
        ]
    },
    { id: 6, name: "Haru Urara", price: 950000,
        gender: "mare",
        age: 4, origin: "Japan",
        totalRaces: 113, wins: 0, places: 0,
        winRate: 2,
        img: "https://preview.redd.it/serious-fact-irl-haru-urara-is-a-direct-descendant-of-one-v0-9px0hrn3q3gf1.png?width=537&format=png&auto=webp&s=4364864896c0d6d5abf84436aab33cdfd4270c4a",
        video: "video6.mp4",
        races: [
            { name: "Kochi Race #8 2024",   pos: 9, dist: "1400m", date: "2024-11-03" },
            { name: "Kochi Race #5 2024",   pos: 7, dist: "1300m", date: "2024-08-11" },
            { name: "Kochi Race #3 2024",   pos: 8, dist: "1400m", date: "2024-05-19" },
            { name: "Kochi Debut 2023",     pos: 10, dist: "1300m", date: "2023-12-03" },
        ]
    },
    { id: 7, name: "Matikanetannhauser", price: 1200000,
        gender: "stallion",
        age: 10, origin: "Japan",
        totalRaces: 22, wins: 7, places: 4,
        winRate: 32,
        img: "https://upload.wikimedia.org/wikipedia/commons/9/94/%E3%83%9E%E3%83%81%E3%82%AB%E3%83%8D%E3%82%BF%E3%83%B3%E3%83%9B%E3%82%A4%E3%82%B6.jpg",
        video: "video7.mp4",
        races: [
            { name: "Centaur Stakes 2024",  pos: 1, dist: "1200m", date: "2024-09-15" },
            { name: "Sprinters Stakes",     pos: 3, dist: "1200m", date: "2024-09-29" },
            { name: "Kyoto Sansai S.",      pos: 2, dist: "1400m", date: "2024-07-14" },
            { name: "Aoi Stakes 2024",      pos: 1, dist: "1600m", date: "2024-05-05" },
        ]
    },
    { id: 8, name: "Seiun Sky", price: 550000,
        gender: "stallion",
        age: 11, origin: "Japan",
        totalRaces: 17, wins: 9, places: 3,
        winRate: 53,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSg21Gg1r3oGmFBCcAHJuvY1pcQDiEj5iMUw&s",
        video: "video8.mp4",
        races: [
            { name: "Kikuka Sho 2024",      pos: 1, dist: "3000m", date: "2024-10-20" },
            { name: "Kobe Shimbun Hai",     pos: 1, dist: "2400m", date: "2024-09-22" },
            { name: "Nihon Derby 2024",     pos: 2, dist: "2400m", date: "2024-05-26" },
            { name: "Satsuki Sho 2024",     pos: 1, dist: "2000m", date: "2024-04-14" },
            { name: "Kyoto Kinen 2024",     pos: 1, dist: "2200m", date: "2024-02-11" },
        ]
    },
    { id: 9, name: "Kitasan Black", price: 2800000,
        gender: "stallion",
        age: 12, origin: "Japan",
        totalRaces: 20, wins: 12, places: 3,
        winRate: 60,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjoP8t648sxlaiua2dQkeZyXE1-qrXKIH2g&s",
        video: "video9.mp4",
        races: [
            { name: "Japan Cup 2024",       pos: 1, dist: "2400m", date: "2024-11-24" },
            { name: "Tenno Sho Autumn",     pos: 1, dist: "2000m", date: "2024-10-27" },
            { name: "Takarazuka Kinen",     pos: 1, dist: "2200m", date: "2024-06-23" },
            { name: "Osaka Hai 2024",       pos: 2, dist: "2000m", date: "2024-03-24" },
            { name: "Arima Kinen 2023",     pos: 1, dist: "2500m", date: "2023-12-24" },
        ]
    },
    { id: 10, name: "Sakura Bakushin O", price: 650000,
        gender: "stallion",
        age: 8, origin: "Japan",
        totalRaces: 16, wins: 11, places: 2,
        winRate: 69,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sKiFlWYkjqx9AI2sq4XD_HSutZXIG56VSA&s",
        video: "video10.mp4",
        races: [
            { name: "Sprinters Stakes",     pos: 1, dist: "1200m", date: "2024-09-29" },
            { name: "Takamatsunomiya Kinen",pos: 1, dist: "1200m", date: "2024-03-24" },
            { name: "Kyoto Sansai S.",      pos: 1, dist: "1400m", date: "2024-07-14" },
            { name: "CBC Sho 2023",         pos: 1, dist: "1200m", date: "2023-07-02" },
            { name: "Centaur Stakes 2023",  pos: 2, dist: "1200m", date: "2023-09-17" },
        ]
    },
    { id: 11, name: "Satono Diamond", price: 900000,
        gender: "stallion",
        age: 7, origin: "Japan",
        totalRaces: 14, wins: 6, places: 4,
        winRate: 43,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMa3YPB_yTrTCq7AaqI_1B5r_fDelvM6DUDA&s",
        video: "video11.mp4",
        races: [
            { name: "Kyoto Kinen 2024",     pos: 1, dist: "2200m", date: "2024-02-11" },
            { name: "Hanshin Daishoten",    pos: 3, dist: "3000m", date: "2024-03-24" },
            { name: "Arima Kinen 2023",     pos: 2, dist: "2500m", date: "2023-12-24" },
            { name: "Japan Cup 2023",       pos: 4, dist: "2400m", date: "2023-11-26" },
        ]
    },
    { id: 12, name: "T.M Opera O", price: 1200000,
        gender: "stallion",
        age: 9, origin: "Japan",
        totalRaces: 26, wins: 14, places: 5,
        winRate: 54,
        img: "https://preview.redd.it/t-m-opera-o-is-relaxed-v0-v9wv4481ekuf1.jpg?width=640&crop=smart&auto=webp&s=d353315a0c195174c3be4fb0d5d6fa6042cafae1",
        video: "video12.mp4",
        races: [
            { name: "Tenno Sho Autumn",     pos: 1, dist: "2000m", date: "2024-10-27" },
            { name: "Japan Cup 2024",       pos: 2, dist: "2400m", date: "2024-11-24" },
            { name: "Takarazuka Kinen",     pos: 1, dist: "2200m", date: "2024-06-23" },
            { name: "Tenno Sho Spring",     pos: 1, dist: "3200m", date: "2024-04-28" },
            { name: "Osaka Hai 2024",       pos: 1, dist: "2000m", date: "2024-03-24" },
        ]
    }
];

const genderLabel = { stallion: 'ມ້າຜູ້', mare: 'ມ້າແມ່', gelding: 'ມ້າຕອນ' };
const genderIcon  = { stallion: 'fa-mars', mare: 'fa-venus', gelding: 'fa-neuter' };
const genderColor = { stallion: '#4f8ef7', mare: '#f76fa8', gelding: '#a88cfb' };

let basket      = [];
let discountPct = 0;
let couponApplied = false;
let activeFilter  = 'all';
let activeSortMode = 'default';
const VALID_COUPONS = { 'LAO2024': 5 };

function applyCoupon() {
    const code = document.getElementById('couponCode').value.trim().toUpperCase();
    const msg  = document.getElementById('coupon-msg');
    if (couponApplied) { msg.textContent = '✓ ໃຊ້ລະຫັດແລ້ວ'; msg.className = 'coupon-msg ok'; return; }
    if (VALID_COUPONS[code] !== undefined) {
        discountPct   = VALID_COUPONS[code];
        couponApplied = true;
        msg.textContent = `✓ ສ່ວນຫຼຸດ ${discountPct}% — LAO2024`;
        msg.className = 'coupon-msg ok';
        document.getElementById('couponCode').disabled = true;
        renderUI();
    } else {
        msg.textContent = '✗ ລະຫັດບໍ່ຖືກຕ້ອງ';
        msg.className = 'coupon-msg err';
    }
}

function renderUI() {
    document.getElementById('cart-count').innerText = basket.length;
    const subtotal = basket.reduce((s, i) => s + i.price, 0);
    const discount = Math.round(subtotal * discountPct / 100);
    const total    = subtotal - discount;
    let displayTotal = '$' + total.toLocaleString();
    if (discountPct > 0 && basket.length > 0) {
        displayTotal = `$${total.toLocaleString()} <small style="font-size:0.9rem;color:var(--text-muted);text-decoration:line-through;">$${subtotal.toLocaleString()}</small>`;
    }
    document.getElementById('final-total-text').innerHTML = displayTotal;
    const nameList = basket.map(i => i.name).join(', ');
    document.getElementById('cart-list-text').innerText = basket.length > 0 ? nameList : 'ຍັງວ່າງເປົ່າ';
}

const productList = document.getElementById('product-list');

function buildCards(data) {
    productList.innerHTML = '';
    data.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.gender = p.gender;
        card.style.animationDelay = `${i * 0.04}s`;
        const gColor = genderColor[p.gender];
        card.innerHTML = `
            <div class="media-wrap">
                <span class="card-num">#${String(p.id).padStart(2,'0')}</span>
                <span class="card-gender-tag" style="background:${gColor}20;color:${gColor};border-color:${gColor}50;">
                    <i class="fa-solid ${genderIcon[p.gender]}"></i> ${genderLabel[p.gender]}
                </span>
                <img src="${p.img}" class="card-img" alt="${p.name}">
                <video class="card-video" muted loop playsinline preload="metadata"></video>
            </div>
            <div class="card-body">
                <h3>${p.name}</h3>
                <p class="price">$${p.price.toLocaleString()}</p>
                <div class="card-winrate">
                    <span class="winrate-label">ໂອກາດຊະນະ</span>
                    <span class="winrate-pct" style="color:${winColor(p.winRate)}">${p.winRate}%</span>
                    <div class="winrate-bar"><div class="winrate-fill" style="width:${p.winRate}%;background:${winColor(p.winRate)};"></div></div>
                </div>
                <div class="card-btn-row">
                    <button class="btn-detail" onclick="openModal(${p.id})">
                        <i class="fa-solid fa-circle-info"></i> ລາຍລະອຽດ
                    </button>
                    <button class="btn-addcart" onclick="addToCart('${p.name}', ${p.price})">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        card.querySelector('.card-video').src = p.video;
        productList.appendChild(card);
    });
}

function winColor(pct) {
    if (pct >= 60) return '#3dcf7a';
    if (pct >= 35) return '#e8b84b';
    return '#e05a5a';
}

buildCards(productsData);

function getFilteredSorted() {
    let data = activeFilter === 'all' ? [...productsData] : productsData.filter(p => p.gender === activeFilter);
    if (activeSortMode === 'winRate_asc')  data.sort((a, b) => a.winRate - b.winRate);
    if (activeSortMode === 'winRate_desc') data.sort((a, b) => b.winRate - a.winRate);
    if (activeSortMode === 'price_asc')   data.sort((a, b) => a.price - b.price);
    if (activeSortMode === 'price_desc')  data.sort((a, b) => b.price - a.price);
    return data;
}

function filterGender(gender, btn) {
    activeFilter = gender;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildCards(getFilteredSorted());
    reattachHover();
}

function sortCards(mode, btn) {
    activeSortMode = mode;
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildCards(getFilteredSorted());
    reattachHover();
}

function addToCart(pName, pPrice) {
    basket.push({ name: pName, price: pPrice });
    renderUI();
    const cartBox = document.querySelector('.cart-box');
    cartBox.style.transform = 'scale(1.15)';
    cartBox.style.borderColor = 'var(--gold)';
    setTimeout(() => { cartBox.style.transform = ''; cartBox.style.borderColor = ''; }, 220);
}

function resetCart() {
    if (confirm('ລ້າງກະຕ່າສິນຄ້າ?')) { basket = []; renderUI(); }
}

function confirmPurchase() {
    const name = document.getElementById('custName').value;
    const tel  = document.getElementById('custTel').value;
    const loc  = document.getElementById('custLoc').value;
    if (!name || !tel || basket.length === 0) {
        alert('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ ແລະ ເລືອກສິນຄ້າກ່ອນ!');
        return;
    }
    const subtotal = basket.reduce((s, i) => s + i.price, 0);
    const discount = Math.round(subtotal * discountPct / 100);
    const total    = subtotal - discount;
    const orderData = {
        name, tel, loc,
        items: basket,
        subtotal: '$' + subtotal.toLocaleString(),
        discount: discountPct > 0 ? `-${discountPct}% ($${discount.toLocaleString()})` : null,
        total: '$' + total.toLocaleString(),
        coupon: couponApplied ? 'LAO2026' : null,
        date: new Date().toLocaleString()
    };
    localStorage.setItem('myOrder', JSON.stringify(orderData));
    window.location.href = 'reciept15.html';
}

function openModal(id) {
    const p = productsData.find(x => x.id === id);
    if (!p) return;

    const gColor = genderColor[p.gender];

    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-num').textContent = `#${String(p.id).padStart(2,'0')} · ${p.origin}`;
    document.getElementById('modal-name').textContent = p.name;
    document.getElementById('modal-price').textContent = '$' + p.price.toLocaleString();

    const badge = document.getElementById('modal-gender-badge');
    badge.innerHTML = `<i class="fa-solid ${genderIcon[p.gender]}"></i> ${genderLabel[p.gender]}`;
    badge.style.background = gColor + '22';
    badge.style.color = gColor;
    badge.style.borderColor = gColor + '55';

    document.getElementById('modal-stats').innerHTML = `
        <div class="stat-box"><span class="stat-val">${p.totalRaces}</span><span class="stat-lbl">ໄລ່ທັງໝົດ</span></div>
        <div class="stat-box"><span class="stat-val" style="color:#3dcf7a">${p.wins}</span><span class="stat-lbl">ຊະນະ</span></div>
        <div class="stat-box"><span class="stat-val" style="color:#e8b84b">${p.places}</span><span class="stat-lbl">Top 3</span></div>
        <div class="stat-box"><span class="stat-val">${p.age}</span><span class="stat-lbl">ອາຍຸ (ປີ)</span></div>
    `;

    document.getElementById('modal-win-pct').textContent  = p.winRate + '%';
    document.getElementById('modal-win-pct').style.color  = winColor(p.winRate);
    document.getElementById('modal-win-fill').style.width = '0%';
    document.getElementById('modal-win-fill').style.background = winColor(p.winRate);
    setTimeout(() => {
        document.getElementById('modal-win-fill').style.width = p.winRate + '%';
    }, 80);

    const posLabel = pos => {
        if (pos === 1) return `<span style="color:#3dcf7a;font-weight:700;">🥇 1st</span>`;
        if (pos === 2) return `<span style="color:#e8b84b;font-weight:700;">🥈 2nd</span>`;
        if (pos === 3) return `<span style="color:#c97b3a;font-weight:700;">🥉 3rd</span>`;
        return `<span style="color:#7a7870;">${pos}th</span>`;
    };
    document.getElementById('modal-race-history').innerHTML = p.races.map(r => `
        <div class="race-row">
            <div class="race-info">
                <span class="race-name">${r.name}</span>
                <span class="race-meta">${r.dist} · ${r.date}</span>
            </div>
            <div class="race-pos">${posLabel(r.pos)}</div>
        </div>
    `).join('');

    document.getElementById('modal-add-btn').onclick = () => {
        addToCart(p.name, p.price);
        closeModal();
    };

    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function reattachHover() {}

document.addEventListener('mouseover', e => {
    const wrap = e.target.closest('.media-wrap');
    if (!wrap) return;
    const vid = wrap.querySelector('.card-video');
    const img = wrap.querySelector('.card-img');
    if (vid) { img.style.opacity = '0'; vid.style.opacity = '1'; vid.play().catch(() => {}); }
});

document.addEventListener('mouseout', e => {
    const wrap = e.target.closest('.media-wrap');
    if (!wrap) return;
    const vid = wrap.querySelector('.card-video');
    const img = wrap.querySelector('.card-img');
    if (vid) { vid.pause(); vid.currentTime = 0; img.style.opacity = '1'; vid.style.opacity = '0'; }
});