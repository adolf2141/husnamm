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
