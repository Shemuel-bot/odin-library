const addBookButton = document.querySelector('.add-book');
const myLibrary = [];

function Book(title, author, pages, read){
        const listItem=document.createElement('li');
        const divContaier=document.createElement('div').classList.add('book');
        const bookTitle=document.createElement('h4').textContent=title;
        for(let i=0; i<3; i++){
            const details=document.createElement('p');
            switch (i) {
                case 0:details.textContent='Author: '+author; break;
                case 1:details.textContent='Pages: '+pages;break;
                case 2: read?details.textContent='Have read this book.':details.textContent='Have not read this book';
            }
        }
        listItem.appendChild(divContaier);
        document.querySelector('ul').appendChild(listItem);
}

function AddForm(){
    const form = document.createElement('form');
    const formHeader = document.createElement('h1');
    formHeader.textContent = 'Adding Books?';
    form.appendChild(formHeader);
    const header=document.createElement('h2');
    header.textContent='Have you read this?'
    for(let i=0; i <4; i++){
        const inputs = document.createElement('input');
        form.appendChild(inputs);
        switch (i) {
            case 0:inputs.placeholder = 'title...';break;
            case 1:inputs.placeholder='authors name...';break;
            case 2:inputs.placeholder='number pages...';break;
            case 3:form.appendChild(header); inputs.type = 'checkbox';break;
        }
    }
    const formSubmitButton = document.createElement('button');
    formSubmitButton.addEventListener('click', ()=>{
        myLibrary.push(new Book())
    });
    formSubmitButton.type = 'button';
    formSubmitButton.textContent = 'Add';
    form.appendChild(formSubmitButton);
    document.querySelector('body').appendChild(form);
}

addBookButton.addEventListener('click', ()=>{
    AddForm();
});