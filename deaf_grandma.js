function deaf_grandma() {
let run = true
    let goodbyes = 0
    let userInput = prompt("HEY KID!")
    
    while (run === true ) {
        if (userInput === "") {
            userInput = prompt("WHAT!?")
        } else if (userInput === "GOODBYE!") {
            if (goodbyes === 0) {
                goodbyes += 1
                userInput = prompt("LEAVING SO SOON?")
            } else if (goodbyes === 1) {
                alert("LATER, SKATER!")
                run = false
            }
        } else if (userInput === userInput.toUpperCase()) {
            userInput = prompt('NO, NOT SINCE 1946!')
        } else {
            userInput = prompt("SPEAK UP, KID!")
        }
    }
}
deaf_grandma()