const add = document.getElementById('add');
const status = document.getElementById('status');
const statusBtnNumber = document.getElementsByClassName('statusBtn')
const choice = document.getElementById('radioform');
const choices = radioform.radio;
const working = document.getElementsByClassName('working');
const complete = document.getElementsByClassName('complete');

const createStatusBtn = () => {
    const statusBtn = document.createElement('button');
    statusBtn.textContent = '作業中';
    statusBtn.className = ('statusBtn');
    
    statusBtn.addEventListener('click', ()=> {
       if (statusBtn.textContent === '作業中')　{
           statusBtn.textContent = '完了';
           statusBtn.parentNode.parentNode.className = ('complete');
       } else {
           statusBtn.textContent = '作業中';
           statusBtn.parentNode.parentNode.className = ('working');
       }
    });
    return statusBtn;
}

const deleteBtnCreate = (td4) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent ='削除';
    deleteBtn.className = ('deleteBtn');
    td4.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', ()=> {
        deleteBtn.parentNode.parentNode.parentNode.removeChild(deleteBtn.parentNode.parentNode);
    });
}

document.getElementById('addBtn').addEventListener('click', () => { 
    const tr = document.createElement('tr');
    tr.className = ('working');
    status.appendChild(tr);
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    
    tr.appendChild(td1);
    td1.innerHTML += statusBtnNumber.length;

    tr.appendChild(td2);
    td2.textContent += add.value;

    tr.appendChild(td3);
    const statusBtn = createStatusBtn();
    td3.appendChild(statusBtn);

    tr.appendChild(td4);
    deleteBtnCreate(td4);

    add.value = "";
});

choices[0].checked = true;

    choices[0].addEventListener('click', () => {
    const workings = Array.from(working);
    const completes = Array.from(complete);

    workings.forEach(working => {
        working.style.display = '';
    });
    completes.forEach(complete => {
        complete.style.display = '';
    });
})

choices[1].addEventListener('click', () => {
    const workings = Array.from(working);
    const completes = Array.from(complete);

    completes.forEach(complete => {
        complete.style.display = 'none';
    });
    workings.forEach(working => {
        working.style.display = '';
    });
})

choices[2].addEventListener('click', () => {
    const workings = Array.from(working);
    const completes = Array.from(complete);

    completes.forEach(working => {
        working.style.display = '';
    });
    workings.forEach(complete => {
        complete.style.display = 'none';
    });
})