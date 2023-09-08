var largeText = document.querySelector(".storage");
var largeTextImperial = document.querySelector(".storage-imperial");
var smallText = document.querySelector(".string-value");
var smallTextImperial = document.querySelector(".imperial-value");
var welcome = document.querySelector(".welcome");
var imperialRadio = document.querySelector("#imperial-radio");
var metricRadio = document.querySelector("#metric");
var imperial = document.querySelector(".imperial-containers");
window.addEventListener("load", function (event) {
    welcome === null || welcome === void 0 ? void 0 : welcome.classList.add("active");
    largeText === null || largeText === void 0 ? void 0 : largeText.classList.add("in-active");
    largeTextImperial === null || largeTextImperial === void 0 ? void 0 : largeTextImperial.classList.add("in-active");
    smallText === null || smallText === void 0 ? void 0 : smallText.classList.add("in-active");
    imperial === null || imperial === void 0 ? void 0 : imperial.classList.add("in-active");
    smallTextImperial === null || smallTextImperial === void 0 ? void 0 : smallTextImperial.classList.add("in-active");
});
imperialRadio === null || imperialRadio === void 0 ? void 0 : imperialRadio.addEventListener("click", toggleToImperail);
metricRadio === null || metricRadio === void 0 ? void 0 : metricRadio.addEventListener("click", toggleToMetric);
function toggleToImperail() {
    measure === null || measure === void 0 ? void 0 : measure.classList.add("in-active");
    imperial === null || imperial === void 0 ? void 0 : imperial.classList.remove("in-active");
}
function toggleToMetric() {
    imperial === null || imperial === void 0 ? void 0 : imperial.classList.add("in-active");
    measure === null || measure === void 0 ? void 0 : measure.classList.remove("in-active");
}
var measure = document.querySelector(".measurement-container");
measure === null || measure === void 0 ? void 0 : measure.addEventListener("keypress", calculateBMIMetric);
function calculateBMIMetric(event) {
    var _a, _b;
    if (event.keyCode === 13) {
        welcome === null || welcome === void 0 ? void 0 : welcome.classList.remove("active");
        welcome === null || welcome === void 0 ? void 0 : welcome.classList.add("in-active");
        largeText === null || largeText === void 0 ? void 0 : largeText.classList.remove("in-active");
        smallText === null || smallText === void 0 ? void 0 : smallText.classList.remove("in-active");
        largeTextImperial === null || largeTextImperial === void 0 ? void 0 : largeTextImperial.classList.add("in-active");
        smallTextImperial === null || smallTextImperial === void 0 ? void 0 : smallTextImperial.classList.add("in-active");
        var storage = document.querySelector('.value');
        var heightInput = (_a = document.querySelector('#height')) === null || _a === void 0 ? void 0 : _a.value;
        var height = 0;
        if (heightInput) {
            height = parseInt(heightInput);
        }
        var weightInput = (_b = document.querySelector('#weight')) === null || _b === void 0 ? void 0 : _b.value;
        var weight = 0;
        if (weightInput) {
            weight = parseInt(weightInput);
        }
        if (isNaN(height)) {
            return;
        }
        else if (isNaN(weight)) {
            return;
        }
        else {
            var bmi = (weight / ((height * height) / 10000)).toFixed(1);
            if (storage) {
                storage.innerHTML = bmi;
            }
        }
    }
}
var button = document.querySelector(".imperial");
imperial === null || imperial === void 0 ? void 0 : imperial.addEventListener("keypress", calcaulateBMIImperial);
function calcaulateBMIImperial(event) {
    var _a, _b, _c, _d;
    if (event.keyCode === 13) {
        welcome === null || welcome === void 0 ? void 0 : welcome.classList.remove("active");
        welcome === null || welcome === void 0 ? void 0 : welcome.classList.add("in-active");
        smallTextImperial === null || smallTextImperial === void 0 ? void 0 : smallTextImperial.classList.remove("in-active");
        largeTextImperial === null || largeTextImperial === void 0 ? void 0 : largeTextImperial.classList.remove("in-active");
        largeTextImperial === null || largeTextImperial === void 0 ? void 0 : largeTextImperial.classList.add("active");
        largeText === null || largeText === void 0 ? void 0 : largeText.classList.add("in-active");
        smallText === null || smallText === void 0 ? void 0 : smallText.classList.add("in-active");
        var resultImperial = document.querySelector(".value-imperial");
        if (resultImperial) {
            var heightInFeetInput = (_a = document.querySelector("#imperial-height")) === null || _a === void 0 ? void 0 : _a.value;
            var heightInFeet = void 0;
            if (typeof heightInFeetInput === "string") {
                heightInFeet = parseInt(heightInFeetInput);
            }
            else {
                heightInFeet = 0;
            }
            var heightInInchesInout = (_b = document.querySelector("#imperial-height-2")) === null || _b === void 0 ? void 0 : _b.value;
            var heightInInches = void 0;
            if (typeof heightInInchesInout === "string") {
                heightInInches = parseInt(heightInInchesInout);
            }
            else {
                heightInInches = 0;
            }
            var weightInStoneInput = (_c = document.querySelector("#imperial-weight")) === null || _c === void 0 ? void 0 : _c.value;
            var weightInStone = void 0;
            if (typeof weightInStoneInput === 'string') {
                weightInStone = parseInt(weightInStoneInput);
            }
            else {
                weightInStone = 0;
            }
            var weightInPoundsInput = (_d = document.querySelector("#imperial-weight")) === null || _d === void 0 ? void 0 : _d.value;
            var weightInPounds = void 0;
            if (typeof weightInPoundsInput === 'string') {
                weightInPounds = parseInt(weightInPoundsInput);
            }
            else {
                weightInPounds = 0;
            }
            if (isNaN(weightInStone)) {
                return;
            }
            else if (isNaN(weightInPounds)) {
                return;
            }
            else {
                var height = (heightInFeet * 12) + heightInInches;
                var weight = (weightInStone * 14) + weightInPounds;
                var bmi = (((weight / (height * height)) * 703) - 1).toFixed(1);
                resultImperial.innerHTML = bmi;
            }
        }
    }
}
