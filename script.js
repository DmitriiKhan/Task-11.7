let minValue;
let maxValue;
let answerNumber;
let orderNumber;
let gameRun;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

newGame();

function newGame(){
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
}

//кнопка сброса
document.getElementById('btnRetry').addEventListener('click', newGame)

//кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);

            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F630}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F61F}`;
                    break;
                case 2:
                    answerPhrase = `Кажется ты меня обманываешь!\n\u{1F613}`;
                    break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

//кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue - 1){
            const phraseRandom = Math.round( Math.random() * 3);

            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F630}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F61F}`;
                    break;
                case 2:
                    answerPhrase = `Кажется ты меня обманываешь!\n\u{1F613}`;
                    break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

//кнопка верно
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        phraseRandom = Math.round( Math.random() * 3);

        switch (phraseRandom) {
            case 0:
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 1:
                answerPhrase = `Это было легко! Ты загадал ${answerNumber}!\n\u{1F60B}`;
                break;
            case 2:
                answerPhrase = `Ты загадал ${answerNumber}! Изи!\n\u{1F60F}`;
                break;
        }

        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})
