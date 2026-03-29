function goToScanner() {
  window.location.href = "scanner.html";
}
function scanText() {
  let text = document.getElementById("inputText").value;

  let result = "Accessibility Score: 85/100<br>";
  result += "Suggestion: Simplify complex sentences.";

  document.getElementById("result").innerHTML = result;
}
function changeMode(mode) {
  let text = document.getElementById("text");

  if (mode === "adhd") {
    text.style.fontSize = "22px";
    text.style.lineHeight = "2";
    text.style.background = "#e0f7fa";
  } else if (mode === "dyslexia") {
    text.style.fontFamily = "OpenDyslexic, Arial";
  }
}
function translateText() {
  let text = document.getElementById("englishText").value;
  let lang = document.getElementById("language").value;

  let output = "";

  if (lang === "tamil") {
    output = "தமிழில்: " + text;
  } else if (lang === "telugu") {
    output = "తెలుగు: " + text;
  } else if (lang === "hindi") {
    output = "हिंदी: " + text;
  }

  document.getElementById("output").innerText = output;
}
function simplifyText() {
  let input = document.getElementById("inputText").value;

  // Fake AI simplification (for demo)
  let simplified = input
    .replace(/however/gi, "but")
    .replace(/therefore/gi, "so")
    .replace(/utilize/gi, "use");

  document.getElementById("outputText").value = simplified;
}

// 🔊 Voice Read
function readText() {
  let text = document.getElementById("outputText").value;

  let speech = new SpeechSynthesisUtterance(text);
  speech.rate = 0.9;

  speechSynthesis.speak(speech);
}

// 📖 Dyslexia Mode
function applyDyslexia() {
  let output = document.getElementById("outputText");

  output.style.fontFamily = "OpenDyslexic, Arial";
  output.style.letterSpacing = "2px";
}

// 🧠 ADHD Mode
function applyADHD() {
  let output = document.getElementById("outputText");

  output.style.background = "#e0f7fa";
  output.style.color = "#000";
  output.style.lineHeight = "2";
  output.style.fontSize = "20px";
}