function myMove() {
    const container = document.getElementById("container");
    const animate = document.getElementById("animate");
  
    let position = 0;
    const intervalId = setInterval(frame, 1);
  
    function frame() {
      if (position >= container.offsetWidth - animate.offsetWidth) {
        clearInterval(intervalId);
      } else {
        position++;
        animate.style.left = position + "px";
      }
    }
  }
  