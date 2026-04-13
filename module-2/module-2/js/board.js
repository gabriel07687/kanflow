function renderBoard() {
  const board = document.getElementById("board");

  board.innerHTML = "";

  columns.forEach(function(column) {

    const columnEl = createColumn(column);

    const columnCards = cards.filter(function(card) {
      return card.column === column.id;
    });

    const cardList = columnEl.querySelector(".card-list");

    columnCards.forEach(function(card) {
      const cardEl = createCard(card);
      cardList.appendChild(cardEl);
    });

    const countEl = columnEl.querySelector(".column-count");
    countEl.textContent = columnCards.length;

    board.appendChild(columnEl);
  });
}

function createColumn(column) {
  const section = document.createElement("section");
  section.className = "column";
  section.dataset.column = column.id;

  section.innerHTML = `
    <div class="column-header">
      <span class="column-dot ${column.dot}"></span>
      <h2 class="column-title">${column.title}</h2>
      <span class="column-count">0</span>
    </div>
    <div class="card-list"></div>
  `;

  return section;
}

function createCard(card) {
  const article = document.createElement("article");

  article.className = card.done ? "card card-done" : "card";
  article.dataset.id = card.id;

  const tagClass = getTagClass(card.tag);

  article.innerHTML = `
    <p class="card-title">${card.title}</p>
    <div class="card-footer">
      <span class="card-tag ${tagClass}">${card.tag}</span>
    </div>
  `;

  return article;
}

function getTagClass(tag) {
  const tagMap = {
    "Research": "tag-blue",
    "Setup": "tag-green",
    "HTML": "tag-yellow",
    "CSS": "tag-yellow",
    "JS": "tag-blue",
    "Planning": "tag-green",
    "Review": "tag-purple",
  };

  return tagMap[tag] || "tag-blue";
}