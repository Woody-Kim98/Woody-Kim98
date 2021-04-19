function validate(event) {
  var lad = document.getElementById("lad").value;
  console.log(isNaN(lad));
  var long = document.getElementById("long").value;
  console.log(long);
  var validated = false;
  if (!isNaN(lad)) {
    if (lad <= 90 && lad >= -90) {
      document.getElementById("lad_error").innerHTML = "";
      validated = true;
    } else {
      validated = false;
      document.getElementById("lad_error").innerHTML =
        "must be a valid Latitude (-90 to 90)";
    }
  }
  if (!isNaN(long)) {
    if (long <= 180 && long >= -180) {
      document.getElementById("long_error").innerHTML = "";
      validated = true;
    } else {
      validated = false;
      document.getElementById("long_error").innerHTML =
        "must be a valid Longitude (-180 to 180)";
    }
  }
  console.log(validated);
  return validated;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
