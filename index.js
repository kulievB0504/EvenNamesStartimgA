let name = prompt("What's your name?").toLowerCase().trim()

if (name[0] === 'a' && name.length % 2 === 0) {
    alert("Welcome")
} else {
    alert(`Go home, ${name} (only even names are aloowed)`)
}