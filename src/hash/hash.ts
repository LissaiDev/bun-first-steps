const password = "senha-teste";
const passwordAlternative = "senha-teste 2";

const hash = await Bun.password.hash(password, {
  algorithm: "bcrypt",
  cost: 4,
});
console.log(`Hash: ${hash}`);
const isMatch = await Bun.password.verify(password, hash);
const isMatch2 = await Bun.password.verify(passwordAlternative, hash);
console.log(`${password} é igual a ${hash}: ${isMatch}`);
console.log(`${passwordAlternative} é igual a ${hash}: ${isMatch2}`);
