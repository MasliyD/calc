let a = '',
    b = '',
    sign = '',
    finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const actions = ['-', '+', '/', '*'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.calc-buttons').onclick = (e) => {
    if (!e.target.classList.contains('calc-btn')) return;
    if (e.target.classList.contains('ac')) return;
    
    out.textContent = '';

    const key = e.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            out.textContent = b;
            finish = false;
        } else {
            b += key;
            out.textContent = b;
        }

        console.log(a, b, sign);
        return;
    }

    if (actions.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '*':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Error!';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }

    if (key === '%') {
        a = a / 100;
        out.textContent = a;
    }

    if (key === '+/-') {
        a = a * (-1);
        out.textContent = a;
    }
};