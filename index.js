// debugger;
card = [2, 3, 4, 5, 6, 7, 8, 9, 10,'J','Q','K','T'];
suitCard = ['clubs', 'spades', 'diamonds', 'hearts'];
imgPerson = ['jack', 'queen','king'];
flesh = [];


for (i = 0; i < card.length; i++) {    
    
    for (j = 0; j < suitCard.length; j++) {        
        
        if (i === card.length -1) {
            result = `<div class='card card--person'>
        <div class='card__info'>${card[i]}<img src='images/${suitCard[j]}.svg'></div>
        <img class='person' src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'>
        <div class='card__info'>${card[i]}<img src='images/${suitCard[j]}.svg'></div>
        </div>`;
        flesh.push(result);
        } else {
        result = `<div class='card'>
        <div class='card__info'>${card[i]}<img src='images/${suitCard[j]}.svg'></div>
        <div class='card__info'>${card[i]}<img src='images/${suitCard[j]}.svg'></div>
        </div>`;
        flesh.push(result);
        }
    }
}





console.log(flesh);

document.write(`<div class='wrapper'>
${flesh.join('')}

</div>`)



//  for (k = 0; k < imgPerson.length; k++) {    

//     if (card[i] === 'J' || card[i] === 'Q' || card[i] === 'K') {
//             result = `<div class='card card--person'>
//             <div class='card__info'>${card[i]}<img src='images/${suitCard[j]}.svg'></div>
//             <img class='person' src='images/${imgPerson[k]}.svg' alt='${imgPerson[k]}'>
//             <div class='card__info'>${card[i]}<img src='images/${suitCard[j]}.svg'></div>
//             </div>`;
//             flesh.push(result);
//         }
//     }
