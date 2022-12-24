
const container = document.getElementsByClassName("container");

var interval = setInterval(function() {
if( cards == "undefined" || cards == ""){
}else{
  clearInterval(interval);
  renderAll();
}}, 1000)

function renderAll(){

  for (var render_card_number = 0; render_card_number < 76; render_card_number++) {
   
  var json = JSON.stringify(cards[render_card_number]); // get card obj
  var obj = JSON.parse(json); // parse into json
  var cardDiv = document.createElement("div");
  document.getElementById("container").appendChild(cardDiv);
  cardDiv.className = "rendered card fullart card"+render_card_number+" "+obj["type"]+" "+obj["color"]+" "+obj["subtype"];


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


}