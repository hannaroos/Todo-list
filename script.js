const toDoInput = document.getElementById("todo-input");
const listContatiner = document.getElementById("list-container");
const toDoForm = document.querySelector("#todo-form");

const maxLimit = 5;

toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = toDoInput.value.trim();

     if (listContatiner.children.length >= maxLimit) {
        alert("Listan är full!");
        return;
    }

    if (text === ""){
        alert("Du måste skriva något!");
        return;

    } else {
        let li = document.createElement("li");

        const span = document.createElement("span");
        li.append(span);
        span.textContent = text;
        span.addEventListener ("click", () => {
            span.classList.toggle("done");
        });
            
        const del = document.createElement("button");
        del.textContent = "x";

        del.classList.add("del-btn");

        del.addEventListener("click", (e) => {
            e.target.parentElement.remove(); //e.target är knappen som klickas på och parentElement är knappens föräldrar - dess li. 
        });

        li.append(del);
        listContatiner.append(li);
    }

    toDoInput.value= ""; //tömmer input fältet efter att ett items lagt till.

});

const deleteBtn = document.getElementById("clear-btn");
    deleteBtn.addEventListener("click", () => {
        listContatiner.innerHTML = "";
    });