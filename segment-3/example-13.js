const arr = new Array(10)
  .fill(0)
  .map((x, idx) => ({ idx, r: Math.random() }))
  .forEach(x => console.log(x))

// this will not result in what you're expecting...why not?
