var cardList, openNum

function config(){
    cardList = create();
    openNum = -1;
    openCard();
}

class Card {
    constructor(state, value) {
        this.state = state;
        this.value = value;
    }
    dig() {
        return this.value.length;
    }
}

function create() {
    let listOfCards = [];
    for (let i = 0; i < 10; i++) {
        let digit = Math.floor(Math.random() * 100);
        listOfCards.push(new Card(false, Math.floor(Math.random() * (10 ** digit * 9 - 1)) + 10 ** digit));
    }
    return listOfCards;
}

function update() {
    let initDiv = document.getElementById("cards");
    initDiv.innerHTML = "";
    for (let j = 0; j < 2; j++) {
        let tr = document.createElement("tr");
        initDiv.appendChild(tr);
        for (let k = 0; k < 5; k++){
            let td = document.createElement("td");
            td.id = j * 5 + k;
            tr.appendChild(td);

        }
    }
    for (let l = 0; l < cardList.length; l++) {
        let row = document.getElementById(l);
        let innerDiv = document.createElement("div");
        let innerPara = document.createElement("p");
        if (cardList[l].state == false) {
            innerDiv.className = "card close";
        } else {
            innerDiv.className = "card open";
            innerPara.innerHTML = cardList[l].value;
        }
        innerDiv.appendChild(innerPara);
        row.appendChild(innerDiv);
    }
}


function openCard(num) {
    if (num == undefined) {
        num = openNum + 1;
    }
    openNum = num;
    for (let m = 0; m < num + 1; m++) {
        console.log(m)
        cardList[m].state = true;
    }
    for (let m = num + 2; m < 10; m++) {
        console.log(m)
        cardList[m].state = false;
    }
    update();
}

function returnValue(argList) {
    let returnList = [];
    for (let n of argList) {
        returnList.push(n.value);
    }
    return returnList;
}


function confirmCard() {
    let maxValue = Math.max.apply(null, returnValue(cardList));
    if (maxValue == cardList[openNum].value) {
        alert("You win!");
    } else {
        alert("You lose!");
    }
    openCard(9);
}

config();