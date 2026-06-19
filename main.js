const elements = document.querySelectorAll(".terminal-text");

elements.forEach(element => {
  element.textContent = `root@craxker:~$ ${element.textContent}`;
});
