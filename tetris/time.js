let field = document.getElementsByClassName("field")[0];
let cell = document.createElement("div");
let width = field.offsetWidth / 10;
console.log(width);
let height = width;
cell.style.width = width;
cell.style.height = height;
cell.style.backgroundColor = "width";
cell.style.border = "white";
cell.style.border = "1px solid black";

for(let i = 0; i<4; i++)(
    let copyCell = cell.cloneNode(true)
    field.appendChild(copyCell);
)
