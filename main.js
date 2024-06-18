//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
const boxTeam = document.getElementById('boxMembers');

const arrayTeam = [
    {
        'picture': 'pilastri/kyojuro-rengoku.jpg',
        'name': 'Kyojuro Rengoku',
        'work': 'Pilastro delle Fiamme',
    },
    {
        'picture': 'pilastri/muichiro-tokito.jpg',
        'name': 'Muichiro Tokito',
        'work': 'Pilastro della Nebbia',
    },
    {
        'picture': 'pilastri/mitsuri-kanroji.jpg',
        'name': 'Mitsuri Kanroji',
        'work': "Pilastro dell'Amore",
    },
    {
        'picture': 'pilastri/giyu-tomioka.jpg',
        'name': 'Giyu Tomioka',
        'work': "Pilastro del Acqua",
    },
    {
        'picture': 'pilastri/kanae-kocho.jpg',
        'name': 'Shinobu Kocho',
        'work': "Pilastro degli Insetti",
    },
    {
        'picture': 'pilastri/tengen-uzui.jpg',
        'name': 'Tengen Uzui',
        'work': "Pilastro del Suono",
    },
    {
        'picture': 'pilastri/obanai-iguro.jpg',
        'name': 'Obanai Iguro',
        'work': "Pilastro dei Serpenti",
    },
    {
        'picture': 'pilastri/gyomei-himejima.jpg',
        'name': 'Gyomei Himejima',
        'work': "Pilastro della Pietra",
    },
    {
        'picture': 'pilastri/sanemi-shinazugawa.jpg',
        'name': 'Sanemi Shinazugawa',
        'work': "Pilastro del Vento",
    },
];


//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < arrayTeam.length; i++) {
    let memberTeam = arrayTeam[i];
    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    let content = document.createElement('div');
    content.classList.add('box-pilastri');
    content.innerHTML = `<img src="${memberTeam.picture}"></img> ${memberTeam.name}<br>  ${memberTeam.work}`;
    let imgElement = content.querySelector('img');
    imgElement.classList.add('width');

    boxTeam.append(content);
}

console.log(arrayTeam);


