document.addEventListener('DOMContentLoaded', () => {
  const dialogBox = document.getElementById('dialog-box');
  const query = { active: true, currentWindow: true };

  chrome.tabs.query(query, (tabs) => {
    dialogBox.innerHTML = 'Ned a little holiday cheer?';
  });

  //   const myButton = document.getElementById('help-button');
  //   myButton.addEventListener('click', function () {
  //     (window.open = 'https://youtu.be/yXQViqx6GMY?si=ZpGcdEcnl-6iafZ7'),
  //       '_blank';
  //   });

  const button1 = document.getElementById('help-button');
  button1.addEventListener('click', function () {
    chrome.tabs.create({
      url: 'https://youtu.be/yXQViqx6GMY?si=ZpGcdEcnl-6iafZ7',
    });
  });
});
