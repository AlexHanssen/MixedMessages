quotes=[
    '#59: With the right attitude anything is possible.',
'#60: Action is the step many forget when they wonder what happened to their dream.',
'#61: Your expectations for any given situation will greatly in%uence the end result.',
'#62: In this very moment you hold the power to change someone else\'s life for the better. Go do it.',
'#64: Giving is the reason for living.',
'#65: Above all else, be true to you.',
'#66: Allow adversity to be your teacher.',
'#67: Find people who believe in you until you can believe in yourself.',
'#69: We often learn too late that we spent too much time worrying about the things that mattered least.',
'#72: Abundance flows more freely to you when it continues to flow outward from you, as you pass it on.',
'#73: Don\'t let your fear of the hazards keep your ship in the harbor. Cast off your lines and sail away!'
];
quotes = quotes.map( e => {return e.slice(5)});

const factChecker = () => 
{
    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0: {return 'Correct'}
        break;
        case 1: {return 'Incorrect'}
        break;
        case 2: {return 'Partly True'}
        break;

    }

}
const randomQuote = () => 
{
    let num = Math.floor(Math.random()*quotes.length);
    return quotes[num];

}

const Main = () => {    document.write(`The saying "${randomQuote()}" has been determined by our experts to be ${factChecker()}`)

}


