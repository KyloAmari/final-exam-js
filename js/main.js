/**
 * Color 1 : #607EAA
 * Color 2 : #AC7088
 * Color 3 : #EED180
 * Color 4 : #F37878
 * Color 5 : #90C8AC
 * Color 6 : #D8CCA3
 * Color 7 : #82A284
 */


let todoList = [
    {
        id: 1,
        date: "2022-08-10",
        time: "11:30",
        todo: "Belanja Mingguan",
        color: "#90C8AC"
    },
    {
        id: 2,
        date: "2022-08-10",
        time: "10:30",
        todo: "Memasak makanan",
        color: "#F37878"
    },
    {
        id: 3,
        date: "2022-08-20",
        time: "17:30",
        todo: "Belajar Coding",
        color: "#EED180"
    },
    {
        id: 4,
        date: "2022-08-13",
        time: "14:30",
        todo: "Bersih-bersih rumah",
        color: "#82A284"
    },
    {
        id: 5,
        date: "2022-08-16",
        time: "19:30",
        todo: "Mencuci Baju",
        color: "#607EAA"
    }
]

const showToDo = (data) => {


    let content = "";

    if(data === undefined){
        data = todoList;
    }

    data.forEach(element => {
        content += `
            <div style="background-color:${element.color}">
                <h1>${element.todo}</h1>
                <p>${element.time}</p>
                <h6>${element.date}</h6>
                <a onclick="deleteData(${element.id})">Hapus</a>
            </div>
        `
    });
    document.getElementById("list-todo").innerHTML = content;
}

showToDo();


const addData = () => {
    
    let inputDate = document.getElementById("inputDate").value;
    let inputTime = document.getElementById("inputTime").value;
    let inputTodo = document.getElementById("inputTodo").value;
    let inputColor = document.querySelector('[name="colorOption"]:checked').value;

    if (inputDate == "" || inputTime == "" || inputTodo == "") {
        alert("Masukkan data terlebih dahulu!");
        return;
    }

    todoList.push({date : inputDate, time : inputTime, todo : inputTodo, color : inputColor});
    showToDo();
    clearData();
}

function clearData() {
    document.getElementById("inputDate").value = "";
    document.getElementById("inputTime").value = "";
    document.getElementById("inputTodo").value = "";
    document.getElementsByName("colorOption")[0].checked = true;
}



function sortAscending() {
    todoList.sort(function(a,b){return new Date(a.date) - new Date(b.date)});
    showToDo();
};

function sortDescending() {
    todoList.sort(function(a,b){return new Date(b.date) - new Date(a.date)});
    showToDo();
};

function deleteData(id) {
    todoList.forEach((element, index) => {
        if(id === element.id) {
            todoList.splice(index, 1)
        }
    });
    showToDo();
}

function searchData() {
    let text = document.getElementById("search").value;
    text = text.toLowerCase();
    const result = todoList.filter(element => element.todo.toLowerCase().indexOf(text) != -1)
    showToDo(result);
}