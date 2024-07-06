
const Taskbtn = document.getElementById('Add_Task')

//for editing the task
const uptsk = document.getElementById('edit-section')

Taskbtn.addEventListener('click',() => taskadd());

function taskadd(){
        const input = document.getElementById('typtsk');
        let inputvalue = input.value;
        
        if (inputvalue.trim() !== "") {
            let li = document.createElement("li");
            // li.innerText = inputvalue;
            const list = document.getElementById('TaskList');
            list.appendChild(li);
            
            
            const task = document.createElement('p')
            task.innerText = inputvalue;
            input.value = " ";

            //for marking the task complete
            const completeButton = document.createElement('input');
            completeButton.type = 'checkbox';
            completeButton.addEventListener('click', () => 
                     toggleCompleteTask(completeButton));
            
            //for editing the Task
            const editbutton = document.createElement('button');
            editbutton.innerText = '✍️';
            editbutton.classList.add("edit-button");
            editbutton.addEventListener('click',() => edittask(task))
            
            //button for deleting the task 
            const deleteButton = document.createElement('button');
            deleteButton.textContent= '🗑️';
            deleteButton.addEventListener('click',() => deletetask(li))
            
            li.appendChild(completeButton);
            li.appendChild(task);
            li.appendChild(editbutton);
            li.appendChild(deleteButton);
        }
}

function toggleCompleteTask(el1) {
   if(el1.checked){
    el1.parentElement.style.textDecorationLine = 'line-through';
   }
else{
    el1.parentElement.style.textDecorationLine = 'none';
   }
}

function deletetask(el){
    el.remove();
}


function  edittask(el){
    currentTaskElement = el;
        uptsk.innerHTML = `
        <input type="text" id="updatetsk" value="${el.innerText}">
        <button id="updatebtn">update</button>
        `;
    
        uptsk.style.display = 'block';
        const updateBtn = document.getElementById('updatebtn')
        updateBtn.addEventListener('click',() => updateb(el) )
    }
    function updateb(el){
        const editInput = document.getElementById('updatetsk')
        el.textContent = editInput.value;
        uptsk.style.display = 'none';
        console.log("updating")
    }



