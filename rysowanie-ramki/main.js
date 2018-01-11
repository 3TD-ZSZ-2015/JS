var size = prompt("Podaj rozmiar");

var content = '';
for (var i = 0; i < size; ++i) {
	if (i == 0 || i == size - 1) {
		content += '#'.repeat(size);
	} else {
		content += '#' + '&nbsp;'.repeat(size - 2) + '#';
	}
		content += '<br>';
}

var output = document.getElementById('output');
output.innerHTML = content;

