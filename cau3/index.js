function numberOneTriangle() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            let spanElement = document.createElement('span');
            document.body.appendChild(spanElement);
            spanElement.innerHTML = '1'
        }
        let brElement = document.createElement('br');
        document.body.appendChild(brElement);
    }
}

numberOneTriangle();