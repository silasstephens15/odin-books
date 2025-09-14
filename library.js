const library = [];

function Book(name, read) {
  this.name = name;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, read) {
  let newBook = new Book(name, read);
  library.push(newBook);
}
