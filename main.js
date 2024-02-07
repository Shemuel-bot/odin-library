const addBookButton = document.querySelector('.add-book');
const myLibrary = [];




function Book(title, author, pages, read){
    this.listItem = document.createElement('li');
    document.querySelector('ul').appendChild(this.listItem);
    
    this.bookDiv = document.createElement('div');
    this.bookDiv.classList.add('book');
    this.listItem.appendChild(this.bookDiv);

    this.bookHeader = document.createElement('h4');
    this.bookHeader.textContent = title;
    this.bookDiv.appendChild(this.bookHeader);

    for (let index = 0; index < 3; index++) {
        this.para = document.createElement('p');
        this.bookDiv.appendChild(this.para);
        switch (index) {
            case 0:this.para.textContent='Author: '+author;break;
            case 1:this.para.textContent='Number of pages: '+pages;break;
            case 2:read.checked?this.para.textContent='Read':this.para.textContent='Have not read'; 
            this.para.id=title; AddStatusButton(read, title);break;
        }
    }
    


    this.remove = document.createElement('button');
    this.remove.textContent='Remove';
    this.remove.addEventListener('click', ()=>{
        myLibrary.map((x)=>{
            if(x.listItem.textContent==this.listItem.textContent){
                this.listItem.remove(); 
                myLibrary.splice(myLibrary.indexOf(x), 1);
                console.log(myLibrary);  
            }
        })
    })
    this.bookDiv.appendChild(this.remove);
}

//this is to add a checkbox to toggle whether you've read it or not
function AddStatusButton(initial, id){
    const checkBox = document.createElement('input');
    checkBox.type='checkbox';
    checkBox.checked = initial.checked;
    checkBox.addEventListener('click', ()=>{
        checkBox.checked?document.getElementById(id).textContent='Read':document.getElementById(id).textContent='Have not read'
        AddStatusButton(checkBox, id);
    })
    document.getElementById(id).appendChild(checkBox);

}                        

function AddForm(){
    addBookButton.removeEventListener('click', AddForm);
    const form = document.createElement('form');
    const formHeader = document.createElement('h1');
    const header=document.createElement('h2');
    formHeader.textContent = 'Adding Books?';
    form.appendChild(formHeader);
    header.textContent='Have you read this?';
    //for loop is here to create the input fields 
    for(let i=0; i <4; i++){
        const inputs = document.createElement('input');
        form.appendChild(inputs);
        switch (i) {
            case 0:inputs.placeholder = 'title...';inputs.id='title';break;
            case 1:inputs.placeholder='authors name...';inputs.id='author';break;
            case 2:inputs.placeholder='number pages...';inputs.type='number'; inputs.id='pages';break;
            case 3:form.appendChild(header); inputs.type = 'checkbox';inputs.id='read-check';break;
        }
    }
    const formSubmitButton = document.createElement('button');
    formSubmitButton.addEventListener('click', ()=>{
            let con = false;
            //this makes sure the books don't repeat
            myLibrary.map((x)=>{
                if (x.bookHeader.textContent === document.getElementById('title').value) {
                    con=true;
                }else{
                    con=false;
                }
             });
             if(!con){
            const newBook = new Book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('read-check'));
            myLibrary.push(newBook);}
    });
    formSubmitButton.type = 'button';
    formSubmitButton.textContent = 'Add';
    form.appendChild(formSubmitButton);
    document.querySelector('body').appendChild(form);
}

addBookButton.addEventListener('click', AddForm);