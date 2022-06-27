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
