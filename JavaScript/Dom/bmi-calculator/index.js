const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    const results = document.getElementById("results");
    const resultInfo = document.getElementById("resultInfo"); 
    const bmi = ((weight)/((height * height) / 10000)).toFixed(2);

    if(isNaN(height) || isNaN(weight)){
        results.innerHTML = "Enter valid value";
    }
    else{
        results.innerHTML = `Your BMI is ${bmi}`;
    }

})


