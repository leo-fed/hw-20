// 'Create and add to li a "close" button'  function
 const addCloseBtn = function (li:HTMLElement):void {
    const span:HTMLElement = document.createElement("SPAN");
    const txt:Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    span.addEventListener('click',  () => {
        li.style.display = "none";
    })
 }

//and append it to each list item
const myNodelist: HTMLCollection | null = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    const li: HTMLElement = <HTMLElement>myNodelist[i];
    addCloseBtn(li)
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLElement = <HTMLElement>document.getElementById('myUL');
list.addEventListener('click', (e) => {
    let target:HTMLElement = <HTMLElement>e.target;
    if (target.tagName == "LI") {
        target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
const addBtn:HTMLElement = <HTMLElement>document.getElementById('addBtn')
addBtn.addEventListener('click', () => {
    const li:HTMLElement = document.createElement("li");
    const input:HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
    const ul:HTMLUListElement = <HTMLUListElement>document.getElementById("myUL");
    let inputValue: string = input.value.trim();
    let t:Text = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        ul.appendChild(li);
        addCloseBtn(li);
        input.value = "";
    }
    
});