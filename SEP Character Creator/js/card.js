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
		let charSkin = document.getElementById("charSkin").value;
		let charName = document.getElementById("charName").value; 
		let charDamage = document.getElementById("charDamage").value; 
		let charHealth = document.getElementById("charHealth").value;
		let charAttackPower = document.getElementById("charAttackPower").value;
		let charSpeed = document.getElementById("charSpeed").value; 
		let charDefense = document.getElementById("charDefense").value;
		
		let jsonData = '{"jCharSkin":"' + charSkin + '","jCharName":"' + charName + '","jCharDamage":' + charDamage 
		+ ',"jCharHealth":' + charHealth + ',"jCharAttackPower":' + charAttackPower + ',"jSpeed":' 
		+ charSpeed + ',"jCharDefense":' + charDefense + '}';
	
		let fileNameToSaveAs = charName + ".json";
		
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
