const messages = [
    "Sachi jaan 🥹",
    "M aapko psnd nhi hu 🥹🥹",
    "Please babu 🥹",
    "Haan boldo na 🥹🥹",
    "Ek bar socho toh, m acha ladka hu 🥹🥹",
    "M rone lag jaunga 😭😭",
    "Last bar puch raha hu 🥹 haan boldo 🥹🥹",
    "Please haan bolo na 🥹 khush rakhunga aapko 😊😊",
    "Final wala last time babu 🥹, aapko kabhi tang nhi karunga fir 🥹🥹",
    "Suno na 🥹 please haan kardo jaan 🥹🥹"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
