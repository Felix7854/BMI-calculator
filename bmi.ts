let largeText = document.querySelector<HTMLDivElement>(".storage");
let largeTextImperial = document.querySelector<HTMLDivElement>(".storage-imperial");
let smallText = document.querySelector<HTMLDivElement>(".string-value");
let smallTextImperial = document.querySelector(".imperial-value");
let welcome = document.querySelector<HTMLDivElement>(".welcome");
let imperialRadio = document.querySelector<HTMLDivElement>("#imperial-radio");
let metricRadio = document.querySelector<HTMLDivElement>("#metric");
let imperial = document.querySelector<HTMLDivElement>(".imperial-containers");


window.addEventListener("load", (event) => {
    welcome?.classList.add("active");
    largeText?.classList.add("in-active");
    largeTextImperial?.classList.add("in-active");
    smallText?.classList.add("in-active");
    imperial?.classList.add("in-active");
    smallTextImperial?.classList.add("in-active");
});


imperialRadio?.addEventListener("click", toggleToImperail);
metricRadio?.addEventListener("click", toggleToMetric);
// metricRadio?.addEventListener("load", toggleToMetric);

function toggleToImperail(){
measure?.classList.add("in-active");
}

function toggleToMetric(){
    // imperial?.classList.remove("active");
    imperial?.classList.add("in-active");
    measure?.classList.remove("in-active");
    // measure?.classList.add("active");
}

// toggleToSystem();

let measure = document.querySelector<HTMLDivElement>(".measurement-container");
measure?.addEventListener("keypress", calculateBMIMetric)


function calculateBMIMetric(event: any): void{ 
    if (event.keyCode === 13) {
    welcome?.classList.remove("active");
    welcome?.classList.add("in-active");
    largeText?.classList.remove("in-active");
    smallText?.classList.remove("in-active");
    
    let storage = document.querySelector<HTMLDivElement>('.value');
    let heightInput = document.querySelector<HTMLInputElement>('#height')?.value;
    let height = parseInt(heightInput);

    let weightInput = document.querySelector<HTMLInputElement>('#weight')?.value;
    let weight = parseInt(weightInput);

    if(isNaN(height)){
        return;  
    } else if(isNaN(weight)){
        return;
    }else {
        let bmi = (weight / ((height * height) /10000)).toFixed(1);
        storage.innerHTML = bmi;
    } 
 }
}

let button = document.querySelector<HTMLDivElement>(".imperial");
imperial?.addEventListener("keypress", calcaulateBMIImperial);

function calcaulateBMIImperial(event: any){
    if (event.keyCode === 13){
        
        welcome?.classList.remove("active");
        welcome?.classList.add("in-active");
        smallTextImperial?.classList.remove("in-active");
        largeTextImperial?.classList.remove("in-active");
        largeTextImperial?.classList.add("active");
        largeText?.classList.add("in-active");
        smallText?.classList.add("in-active");


        let resultImperial = document.querySelector<HTMLDivElement>(".value-imperial");
        // console.log(resultImperial);
        let heightInFeetInput = document.querySelector<HTMLInputElement>("#imperial-height")?.value;
        let heightInFeet = parseInt(heightInFeetInput);

        let heightInInchesInout = document.querySelector<HTMLInputElement>("#imperial-height-2")?.value;
        let heightInInches = parseInt(heightInInchesInout);


        let weightInStoneInput = document.querySelector<HTMLInputElement>("#imperial-weight")?.value;
        let weightInStone = parseInt(weightInStoneInput);

        let weightInPoundsInput = document.querySelector<HTMLInputElement>("#imperial-weight")?.value;
        let weightInPounds = parseInt(weightInPoundsInput);

        if (isNaN(weightInStone)) {
            return;
        }else if(isNaN(weightInPounds)){
            return;
        }else {
            let height = (heightInFeet * 12) + heightInInches;
            let weight = (weightInStone * 14) + weightInPounds;

            let bmi = (((weight / (height * height))* 703) - 1).toFixed(1);
            
            resultImperial.innerHTML = bmi;
            
        }
    }
    
}

// calcaulateBMIImperial();




