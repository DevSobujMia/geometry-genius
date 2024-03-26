// Parallelogram Area Calculate
function calculateParallelogramArea(){
    const base = getInputValueById ('parallelogram-base');
    const height = getInputValueById ('parallelogram-height');

    const area = base * height;
    setInnerTextById('parallelogram-area', area);
}

// Rhombus Area Calculate
function calculateRhombusArea(){
    const majorDiameter = getInputValueById('major-diameter');
    const minorDiameter = getInputValueById('minor-diameter');

    const area = 0.5 * majorDiameter * minorDiameter;
    setInnerTextById('rhombus-area', area);
};

// pentagon area calculate
function calculatePentagonArea(){
    const pentagonPerimeter = getInputValueById('pentagon-perimeter');
    const pentagonApothem = getInputValueById('pentagon-apothem');

    const area = 0.5 * pentagonPerimeter * pentagonApothem;
    setInnerTextById('pentagon-area', area);
}

// Ellipse area calculate
function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');

    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);
}


// common function for all section calculate

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
};

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
};