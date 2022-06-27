
const aweosomeBooks = [
    {
        title: "Lorem",
        author: "author1",
    },
    {
        title: "Dummy",
        author: "Author2"
    },
    {
        title: "Jitterburg Perfume",
        author: "Tom Robbins"
    }
]


const titleEl = document.querySelector('#title');
const authorEl = document.querySelector('#author');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const newBook = {
        title: titleEl.value,
        author: authorEl.value
    };

    aweosomeBooks.push(newBook);

    console.log(aweosomeBooks);
})

const displaySection = document.querySelector('#display');

function display() {
    aweosomeBooks.forEach((book) => {
    displaySection.innerHTML += `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button class="remove">Remove</button>
      <hr>
    `;
})
};

display();
