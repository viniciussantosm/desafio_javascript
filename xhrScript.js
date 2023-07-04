function fetchUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("resultContainer").innerText = this.responseText;
        }
    };

    // Add new User
    // let dataToSend = JSON.stringify({title: "Produto Teste"});
    // xhttp.open("POST", "https://dummyjson.com/users/add", true);
    // xhttp.setRequestHeader("Content-Type", "application/json");
    // xhttp.send(dataToSend);

    // Get single User
    // xhttp.open("GET", "https://dummyjson.com/users/99", true);
    // xhttp.send();

    // Get all Users
    xhttp.open("GET", "https://dummyjson.com/users?limit=0", true);
    xhttp.send();
}

fetchUsers();