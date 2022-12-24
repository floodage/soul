var current_deck = [];
var interval = setInterval(function() {

  if( cards == "undefined" || cards == ""){
  }else{

    clearInterval(interval);
    renderAll();

}}, 1000)
function importaDeck() {
  var input = document.getElementById("decklist").value;
  current_deck = input.split("\n"); //take input string and turn to list 
  renderDeck()
}

function sortDeck() {
  current_deck.sort(function (a, b) {
    if (a === Infinity) return 1;
    else if (isNaN(a)) return -1;
    else return a - b;
  })
}

function renderDeck(){
  document.getElementById("deck-count").innerHTML = current_deck.length+"/30";
  console.log(current_deck.length);

  document.getElementById("deck-container").innerHTML = "";
  sortDeck();
  document.getElementById("decklist").value = current_deck.toString().replace(/,/g,"\n")


  for (var i = 0; i < current_deck.length; i++) {
    if (current_deck[i] !== undefined) {
  var json = JSON.stringify(cards[current_deck[i]]); // get card obj
  var obj = JSON.parse(json); // parse into json


  

  var cardDiv = document.createElement("div");
  document.getElementById("deck-container").appendChild(cardDiv);
  cardDiv.className = "rendered minicard card"+current_deck[i]+" "+obj["type"]+" "+obj["color"];
  cardDiv.id = current_deck[i];
  cardDiv.oncontextmenu = function () {
    
    document.getElementById("fullcard_panel").style.display = "flex"
    fullcardRender(this.id,"fullcard_panel");
      return false;
      
    }
  cardDiv.onclick = function () {

    
    var index = current_deck.indexOf(this.id);
    if (index > -1) { // only splice array when item is found
      current_deck.splice(index, 1); // 2nd parameter means remove one item only
    }
   renderDeck()
  }
    
  if (obj["type"] == "unit") {
    
    var healthDiv = document.createElement("p");
    cardDiv.appendChild(healthDiv);
    healthDiv.className = "rendered health";
  
   
  
  
    var imagebackgroundDiv = document.createElement("div");
    cardDiv.appendChild(imagebackgroundDiv);
    imagebackgroundDiv.className = "rendered imagebackground";
  
    var slot1Div = document.createElement("p");
    cardDiv.appendChild(slot1Div);
    slot1Div.className = "rendered slot1 "+obj["slot1"];
  
  

if (obj["subtype"] == "minion") {
} else {
var soulwrapperDiv = document.createElement("div");
cardDiv.appendChild(soulwrapperDiv);
soulwrapperDiv.className = "rendered soulwrapper";
 
var soulcostDiv = document.createElement("div");
soulwrapperDiv.appendChild(soulcostDiv);
soulcostDiv.className = "rendered soulcost soul1";
if (obj["subtype"] == "2-Soul") {
 var soulcostDiv = document.createElement("div");
 soulwrapperDiv.appendChild(soulcostDiv);
 soulcostDiv.className = "rendered soulcost soul2";
} if (obj["subtype"] == "3-Soul") {
var soulcostDiv = document.createElement("div");
soulwrapperDiv.appendChild(soulcostDiv);
soulcostDiv.className = "rendered soulcost soul2";

var soulcostDiv = document.createElement("div");
soulwrapperDiv.appendChild(soulcostDiv);
soulcostDiv.className = "rendered soulcost soul3";
}
}  } else if (obj["type"]=="spell") {


var imagebackgroundDiv = document.createElement("div");
cardDiv.appendChild(imagebackgroundDiv);
imagebackgroundDiv.className = "rendered imagebackground";

var tagDiv = document.createElement("div");
cardDiv.appendChild(tagDiv);
tagDiv.className = "rendered tag spell";


} 
  }}
 


}

function renderAll(){
    
      for (var render_card_number = 0; render_card_number < 124; render_card_number++) {
        var json = JSON.stringify(cards[render_card_number]); // get card obj
     var obj = JSON.parse(json); // parse into json
     var cardDiv = document.createElement("div");
     document.getElementById("pool-container").appendChild(cardDiv);
     cardDiv.className = "rendered minicard card"+render_card_number+" "+obj["type"]+" "+obj["color"];
       cardDiv.id =render_card_number;
     
       cardDiv.onclick = function () {
       var count = 0;
       for (var i = 0; i < current_deck.length; i++) {
           if (current_deck[i] === this.id) {
               count++;
           }
       }
       if (count < 2 && current_deck.length < 30) {
         current_deck.push(this.id);
       } else {
         
       }
       renderDeck()
   }
        
   
     
   cardDiv.oncontextmenu = function () {
       
     document.getElementById("fullcard_panel").style.display = "flex"
     console.log(this.id);
     fullcardRender(this.id,"fullcard_panel");
       return false;
       
     }
     
     if (obj["type"] == "unit") {
    
       var healthDiv = document.createElement("p");
       cardDiv.appendChild(healthDiv);
       healthDiv.className = "rendered health";
     
      
     
     
       var imagebackgroundDiv = document.createElement("div");
       cardDiv.appendChild(imagebackgroundDiv);
       imagebackgroundDiv.className = "rendered imagebackground";
     
       var slot1Div = document.createElement("p");
       cardDiv.appendChild(slot1Div);
       slot1Div.className = "rendered slot1 "+obj["slot1"];
     
     
 
 if (obj["subtype"] == "minion") {
} else {
  var soulwrapperDiv = document.createElement("div");
  cardDiv.appendChild(soulwrapperDiv);
  soulwrapperDiv.className = "rendered soulwrapper";
    
  var soulcostDiv = document.createElement("div");
  soulwrapperDiv.appendChild(soulcostDiv);
  soulcostDiv.className = "rendered soulcost soul1";
  if (obj["subtype"] == "2-Soul") {
    var soulcostDiv = document.createElement("div");
    soulwrapperDiv.appendChild(soulcostDiv);
    soulcostDiv.className = "rendered soulcost soul2";
} if (obj["subtype"] == "3-Soul") {
  var soulcostDiv = document.createElement("div");
  soulwrapperDiv.appendChild(soulcostDiv);
  soulcostDiv.className = "rendered soulcost soul2";

  var soulcostDiv = document.createElement("div");
  soulwrapperDiv.appendChild(soulcostDiv);
  soulcostDiv.className = "rendered soulcost soul3";
}
}  } else if (obj["type"]=="spell") {


  var imagebackgroundDiv = document.createElement("div");
  cardDiv.appendChild(imagebackgroundDiv);
  imagebackgroundDiv.className = "rendered imagebackground";

  var tagDiv = document.createElement("div");
  cardDiv.appendChild(tagDiv);
  tagDiv.className = "rendered tag spell";


} 
     }}
    
   
    

