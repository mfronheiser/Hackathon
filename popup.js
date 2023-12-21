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

  const yesButton = document.getElementById('yes-button');
  yesButton.addEventListener('click', function () {
    chrome.tabs.create({
      url: 'https://youtu.be/yXQViqx6GMY?si=ZpGcdEcnl-6iafZ7',
    });
  });

  const noButton = document.getElementById('no-button');
  noButton.addEventListener('click', function () {
    chrome.tabs.create({
      url: 'https://www.seussville.com/app/uploads/2019/11/character-Grinch.png',
    });
  });
});
