 
    let fruits = [
      "Apple ",
      "Kiwi ",
      "Mango ",
      "Grapes ",
      "Papaya ",
      "Pineapple ",
      "Strawberry ",
      "Cherry  "
    ];

    
    function showFruit() {
      
      if (fruits.length > 0) {
        let randomIndex = Math.floor(Math.random() * fruits.length);
        let selectedFruit = fruits[randomIndex];
        document.getElementById("fruitDisplay").innerText = selectedFruit;
      } else {
        document.getElementById("fruitDisplay").innerText = "No fruits found!";
      }
    }
    function showMessage(){
      alert("new java script")
      }
      try {
  const PI = 3.141592653589793;
  PI = 3.14;
}
catch (err) {
  document.getElementById("demo").innerHTML = err;
}
      
