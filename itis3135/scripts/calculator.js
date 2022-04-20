const calc = document.querySelector('.calculator');
const keys = calculator.querySelector('.calc-keys');

keys.addEventListener('click', e => {
    if (e.targer.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
    }

    if (!action) {
        console.log('number key!');
    }
});
