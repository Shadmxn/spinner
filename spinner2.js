const characters = ['|', '/', '-', '\\'];
let delay = 100;

for (let i = 0; i < characters.length * 2; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${characters[i % characters.length]}   `);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay);
