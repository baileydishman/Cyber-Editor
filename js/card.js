//
// card.js 
// Author: Bailey Dishman 
//

$(document).ready(function()
{

	$("#createCard").click( saveToFile );
	
	// Had help with getting this working from: https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
	
	// saveToFile
	function saveToFile()
	{
		
		// Save all values given by user
		var cardRefId = document.getElementById("cardRefId").value; 
		var cardTitle = document.getElementById("cardTitle").value; 
		var cardDes = document.getElementById("cardDes").value;
		var cardAPCost = document.getElementById("cardAPCost").value;
		var cardDam = document.getElementById("cardDam").value; 
		var cardHeal = document.getElementById("cardHeal").value;
		var cardSpecial = document.getElementById("cardSpecial").value;
		
		var jsonData = '{"jRefId":' + cardRefId + ',"jTitle":"' + cardTitle 
		+ '","jDescription":"' + cardDes + '","jApCost":' + cardAPCost + ',"jDamage":' 
		+ cardDam + ',"jHealing":' + cardHeal + ',"jSpecial":' + cardSpecial + '}';
	
		var fileNameToSaveAs = cardRefId + ".json";
		
		var textToSaveAsBlob = new Blob([jsonData], {type:"text/plain"});
		var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
		
		var downloadLink = document.createElement("a");
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
