function validateForm() {
  if (validateForename() == false) {
	alert("Please enter your forename");
	return false;
  }
  if (validateSurname() == false) {
	alert("Please enter your surname");
	return false;
  }
  if (validateEmail() == false) {
	alert("Please enter your email");
	return false;
  }
  if (validatePhoneNum() == false) {
	alert("Please enter your phone number");
	return false;
  }
  if (validatePosition() == false) {
	alert("Please enter the position you are applying for");
	return false;
  }
  if (validateStartDate() == false) {
	alert("Please enter your start date");
	return false;
  }
  else {
	return true;
  }
}

function validateForename() {
  let x = document.forms["jobApplication"]["forename"].value;
  if (x==null || x.trim() == "") {
	  
	return false;
  }
  else {
	return true;
  }
}

function validateSurname() {
  let x = document.forms["jobApplication"]["surname"].value;
  if (x==null || x.trim() == "") {
	return false;
  }
  else {
	return true;
  }
}

function validateEmail() {
  let x = document.forms["jobApplication"]["email"].value;
  if (x==null || x.trim() == "") {
	return false;
  }
  else {
	return true;
  }
}

function validatePhoneNum() {
  let x = document.forms["jobApplication"]["phone"].value;
  if (x==null || x.trim() == "") {
	return false;
  }
  else {
	return true;
  }
}

function validatePosition() {
  let x = document.forms["jobApplication"]["position"].value;
  if (x==null || x.trim() == "") {
	return false;
  }
  else {
	return true;
  }
}

function validateStartDate() {
  let x = document.forms["jobApplication"]["startDate"].value;
  if (x==null || x.trim() == "") {
	return false;
  }
  else {
	return true;
  }
}