var menutype = 1; // to know if the discard or deck is opened
var discard = []; 
var current_deck = [];
var current_card = undefined; 
var last_id = null;
var search = document.getElementsByClassName("search-box")[0];

var boardstate = {
  loot1: undefined,
  loot2: undefined,
  loot3: undefined,
  front: undefined,
  camp1: undefined,
  camp2: undefined,
  camp3: undefined,
  camp4: undefined,
  hand1: undefined,
  hand2: undefined,
  hand3: undefined,
  hand4: undefined,
  hand5: undefined,
  hand6: undefined,
  frontitem: undefined,
  campitem1: undefined,
  campitem2: undefined,
  campitem3: undefined,
  campitem4: undefined,
 
};

var interval = setInterval(function() {

  if( cards == "undefined" || cards == ""){
  }else{
    document.getElementById("loading-screen").remove()

    clearInterval(interval);
    console.log('done')

}}, 1000)
function moveCard(clicked_id) { //moves card from a placce on the board / hand

  var unititemPair  = 
        {
          "front": "frontitem",
          "camp1": "campitem1",
          "camp2": "campitem2",
          "camp3": "campitem3",
          "camp4": "campitem4"
        }
      var json = JSON.stringify(unititemPair); // get card obj
      var obj = JSON.parse(json); // parse into json

  if (boardstate[clicked_id] == undefined && current_card !== undefined) {
    renderCard(current_card, clicked_id);
    boardstate[clicked_id] = current_card;
    current_card = undefined;
    
    // for not empty board slot
  } else if (boardstate[clicked_id] !== undefined && current_card !== undefined) {
    if (((cards[current_card])["subtype"]) == "enchantment" ) {
      
      document.getElementById(obj[clicked_id]).style.display = "block"; 
      renderCard(current_card,obj[clicked_id])
      boardstate[obj[clicked_id]] = current_card;
      current_card = undefined;
    }

  } else if (current_card == undefined) {
    current_card = boardstate[clicked_id]; // take the card and pick it up
    boardstate[clicked_id] = undefined; // empty the slot
    document.getElementById(clicked_id).innerHTML = "";
    if (current_card !== undefined) {
    if (((cards[current_card])["subtype"]) == "enchantment" ) {
      if (clicked_id == "frontitem" 
      || clicked_id == "campitem1" 
      || clicked_id == "campitem2"
      || clicked_id == "campitem3"
      || clicked_id == "campitem4") {
      document.getElementById([clicked_id]).style.display = "none";
    }
  }
}

  }
}
function deckCard(clicked_id) { //interact with the deck on click
  // if you are not holding a card, draw 1
  if (current_card == undefined) {
    current_card = this.current_deck[0];
    current_deck.shift();
    document.getElementById(clicked_id).innerHTML = current_deck.length;
    // if you are holding a card, put it in the deck
  } else {
    current_deck.push(current_card);
    document.getElementById(clicked_id).innerHTML = current_deck.length;
    current_card = undefined;
  }
}
function discardCard(clicked_id) { //interact with the discard on click
  //if you are holding a card discard it
  if (current_card == undefined) {
    searchDiscard();
  } else {
    discard.push(current_card);
    document.getElementById(clicked_id).innerHTML = "";
    renderCard(current_card, clicked_id);
    current_card = undefined;
  }
}
function searchDiscard() { //render the discard
  if (discard.length > 0) {
  document.getElementById("fullcard_render").innerHTML = "";
  menutype = 1;
  document.getElementById("fullboard").style.display = "none";
  document.getElementById("search-box").style.display = "flex";
  var el = document.getElementById("search-box");
  while (el.firstChild) el.removeChild(el.firstChild);

  for (var i = 0; i < discard.length; i++) {
    search.appendChild(createCard(discard[i]));
  }
}
}
function searchDeck() { //render the discard
  if (current_deck.length >0) {

  document.getElementById("fullcard_render").innerHTML = "";
  menutype = 2;
  if (current_card == undefined) {
  document.getElementById("fullboard").style.display = "none";
  document.getElementById("search-box").style.display = "flex";
  
  current_deck.sort(function (a, b) {
    if (a === Infinity) return 1;
    else if (isNaN(a)) return -1;
    else return a - b;
  })

  var el = document.getElementById("search-box");
  while (el.firstChild) el.removeChild(el.firstChild);

  for (var i = 0; i < current_deck.length; i++) {
    search.appendChild(createCard(current_deck[i]));
    
  }
}
return false;
}}
function createCard(rendered_card) {
  var render = document.createElement("div");
  render.className = "renderedCard";
  if (rendered_card == last_id) {
    render.id = (rendered_card+"copy");

  } else {
    render.id = last_id;
    render.id = rendered_card;

  }
  last_id = render.id;
  
  document.body.appendChild(render);
  renderCard(rendered_card, render.id);
  render.onclick = function () {

    if (current_card === undefined) {
    current_card = rendered_card;
   
  
    if (menutype === 1) {
      for (var i = 0; i < discard.length; i++) {
        if (discard[i] === rendered_card) {
          discard.splice(i, 1);
          searchDiscard();
          document.getElementById("my-discard").innerHTML = "";
          if (discard[discard.length-1] !== undefined) {
          renderCard(discard[discard.length-1],"my-discard")
          }
          break;
        }
      }
    } else if (menutype === 2) {
      for (var i = 0; i < current_deck.length; i++) {
        if (current_deck[i] === rendered_card) {
          current_deck.splice(i, 1);
          searchDeck();
          document.getElementById("my-deck").innerHTML = current_deck.length;
        }
      }
    }
    document.getElementById("search-box").style.display = "none";
    document.getElementById("search-box").innerHTML= "";
    document.getElementById("fullboard").style.display = "block";



  } else { }
    var el = document.getElementById("search-box");
    while (el.firstChild) el.removeChild(el.firstChild);
    Shuffle();
  };
 

  
  return render;
}
function renderCard(render_card_number, render_card_id) {

     var json = JSON.stringify(cards[render_card_number]); // get card obj
     var obj = JSON.parse(json); // parse into json


 var cardDiv = document.createElement("div");
 document.getElementById(render_card_id).appendChild(cardDiv);
 cardDiv.className = "rendered minicard card"+render_card_number+" "+obj["type"]+" "+obj["color"];
 cardDiv.id = render_card_id;

 cardDiv.oncontextmenu = function () {
   
 document.getElementById("fullcard_render").style.display = "flex"
 fullcardRender(render_card_number,"fullcard_render");
   return false;
   
 }
 cardDiv.ontouchmove = cardDiv.oncontextmenu;

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
}

 } else if (obj["type"]=="spell") {


   var imagebackgroundDiv = document.createElement("div");
   cardDiv.appendChild(imagebackgroundDiv);
   imagebackgroundDiv.className = "rendered imagebackground";

   var tagDiv = document.createElement("div");
   cardDiv.appendChild(tagDiv);
   tagDiv.className = "rendered tag spell";


 } 
    } 
