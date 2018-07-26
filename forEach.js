var nomes = ['Juliano', 'Pedro', 'Debora'];

console.log('Printando uma lista de nomes com for convencional');
for(var i =0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log('Printando uma lista de nomes com o novo foreach');
nomes.forEach(function(nome){
    console.log(nome);
});

console.log('Printando uma lista de nomes com o novo foreach com array function (=>)');
nomes.forEach(nome => console.log(nome));

//O foreach nao irá printar nomes que foream adcionados apos sua instanciação
nomes.forEach(nome => {
    //esse nao nome nao vai aparecer na lista
    nomes.push('Vitor');
    console.log(`Printando nomes, somente os que foram adicionas fora deste foreach ${nome}`);
});

console.log(`Printando nomes, inclusive os que foram adicionados dentro do foreach acima ${nomes}`);
