//using selectors inside the element
// const questions = document.querySelectorAll(".question");
// questions.forEach(function(question){
//     const btns = question.querySelectorAll(".question-btn");
//     btns.forEach(function(btn){
//         btn.addEventListener("click", ()=>{
//             questions.forEach(function(item){
//                 if(item !== question){
//                     item.classList.remove("show-text")
//                 }
//             })
//             question.classList.toggle('show-text')
//         })
//     })
// })



// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click", (e)=>{
//         const item = e.currentTarget.parentElement.parentElement;

//         item.classList.toggle('show-text')
//     })
// })