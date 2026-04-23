function addCard() {

  const input = document.getElementById('card-input');
  const title = input.value.trim();


  if (title === '') return;


  const newCard = {
    id: Date.now(),
    title: title,
    column: 'todo',
    tag: 'Task',
    done: false,
  };


  cards.push(newCard);

 
  input.value = '';

 
  renderBoard();
}

function deleteCard(id) {
  const index = cards.findIndex(function(card) {
    return card.id === id;
  });

  if (index !== -1) {
    cards.splice(index, 1);
  }

  renderBoard();
}