function fullcardRender(render_card_number, eleID) {
  document.getElementById(eleID).innerHTML = "";

  var json = JSON.stringify(cards[render_card_number]); // get card obj
  var obj = JSON.parse(json); // parse into json
  var cardDiv = document.createElement("div");
  document.getElementById(eleID).appendChild(cardDiv);
  cardDiv.className = "rendered card holo card"+render_card_number+" "+obj["type"]+" "+obj["color"]+" "+obj["subtype"];
  
  cardDiv.ontouchmove = function () {
    document.getElementById(eleID).innerHTML = ""
    document.getElementById(eleID).style.display = "none"
    document.getElementById("fullboard").style.display = "block";
    document.getElementById("search-box").style.display = "none"; }
  cardDiv.oncontextmenu  = function () {
    document.getElementById(eleID).innerHTML = ""
    document.getElementById(eleID).style.display = "none"
    document.getElementById("fullboard").style.display = "block";
    document.getElementById("search-box").style.display = "none";
    
    return false;
    
  }

  cardDiv.onclick = function () {
  }

  if (obj["type"] == "unit") {
  var nameDiv = document.createElement("p");
  cardDiv.appendChild(nameDiv);
  nameDiv.className = "rendered name";
  

  var healthDiv = document.createElement("p");
  cardDiv.appendChild(healthDiv);
  healthDiv.className = "rendered health";
 
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
  }
   
 
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

  if (obj["subtype"] == "enchantment") {
    var enchantmenttagDiv = document.createElement("p");
    cardDiv.appendChild(enchantmenttagDiv);
    enchantmenttagDiv.className = "rendered enchantmenttag";
  }

  } 

}

