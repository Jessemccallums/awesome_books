class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now().toString();
  }

  static add() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const addBtn = document.querySelector('#add-btn');
    const errorMessage = document.querySelector('#message-alert');

    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let awesomeBooks = [];
      awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks') || '[]');
      if (title.value !== '' && author.value !== '') {
        const newBook = new Book(title.value, author.value);
        awesomeBooks.push(newBook);
        localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
        window.location.reload();
      } else {
        errorMessage.textContent = 'Please fill every field';
      }
    });
  }

  static display() {
    const displayContainer = document.querySelector('#display');
    let awesomeBooks = [];
    awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks') || '[]');

    awesomeBooks.forEach((book) => {
      displayContainer.innerHTML += `
              <div class="bookstyle">
              <p>"${book.title}" by ${book.author}</p>
              <button class="remove" id="${book.id}">Remove</button>
              
              </div>
            `;
    });
  }

  static remove() {
    const removeBtn = document.querySelectorAll('.remove');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks'));
        awesomeBooks = awesomeBooks.filter((book) => book.id !== e.target.id);
        localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
        window.location.reload();
      });
    });
  }
}

Book.add();

Book.display();

Book.remove();

const listLink = document.querySelector('#list');
const addLink = document.querySelector('#add');
const contactLink = document.querySelector('#contact');

const listPage = document.querySelector('#display-section');
const formPage = document.querySelector('#form-section');
const contactPage = document.querySelector('#contact-section');

listLink.addEventListener('click', () => {
  listPage.style.display = 'flex';
  formPage.style.display = 'none';
  contactPage.style.display = 'none';
});

addLink.addEventListener('click', () => {
  listPage.style.display = 'none';
  formPage.style.display = 'flex';
  contactPage.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  listPage.style.display = 'none';
  formPage.style.display = 'none';
  contactPage.style.display = 'flex';
});

const timeSlot = document.querySelector('#time');

function displayTime() {
  const now = new Date();
  const month = (now.getMonth() + 1).toString();
  const year = now.getFullYear().toString();
  const day = now.getDay().toString();
  const hour = now.getHours().toString();
  const minute = now.getMinutes().toString();
  const second = now.getSeconds().toString();

  const timeToShow = `${month} ${day} ${year}, ${hour}:${minute}:${second}`;

  timeSlot.textContent = timeToShow;
}

displayTime();