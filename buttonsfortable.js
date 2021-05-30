let addButton = document.querySelector('button');
let table = document.querySelector('table');

let sNoInput = document.querySelector('#sNo');
let productInput = document.querySelector('#product');
let priceInput = document.querySelector('#price');

addButton.addEventListener('click', () =>{
    let sNo = sNoInput.value;
    let product = productInput.value;
    let price = priceInput.value;
    
    let template = `<tr>
        <td>${sNo}</td>
        <td>${product}</td>
        <td>${price}</td>
    </tr>`;

    table.innerHTML += template;
}); 