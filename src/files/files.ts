await Bun.write("output.txt", "I love bun!")
const file = await Bun.file("output.txt");
console.log(await file.text());