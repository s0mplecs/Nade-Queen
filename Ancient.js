document.addEventListener("DOMContentLoaded", function() {
  const videoGallery = document.getElementById("videoGallery");
  const videoGallery2 = document.getElementsByClassName("maps");    
  const videos = [
    { src: "videos/Ancient/Aメインモク.mp4", title: "Aメイン スモーク" },
    { src: "videos/Ancient/ACTモク1.mp4", title: "A側ct スモークその１" },
    { src: "videos/Ancient/ACTモク2.mp4", title: "A側ct スモークその２" },
    { src: "videos/Ancient/ACTモク3.mp4", title: "A側ct スモークその３" },
    { src: "videos/Ancient/テンプルモク.mp4", title: "テンプル スモーク" },
    { src: "videos/Ancient/Aドーナツモク.mp4", title: "A側ドーナツ スモーク" },
    { src: "videos/Ancient/ハウスモク1.mp4", title: "ハウス(RED) スモークその1" },
    { src: "videos/Ancient/ハウスモク2.mp4", title: "ハウス(RED) スモークその2" },
    { src: "videos/Ancient/MIDドーナツモク.mp4", title: "MID側ドーナツ スモーク" },
    { src: "videos/Ancient/windowモク1.mp4", title: "ウィンドウ スモークその１" },
    { src: "videos/Ancient/windowモク2.mp4", title: "ウィンドウ スモークその２" },
    { src: "videos/Ancient/エルボーモク.mp4", title: "エルボー（Tmid）スモーク" },
    { src: "videos/Ancient/caveモク1.mp4", title: "ケーヴ スモークその１" },
    { src: "videos/Ancient/caveモク2.mp4", title: "ケーヴ スモークその２" },
    { src: "videos/Ancient/シークレットモク1.mp4", title: "シークレット スモークその１" },
    { src: "videos/Ancient/シークレットモク2.mp4", title: "シークレット スモークその２" },
    { src: "videos/Ancient/シークレットモク3.mp4", title: "シークレット スモークその３" },
    { src: "videos/Ancient/ショートモク.mp4", title: "Bショート スモーク" },
    { src: "videos/Ancient/longモク1.mp4", title: "Bロング スモークその１" },
    { src: "videos/Ancient/longモク2.mp4", title: "Bロング スモークその２" },
    { src: "videos/Ancient/longモク3.mp4", title: "Bロング スモークその３" },
    { src: "videos/Ancient/BCTモク.mp4", title: "B側ct スモーク" },
    { src: "videos/Ancient/ランプモク.mp4", title: "Bランプ スモーク" },
    { src: "videos/Ancient/doorモク.mp4", title: "Bドア スモーク" },
    { src: "videos/Ancient/忍者モロトフ、フラッシュ.mp4", title: "Bサイト忍者モロトフ、フラッシュ" },
    { src: "videos/Ancient/ケーヴモロトフ.mp4", title: "Bサイトケーヴモロトフ" },
  ];

  videos.forEach((videoInfo, index) => { //forEach文
    const videoContainer = document.createElement("div"); //<div>
    videoContainer.className = "video-container"; //<div class="video-container">
    videoContainer.id = "video" + index; // <div class="video-container" id="video0">
      /*if(index===0){
          console.log("0通りました！！！");
      } else if(index===1){
          console.log("1通りました！！！");
      } else if(index===2){
          console.log("2通りました！！！");
      } else {
          console.log("0と1と2以外通りました！！！");
      }*/
      
      /*switch(index) {
          case 0:
              console.log("0通りました！！！");
              break;
          case 1:
              console.log("1通りました！！！");
              break;
          case 2:
              console.log("2通りました！！！");
              break;
          default:
              console.log("0と1と2以外通りました！！！");
              break;
      }*/
      
    const videoTitle = document.createElement("p"); //<p>
    videoTitle.className = "video-title"; //<p class="video-title">
    videoTitle.textContent = videoInfo.title; //<p class="video-title">Aメイン スモーク</p>
    videoContainer.appendChild(videoTitle); 
    /*
        <div class="video-container" id="video0">
            <p class="video-title">Aメイン スモーク</p>
        </div>
    */
      
    const videoElement = document.createElement("video"); //<video>
    videoElement.className = "video"; //<video class="video">
    videoElement.src = videoInfo.src; //<video class="video" src="videos/Ancient/Aメインモク.mp4">
    videoElement.controls = true; //<video class="video" src="videos/Ancient/Aメインモク.mp4" controls>
    videoElement.loop = true; //<video class="video" src="videos/Ancient/Aメインモク.mp4" controls loop>
    videoElement.muted = true; //<video class="video" src="videos/Ancient/Aメインモク.mp4" controls loop muted>
    videoElement.volume = 0.0; //<video class="video" src="videos/Ancient/Aメインモク.mp4" controls loop muted volume=0.0>
    videoContainer.appendChild(videoElement);
      /*
        <div>
            <p class="video-title">Aメイン スモーク</p>
            <video class="video" src="videos/Ancient/Aメインモク.mp4" controls loop muted volume=0.0>
        </div>
    */
    videoGallery.appendChild(videoContainer);
      /*
        <div class="videos" id="videoGallery">
            <div class="video-container" id="video0">
                <p class="video-title">Aメイン スモーク</p>
                <video class="video" src="videos/Ancient/Aメインモク.mp4" controls loop muted volume=0.0>
            </div>
        </div>
      */
  });
});
