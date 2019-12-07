// Author: Bailey Dishman 
// File: card.js

$(document).ready(function()
{

	$("#createCard").click( saveToFile );
	
	// Had help with getting this working from: https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
	
	// saveToFile
	function saveToFile()
	{
		
		// Save all values given by user
		let cardRefId = document.getElementById("cardRefId").value; 
		let cardTitle = document.getElementById("cardTitle").value; 
		let cardDes = document.getElementById("cardDes").value;
		let cardAPCost = document.getElementById("cardAPCost").value;
		let cardDam = document.getElementById("cardDam").value; 
		let cardHeal = document.getElementById("cardHeal").value;
		let cardSpecial = document.getElementById("cardSpecial").value;
		
		let jsonData = '{"jRefId":' + cardRefId + ',"jTitle":"' + cardTitle 
		+ '","jDescription":"' + cardDes + '","jApCost":' + cardAPCost + ',"jDamage":' 
		+ cardDam + ',"jHealing":' + cardHeal + ',"jSpecial":' + cardSpecial + '}';
	
		let fileNameToSaveAs = cardRefId + ".json";
		
		let textToSaveAsBlob = new Blob([jsonData], {type:"text/plain"});
		let textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
		
		let downloadLink = document.createElement("a");
		
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "Download File";
		downloadLink.href = textToSaveAsURL;
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	 
		downloadLink.click();
		
	} 
	// End of saveToFile
	
	// destroyoClickedElement
	function destroyClickedElement(event)
	{
		
		document.body.removeChild(event.target);
		
	} 
	// End of destroyClickedElement
	
});
