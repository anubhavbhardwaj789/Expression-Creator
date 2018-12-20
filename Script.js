// JavaScript Document

// Array List of functions to be used

var func_list=[add,Subtract,Multiply];

// Create the icons for the functions in the list
function loadIcons()
{
	var number_of_icons=func_list.length;
	var parent_holder=document.getElementById("Icon_Holder");
	for(var i=0;i<number_of_icons;i++)
	{
		var icon=document.createElement("I");
		icon.setAttribute("id", i);
		parent_holder.appendChild(icon);
		icon.setAttribute("draggable", "true");
		icon.setAttribute("ondragstart", "drag(event)");
		icon.innerHTML=func_list[i].name;
		
		
	}
	
}
function allowDrop(ev) 
{
  ev.preventDefault();
}

function drag(ev) 
{
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) 
{
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text"); // ID of the incoming dragged element
  
  for(var i=0;i<func_list.length;i++) // Check if the target is not the icon in the expression area
	if(ev.target.innerHTML==func_list[i].name)
	  return;
  
  if(ev.target.childElementCount==0) // If the div tag doesn't have any child yet
  {
	var elementCopy = document.getElementById(data).cloneNode(true);
	elementCopy.id = data.toString().concat("Copy"); /* We cannot use the same ID */
	elementCopy.setAttribute("draggable","false");
	elementCopy.disabled=true;
	
	ev.target.appendChild(elementCopy);
	
	for(var i=0;i<func_list[parseInt(data)].length;i++) // Create Div placeholders as per the number of arguments of the function
	{
		var exp=document.createElement("div");
		exp.setAttribute("id", data.concat("exp"));
		exp.setAttribute("ondrop","drop(event)");
		exp.setAttribute("ondragover","allowDrop(event)");
		exp.setAttribute("class","Expression_Area");
		ev.target.appendChild(exp);
	}
  }
  
  else
  {
	  var item = ev.target;
	  while (item.firstChild) // Remove all the existing children of the div tag
	  {
		item.removeChild(item.firstChild);
	  }
	  var elementCopy = document.getElementById(data).cloneNode(true); // Make a copy of the dragged element
	  elementCopy.id = data.toString().concat("Copy"); /* We cannot use the same ID */
	  elementCopy.disabled=true;
	  
	  ev.target.appendChild(elementCopy);
	  
	  for(var i=0;i<func_list[parseInt(data)].length;i++)
	  {
		var exp=document.createElement("div");
		exp.setAttribute("id", data.concat("exp"));
		exp.setAttribute("ondrop","drop(event)");
		exp.setAttribute("ondragover","allowDrop(event)");
		exp.setAttribute("class","Expression_Area");
		
		ev.target.appendChild(exp);
	  }
	  
  }
  
	
  
}


//Implemented Sample Function List
function add(a,b)
{
	//f1 will do something
}

function Subtract(a,b)
{
	//f1 will do something
}

function Multiply(a,b,c)
{
	//f1 will do something
}
