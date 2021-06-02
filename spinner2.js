const spinnerMoves = "|/-\\|/-\\|"

process.stdout.write('hello from spinner1.js... \rheyyy\n');


const spinner = function(spinnerMoves) {
  let delay = 0
  for (const spin of spinnerMoves) { 
    setTimeout(() => {
      process.stdout.write(`\r${spin}`);
    }, delay);
    delay += 100
  }
  setTimeout(() => {
    console.log('');
  }, delay);
}

spinner(spinnerMoves)