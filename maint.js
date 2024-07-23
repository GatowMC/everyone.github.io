

///////////////////////////////////////// CONSTANTS /////////////////////////////////////////
let gameFrame = document.querySelector('.gameframe').contentWindow;
let body;
const constrolsStyleBase = "#joystick,#kick{z-index:100;bottom:CONTROLS_MARGINvw}.neo{opacity:CONTROLS_OPACITY;background-color:#ffffff;box-shadow:6px 6px 10px 0 #ffffff,-5px -5px 9px 0 #ffffff;color:#000000;font-weight:bolder;font-size:1.5rem}.sizer{width:CONTROLS_WIDTH%;aspect-ratio: 1 / 1;}#joystick{left:CONTROLS_MARGIN%;overflow:visible}#thumb{width:40%;height:40%;background-color:#ffffff}#kick{right:CONTROLS_MARGIN%}button.neo:active{opacity:KICK_OPACITY}";

const countryFilterHandler = document.createElement('style');
const hideButtons = document.createElement('style');

hideButtons.innerHTML = "button{display:none}";
gameFrame.document.head.appendChild(hideButtons);

const controlsHandler = document.createElement('style');

const copyrightHandler = document.createElement("span");

const aboutHandler = document.createElement("div");

const inputOptionsHandler = document.createElement("div");

const config = { childList: true, subtree: true };

///////////////////////////////////////// VARIABLES /////////////////////////////////////////

let firstTime = true;
let canResetJoystick = true;
let lastMessage;
let joystick;
let kickButton;



function init() {
    //Remove ads and header
    document.querySelector('.rightbar').remove();
    document.querySelector('.header').remove();

///////////////////////////////////////// CONTROLS /////////////////////////////////////////

function showControls(v) {
    if (v) {
        joystick.setAttribute("view", "visible");
        kickButton.setAttribute("view", "visible");
    } else {
        joystick.setAttribute("view", "hidden");
        kickButton.setAttribute("view", "hidden");
    }
}

function updateControlsSettingsNumbers() {
    let inputs = inputOptionsHandler.querySelectorAll(".option-row");
    inputs[0].children[1].innerHTML = inputs[0].children[2].value;
    inputs[1].children[1].innerHTML = inputs[1].children[2].value;
    inputs[2].children[1].innerHTML = inputs[2].children[2].value;
}

function onControlsSettingsInput() {
    let inputs = inputOptionsHandler.querySelectorAll(".option-row");
    updateControlsOptions(inputs[0].children[2].value, inputs[1].children[2].value, inputs[2].children[2].value)
}

function updateControlsOptions(w, m, o, f = false) {
    if (f) {
        let inputs = inputOptionsHandler.querySelectorAll(".option-row");
        inputs[0].children[2].value = w;
        inputs[1].children[2].value = m;
        inputs[2].children[2].value = o;
    }
    localStorage.setItem("controls", JSON.stringify([w, m, o]))
    controlsHandler.innerHTML = constrolsStyleBase.replace(/CONTROLS_WIDTH/g, w.toString()).replace(/CONTROLS_MARGIN/g, m.toString()).replace(/CONTROLS_OPACITY/g, o.toString()).replace(/KICK_OPACITY/g, (o / 2).toString());
    updateControlsSettingsNumbers();
    resetJoystick();
}

function handleTouchStart(e) {
    isTouching = true;
    updateJoystick(e.touches[0]);
}

function handleTouchMove(e) {
    if (isTouching) {
        updateJoystick(e.touches[0]);
    }
}

function handleTouchEnd() {
    isTouching = false;
    resetJoystick();
}

function kick(str) {
    try {
        gameFrame.document.dispatchEvent(new KeyboardEvent(str, { code: "KeyX" }));
    } catch {}
}

function updateJoystick(touch) {
    const rect = joystick.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = touch.clientX - centerX;
    const deltaY = touch.clientY - centerY;

    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(joystick.clientWidth / 2, Math.hypot(deltaX, deltaY));

    const thumbX = centerX + distance * Math.cos(angle);
    const thumbY = centerY + distance * Math.sin(angle);

    thumb.style.left = thumbX - rect.left - thumb.clientWidth / 2 + 'px';
    thumb.style.top = thumbY - rect.top - thumb.clientHeight / 2 + 'px';

    const normalizedAngle = (angle + 2 * Math.PI) % (2 * Math.PI);
    const angleInDegrees = (normalizedAngle * 180) / Math.PI;
    const joystickValue = Math.round(angleInDegrees / 45) % 8;

    switch (joystickValue) {
        case 0:
            emulateKeys("d")
            break;
        case 1:
            emulateKeys("sd")
            break;
        case 2:
            emulateKeys("s")
            break;
        case 3:
            emulateKeys("sa")
            break;
        case 4:
            emulateKeys("a")
            break;
        case 5:
            emulateKeys("wa")
            break;
        case 6:
            emulateKeys("w")
            break;
        case 7:
            emulateKeys("wd")
            break;
        default:
    }
}

function resetJoystick() {
    const rect = joystick.getBoundingClientRect();
    thumb.style.left = joystick.clientWidth / 2 - thumb.clientWidth / 2 + 'px';
    thumb.style.top = joystick.clientHeight / 2 - thumb.clientHeight / 2 + 'px';
    emulateKeys("")
}

function emulateKeys(str) {
    let keys = { "w": "keyup", "a": "keyup", "s": "keyup", "d": "keyup" }
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        keys[char] = "keydown";
    }
    try {
        gameFrame.document.dispatchEvent(new KeyboardEvent(keys['w'], { code: "KeyW" }));
        gameFrame.document.dispatchEvent(new KeyboardEvent(keys['a'], { code: "KeyA" }));
        gameFrame.document.dispatchEvent(new KeyboardEvent(keys['s'], { code: "KeyS" }));
        gameFrame.document.dispatchEvent(new KeyboardEvent(keys['d'], { code: "KeyD" }));
    } catch {

    }
}

