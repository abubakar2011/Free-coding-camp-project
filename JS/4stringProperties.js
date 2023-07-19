console.log("abubakar")
console.warn("Abubakar")
console.error("abubakar")

const js = "javascript"
const adj="very much"

// console.log(js.concat("is great","and very good","abd i am learning it"))


console.log(js[0])

console.log(js.indexOf("a"))
console.log(js.lastIndexOf("a"))

const nam = document.getElementById("nam")
nam.innerHTML=`this is my ${js} and i love it  ${adj}`.toUpperCase()

const ame = document.getElementById("ame")
ame.innerHTML="Front end Developer | Learning Javascript".toUpperCase()

const nn = document.getElementById("nn")
nn.innerHTML="Abu Bakr was an adviser to the prophet Muhammad, the founder of Islam.".toUpperCase()

const nae = document.getElementById("nae")
nae.innerHTML="school : St. Joseph's Convent High School  Adilabad.".toLowerCase()

const nama = document.getElementById("nama")
nama.innerHTML="siddi abu bakar study's in 8th class.".toUpperCase()

// slice method

console.log(js.slice(4,-1))
console.log(js.substring(4,-1))
console.log(js.split("-"))


// const na = "13-7-2023"

// console.log(na.split("13-7-"))
// console.log(na.split("-")[2])

// console.log(na.Boolean="true")
// prinitng las element of this array


// search help to find if not then minus 1
console.log(js.search("adss"))

// template literals in js

console.log(`this is my ${js} and i love it  ${adj}`)

const name = "SiddiAbu Bakar"
// i want u to use template literals to innerHTML in dom 
document.getElementById("nn").innerHTML=`my name is ${name}`
