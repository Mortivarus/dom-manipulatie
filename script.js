function fun() {
    let naam = "Henk"
    let color = ["brown", "red", "orange", "green", "purple"]
    let random = Math.floor(Math.random()*color.length)
    document.getElementById("herp").innerHTML = `Hallo, ${naam}!`;  
    document.getElementById("herp").style.color = color[random];
    }

document.getElementById("para").onclick = function() {
    fun()
}