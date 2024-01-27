const fakto = (n) => {
let f = 1
    for(let i=n; i>1; i--){
        f = f * i
    }
return f
}

const number = +prompt("n:")

number<0
? alert("Number should be bigger than zero")

: console.log(`Fakto(${number})= ${fakto(number)}`)


