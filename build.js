const fs = require('fs');

setTimeout(() => {
  const file = fs.readFileSync('./dist/index.html')

  const str = file.toString();

  const newFileStr = str.replace('[to-be-replaced]', '.')

  fs.writeFileSync('./dist/index.html', newFileStr )
}, 500)
