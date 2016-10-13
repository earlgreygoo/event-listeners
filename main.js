// GO!

var navbar = document.querySelector(".nav-menu")
var navstatus = {
	visible: true,
}

var disappear = function() {
	if (navstatus.visible) {
		navbar.style.opacity = "0"
		navstatus.visible = false
		document.querySelector(".nav-hider").innerHTML = "show nav"
	}
	else {
		navbar.style.opacity = "1"
		navstatus.visible = true 
		document.querySelector(".nav-hider").innerHTML = "hide nav"
	}
}
document.querySelector(".nav-hider").addEventListener('click',disappear)

// 
// 
// 
var toggle = 1
var inputEl = document.querySelector('input[type="text"]')
var guestlist = document.querySelector('.guest-list')
var itemHandler = function(keyEvent) {
  // determine whether the enter key was pressed
  if (keyEvent.keyCode === 13) {
    var inputEl = keyEvent.target
    var itemString = inputEl.value
    var listwrapper = '<li class = "list-item" >' + itemString + '</li>' 

   	var node=document.createElement("LI");
	var textnode=document.createTextNode(itemString);
	node.appendChild(textnode);
	if(toggle === 0) {
		node.className ="red"
		toggle = 1
	}
	else {
		node.ClassName = "blank"
		toggle = 0
	}
	
    guestlist.appendChild(node)
    keyEvent.target.value = ""
  }
}

inputEl.addEventListener('keydown',itemHandler)