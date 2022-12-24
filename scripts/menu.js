// This file is for debug elements not final to the game
function exportDeck() {
  document.getElementById("decklist").value = current_deck.toString().replace(/,/g,"\n")
  
  
  }
  function getDeck() { // get a custom deck from input string
    var input = document.getElementById("decklist").value;
    current_deck = input.split("\n"); //take input string and turn to list 
    Shuffle()
  }
  function getRandom(){ // gets a random structured deck 
    var zeroSouls = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    var oneSouls = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
    var twoSouls = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
    var threeSouls = [48,49,50,51,52,53,54,55]
    var spells = [56,57,58,59,61,62,63,64,66,67,68,69,71,73]
    var items = [60,65,70,72,74,75]
    
    current_deck= [];
  
    for (var i = 0; i < 12; i++) { 
      current_deck.push(zeroSouls[Math.floor(Math.random()*zeroSouls.length)]);
      
    }
    for (var i = 0; i < 4; i++) {  
      current_deck.push(oneSouls[Math.floor(Math.random()*oneSouls.length)]);
    }
    for (var i = 0; i < 4; i++) { 
      current_deck.push(twoSouls[Math.floor(Math.random()*twoSouls.length)]);
    }
  
    for (var i = 0; i < 3; i++) {  
      current_deck.push(threeSouls[Math.floor(Math.random()*threeSouls.length)]);
    }
    for (var i = 0; i < 5; i++) { 
      current_deck.push(spells[Math.floor(Math.random()*spells.length)]);
    }
  
    for (var i = 0; i < 2; i++) {  
      current_deck.push(items[Math.floor(Math.random()*items.length)]);
    }
    
    Shuffle();
  
  }
  function renderAll(){ //debug feature to render all cards
   
    document.getElementById("fullboard").style.display = "none";
    document.getElementById("search-box").style.display = "flex";
  
    for (var i = 0; i < 124; i++) {
      search.appendChild(createCard(i));
    }
   
  }
  function Shuffle() { //randomize cards in deck
    for (let i = current_deck.length - 1; i > 0; i--) { //true randomize function
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.current_deck[newIndex];
      this.current_deck[newIndex] = this.current_deck[i];
      this.current_deck[i] = oldValue;
    }
    document.getElementById("my-deck").innerHTML = current_deck.length; //updates display deck count
  }

  window.onclick = function(event) {
    if (current_card !== undefined) {
    document.getElementById("body").style.cursor = "grabbing";
    } else {
      document.getElementById("body").style.cursor = "grab";
    }
    
    if (event.target !==  document.getElementById("fullcard_render")) {
      document.getElementById("fullcard_render").innerHTML = "";
  
  
    }
    
  }
  
  