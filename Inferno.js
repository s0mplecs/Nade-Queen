document.addEventListener("DOMContentLoaded", function() {
  const videoGallery = document.getElementById("videoGallery");
  const videos = [
    { src: "videos/Inferno/ロングモク.mp4", title: "Aロング スモーク" },
    { src: "videos/Inferno/.mp4", title: "アーチ スモーク（準備中)" },
    { src: "videos/Inferno/.mp4", title: "ライブラリー スモーク（準備中)" },
    { src: "videos/Inferno/モトモク.mp4", title: "ピットからMOTO スモーク" },
    { src: "videos/Inferno/ピットモロ.mp4", title: "ピット モロトフ" },
    { src: "videos/Inferno/pit分断モク.mp4", title: "ピット前 スモーク" },
    { src: "videos/Inferno/トラックモク1.mp4", title: "トラック スモークその１" },
    { src: "videos/Inferno/トラックモク2.mp4", title: "トラック スモークその２" },
    { src: "videos/Inferno/メキシコモク.mp4", title: "メキシコ（もぐら） スモーク" },
    { src: "videos/Inferno/Bエントリーモク.mp4", title: "Bサイトエントリー スモーク" },
    { src: "videos/Inferno/CT取りモク.mp4", title: "ディープCT スモーク" },
    { src: "videos/Inferno/.mp4", title: "バナナ（準備中)" },
    { src: "videos/Inferno/コフィンモク.mp4", title: "コフィン"},
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
