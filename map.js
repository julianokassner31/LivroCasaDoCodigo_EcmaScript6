console.log('Utilizando modo convencionar para criar outro array com o dobro');
var	numeros	=	[1,2,3];
var	dobro	=	[];
for(var	i	=	0;	i	<	numeros.length;	i++)	{
		dobro.push(numeros[i]	*	2);
}
console.log(numeros);
console.log(dobro);

console.log('Utilizando Map para criar array Dobro');
dobro = numeros.map(n => n * 2);
console.log(numeros);
console.log(dobro);
