var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "<h3>Please enter some values</h3>";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure =` <p class="p-r"> Your BMI is ${bmi} which means you are Underweight </p>`;
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = `<p class="p-r"> Your BMI is ${bmi} which means You are Normal</p>`;
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = `<p class="p-r"> Your BMI is ${bmi} which means You are Overweight </p>` ;
	} else if (bmi >= 30) {
		measure = ` <p class="p-r"> Your BMI is ${bmi} which means You are Obese </p>`;
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "<h3>Negative Values not Allowed</h3>";
	}
}
