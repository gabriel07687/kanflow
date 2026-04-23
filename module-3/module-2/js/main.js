renderBoard();

// Click event
const addBtn = document.getElementById('add-card-btn');
addBtn.addEventListener('click', addCard);

// Keypress event
const input = document.getElementById('card-input');
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addCard();
  }
});