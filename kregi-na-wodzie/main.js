function createArray(size) {
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

function modifyArray(array) {
    for (let i = 0; i < array.length / 2 + 1; ++i) {
        for (let y = i + 1; y < array.length - i - 1; ++y) {
            for (let x = i + 1; x < array.length - i - 1; ++x) {
                array[y][x] = i + 1;
            }
        }
    }
}


const table = document.querySelector('#table');
const button = document.querySelector('#button');

button.addEventListener('click', function() {
    const number = document.querySelector('#number').value;
    const array = createArray(number);
    modifyArray(array);
    
    for (let y = 0; y < number; ++y) {
        const row = table.insertRow(-1);

        for (let x = 0; x < number; ++x) {
            const cell = row.insertCell(-1);
            cell.innerHTML = array[y][x];
        }
    }
});
