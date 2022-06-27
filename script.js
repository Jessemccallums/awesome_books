const titleEl = document.querySelector('#title');
const authorEl = document.querySelector('#author');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let awesomeBooks = [];
    console.log(awesomeBooks);
    if (titleEl.value !== '' && authorEl.value !== '') {
        const newBook = {
            title: titleEl.value,
            author: authorEl.value,
            id: Date.now().toString(),
        };
        awesomeBooks.push(newBook);
        console.log(awesomeBooks);
        awesomeBooks = awesomeBooks.concat(JSON.parse(localStorage.getItem('awesomeBooks')));
        localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
        console.log(awesomeBooks);
        window.location.reload();
    } else {
        alert("invalid input value");
    }
})


const displaySection = document.querySelector('#display');

function display() {
    let awesomeBooks = [];
    awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks'));


    awesomeBooks.forEach((book) => {
    displaySection.innerHTML += `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button class="remove">Remove</button>
      <hr>
    `;
})
};

display();