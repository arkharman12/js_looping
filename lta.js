/**********
TITLE: Looping Through Arrays
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Looping Through Arrays Lab
ORIGINALLY CREATED ON: 17 Feb 2019
LAST MODIFIED ON: 17 Feb 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function() {

    var elResponse = document.getElementById("echo"); //grabbing the HTML id element so I can work with it
    var chrCharacter = prompt("Enter a character"); //prompt question
    while (chrCharacter.length != 1) { //making sure user enters a single character. Otherwise ask again
        alert("That was not a single character. Try again!")
        chrCharacter = prompt("Enter a character"); //asking the user again
    } // end while
    elResponse.innerHTML = "Your character is " + chrCharacter + "<br>";


	
	/*****			
	Purpose: Converts a character into an Ascii value			
	Parameters: single character / letter		
	Return: integer representing an ascii value
	*****/
	function parseAscii(chrCharacter) {
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
    } // end parseAscii()
    var intAsciiNumber = parseAscii(chrCharacter); // calling the function and storing it in an int prefix variable 
    elResponse.innerHTML += "Ascii Code of " + chrCharacter + " is " + intAsciiNumber  + "<br>";
    
	
	/*****			
	Purpose: Converts the Ascii value into Binary			
	Parameters: single integer representing an ascii value	
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii) {
		strBin = parseInt(intAscii, 10).toString(2);
		if(strBin.length < 8) {
			var intPlaceHolders = 8 - strBin.length;
			for(var i = 0; i < intPlaceHolders; i++) {
				strBin = "0" + strBin;
			}	
		}
		return strBin;
    } // end parseBin()
    var intBinaryValue = parseBin(intAscii); // calling the function and storing it in an int prefix variable
    elResponse.innerHTML += "Binary Value of " + chrCharacter + " is " + intBinaryValue + "<br>";


    var intBinaryNums = strBin.split(""); // storing the binary values in an array using split method
    for (var i = 0; i < intBinaryNums.length; i++) { // iterating over the array for each binary value
        var intABinaryValue = intBinaryNums[i];

        if(intABinaryValue == 1) { // if the binary value is 1, print "True"
            elResponse.innerHTML += "True ";
        } else { // if the binary value is 0, print "False"
            elResponse.innerHTML += "False ";
        }
    } // end for

}); 

    


