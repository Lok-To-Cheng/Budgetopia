var users = [
    {
        username: "Admin",
        password: "520pounds"
    },
    {
        username: "Jasper",
        password: "Budgetopia"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    console.log("Username: "+username+"\nPassword: "+password)   
}