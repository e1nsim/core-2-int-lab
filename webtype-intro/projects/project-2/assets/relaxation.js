// console.log('hi!');

let candledata = {
    "brand": "Replica",
    "name": "By the Fire",
    "price": "$70",
    "scent": "Smoky, woody, spicy",
    "size": "165g",
    "setting": "Winter, relaxation",
    "description": "Recall the cozy and heartwarming atmosphere of a winter evening by the chimney. This luxury candle will fill your home with the addictive and wintery scent of wood and chestnuts grilling in the chimney. It unlocks the memory of a cozy winter evening by the chimney. The atmosphere created by this candle is warm and comforting bringing a reassuring sensation peacefulness. The warm and smoky scent of the candle has required many hours of work to adjust the ingredients of the fragrance created by renowned perfumer Marie Salamagne, and produce the exact same feeling of a reassuring warmth with the candle. Marie Salamagne used Cashmeran mixed with Clove oil to recreate the sensation of wood burning in the chimney (clove brings the burning effect of the wood). She reproduced the addictive scent of grilling Chestnuts using a Chestnuts Accord and the spicy effect of Red Berries.",
    "img": "replica-fire.png"
};

//setup container element
let container = document.getElementById("container");

// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python
fetch('../assets/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        processData(data);
    })
    .catch(error => console.log(error));


function sayHello() {
    console.log('Hello');
}


function processData(data) {
    let filteredData = data.filter(item => {
        // check if any property contains the word "winter"
        for (let key in item) {
            if (item.hasOwnProperty(key) && typeof item[key] === "string" && item[key].toLowerCase().includes("relaxation")) {
                return true;
            }
        }
        return false;
    });

    filteredData.forEach(function (item, index) {
        let newItem = document.createElement("div");
        newItem.classList.add("candle");
        newItem.innerHTML = `
        <div id="description" class="description">${item.description}</div>
        <div class="hidden">
            <div class="brand">${item.brand}</div>
            <div class="img"><img src="assets/images/${item.img}.png" id="img"></div>
            <div class="name">${item.name}</div>
            <div class="scent">${item.scent}</div>
            <div class="price">${item.price}</div>
            <div class="size">${item.size}</div>
            <div class="setting">${item.setting}</div>
            <div id="description" class="description1">${item.description}</div>
        </div>`;
        
        container.appendChild(newItem);
    });
    
}


sayHello();
