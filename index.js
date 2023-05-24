// debugger;
card = [2, 3, 4, 5, 6, 7, 8, 9, 10];
cardPerson = ['J','Q','K','T'];
suitCard = ['clubs', 'spades', 'diamonds', 'hearts'];
imgPerson = ['jack', 'queen','king'];
flesh = [];
fleshPerson = [];


for (i = 0; i < card.length; i++) {    
    
    for (j = 0; j < suitCard.length; j++) {        
        result = `<div class='card'>
        <div class='card__info'>${card[i]}<img src='images/${suitCard[j]}.svg'></div>
        <div class='card__info'>${card[i]}<img src='images/${suitCard[j]}.svg'></div>
        </div>`;
        flesh.push(result);
    }
    
}

for (c = 0; c < cardPerson.length; c++) {

    for (j = 0; j < suitCard.length; j++) {

        if (c === cardPerson.length -1 ) {
            resultPerson = `<div class='card card--person'>
            <div class='card__info'>${cardPerson[c]}<img src='images/${suitCard[j]}.svg'></div>
            <img class='person' src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'>
            <div class='card__info'>${cardPerson[c]}<img src='images/${suitCard[j]}.svg'></div>
            </div>`;
            fleshPerson.push(resultPerson);
        }

        for (k = 0; k < imgPerson.length; k++) {
        
            if (c === k) {
                resultPerson = `<div class='card card--person'>
                <div class='card__info'>${cardPerson[c]}<img src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'></div>
                <img class='person' src='images/${imgPerson[k]}.svg' alt='${imgPerson[k]}'>
                <div class='card__info'>${cardPerson[c]}<img src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'></div>
                </div>`;            
                fleshPerson.push(resultPerson);
            } 
        
        
        
        }
    }
}

document.write(`<div class='wrapper'>
${flesh.join('')}
${fleshPerson.join('')}
</div>`)