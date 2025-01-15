function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("text").innerHTML=this.responseText 

        } else if(this.readyState == 4 && this.status == 404){
            document.getElementById("text").innerHTML = "file not found"

        }
    };
    xhttp.open('GET',"https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();  
};

