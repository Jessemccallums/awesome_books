const titleEl = document.querySelector('#title');
const authorEl = document.querySelector('#author');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let awesomeBooks = [];
  awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks') || '[]');
  console.log(awesomeBooks);
  if (titleEl.value !== '' && authorEl.value !== '') {
    const newBook = {
      title: titleEl.value,
      author: authorEl.value,
      id: Date.now().toString(),
    };
    awesomeBooks.push(newBook);

    // awesomeBooks = awesomeBooks.concat(JSON.parse(localStorage.getItem('awesomeBooks')));
    localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));

    window.location.reload();
  } else {
    const errorMessage = document.querySelector('#message-alert');

    errorMessage.textContent = 'fill all the field';
  }
});

const displaySection = document.querySelector('#display');

function display() {
  let awesomeBooks = [];
  awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks') || '[]');

  awesomeBooks.forEach((book) => {
    displaySection.innerHTML += `
      <div>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button class="remove" id="${book.id}">Remove</button>
      <hr>
      </div>
    `;
  });
}

display();

const removeBtn = document.querySelectorAll('.remove');
removeBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // e.preventDefault();
    let awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks'));
    awesomeBooks = awesomeBooks.filter((book) => book.id !== e.target.id);
    localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
    window.location.reload();
  });
});
