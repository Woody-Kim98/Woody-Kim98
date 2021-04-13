function validate(event) {
  var lat = parseInt(document.querySelector("#lat").value);
  var long = parseInt(document.querySelector("#long").value);

  var latError = document.getElementById("errorLat");
  var longError = document.getElementById("errorLong");

  resetErrors(latError, longError);

  if(isNaN(lat) || (lat < -90 || lat > 90)){
    showError(latError);
    return false;
  }
  else if(isNaN(long) || (long < -180 || long > 180)){
    longError.style.display = "inline-block";
    return false;
  }
}

function showError(element){
  element.style.display = "inline-block";
}

function resetErrors(error1, error2){
  error1.style.display = "none";
  error2.style.display = "none";
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
