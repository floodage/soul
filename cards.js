
const url = "https://script.googleusercontent.com/macros/echo?user_content_key=2y0i88ho87knjBIVh9cVxkYAn5uRV6XsHWwUkRtuaGp7R6WWcalWB-w4a9fSxQ7W19Wva6axkBFtP4hk6jOFqojLmpT9YT7Mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPsNnm2HTJRzH_jLgFCCV0vA-RH7G4F7UGOYP7JDAN7EPj15A3ob1uFIfoiovHisn5KcDWhERO5nW2apdwmUjfrE78tZtLS8jw&lib=Mup9N75c0LQ9y5AwEbzNhcEPsFIFI9xUV"
var cards = [];
var css = [];

fetch(url).then(d => d.json()).then(d => {
  cards = (d[0].data);
  for (var i = 0; i < 76; i++){
    css.push(cards[i]["css"])
  }
  var s = document.createElement("style");
  s.innerHTML = css.join(" ");
  document.getElementsByTagName("head")[0].appendChild(s);
});


