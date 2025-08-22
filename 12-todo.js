//for 1

// const TodoList = ['make dinner','hi'];
// function todo(){
//     const inputEle = document.querySelector('.js-input');
//     const name = inputEle.value;

//     TodoList.push(name);
//     console.log(TodoList);  
//     inputEle.value = '';
   
// }

//for 2

// const todoList=['make dinner'];
// renderTodoList();
// function renderTodoList(){
//       let todoListHTML='';

// for(let i=0;i<todoList.length;i++){
//     const todo=todoList[i];
//     const html=`<p>${todo}</p>`;
//     todoListHTML+=html;
// }
// document.querySelector('.output').innerHTML=todoListHTML;
// }
// function addTodo(){
//   const inputELe = document.querySelector('.js-input');
//   const name = inputELe.value;
//   todoList.push(name);
//   console.log(todoList);

//   inputELe.value='';
//   renderTodoList();
// }

//for 3
const todoList=[
  // {
  //   name : 'make dinner ',
  //   dueDate : '  02-10-2025'
  // },
  // {
  //   name :'wash dishes ',
  //   dueDate : ' 02-11-2025'
  // }
  ];
// renderTodoList();
function renderTodoList(){
      let todoListHTML='';

todoList.forEach((todoOBj,index) => { 
    
    const {name,dueDate}=todoOBj;
    const html=`
    <div>${name}</div>  
    <div>${dueDate}</div>
    <button class="deleteBtn">Delete</button>
    `;
    todoListHTML+=html;
});


// console.log(todoListHTML);
document.querySelector('.output').innerHTML=todoListHTML;

document.querySelectorAll('.deleteBtn')
.forEach((deleteBtn,index)=>{
    deleteBtn.addEventListener('click',()=>{
      todoList.splice(index,1);
    renderTodoList();
    })
})

}

document.querySelector('.addBtn')
.addEventListener('click',()=>{
  addTodo();
});
document.querySelector('.js-input')
.addEventListener('keydown',(event)=>{
  
  if(event.key === 'Enter'){
    addTodo();
  }  
});

function addTodo(){
  const inputELe = document.querySelector('.js-input');
  const name = inputELe.value;

  const dateInputEle = document.querySelector('.Js-dueDate-input');
  const dueDate = dateInputEle.value;

  todoList.push(
   {
    // name:name,
    // dueDate:dueDate
    name,
    dueDate
   }
  );
  console.log(todoList);

  inputELe.value='';
  renderTodoList();
}

