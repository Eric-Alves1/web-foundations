const preco = 4500;
const parcelas = 13;
const centavos = Math.round(preco * 100);
const parcelaBase = (centavos - (centavos % parcelas)) / parcelas;
const resto = centavos % parcelas;
const totalPago = ((parcelaBase * parcelas) + resto) / 100;

console.log(`parcelas: ${parcelas}`)
console.log(`valor base da parcela: R$${(parcelaBase / 100).toFixed(2)}`);
console.log(`parcelas com 1 centavo a mais: ${resto}`);
console.log(`total a ser pago: R$${totalPago.toFixed(2)}`);