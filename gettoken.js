// old way console.log(document.body.appendChild(document.createElement(`iframe`)).contentWindow.localStorage.token);

let popup = window.open('', '', `top=0, left=${screen.width-1},width=1,height=${screen.height}`);
console.log(popup.localStorage.token);
