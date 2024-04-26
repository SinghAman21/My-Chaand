const control = document.getElementById("Quality");
      const imgHolder = document.getElementById("box");
      const aslimoon = document.getElementById("aslimoon");

      control.addEventListener("change", function () {
        const selectedValue = control.value;
        let backgroundImage = "";

        switch (selectedValue) {
          case "NA":
            backgroundImage = "url('src/default.png')";
            imgHolder.innerHTML.text = "Please select something";
            // aslimoon.innerHTML = "";
            aslimoon.pause();
            break;
          case "360p":
            backgroundImage = "url('src/360p.jpg')";
            imgHolder.textContent = "";
            imgHolder.style.backgroundRepeat = "no-repeat";
            // aslimoon.innerHTML = "";
            aslimoon.pause();
            // imgHolder.style.text = "";
            // imgHolder.style.left = "44%";
            // imgHolder.style.position = "relative";
            // imgHolder.style.top = '40%';
            // imgHolder.style.margin = '10%'
            // imgHolder.style.alignItems = "center";
            // imgHolder.style.justifyContent = "center";

            break;
          case "480p":
            backgroundImage = "url('src/480p.jpg')";
            imgHolder.textContent = "";
            imgHolder.style.backgroundRepeat = "no-repeat";
            // aslimoon.innerHTML = "";
            aslimoon.pause();
            // imgHolder.style.left = "44%";
            // imgHolder.style.position = "relative";
            break;
          case "720p":
            backgroundImage = "url('src/720p.png')";
            imgHolder.textContent = "";
            imgHolder.style.backgroundRepeat = "no-repeat";
            // aslimoon.innerHTML = "";
            aslimoon.pause();

            break;
          case "4K":
            // backgroundImage = "url('src/4K.mp4')";
            // backgroundRepeat = "url('src/4K.mp4')";
            // imgHolder.style.display = "none"
            // imgHolder.style.color = "white";
            // backgroundImage = "url";
            aslimoon.style.display = "block";
            aslimoon.play();
            // imgHolder.style.text.backgroundColor = "black";
            // imgHolder.style.backgroundColor = "black"
            // imgHolder.textContent = "It's you \u{1F927}";
            // imgHolder.textContent = "\u{1F927}";
            break;
          default:
            backgroundImage = "url('src/default.png')";
          // aslimoon.innerHTML = "";
          // imgHolder.innerHTML.text = "please select something";
        }

        imgHolder.style.backgroundImage = backgroundImage;
      });