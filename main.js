//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

const arrayTeam = [
    {
        'picture': 'Photography',
        'name': 'Kyojuro Rengoku',
        'work': 'Pilastro delle Fiamme',
    },
    {
        'picture': 'Photography',
        'name': 'Muichiro Tokito',
        'work': 'Pilastro della Nebbia',
    },
    {
        'picture': 'Photography',
        'name': 'Mitsuri Kanroji',
        'work': "Pilastro dell'Amore",
    },
    {
        'picture': 'Photography',
        'name': 'Giyu Tomioka',
        'work': "Pilastro del Acqua",
    },
    {
        'picture': 'Photography',
        'name': 'Shinobu Kocho',
        'work': "Pilastro degli Insetti",
    },
    {
        'picture': 'Photography',
        'name': 'Tengen Uzui',
        'work': "Pilastro del Suono",
    },
];

//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < arrayTeam.length; i++) {
    let memberTeam = arrayTeam[i];
    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    for (let member in memberTeam) {
        document.writeln(member, ':', memberTeam[member]);
    }
}
console.log(arrayTeam);


