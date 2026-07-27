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

    foto.style.opacity = "0";

    foto.src = fotograflar[i];
    yazi.innerText = sozler[i];

    foto.onload = function () {
        foto.style.opacity = "1";
    };

    // Kalp efekti
    kalpEfekti();
}

function kalpEfekti() {

    const foto = document.getElementById("foto");
    const rect = foto.getBoundingClientRect();

    for (let j = 0; j < 15; j++) {

        const kalp = document.createElement("div");

        kalp.className = "kalp";

        kalp.innerHTML = ["❤️","💖","💕","💗","💞"][Math.floor(Math.random()*5)];

        kalp.style.left = (rect.left + rect.width / 2) + "px";
        kalp.style.top = (rect.top + rect.height / 2) + "px";

        kalp.style.setProperty("--x",(Math.random()*220-110)+"px");
        kalp.style.setProperty("--y",(-Math.random()*250-100)+"px");

        document.body.appendChild(kalp);

        setTimeout(() => {
            kalp.remove();
        },1800);
    }
}
