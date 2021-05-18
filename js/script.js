// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Gestire il cambio dell'immagine al click sui pallini in basso (nav);
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

var app = new Vue ({
    el : '#root',
    data : {
        images : [
            "https://pbs.twimg.com/media/CayRYF5WcAAqTAb?format=jpg&name=4096x4096",
            "https://www.northlandscapes.com/files/images/lightroom-presets/black-and-white/before-after/dramatic-black-and-white-lightroom-presets-81-after.jpg",
            "https://i1.wp.com/erickimphotography.com/blog/wp-content/uploads/2016/09/film-trix1600-portugal-windows-repetition-2015-eric-kim-street-photograpy-black-and-white-Monochrome-18.jpg?resize=1545%2C1024",
            "https://www.suitcaseandwanderlust.com/wp-content/uploads/2017/12/Japan-black-and-white-16.jpg",
            "https://scene360.com/wp-content/uploads/2015/05/japanese-photographers-04.jpg"
        ],
    },
});
