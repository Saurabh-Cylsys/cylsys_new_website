window.addEventListener("load", function () {
    const videoContainer = document.querySelector(".video-container");
    videoContainer.innerHTML = `
      <iframe
      id="myVideo"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/m25a9TmowI8?autoplay=1&mute=1&controls=0&loop=1&playlist=m25a9TmowI8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  });