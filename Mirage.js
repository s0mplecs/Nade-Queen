document.addEventListener("DOMContentLoaded", function() {
  const videoGallery = document.getElementById("videoGallery");
  const videos = [
    { src: "videos/Mirage/CTモク1.mp4", title: "チケット スモーク" },
    { src: "videos/Mirage/ジャングルモク.mp4", title: "ジャングル スモーク" },
    { src: "videos/Mirage/ステアモク1.mp4", title: "ステア スモークその１" },
    { src: "videos/Mirage/ステアモク2.mp4", title: "ステア スモークその２" },
    { src: "videos/Mirage/Aベンチモク.mp4", title: "Aベンチ スモーク" },
    { src: "videos/Mirage/パラスモク.mp4", title: "パラス スモーク" },
    { src: "videos/Mirage/Aメイン先取りセット.mp4", title: "Aメイン セット" },
    { src: "videos/Mirage/ウィンドウモク.mp4", title: "ウィンドウ スモーク" },
    { src: "videos/Mirage/ウィンドウpopフラッシュ.mp4", title: "ウィンドウ ポップフラッシュ" },
    { src: "videos/Mirage/ウィンドウグレ1.mp4", title: "ウィンドウスモーク ブレイクグレその１" },
    { src: "videos/Mirage/ウィンドウグレ2.mp4", title: "ウィンドウスモーク ブレイクグレその２" },
      { src: "videos/Mirage/TOPコンモク.mp4", title: "TOPコネクター スモーク" },
    { src: "videos/Mirage/コネモク1.mp4", title: "コネクター スモークその1" },
    { src: "videos/Mirage/コネモク2.mp4", title: "コネクター スモークその２" },
    { src: "videos/Mirage/わたりモク.mp4", title: "MIDわたり スモーク" },
    { src: "videos/Mirage/アーチ右モク1.mp4", title: "Bアーチ右 スモークその１" },
    { src: "videos/Mirage/アーチ右モク2.mp4", title: "Bアーチ右 スモークその２" },
    { src: "videos/Mirage/アーチ左モク1.mp4", title: "Bアーチ左 スモークその１" },
    { src: "videos/Mirage/アーチ左モク2.mp4", title: "Bアーチ左 スモークその２" },
    { src: "videos/Mirage/アパートモク1.mp4", title: "アパート奥 スモークその１" },
    { src: "videos/Mirage/アパートモク2.mp4", title: "アパート奥 スモークその２" },
    { src: "videos/Mirage/Bベンチモク.mp4", title: "Bベンチ前 スモーク" },
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
