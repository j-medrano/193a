// Jonathan Medrano
// CSC 193a
// Assignment 5

function alertBox(){
  alert("hello,world")

}

function biggerText(){
  document.getElementById("textBox").style.fontSize = "24pt"
}


function fancyChange(){
  alert("FancyShmancy has been clicked!")
  document.getElementById("textBox").style.fontWeight= "bold"
  document.getElementById("textBox").style.color= "blue"
  document.getElementById("textBox").style.textDecoration= "underline"

}

function boringChange(){
  alert("BoringBetty has been clicked!")
  document.getElementById("textBox").style.fontWeight= "normal"
  document.getElementById("textBox").style.color= "black"
  document.getElementById("textBox").style.textDecoration= "none"

}

function moo(){
  var inputTextBox = document.getElementById("textBox");
  text= inputTextBox.value.toUpperCase();

  parts = text;

  if(parts.includes("!")){
    parts = parts.split("!")
    parts = parts.join("-Moo! ")

  }

  if(parts.includes(".")){
    parts = parts.split(".")
    parts = parts.join("-Moo. ")

  }
  alert(parts.includes("?"))
  if(parts.includes("?")){
    parts = parts.split("?")
    parts = parts.join("-Moo? ")

  }
  inputTextBox.value = parts
}
