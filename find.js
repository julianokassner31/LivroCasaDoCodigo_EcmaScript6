console.log('Procurando por aluno de forma convencional');
var	alunos	=	[
    {nome:'joão'},
    {nome:'josé'},
    {nome:'maria'}
];
var	aluno;
for(var	i	=	0;	i	<	alunos.length;	i++)	{
    if(alunos[i].nome	===	'josé')	{
            aluno	=	alunos[i];
            break;
    }
}
console.log(aluno);

console.log('Procurando por aluno com Find');
//sempre ira retornar o primeiro encontrado caso exista dois ou mais nomes iguais
var aluno = alunos.find(f => f.nome === 'maria');
console.log(aluno);