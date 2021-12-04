setTimeout(function() {
    var interval = setInterval(function() {
      document.querySelector("div#myDi").style.opacity += 1;
      if (document.querySelector("div#myDi").style.opacity >= 1) {
        clearInterval(interval);
      }
    }, 250);
  }, 5000);