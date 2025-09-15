const library = [];

function Book(name, read) {
  this.name = name;
  this.read = read;
  this.id = "a" + crypto.randomUUID();
}

Book.prototype.changeRead = function () {
  this.read = !this.read;
  const wasRead = document.querySelector(`#${this.id} p`);
  if (this.read) {
    wasRead.textContent = "Read";
  } else {
    wasRead.textContent = "Not yet read";
  }
};

function addBookToLibrary(name, read) {
  let newBook = new Book(name, read);
  library.push(newBook);

  const container = document.querySelector(".card-container");
  const card = document.createElement("div");
  card.id = newBook.id;
  card.classList.add("card");
  const title = document.createElement("h2");
  title.textContent = name;
  const wasRead = document.createElement("p");
  if (read) {
    wasRead.textContent = "Read";
  } else {
    wasRead.textContent = "Not yet read";
  }
  const toggle = document.createElement("button");
  toggle.classList.add("toggle");
  toggle.textContent = "Toggle Read";
  toggle.id = newBook.id;
  const button = document.createElement("button");
  button.id = newBook.id;
  button.classList.add("delete");
  button.textContent = "Delete";

  container.appendChild(card);
  card.appendChild(title);
  card.appendChild(wasRead);
  card.appendChild(toggle);
  card.appendChild(button);
}

const body = document.querySelector("body");

body.addEventListener("click", (e) => {
  if (e.target.id === "add-book") {
    const popup = document.querySelector("dialog");
    popup.showModal();
    const submit = document.querySelector("#submit");
    submit.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        popup.close();
        const nameInput = document.querySelector("#name");
        const readInput = document.querySelector("#read");
        let name = nameInput.value;
        let read = readInput.checked;

        addBookToLibrary(name, read);
      },
      { once: true }
    );
  }
  if (Array.from(e.target.classList).includes("delete")) {
    for (let i = 0; i < library.length; i++) {
      if (e.target.id === library[i].id) {
        const delCard = document.querySelector(`#${library[i].id}`);
        delCard.remove();
        library.splice(i, 1);
      }
    }
  }
  if (Array.from(e.target.classList).includes("toggle")) {
    for (let i = 0; i < library.length; i++) {
      if (e.target.id === library[i].id) {
        library[i].changeRead();
      }
    }
  }
});
