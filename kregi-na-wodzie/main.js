function createZeroFilled2DArray(size) {
    let array = [];
    for (let y = 0; y < size; ++y) {
        let subarray = [];
        
        for (let x = 0; x < size; ++x) {
            subarray.push(0);
        }

        array.push(subarray);
    }

    return array;
}


/*
 * This function works in this way (example):
 * STEP1
 * 00000
 * 00000
 * 00000
 * 00000
 * 00000
 *
 * STEP2
 * 00000
 * 01110
 * 01110
 * 01110
 * 00000
 *
 * STEP3
 * 00000
 * 01110
 * 01210
 * 01110
 * 00000
 */
function markWaterCircles(array) {
    for (let circleIndex = 0; circleIndex < array.length / 2 + 1; ++circleIndex) {
        for (let y = circleIndex + 1; y < array.length - circleIndex - 1; ++y) {
            for (let x = circleIndex + 1; x < array.length - circleIndex - 1; ++x) {
                array[y][x] = circleIndex + 1;
            }
        }
    }
}

function writeDataToTable(array) {
    const table = document.querySelector('#table');
    table.innerHTML = "";

    for (let y = 0; y < array.length; ++y) {
        const row = table.insertRow(-1);

        for (let x = 0; x < array.length; ++x) {
            const cell = row.insertCell(-1);
            cell.innerHTML = array[y][x];
        }
    }
}

const button = document.querySelector('#button');
button.addEventListener('click', function() {
    const size = document.querySelector('#number').value;
    const array = createZeroFilled2DArray(size);
    markWaterCircles(array);
    writeDataToTable(array);    
});
