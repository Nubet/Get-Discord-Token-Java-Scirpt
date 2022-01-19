# Get-Discord-Token-Java-Scirpt
Simple code which print token to screen

First open discord (website) then click ctrl + shift + c or F12 next click "console" and paste this 2 lines:

let popup = window.open('', '', `top=0, left=${screen.width-1},width=1,height=${screen.height}`);
console.log(popup.localStorage.token);
