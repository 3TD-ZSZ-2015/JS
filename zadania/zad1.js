const array = [1, 2, 3, 4, 5, 6, 123];
let sum = 0;
for (let i = 0; i < array.length; i += 2) {
    sum += array[i];
}

document.write(sum);
