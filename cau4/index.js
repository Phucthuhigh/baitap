setInterval(() => {
    let now = new Date();
    let spanElement = document.querySelector('span');
    let timeNow = [now.getHours(), now.getMinutes(), now.getSeconds()]
    spanElement.innerHTML = timeNow.join(":");
},1000)


