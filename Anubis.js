document.addEventListener("DOMContentLoaded", function() {
  const videoGallery = document.getElementById("videoGallery");
  const videos = [
    { src: "videos/Anubis/カメラモクモロ.mp4", title: "カメラ スモーク モロトフでも可" },
    { src: "videos/Anubis/ヘヴン右モク.mp4", title: "ウィンドウ スモーク" },
    { src: "videos/Anubis/ヘヴン左モク.mp4", title: "逆側ウィンドウ スモーク モロトフでも可" },
    { src: "videos/Anubis/ハウスモク.mp4", title: "ハウス スモーク" },
    { src: "videos/Anubis/アンダーモク.mp4", title: "アンダー スモーク" },
    { src: "videos/Anubis/コネモク1.mp4", title: "コネクター（CAVE） スモークその１" },
    { src: "videos/Anubis/コネモク2.mp4", title: "コネクター（CAVE） スモークその２" },
    { src: "videos/Anubis/CTテンプルモク.mp4", title: "B側CT スモーク" },
    { src: "videos/Anubis/CTテンプルモク.mp4", title: "テンプル スモーク"},
    { src: "videos/Anubis/サイト右モク.mp4", title: "Bサイトデフォルト右 スモーク" },
      { src: "videos/Anubis/サイト左モク.mp4", title: "Bサイトデフォルト左 スモーク" },
    { src: "videos/Anubis/Bメインフラッシュ.mp4", title: "Bメイン フラッシュ" },
  ];

  videos.forEach((videoInfo, index) => {
    const videoContainer = document.createElement("div");
    videoContainer.className = "video-container";
    videoContainer.id = "video" + index; // IDの設定

    const videoTitle = document.createElement("p");
    videoTitle.className = "video-title";
    videoTitle.textContent = videoInfo.title;
    videoContainer.appendChild(videoTitle);

    const videoElement = document.createElement("video");
    videoElement.className = "video";
    videoElement.src = videoInfo.src;
    videoElement.controls = true;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.volume = 0.0;
    videoContainer.appendChild(videoElement);

    videoGallery.appendChild(videoContainer);
  });
});
