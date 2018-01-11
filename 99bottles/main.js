var content = '';
for (var i = 99; i >= 1; --i) {
    var bottleNoun = ' bottles';
    if (i == 1) {
        bottleNoun = ' bottle';
    }
    
    content += i + bottleNoun + ' of beer on the wall, ' + i
        + bottleNoun + ' of beer. Take one down and pass it around - ';

    if (i > 1) {
        content += i - 1;
    } else {
        content += 'no more';
    }
    
    content += ' bottles of beer on the wall<br>';
}


var output = document.getElementById('output');
output.innerHTML = content;
