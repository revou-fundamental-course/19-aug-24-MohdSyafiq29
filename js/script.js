function replaceName() {
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("name").innerHTML = name;
  }
  
  replaceName();