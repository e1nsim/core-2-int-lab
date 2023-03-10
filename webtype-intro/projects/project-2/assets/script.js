// console.log('hi!');

let letters = ['a', 'b', 'c']; //an array;

let candledata = {
    "brand": "Replica",
    "name": "By the Fire",
    "price": 70,
    "scent": "warm | spicy",
    "size": "165 g",
    "setting": "winter, relaxation",
};

//setup container element
let container = document.getElementById("container");

// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python
fetch('./assets/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        processEmojis(data);
    })
    .catch(error => console.log(error));


function sayHello() {
    console.log('Hello');
}

function processEmojis(data) {
    data.forEach(function (item, index) {
        console.log(item, index);
        let usage = item['general-usage'] * 10;
        console.log('usage', usage);
        let newItem = document.createElement("div");
        newItem.classList.add("icon");
        newItem.classList.add(item.categorykey);
        // newItem.style.cssText = `font-size: ${usage}px`;
        newItem.innerHTML = `
      <!--commenting out <div class="image"><img src="assets/images/${item.img}.jpg"></div>-->
      <div class="brand">${item.brand}</div>
      <div class="name">${item.name}</div>
      <div class="price">${item.price}</div>
      <div class="scent">${item.scent}</div>
      <div class="size">${item.size}</div>
      <div class="setting">${item.setting}</div>`;
        container.appendChild(newItem);
    });
}

sayHello();
