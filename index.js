// Code your solutions in this f
function writeCards(names, event){
console.log(names)
console.log(event)
const messages = []
for (let i = 0; i < names.length; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
return messages
}

function countDown(n){
    

while (n >= 0) {
console.log(n--)
}
}
