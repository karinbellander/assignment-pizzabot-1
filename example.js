const name = "Karin"
const age = 30
const wasBorn = true
const lastname ="BEllander"

console.log(name+name)
console.log(age+name)
console.log(wasBorn)

const text = "Skådespelare. Ingenjörer. Sångare. Jurister, politiker och artister. Hösten 2017 satte svenska kvinnor i olika branscher ner foten. Tusentals samlades i upprop och lovade att aldrig mer hålla tyst om sexuella övergrepp och trakasserier."


if (text.length > 30) {
  console.log("En lång text!")
}

else {
  console.log("En kort liten text")
}



const myString = (namnArgument) => {
  return namnArgument.charAt(6)
}

console.log(myString ("Hello world"))
console.log(myString("Some other string"))

alert("Hello world")

const feeling = prompt("How are you feeling?")
console.log(feeling)
