function mesaj(){

    const mesajlar = [
        "❤️ Seni tanıdığım için çok mutluyum.",
        "🌹 Gülüşün dünyamı güzelleştiriyor.",
        "💖 İyi ki varsın Hüsna.",
        "✨ Sen benim en güzel tesadüfümsün.",
        "🥰 Bu site sadece senin için yapıldı."
    ];

    let sec = Math.floor(Math.random()*mesajlar.length);

    document.getElementById("yazi").innerHTML = mesajlar[sec];
}
const fotograflar = [
"foto1.jpg",
"foto2.jpg",
"foto3.jpg",
"foto4.jpg",
"foto5.jpg",
"foto6.jpg",
"foto7.jpg",
"foto8.jpg",
"foto9.jpg"
];

const sozler = [
"Seninle tanıştığım gün, hayatımın en güzel günüydü. ❤️",
"Her gülüşünde dünyam biraz daha güzelleşiyor. 🌹",
"Yanımdayken zaman duruyor, sensizken hiç geçmiyor. ✨",
"Kalbimin en güzel köşesi daima sana ait. 💖",
"Her gece seni düşünerek uyuyor, her sabah seni düşünerek uyanıyorum. 🌙",
"Mesafeler ne kadar uzak olursa olsun, kalbim hep senin yanında. 💞",
"Bir ömür değil, bin ömür olsa yine seni seçerdim. 🥰",
"En güzel anılarımın başrolü sensin Hüsna. 💌",
"Seni dün de seviyordum, bugün de seviyorum, yarın da seveceğim. ❤️"
];

let i = 0;

document.getElementById("foto").onclick = function () {
    i++;
    if (i >= fotograflar.length) i = 0;

    document.getElementById("foto").src = fotograflar[i];
    document.getElementById("yazi").innerText = sozler[i];
};
