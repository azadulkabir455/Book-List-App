let title = document.querySelector('#title');
let author = document.querySelector('#author');
let year = document.querySelector('#year');
let btn = document.querySelector('.btn');
let bookList = document.querySelector('#book-list');

btn.addEventListener('click', addBook);


function addBook(e) {
    e.preventDefault();

    if(title.value == "" && author.value == "" && year.value == "") {
        alert("Input data please");
    } else {
        let createRow = document.createElement('tr');

        let titleData = document.createElement('td');
        titleData.innerHTML = title.value;
        createRow.appendChild(titleData);

        let authorData = document.createElement('td');
        authorData.innerHTML = author.value;
        createRow.appendChild(authorData);

        let yearData = document.createElement('td');
        yearData.innerHTML = year.value;
        createRow.appendChild(yearData);

        bookList.appendChild(createRow);
    }
}