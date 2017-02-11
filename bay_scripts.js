// JavaScript Document

/*Next function is a slideshow*/
	var Image = new Array ("images/Mt_Maunganui02.jpg",
					"images/Mt_Tarawera01.jpg",
					 "images/Waimangu_Volcanic_Valley01-slide.jpg",
					 "images/Waiotapu01-slide.jpg",
					 "images/Mt_Maunganui01.jpg",
					 "images/Mt_Tarawera02.jpg",
					  "images/Waimangu_Volcanic_Valley02-slide.jpg",				"images/Waimangu_Volcanic_Valley03-slide.jpg"  );
var Image_Number = 0;
var Image_Length = Image.length - 1;
var num = 1;

function auto(){


	setInterval("change_image(num)", 3000);
	}

function change_image(num) {
Image_Number = Image_Number + num;

if (Image_Number > Image_Length){
	Image_Number = 0;
	}
if (Image_Number < 0){
	Image_Number = Image_Length;
	}
	document.slideshow.src = Image[Image_Number];
		return false;
}
/* Next functions are a buttons of slideshow   */
function goBack(){
	Image_Number = Image_Number -1;

if (Image_Number > Image_Length){
	Image_Number = 0;
	}
if (Image_Number < 0){
	Image_Number = Image_Length;
	}
	document.slideshow.src = Image[Image_Number];
	sleep(1000);
		return false;
}
	
function goAhead(){
	Image_Number = Image_Number +1;

if (Image_Number > Image_Length){
	Image_Number = 0;
	}
if (Image_Number < 0){
	Image_Number = Image_Length;
	}
	document.slideshow.src = Image[Image_Number];
	sleep(1000);
		return false;
	}	
	
/* Next function is user input form validation  */	
function validateForm() {
	var validation_result = true;
	var patt = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
    var x = document.forms["myForm"]["fname"].value;
	var email = document.forms["myForm"]["email"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        validation_result = false;
	}
	if (email==""){
		alert("Please enter your email.");
		validation_result = false;
		}
	
	 else if (patt.test(email) != true ){
		alert("Your email address is wrong");
	  validation_result = false; }

    if(validation_result == false)
    {    	
		var divElement = document.getElementById("error");

    		divElement.innerHTML = "";

    	divElement.appendChild(error_messages);

    	divElement.style.display = "block";

    }	

    
    	return validation_result;	
    
}


/*Next function allowes user to switch in between two different style sheets  */
function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}