function kick(str) {
    try {
        gameFrame.document.dispatchEvent(new KeyboardEvent(str, { code: "KeyX" }));
    } catch {}
}

function setupControls() {
    controlsHandler.name = "stylesheet";
    document.head.appendChild(controlsHandler);

    inputOptionsHandler.setAttribute("class", "input-options");
    inputOptionsHandler.setAttribute("hidden", "")
    inputOptionsHandler.innerHTML = '<div class="dialog settings-view" style="height:min-content"><h1>Controls</h1><button data-hook="closeinput" style="position:absolute;top:12px;right:10px">Back</button><div class="tabcontents"><div class="section selected"><div class="option-row"><div style="margin-right:10px;flex:1;min-width:60px">Size</div><div style="width:45px">0</div><input class="slider" type="range" min="10" max="30" step="0.01"></div><div class="option-row"><div style="margin-right:10px;flex:1;min-width:60px">Margin</div><div style="width:45px">0</div><input class="slider" type="range" min="0" max="15" step="0.01"></div><div class="option-row"><div style="margin-right:10px;flex:1;min-width:60px">Opacity</div><div style="width:45px">0</div><input class="slider" type="range" min="0.2" max="1" step="0.01"></div><br><button data-hook="resetinput">Reset</button></div></div></div>';
    body.parentNode.appendChild(inputOptionsHandler);
    body.parentNode.querySelector('[data-hook="closeinput"]').addEventListener("click", function() {
        inputOptionsHandler.setAttribute("hidden", "");
        showControls(false);
    });
    body.parentNode.querySelector('[data-hook="resetinput"]').addEventListener("click", function() {
        updateControlsOptions(20, 5, 1, true)
    });
    inputOptionsHandler.querySelectorAll(".option-row")[0].children[2].addEventListener("input", onControlsSettingsInput)
    inputOptionsHandler.querySelectorAll(".option-row")[1].children[2].addEventListener("input", onControlsSettingsInput)
    inputOptionsHandler.querySelectorAll(".option-row")[2].children[2].addEventListener("input", onControlsSettingsInput)

    joystick = document.createElement("div");
    joystick.setAttribute("class", "neo rounded sizer");
    joystick.setAttribute("view", "hidden");
    joystick.setAttribute("float", "");
    joystick.setAttribute("id", "joystick");
    joystick.innerHTML = '<div id="thumb" class="rounded" float></div>';
    joystick.addEventListener('touchstart', handleTouchStart);
    joystick.addEventListener('touchmove', handleTouchMove);
    joystick.addEventListener('touchend', handleTouchEnd);

    kickButton = document.createElement("button");
    kickButton.setAttribute("class", "neo rounded sizer");
    kickButton.setAttribute("view", "hidden");
    kickButton.setAttribute("float", "");
    kickButton.setAttribute("id", "kick");
    kickButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M290 49c-16 0-32 14-38 36-6 25 5 48 22 52 18 5 39-10 45-35 7-25-5-48-22-52l-7-1zM89 68 78 87c32 16 63 34 96 47l28-12c-40-16-77-34-113-54zm148 56c-48 26-98 42-154 62l9 16c52-16 111-33 161-56-7-6-12-13-16-22zm30 35c-22 11-46 20-71 29-20 45-28 95-37 140l-2 11-101-40-16 26 130 60 3-4 15-29a1672 1672 0 0 0 79-193zm-31 135-17 36c25 37 57 79 95 109l23-17c-36-40-73-85-101-128zm188 73a48 48 0 0 0-48 48 48 48 0 0 0 48 48 48 48 0 0 0 48-48 48 48 0 0 0-48-48z"/></svg>';
    kickButton.addEventListener('touchstart', function() { kick('keydown') });
    kickButton.addEventListener('touchend', function() { kick('keyup') });

    document.body.appendChild(joystick);
    document.body.appendChild(kickButton);

    const controlOptions = JSON.parse(localStorage.getItem("controls"));
    if (controlOptions === null) {
        updateControlsOptions(20, 5, 1, true)
    } else {
        updateControlsOptions(controlOptions[0], controlOptions[1], controlOptions[2], true)
    }

    resetJoystick();
}










