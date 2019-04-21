const add = document.getElementById('add');
const status = document.getElementById('status');
const statusBtnNumber = document.getElementsByClassName('statusBtn')
const element = document.getElementById('radioform');
const elements = element.radio
const working = document.getElementsByClassName('working');
const complete = document.getElementsByClassName('complete');

const statusBtnCreate = (td3) => {
    const statusBtn = document.createElement('button');
    statusBtn.textContent = '作業中';
    statusBtn.className = ('statusBtn');
    td3.appendChild(statusBtn);
    
    statusBtn.addEventListener('click', ()=> {
       if (statusBtn.textContent === '作業中')　{
           statusBtn.textContent = '完了';
           statusBtn.parentNode.parentNode.className = ('complete');
       } else {
           statusBtn.textContent = '作業中';
           statusBtn.parentNode.parentNode.className = ('working');
       }
    });
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
    statusBtnCreate(td3);

    tr.appendChild(td4);
    deleteBtnCreate(td4);

    add.value = "";
});

elements[0].checked = true;

element[0].addEventListener('click', () => {
    for (i = 0; i < working.length; i++) {
        working[i].style.display = '';
    }
    for (i = 0; i < complete.length; i++) {
        complete[i].style.display = '';
    }
})

element[1].addEventListener('click', () => {
    for (i = 0; i < complete.length; i++) {
        complete[i].style.display = 'none';
    }
    for (i = 0; i < working.length; i++) {
        working[i].style.display = '';
    }
})

element[2].addEventListener('click', () => {
    for (i = 0; i < working.length; i++) {
        working[i].style.display = 'none';
    }
    for (i = 0; i < complete.length; i++) {
        complete[i].style.display = '';
    }
})