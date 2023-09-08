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

function toggleToImperail(){
measure?.classList.add("in-active");
imperial?.classList.remove("in-active");
}

function toggleToMetric(){
    imperial?.classList.add("in-active");
    measure?.classList.remove("in-active");
}


let measure = document.querySelector<HTMLDivElement>(".measurement-container");
measure?.addEventListener("keypress", calculateBMIMetric)


function calculateBMIMetric(event: any): void{ 
    if (event.keyCode === 13) {
    welcome?.classList.remove("active");
    welcome?.classList.add("in-active");
    largeText?.classList.remove("in-active");
    smallText?.classList.remove("in-active");
    largeTextImperial?.classList.add("in-active");
    smallTextImperial?.classList.add("in-active");
    
    let storage = document.querySelector<HTMLDivElement>('.value');
    let heightInput = document.querySelector<HTMLInputElement>('#height')?.value;
    let height: number = 0; 
    
    if(heightInput){
        height = parseInt(heightInput);
    }

    let weightInput = document.querySelector<HTMLInputElement>('#weight')?.value;
    let weight: number = 0; 
    
    if(weightInput){
        weight = parseInt(weightInput);
    }

    if(isNaN(height)){
        return;  
    } else if(isNaN(weight)){
        return;
    }else {
        let bmi = (weight / ((height * height) /10000)).toFixed(1);
        
        if(storage){
        storage.innerHTML = bmi;
        }
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

        if (resultImperial){
            let heightInFeetInput = document.querySelector<HTMLInputElement>("#imperial-height")?.value;
            let heightInFeet: number; 

        if (typeof heightInFeetInput === "string"){
            heightInFeet = parseInt(heightInFeetInput); 
        }else {
            heightInFeet = 0;
        }

        let heightInInchesInout = document.querySelector<HTMLInputElement>("#imperial-height-2")?.value;
        let heightInInches: number;

        if (typeof heightInInchesInout === "string"){
            heightInInches = parseInt(heightInInchesInout);
        }else{
            heightInInches = 0;
        }

        let weightInStoneInput = document.querySelector<HTMLInputElement>("#imperial-weight")?.value;
        let weightInStone: number;

        if(typeof weightInStoneInput === 'string'){
            weightInStone = parseInt(weightInStoneInput);
        }else{
            weightInStone = 0;
        }
       

        let weightInPoundsInput = document.querySelector<HTMLInputElement>("#imperial-weight")?.value;
        let weightInPounds: number;
        
        if(typeof weightInPoundsInput === 'string'){
            weightInPounds = parseInt(weightInPoundsInput);
        }else {
            weightInPounds = 0;
        }

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
    
}





