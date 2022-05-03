var element = document.createElement("ul");
element.classList.add('list-group');
var list = document.createElement("ul");
document.querySelector("#btn").addEventListener(
    'click',
    () => {
        var Name = document.querySelector("#Name").value;
        var Content = document.querySelector("#Content").value;
        var List = document.querySelector("#list");
        List.innerHTML +=
            `<h2>${Name},Activité :   ${Content} <h2>
                 <button id="delete" type = "button"
                 class = "btn btn-labeled btn-danger" >
                     <span class = "btn-label"> <i class = "bi bi-trash"> </i> </span > delete </button>
                     
            `
    })