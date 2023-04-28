const options = {
    das: ["das", "der", "die"],
    der: ["das", "der", "die"],
    die: ["das", "der", "die"],

    // ===
    Ich: ["Ich", "Sie", "Er", "Wir"],
    Wir: ["Ich", "Sie", "Er", "Wir"],

    Er: ["Ich", "Sie", "Er", "Du"],
    Du: ["Ich", "Sie", "Er", "Du"],
    Es: ["Ich", "Sie", "Er", "Es"],
    Sie: ["Ich", "Sie", "Er", "Es"],
    Ihr: ["Ihr", "Sie", "Er", "Es"],
    sie: ["er", "sie", "Sie", "es"],
    es: ["ich", "sie", "er", "es"],
    nicht: ["nicht", "nein", "nein", "noch"],
    mir: ["mir", "uns", "mich", "ich"],
    uns: ["mir", "uns", "mich", "ich"],
    dir: ["dir", "uns", "dich", "inh"],
    dich: ["dir", "uns", "dich", "inh"],
    ihnen: ["ihnen", "uns", "dich", "inh"],
    ihn: ["ihnen", "uns", "dich", "inh"],

    // VERB
    arbeitet: ["arbeitet", "arbeiten", "arbeite", "arbeitest"],
    arbeiten: ["arbeitet", "arbeiten", "arbeite", "arbeitest"],
    arbeite: ["arbeitet", "arbeiten", "arbeite", "arbeitest"],
    arbeitest: ["arbeitet", "arbeiten", "arbeite", "arbeitest"],

    helfen: ["helfen", "hilft", "helfe", "hilfst"],
    helfe: ["helfen", "hilft", "helfe", "hilfst"],
    hilft: ["helfen", "hilft", "helfe", "hilfst"],
    hilfst: ["helfen", "hilft", "helfe", "hilfst"],

    habe: ["habe", "hat", "haben", "habt"],
    habt: ["hat", "hast", "haben", "habt"],
    haben: ["habe", "hast", "haben", "habt"],
    hast: ["hat", "hast", "haben", "habt"],
    hat: ["hat", "hast", "haben", "habt"],

    // K
    kostet: ["kostet", "koste", "kosten", "kostst"],
    kosten: ["kostet", "koste", "kosten", "kostst"],

    // L

    lernt: ["lernt", "lernen", "lernst", "lerne"],
    lernen: ["lernt", "lernen", "lernst", "lerne"],
    lernst: ["lernt", "lernen", "lernst", "lerne"],
    lerne: ["lernt", "lernen", "lernst", "lerne"],

    // S
    spielen: ["spiele", "spielen", "spielt", "spielst"],
    spiele: ["spiele", "spielen", "spielt", "spielst"],
    spielt: ["spiele", "spielen", "spielt", "spielst"],
    spielst: ["spiele", "spielen", "spielt", "spielst"],

    sprechen: ["spricht", "sprechen", "spreche", "sprichst"],
    spricht: ["spricht", "sprechen", "spreche", "sprichst"],
    spreche: ["spricht", "sprechen", "spreche", "sprichst"],
    sprichst: ["spricht", "sprechen", "spreche", "sprichst"],

    bin: ["bist", "ist", "sind", "bin"],
    ist: ["bist", "ist", "sind", "seit"],
    bist: ["bist", "ist", "sind", "seit"],
    sind: ["bist", "ist", "sind", "seit"],
    seit: ["bist", "ist", "sind", "seit"],

    verdienen: ["verdiene", "verdienen", "verdient", "verdienst"],
    verdiene: ["verdiene", "verdienen", "verdient", "verdienst"],
    verdient: ["verdiene", "verdienen", "verdient", "verdienst"],
    verdienst: ["verdiene", "verdienen", "verdient", "verdienst"],

    wissen: ["wissen", "weiss", "weisst"],
    weiss: ["wissen", "weiss", "weisst"],

    // TIME
    heute: ["heute", "jetzt", "gestern", "bald"],
    jetzt: ["heute", "jetzt", "gestern", "bald"],
    "jeden Tag": ["heute", "jetzt", "jeden Tag", "stets"],
    stets: ["heute", "jetzt", "gestern", "bald"],

    // Noun

    Geld: ["Geld", "Gelb", "Gelt", "Gelf"],
    Familie: ["Familie", "Fimilie", "Femilie", "Famili"],
    Frage: ["Frage", "Problem", "Idee", "Lösung"],
    Problem: ["Frage", "Problem", "Idee", "Lösung"],
    Idee: ["Frage", "Problem", "Idee", "Lösung"],
    Ideen: ["Frage", "Problem", "Ideen", "Lösung"],
    Lösung: ["Frage", "Problem", "Idee", "Lösung"],

    // Lang
    Deutsch: ["Deutsch", "Englisch", "Spanisch", "Italienisch"],
    Spanisch: ["Deutsch", "Englisch", "Spanisch", "Italienisch"],
    Englisch: ["Deutsch", "Englisch", "Spanisch", "Italienisch"],
    Italienisch: ["Deutsch", "Englisch", "Spanisch", "Italienisch"],

    // Union

    und: ["und", "end", "and", "end"],

    // size
    viel: ["viel", "wenig", "gross", "klein"],
    viele: ["viele", "wenig", "grosse", "kleine"],
    wenig: ["viel", "wenig", "gross", "klein"],
    gross: ["viel", "wenig", "gross", "klein"],
    klein: ["viel", "wenig", "gross", "klein"],
    grosse: ["grosse", "kleine", "lange", "hoche"],
    kleine: ["grosse", "kleine", "lange", "hoche"],
    so: ["viel", "sehr", "gross", "so"],
    sehr: ["viel", "sehr", "gross", "so"],

    // NUMER
    zehn: ["zehn", "zwanzig", "dreissig", "vierzig"],
    zwanzig: ["zehn", "zwanzig", "dreissig", "vierzig"],
    dreissig: ["zehn", "zwanzig", "dreissig", "vierzig"],
    vierzig: ["zehn", "zwanzig", "dreissig", "vierzig"],

    //Geld

    Franken: ["Franken", "Frank", "Dollar", "Euro"],
    Frank: ["Franken", "Frank", "Dollar", "Euro"],
    Dollar: ["Franken", "Frank", "Dollar", "Euro"],
    Euro: ["Franken", "Frank", "Dollar", "Euro"],

    // SPORT
    Fussball: ["Fussball", "Eishockey", "Karten", "Klavier"],
    Eishockey: ["Fussball", "Eishockey", "Karten", "Klavier"],
    Karten: ["Fussball", "Eishockey", "Karten", "Klavier"],
    Klavier: ["Fussball", "Eishockey", "Karten", "Klavier"],

    wirklich: ["wirklich", "vielleicht", "stets", "niemals"],

    // Adverb
    gut: ["gut", "schlecht", "gutes", "interessant"],
    gutes: ["gut", "schlecht", "gutes", "interessant"],
    // eslint-disable-next-line prettier/prettier
    "schön": ["schön", "schon", "schoon", "schöne"],

    einen: ["ein", "einen", "eine", "----"],
    ein: ["ein", "einen", "eine", "----"],
    eine: ["ein", "einen", "eine", "----"],
};

export default options;
