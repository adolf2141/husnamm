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

function changePhoto() {
    i++;

    if (i >= fotograflar.length) {
        i = 0;
    }

    const foto = document.getElementById("foto");
    const yazi = document.getElementById("yazi");

    // Kaybolma animasyonu
    foto.style.opacity = "0";

    // Aynı anda fotoğraf ve yazıyı değiştir
    foto.src = fotograflar[i];
    yazi.innerText = sozler[i];

    // Yeni fotoğraf yüklenince görünür yap
    foto.onload = function () {
        foto.style.opacity = "1";
    };
}