let previousDigitalStickState = "";
let previousAnalogStickState = "";
let isXButtonPressed = false;

window.addEventListener("gamepadconnected", (event) => {
  console.log("Gamepad connected:", event.gamepad);
  checkGamepadState(event.gamepad);
});

window.addEventListener("gamepaddisconnected", (event) => {
  console.log("Gamepad disconnected:", event.gamepad);
});

function checkGamepadState(gamepad) {
  requestAnimationFrame(() => {
    const axes = gamepad.axes;
    const buttons = gamepad.buttons;

    // Check the digital stick (assuming 8 positions)
    const digitalStickState = getDigitalStickState(axes[0], axes[1]);
    if (digitalStickState.changed) {
      emulateKeys(digitalStickState.direction);
      previousDigitalStickState = digitalStickState.direction;
    }

    // Check the analog stick (assuming 2 positions)
    const analogStickState = getAnalogStickState(axes[2], axes[3]);
    if (analogStickState.changed) {
      emulateKeys(analogStickState.direction);
      previousAnalogStickState = analogStickState.direction;
    }

    // Check if the X button is pressed
    if ((buttons[0].pressed || buttons[2].pressed) && !isXButtonPressed) {
      kick("keydown");
      isXButtonPressed = true;
    } else if (!buttons[0].pressed && !buttons[2].pressed) {
      kick("keyup");
      isXButtonPressed = false;
    }

    // Recursively check for changes
    checkGamepadState(navigator.getGamepads()[gamepad.index]);
  });
}

function getDigitalStickState(x, y) {
  const threshold = 0.5;
  const centerThreshold = 0.1; // Adjust this threshold for center detection

  if (Math.abs(x) < centerThreshold && Math.abs(y) < centerThreshold) {
    return { changed: previousDigitalStickState !== "Center", direction: "Center" };
  }

  if (Math.abs(x) > threshold || Math.abs(y) > threshold) {
    const direction = getDirection(x, y);
    return { changed: direction !== previousDigitalStickState, direction };
  }

  return { changed: false };
}

function getAnalogStickState(x, y) {
  const threshold = 0.5;
  const centerThreshold = 0.1; // Adjust this threshold for center detection

  if (Math.abs(x) < centerThreshold && Math.abs(y) < centerThreshold) {
    return { changed: previousAnalogStickState !== "Center", direction: "Center" };
  }

  if (Math.abs(x) > threshold || Math.abs(y) > threshold) {
    const direction = getDirection(x, y);
    return { changed: direction !== previousAnalogStickState, direction };
  }

  return { changed: false };
}

function getDirection(x, y) {
  const angle = Math.atan2(y, x);
  const angleInDegrees = (angle >= 0 ? angle : (2 * Math.PI + angle)) * (180 / Math.PI);
  const sector = Math.round(angleInDegrees / 45) % 8;
  const directions = ["d", "sd", "s", "sa", "a", "aw", "w", "wd"];
  return directions[sector];
}