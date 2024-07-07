const taskInput = document.querySelector("#taskinput");
const taskAddBtn = document.querySelector(".add_task");
const taskListEl = document.querySelector("ul");

const addTask = () => {
  
  if(taskInput.value === ""){
    return;
  }
  const task = taskInput.value; 
  const liEL = document.createElement("li");
  liEL.classList.add("newTask");
  const btnCon = document.createElement("div");
  btnCon.classList.add("btn-con")
 
  const completeBtnEL = document.createElement("button");
 completeBtnEL.classList.add("completeBtn");
  completeBtnEL.textContent = "Complete";
 
  const removeBtnEL = document.createElement("button");
 removeBtnEL.classList.add("removeBtn");
 removeBtnEL.textContent = "Remove";

btnCon.append(completeBtnEL);
btnCon.append(removeBtnEL);


liEL.append(task);
liEL.append(btnCon);

taskListEl.append(liEL);

completeBtnEL.addEventListener("click", () => {
 liEL.classList.toggle("completed");
})
removeBtnEL.addEventListener("click" , () =>{
    taskListEl.removeChild(liEL);
})

taskInput.value = "";
  
}



taskAddBtn.addEventListener("click", addTask);
