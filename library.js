const library = [];

function Book(name, read) {
  this.name = name;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, read) {
  let newBook = new Book(name, read);
  library.push(newBook);

  const container = document.querySelector(".card-container");
  const card = document.createElement("div");
  card.classList.add("card");
  const title = document.createElement("h2");
  title.textContent = name;
  const wasRead = document.createElement("p");
  if (read) {
    wasRead.textContent = "Read";
  } else {
    wasRead.textContent = "Not yet read";
  }
  const button = document.createElement("button");
  button.id = newBook.id;
  button.textContent = "Delete";

  container.appendChild(card);
  card.appendChild(title);
  card.appendChild(wasRead);
  card.appendChild(button);
}
