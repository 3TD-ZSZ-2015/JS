const pictureTypes = [
  {
    name: "klepsydra",
    algorithm: function(size, space, fill, newLine) {
      let content = '';

      for (let i = 0; i < size; ++i) {
        const spaces = space.repeat(i);
        const element = fill.repeat((size - i) * 2 - 1);
        content += (spaces + element + newLine);
      }
 
      for (let i = size - 2; i >= 0; --i) {
        const spaces = space.repeat(i);
        const element = fill.repeat((size - i) * 2 - 1);
        content += (spaces + element + newLine);
      }

      return content;
    }
  },
  {
    name: "kwadrat",
    algorithm: function(size, space, fill, newLine) {
      let content = '';

      for (let i = 0; i < size; ++i) {
        const element = fill.repeat(size);
        content += (element + newLine);
      }

      return content;
    }
  },
  {
    name: "trójkąt",
    algorithm: function(size, space, fill, newLine) {
      let content = '';

      for (let i = 0; i < size; ++i) {
        const spaces = space.repeat(i);
        const element = fill.repeat((size - i) * 2 - 1);
        content += (spaces + element + newLine);
      }

      return content;
    }
  },
  {
    name: "choinka",
    algorithm: function(size, space, fill, newLine) {
        let content = '';

        for (let line = size - 1; line >= 0; --line) {
            const spaces = space.repeat(line);
            const treeSegment = fill.repeat((size - line) * 2 - 1);
            content += (spaces + treeSegment + newLine);
        }
                        
        const bottomSize = (size * 2 - 1) / 3;
        const bottom = fill.repeat(bottomSize);
        const spaces = space.repeat(bottomSize);
        content += (spaces + bottom);
                                  
        return content;
    }
  }
];

// Add options to select list
const typesList = document.querySelector('#types-list');
pictureTypes.forEach(function(type) {
  const element = document.createElement('option');
  element.value = type.name;
  element.innerHTML = type.name;
  typesList.appendChild(element);
});


const button = document.querySelector('#draw-button');
button.addEventListener('click', function() {
  const type = pictureTypes.find(function(element) {
    const typesList = document.querySelector('#types-list');
    const selectedTypeName = typesList.options[typesList.selectedIndex].value;
    return element.name === selectedTypeName; 
  });

  const size = document.querySelector('#size').value;
  const output = document.querySelector('#output');
  output.innerHTML = type.algorithm(size, '&nbsp;', '#', '<br>');
});
