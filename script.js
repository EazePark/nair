document.addEventListener("DOMContentLoaded", function() {
  const hackertyperElement = document.getElementById("hackertyper");

  const text = `
        Access Granted...
        Welcome to the Mainframe.
        Initializing...
        `;

  let index = 0;
  let interval = setInterval(function() {
    if (index <= text.length) {
      hackertyperElement.innerHTML = text.slice(0, index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 50);
});
