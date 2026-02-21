function displayError(msg) {
    document.querySelector('.errors').textContent = msg;
}
function isCardNumberValid(number) {
    return number === '1234123412341234'
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    displayError('');

    let cardNumber = document.querySelector('#number');
    let fullName = document.querySelector('#fullName');
    let month = document.querySelector('#month');
    let year = document.querySelector('#year');
    const cardNum = cardNumber.value.trim();
    const nameValue = fullName.value.trim();
    const monthValue = Number(month.value.trim());
    const yearValue = Number(year.value.trim());
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear() % 100;
    if (!/^\d{16}$/.test(cardNum.replace(/\s/g, ''))) {
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum.replace(/\s/g, ''))) {
        errorMsg += 'Card number is not valid\n';
    } else if (nameValue === '') {
        errorMsg += 'Card Holder section can not be blank\n';
    } else if (yearValue < currentYear || (yearValue === currentYear && monthValue < currentMonth)) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    document.querySelector('#cards').innerHTML =
    `<h2>Payment Successful</h2>
    <p>The card under the name of ${nameValue} has been submitted.</p>`;
}

document.querySelector('#cards').addEventListener('submit', submitHandler);