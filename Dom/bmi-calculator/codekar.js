const form = document.querySelector("form");
// This usecase will give you empty
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener("submit", function (e) {
  e.preventDefault(); //prevent the values send to the server

  // convert string to int
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const resultInfo = document.querySelector("#result-info");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    // show upto 2 decimal values
    // Show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      resultInfo.innerHTML = "You are an under weight person";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      resultInfo.innerHTML = "You are a normal weight person";
    } else {
      resultInfo.innerHTML = "You are an Overweight person";
    }
  }
});
