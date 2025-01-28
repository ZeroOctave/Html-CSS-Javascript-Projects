let weight, firOpt, secOpt;

//Gets the weight input and places the value of it in the blue box
document.getElementById('weightInput').addEventListener('input', getWeightInput);

function getWeightInput(e) {
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('resetButton').style.visibility = 'visible';
    weight = e.target.value;
    document.getElementById('weightOutput').innerHTML = weight;    //placing the value to the DOM
    weightConverter();
}

document.getElementById('firOpt').addEventListener('change', getfirOpt);

function getfirOpt(e) {
    firOpt = e.target.value; //Gets placeholder value
    document.getElementById('weightInput').placeholder = 'Enter ' + firOpt + '...';
    document.getElementById('weightName').innerHTML = firOpt + ":";
    weightConverter();
}

document.getElementById('secOpt').addEventListener('change', getsecOpt);

function getsecOpt(e) {
    secOpt = e.target.value;
    document.getElementById('convertedWeightName').innerHTML = secOpt + ":";
    weightConverter();
}

const conversionRates = {
    "Pounds": {
      "Grams": 453.59237,
      "Kilograms": 0.453592,
      "Milligrams": 453592.0000001679,
      "Micrograms": 453591999.86863,
      "US Tons": 0.0004999995920000043512,
      "Ounces": 15.999986944000138323
    },
    "Grams": {
      "Pounds": 0.00220462,
      "Kilograms": 0.001,
      "Milligrams": 1000,
      "Micrograms": 1e+6,
      "US Tons": 1.1023e-6,
      "Ounces": 0.035274
    },
    "Kilograms": {
      "Grams": 1000,
      "Pounds": 2.20462,
      "Milligrams": 1e+6,
      "Micrograms": 1e+9,
      "US Tons": 0.00110231,
      "Ounces": 35.274
    },
    "Milligrams": {
      "Pounds": 2.2046e-6,
      "Kilograms": 1e-6,
      "Grams": 0.001,
      "Micrograms": 1000,
      "US Tons": 1.1023e-9,
      "Ounces": 3.5274e-5
    },
    "Micrograms": {
      "Pounds": 2.2046e-9,
      "Kilograms": 1e-9,
      "Milligrams": 0.001,
      "Grams": 1e-6,
      "US Tons": 1.1023e-12,
      "Ounces": 3.5274e-8
    },
    "Ounces": {
      "Pounds": 0.0625,
      "Kilograms": 0.0283495,
      "Milligrams": 28349.5,
      "Micrograms": 2.835e+7,
      "US Tons": 3.125e-5,
      "Grams": 28.3495
    }
  };
  
  function weightConverter() {
    const finalOutput = document.querySelector('#finalOutput');
    
    // If the units are the same, output the weight directly
    if (firOpt === secOpt) {
      finalOutput.innerHTML = weight;
    } else {
      const conversionRate = conversionRates[firOpt]?.[secOpt];
      
      if (conversionRate) {
        finalOutput.innerHTML = weight * conversionRate;
      } else {
        // Handle unknown conversion cases (if any)
        finalOutput.innerHTML = "Invalid conversion";
      }
    }
  }
  

//Clears out all values and reset DOM
document.getElementById('resetButton').addEventListener('click', reset);

function reset() {
    document.getElementById('mainForm').reset();

    // removed this 
    // document.getElementById('output').style.visibility = 'hidden';
    // document.getElementById('resetButton').style.visibility = 'hidden';
      

    //  this contribution is done .....
      document.getElementById('output').value="";
      finalOutput.innerHTML="";
      document.getElementById('weightOutput').innerHTML = "";
      weight="";
      
}