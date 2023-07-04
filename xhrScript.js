function fetchUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("resultContainer").innerHTML = this.responseText;
        }
    };
    // let dataToSend = JSON.stringify({title: "Produto Teste"});
    
    // xhttp.open("POST", "https://dummyjson.com/products/add", true);
    // xhttp.setRequestHeader("Content-Type", "application/json");
    // xhttp.send(dataToSend);

    // Get single Product
    // xhttp.open("GET", "https://dummyjson.com/products/99", true);
    // xhttp.send();

    // Get all Products
    xhttp.open("GET", "https://dummyjson.com/products?limit=0", true);
    xhttp.send();
}

fetchUsers();