function fullcardRender(render_card_number, eleID) {
  document.getElementById(eleID).innerHTML = "";

  var json = JSON.stringify(cards[render_card_number]); // get card obj
  var obj = JSON.parse(json); // parse into json
  var cardDiv = document.createElement("div");
  document.getElementById(eleID).appendChild(cardDiv);
  cardDiv.className = "rendered card fullart holo card"+render_card_number+" "+obj["type"]+" "+obj["color"]+" "+obj["type"]+obj["soulcost"];


 

  if (obj["type"] == "unit") {
  var nameDiv = document.createElement("p");
  cardDiv.appendChild(nameDiv);
  nameDiv.className = "rendered name";

  var healthDiv = document.createElement("p");
  cardDiv.appendChild(healthDiv);
  healthDiv.className = "rendered health";

   var soulwrapperDiv = document.createElement("div");
  cardDiv.appendChild(soulwrapperDiv);
  soulwrapperDiv.className = "rendered soulwrapper";

  var soulcostDiv = document.createElement("div");
  soulwrapperDiv.appendChild(soulcostDiv);
  soulcostDiv.className = "rendered soulcost soul1";
  var soulcostDiv = document.createElement("div");
  soulwrapperDiv.appendChild(soulcostDiv);
  soulcostDiv.className = "rendered soulcost soul2";
  var soulcostDiv = document.createElement("div");
  soulwrapperDiv.appendChild(soulcostDiv);
  soulcostDiv.className = "rendered soulcost soul3";
 
  var imagebackgroundDiv = document.createElement("div");
  cardDiv.appendChild(imagebackgroundDiv);
  imagebackgroundDiv.className = "rendered imagebackground";
  
  var slot1Div = document.createElement("p");
  cardDiv.appendChild(slot1Div);
  slot1Div.className = "rendered slot1 "+obj["slot1"];


  var slot1nameDiv = document.createElement("span");
  slot1Div.appendChild(slot1nameDiv);
  slot1nameDiv.className = "rendered slot1name";

  var slot1textDiv = document.createElement("div");
  cardDiv.appendChild(slot1textDiv);
  slot1textDiv.className = "rendered slot1text text";

  
  var attacknameDiv = document.createElement("p");
  cardDiv.appendChild(attacknameDiv);
  attacknameDiv.className = "rendered attackname";

  var attackdamageDiv = document.createElement("p");
  cardDiv.appendChild(attackdamageDiv);
  attackdamageDiv.className = "rendered attackdamage";

  var attacktextDiv = document.createElement("p");
  cardDiv.appendChild(attacktextDiv);
  attacktextDiv.className = "rendered attacktext";

  
  var cardnumbDiv = document.createElement("div");
  cardDiv.appendChild(cardnumbDiv);
  cardnumbDiv.className = "rendered cardnumb";


  } else if (obj["type"]=="spell") {
    var nameDiv = document.createElement("p");
    cardDiv.appendChild(nameDiv);
    nameDiv.className = "rendered name";

    var spelltagDiv = document.createElement("p");
    cardDiv.appendChild(spelltagDiv);
    spelltagDiv.className = "rendered spelltag";

    var imagebackgroundDiv = document.createElement("div");
    cardDiv.appendChild(imagebackgroundDiv);
    imagebackgroundDiv.className = "rendered imagebackground";

    var slot1textDiv = document.createElement("div");
  cardDiv.appendChild(slot1textDiv);
  slot1textDiv.className = "rendered slot1text text";



  var cardnumbDiv = document.createElement("div");
  cardDiv.appendChild(cardnumbDiv);
  cardnumbDiv.className = "rendered cardnumb";

 

  } else if (obj["type"] == "item") {

    var nameDiv = document.createElement("p");
    cardDiv.appendChild(nameDiv);
    nameDiv.className = "rendered name";

    var itemtagDiv = document.createElement("p");
    cardDiv.appendChild(itemtagDiv);
    itemtagDiv.className = "rendered itemtag";

    var imagebackgroundDiv = document.createElement("div");
    cardDiv.appendChild(imagebackgroundDiv);
    imagebackgroundDiv.className = "rendered imagebackground";

   

    var slot1textDiv = document.createElement("div");
  cardDiv.appendChild(slot1textDiv);
  slot1textDiv.className = "rendered slot1text";

  var attacktextDiv = document.createElement("div");
  cardDiv.appendChild(attacktextDiv);
  attacktextDiv.className = "rendered attacktext";


  var cardnumbDiv = document.createElement("div");
  cardDiv.appendChild(cardnumbDiv);
  cardnumbDiv.className = "rendered cardnumb";


  }

}
