
document.addEventListener('DOMContentLoaded', () => {
  const consoleDiv = document.getElementById('console');
  const inputField = document.getElementById('commandInput');
  const commands = {
    '!help': () => typeOut(`\nДоступные команды:\n!дс\n!тг\n!личка\n!ют\n`),
    '!дс': () => typeOut(`<div class='output'><a href="https://discord.gg/Q5z5dnHYSv" target="_blank">Discord - https://discord.gg/Q5z5dnHYSv</a></div>`),
    '!тг': () => typeOut(`<div class='output'><a href="https://t.me/WaweRat2837" target="_blank">Telegram - https://t.me/WaweRat2837</a></div>`),
    '!личка': () => typeOut(`<div class='output'><a href="https://t.me/anyta_2837" target="_blank">Личка - https://t.me/anyta_2837</a></div>`),
    '!ют': () => typeOut(`<div class='output'><a href="https://www.youtube.com/@Anytka2837" target="_blank">YouTube - https://www.youtube.com/@Anytka2837</a></div>`)
  };

  inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const input = inputField.value;
      typeOut(`\n> ${input}`);
      if (commands[input]) {
        setTimeout(() => commands[input](), 300);
      } else {
        setTimeout(() => typeOut(`Команда не найдена. Наберите !help`), 300);
      }
      inputField.value = '';
    }
  });

  function typeOut(text) {
    let i = 0;
    const div = document.createElement('div');
    consoleDiv.appendChild(div);
    const interval = setInterval(() => {
      div.innerHTML += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(interval);
      consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }, 20);
  }

  // Анти-DDoS и звезды
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('mainContent').style.display = 'flex';
  }, 2000);

  const starContainer = document.getElementById('stars');
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    starContainer.appendChild(star);
  }
});
