const item = document.querySelector('#item');
const price = document.querySelector('#price');
const des = document.querySelector('#des');
const btn = document.querySelector('#btn');
const form = document.querySelector('form');
const pic = document.querySelector('#pic');
const body = document.querySelector('body');
const div = document.createElement('div');
const AllItems = document.querySelector('#allItems')
form.addEventListener('submit', function (event) {
    makeitem();
    
    div.setAttribute('class', 'container-fluid d-flex justify-content-evenly my-4 flex-wrap');
    
    event.preventDefault();
})

function makeitem() {
    
    const div2 = document.createElement('div');
    div.append(div2);
    div2.setAttribute('class', 'card my-4');
    div2.style.width = '18rem';
    const img = document.createElement('img');
    img.setAttribute('class', 'card-img-top');
    img.src = `${pic.value}`;
    const div3 = document.createElement('div');
    div3.setAttribute('class', 'card-body');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    p.innerText = `Name:   ${item.value}`;
    p2.innerText = `Price: ${price.value}`;
    p3.innerText =`Description: ${des.value}`
    p.setAttribute('class', 'card-text');
    p2.setAttribute('class', 'card-text');
    p3.setAttribute('class', 'card-text');
    p4.setAttribute('class', 'card-text');
    const btn2 = document.createElement('button');
    btn2.setAttribute('class', 'btn btn-primary');
    btn2.innerText = 'Order Now';
    AllItems.append(div);
    div.append(div2)
    div2.append(img);
    div2.append(div3);
    div3.append(p);
    div3.append(p2);
    div3.append(p3);
    div3.append(p4);
    div3.append(btn2)


}