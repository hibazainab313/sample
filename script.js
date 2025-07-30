 //  1. Variable: Array of fruits
    let fruits = [
      "Apple ",
      "Kiwi ",
      "Mango ",
      "Grapes ",
      "Papaya ",
      "Pineapple ",
      "Strawberry ",
      "Watermelon ",
      "Cherry  "
    ];

    // 2. Function: Show random fruit
    function showFruit() {
      //  3. Conditional + random logic
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
