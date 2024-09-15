function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "WOOO🌻🌻🌻";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "I can not wait to have this journey with you:) You are so special, and i am so grateful you have given me the chance to know you and fall in love with you, there are so many things i could say but none of them would be enough to describe you.💗💗💗";
    showConfetti()
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "BOOOOOO";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "BOOOOOOOOOOO";
    showConfetti()

}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ADD8E6', '#ADD8E6', '#ADD8E6'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 5000);
  }
  