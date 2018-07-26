console.log('Filtrando alunos maiores de 18 de forma convencional');
var	alunos	=	[
    {nome:'joão',	idade:15},
    {nome:'josé',	idade:18},
    {nome:'maria',	idade:20}
];
var	alunosDeMaior	=	[];
for(var	i	=	0;	i	<	alunos.length;	i++)	{
    if(alunos[i].idade	>=	18)	{
            alunosDeMaior.push(alunos[i]);
    }
}
console.log(`Todos os alunos ${alunos.length}`);
console.log(`Alunos de maior ${alunosDeMaior.length}`);

console.log('Filtrando alunos maiores de 18 com Filter');
var	alunosDeMaior	=	[];
alunosDeMaior = alunos.filter( f => f.idade >= 18);
console.log(`Todos os alunos ${alunos.length}`);
console.log(`Alunos de maior ${alunosDeMaior.length}`);