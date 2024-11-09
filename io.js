
///////////////////////////////////////// AVATAR /////////////////////////////////////////

(function() {
  "use strict";
  // SET DURATION FOR EACH AVATAR CHANGE
  var avatarChangeInterval = 500; // Change every half second
  // SET EMOJI MODES
  var emojiModes = {
    'mode1': ["w", "w"],
    'mode2': ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"],
    'mode3': ["ツ", "ヅ", "쓰", "⍨", "ᴗ̈"],
    'mode4': ["☯︎", "⌨︎", "☮︎", "⚠︎", "☠︎"],
    'mode5': ["߷", "⚖", "⛟", "⛾", "⛃"]
  };

  var currentMode = 'mode1'; // Initial mode
  var currentIndex = 0;
  var isPaused = false;
  var resetInterval;

  function changeAvatar() {
    if (!isPaused) {
      var currentModeEmojis = emojiModes[currentMode];
      setAvatar(currentModeEmojis[currentIndex]);
      currentIndex = (currentIndex + 1) % currentModeEmojis.length;
    }
  }

  // code to change the avatar
  function setAvatar(avatar) {
    console.log("avatar: " + avatar);
    var inputElement = iframe.body.querySelectorAll("[data-hook='input']")[0];
    inputElement.value = "w" + avatar;

    // Simulate pressing Enter key
    var enterKeyEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      keyCode: 13,
      code: "Enter",
      which: 13,
      bubbles: true
    });
    inputElement.dispatchEvent(enterKeyEvent);

    var notices = iframe.body.getElementsByClassName("notice");
    for (var i = 0; i < notices.length; i++) {
      var notice = notices[i];
      if (notice.innerHTML == "Avatar set") {
        notice.parentNode.removeChild(notice);
      }
    }
  }

  // Start changing avatars automatically
  function startAutoChange() {
    resetInterval = setInterval(changeAvatar, avatarChangeInterval);
  }

  // Stop changing avatars automatically
  function stopAutoChange() {
    clearInterval(resetInterval);
  }

  // Toggle pause/resume of avatar change
  function togglePause() {
    isPaused = !isPaused;
    if (isPaused) {
      stopAutoChange();
      console.log("Auto avatar change paused");
    } else {
      startAutoChange();
      console.log("Auto avatar change resumed");
    }
  }

  // Change emoji mode
  function changeMode(mode) {
    currentMode = mode;
    currentIndex = 0; // Reset index when changing mode
    console.log("Switched to mode: " + mode);
  }

  // Listen to key presses
  var listener = function(event) {
    if (iframe.activeElement != iframe.querySelectorAll("[data-hook='input']")[0]) {
      const key = event.key.toLowerCase(); // Convert to lowercase for uniformity
      if (key === 't') {
        togglePause();
      } else if (key === 'c' || key === 'v' || key === 'b' || key === 'n' || key === 'm') {
        var modeIndex = ['c', 'v', 'b', 'n', 'm'].indexOf(key);
        var modeKeys = Object.keys(emojiModes);
        if (modeIndex !== -1 && modeIndex < modeKeys.length) {
          changeMode(modeKeys[modeIndex]);
        }
      }
    }
  };

  //document.activeElement
  var iframe;
  setTimeout(function() {
    iframe = document.querySelector("iframe").contentWindow.document;
    startAutoChange(); // Start auto changing avatars
    iframe.body.addEventListener("keydown", listener, true);
    console.log("Auto avatar change started");
  }, 3000);
})();

