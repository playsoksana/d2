const options = {
    das: ["das", "der", "die"],
    der: ["das", "der", "die"],
    die: ["das", "der", "die"],

    // ===
    Ich: ["Ich", "Sie", "Er", "Wir"],
    Wir: ["Ich", "Sie", "Er", "Wir"],

    Er: ["Ich", "Sie", "Er", "Du"],
    er: ["er", "Sie", "es", "du"],
    Du: ["Ich", "Sie", "Er", "Du"],
    du: ["ich", "Sie", "er", "du"],
    Es: ["Ich", "Sie", "Er", "Es"],
    Sie: ["Ich", "Sie", "Er", "Es"],
    Ihr: ["Ihr", "Sie", "Er", "Es"],
    ihr: ["ihr", "sie", "er", "es"],
    sie: ["er", "sie", "Sie", "es"],
    es: ["ich", "sie", "er", "es"],
    nicht: ["nicht", "nein", "nein", "noch"],
    mir: ["mir", "uns", "mich", "ich"],
    mich: ["mir", "uns", "mich", "ich"],
    uns: ["mir", "uns", "mich", "ich"],
    dir: ["dir", "uns", "dich", "inh"],
    dich: ["dir", "uns", "dich", "inh"],
    ihnen: ["ihnen", "uns", "dich", "inh"],
    ihn: ["ihnen", "uns", "dich", "inh"],

    // pred
    an: ["on", "an", "in", "na"],

    // VERB
    arbeitet: ["arbeitet", "arbeiten", "arbeite", "arbeitest"],
    arbeiten: ["arbeitet", "arbeiten", "arbeite", "arbeitest"],
    arbeite: ["arbeitet", "arbeiten", "arbeite", "arbeitest"],
    arbeitest: ["arbeitet", "arbeiten", "arbeite", "arbeitest"],

    // B
    brauchen: ["brauchen", "brauche", "braucht", "brauchst"],
    brauche: ["brauchen", "brauche", "braucht", "brauchst"],
    braucht: ["brauchen", "brauche", "braucht", "brauchst"],
    brauchst: ["brauchen", "brauche", "braucht", "brauchst"],

    // E
    ergänzen: ["ergänzen", "ergänze", "ergänzt", "ergänzst"],
    ergänze: ["ergänzen", "ergänze", "ergänzt", "ergänzst"],
    ergänzt: ["ergänzen", "ergänze", "ergänzt", "ergänzst"],
    ergänzst: ["ergänzen", "ergänze", "ergänzt", "ergänzst"],
    erzählen: ["erzählen", "erzähle", "erzählt", "erzählst"],
    helfen: ["helfen", "hilft", "helfe", "hilfst"],
    helfe: ["helfen", "hilft", "helfe", "hilfst"],
    hilft: ["helfen", "hilft", "helfe", "hilfst"],
    hilfst: ["helfen", "hilft", "helfe", "hilfst"],

    habe: ["habe", "hat", "haben", "habt"],
    habt: ["hat", "hast", "haben", "habt"],
    haben: ["habe", "hast", "haben", "habt"],
    hast: ["hat", "hast", "haben", "habt"],
    hat: ["hat", "hast", "haben", "habt"],

    heissen: ["heissen", "heisst", "heisse", "heist"],
    heisse: ["heissen", "heisst", "heisse", "heist"],
    heisst: ["heissen", "heisst", "heisse", "heist"],

    hört: ["hören", "höre", "hört", "hörst"],
    hören: ["hören", "höre", "hört", "hörst"],
    höre: ["hören", "höre", "hört", "hörst"],
    hörst: ["hören", "höre", "hört", "hörst"],
    // K
    kommen: ["kommen", "kommst", "kommt", "komme"],
    komme: ["kommen", "kommst", "kommt", "komme"],
    kommt: ["kommen", "kommst", "kommt", "komme"],
    kommst: ["kommen", "kommst", "kommt", "komme"],
    kostet: ["kostet", "koste", "kosten", "kostst"],
    kosten: ["kostet", "koste", "kosten", "kostst"],
    kreuzen: ["kreuzen", "kreuze", "kreuzt", "kreuzst"],
    // L

    lernt: ["lernt", "lernen", "lernst", "lerne"],
    lernen: ["lernt", "lernen", "lernst", "lerne"],
    lernst: ["lernt", "lernen", "lernst", "lerne"],
    lerne: ["lernt", "lernen", "lernst", "lerne"],

    // M
    machen: ["machen", "mache", "macht", "machst"],
    mache: ["machen", "mache", "macht", "machst"],
    machs: ["machen", "mache", "macht", "machst"],
    machst: ["machen", "mache", "macht", "machst"],

    meinen: ["meinen", "meine", "meint", "meinst"],
    meine: ["meinen", "meine", "meint", "meinst"],
    meint: ["meinen", "meine", "meint", "meinst"],
    meinst: ["meinen", "meine", "meint", "meinst"],
    markieren: ["markieren", "markiere", "markiert", "markierst"],
    markiere: ["markieren", "markiere", "markiert", "markierst"],
    markiert: ["markieren", "markiere", "markiert", "markierst"],
    markierst: ["markieren", "markiere", "markiert", "markierst"],

    // S
    sagen: ["sagen", "sage", "sagt", "sagst"],
    sage: ["sagen", "sage", "sagt", "sagst"],
    sagt: ["sagen", "sage", "sagt", "sagst"],
    sagst: ["sagen", "sage", "sagt", "sagst"],
    spielen: ["spiele", "spielen", "spielt", "spielst"],
    spiele: ["spiele", "spielen", "spielt", "spielst"],
    spielt: ["spiele", "spielen", "spielt", "spielst"],
    spielst: ["spiele", "spielen", "spielt", "spielst"],

    sprechen: ["spricht", "sprechen", "spreche", "sprichst"],
    spricht: ["spricht", "sprechen", "spreche", "sprichst"],
    spreche: ["spricht", "sprechen", "spreche", "sprichst"],
    sprichst: ["spricht", "sprechen", "spreche", "sprichst"],

    schauen: ["schauen", "schaue", "schaut", "schaust"],
    schaue: ["schauen", "schaue", "schaut", "schaust"],
    schaut: ["schauen", "schaue", "schaut", "schaust"],
    schaust: ["schauen", "schaue", "schaut", "schaust"],

    stimmen: ["stimmen", "stimme", "stimmt", "stimmst"],
    stimme: ["stimmen", "stimme", "stimmt", "stimmst"],
    stimmt: ["stimmen", "stimme", "stimmt", "stimmst"],
    stimmst: ["stimmen", "stimme", "stimmt", "stimmst"],

    suchen: ["suchen", "suche", "sucht", "suchst"],
    suche: ["suchen", "suche", "sucht", "suchst"],
    sucht: ["suchen", "suche", "sucht", "suchst"],
    suchst: ["suchen", "suche", "sucht", "suchst"],

    bin: ["bist", "ist", "sind", "bin"],
    ist: ["bist", "ist", "sind", "seid"],
    bist: ["bist", "ist", "sind", "seid"],
    sind: ["bist", "ist", "sind", "seid"],
    seid: ["bist", "ist", "sind", "seid"],

    tun: ["tur", "tun", "rate", "ratet"],

    raten: ["raten", "rate", "ratet", "ratest"],

    verdienen: ["verdiene", "verdienen", "verdient", "verdienst"],
    verdiene: ["verdiene", "verdienen", "verdient", "verdienst"],
    verdient: ["verdiene", "verdienen", "verdient", "verdienst"],
    verdienst: ["verdiene", "verdienen", "verdient", "verdienst"],

    verbinden: ["verbinden", "verbinde", "verbindt", "verbindst"],
    verbinde: ["verbinden", "verbinde", "verbindt", "verbindst"],
    verbindt: ["verbinden", "verbinde", "verbindt", "verbindst"],
    verbindst: ["verbinden", "verbinde", "verbindt", "verbindst"],

    vergleichen: ["vergleichen", "vergleiche", "vergleicht", "vergleichst"],
    vergleiche: ["vergleichen", "vergleiche", "vergleicht", "vergleichst"],
    vergleicht: ["vergleichen", "vergleiche", "vergleicht", "vergleichst"],
    vergleichst: ["vergleichen", "vergleiche", "vergleicht", "vergleichst"],

    wissen: ["wissen", "weiss", "weisst"],
    weiss: ["wissen", "weiss", "weisst"],

    wiederholen: ["wiederholen", "wiederhole", "wiederholt", "wiederholst"],
    wiederhole: ["wiederholen", "wiederhole", "wiederholt", "wiederholst"],
    wiederholt: ["wiederholen", "wiederhole", "wiederholt", "wiederholst"],
    wiederholst: ["wiederholen", "wiederhole", "wiederholt", "wiederholst"],

    zeigen: ["zeigen", "zeige", "zeigt", "zeigst"],
    zeige: ["zeigen", "zeige", "zeigt", "zeigst"],
    zeigt: ["zeigen", "zeige", "zeigt", "zeigst"],
    zeigst: ["zeigen", "zeige", "zeigt", "zeigst"],
    // TIME
    heute: ["heute", "jetzt", "gestern", "bald"],
    jetzt: ["heute", "jetzt", "gestern", "bald"],
    "jeden Tag": ["heute", "jetzt", "jeden Tag", "stets"],
    stets: ["heute", "jetzt", "gestern", "bald"],
    nach: ["nach", "jetzt", "gestern", "immer"],
    immer: ["nach", "jetzt", "gestern", "immer"],

    // Noun
    Arbeit: ["Arbeit", "Arbeiten", "Arbeite", "Arbeist"],
    Buch: ["Buch", "Bild", "Box", "Ball"],
    Geld: ["Geld", "Gelb", "Gelt", "Gelf"],
    Familie: ["Familie", "Fimilie", "Femilie", "Famili"],
    Frage: ["Frage", "Problem", "Idee", "Lösung"],
    Problem: ["Frage", "Problem", "Idee", "Lösung"],
    Idee: ["Frage", "Problem", "Idee", "Lösung"],
    Ideen: ["Frage", "Problem", "Ideen", "Lösung"],
    Lösung: ["Frage", "Problem", "Idee", "Lösung"],
    Wort: ["Word", "Wort", "Wörter", "Buch"],
    Wörter: ["Word", "Wort", "Wörter", "Buch"],

    // Lang
    Deutsch: ["Deutsch", "Englisch", "Spanisch", "Italienisch"],
    Spanisch: ["Deutsch", "Englisch", "Spanisch", "Italienisch"],
    Englisch: ["Deutsch", "Englisch", "Spanisch", "Italienisch"],
    Italienisch: ["Deutsch", "Englisch", "Spanisch", "Italienisch"],

    // Präpositionen
    zu: ["und", "end", "zu", "aber"],
    und: ["und", "end", "zu", "aber"],
    aber: ["und", "end", "nur", "aber"],
    nur: ["und", "auch", "nur", "aber"],
    auch: ["und", "auch", "nur", "aber"],

    // size
    viel: ["viel", "wenig", "gross", "klein"],
    viele: ["viele", "wenig", "grosse", "kleine"],
    wenig: ["wenig", "bisschen", "gross", "klein"],
    bisschen: ["wenig", "bisschen", "gross", "klein"],
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

    // Stadt
    Stadt: ["Stadt", "Adresse", "Strasse", "Land"],
    Adresse: ["Postleitzahl", "Adresse", "Strasse", "Land"],
    Strasse: ["Stadt", "Adresse", "Strasse", "Land"],
    Land: ["Stadt", "Adresse", "Strasse", "Land"],
    Postleitzahl: ["Stadt", "Adresse", "Strasse", "Postleitzahl"],

    Vertraut: ["Vertraut", "Nachbarn", "Verwandte", "Leute"],
    Nachbarn: ["Vertraut", "Nachbarn", "Verwandte", "Leute"],
    Verwandte: ["Vertraut", "Nachbarn", "Verwandte", "Leute"],
    Leute: ["Vertraut", "Nachbarn", "Verwandte", "Leute"],

    // SPORT
    Fussball: ["Fussball", "Eishockey", "Karten", "Klavier"],
    Eishockey: ["Fussball", "Eishockey", "Karten", "Klavier"],
    Karten: ["Fussball", "Eishockey", "Karten", "Klavier"],
    Klavier: ["Fussball", "Eishockey", "Karten", "Klavier"],

    wirklich: ["wirklich", "vielleicht", "stets", "interessant"],
    interessant: ["wirklich", "vielleicht", "stets", "interessant"],
    interessante: ["wirklich", "vielleicht", "interessant", "interessante"],
    alles: ["wirklich", "vielleicht", "alles", "interessant"],

    // Adverb
    gut: ["gut", "schlecht", "gutes", "interessant"],
    gutes: ["gut", "schlecht", "gutes", "interessant"],

    schön: ["schön", "schon", "schoon", "schöne"],

    einen: ["ein", "einen", "eine", "----"],
    ein: ["ein", "einen", "eine", "----"],
    eine: ["ein", "einen", "eine", "----"],
    noch: ["noch", "einen", "einmal", "eine"],
    einmal: ["noch", "einen", "einmal", "eine"],

    freut: ["traurig", "freut", "müde", "lustig"],
    neue: ["neue", "neuer", "neues", "neu"],

    diese: ["diese", "andere", "übrig", "neue"],
    // Questions

    Woher: ["Woher", "Wessen", "Wann", "Warum"],
    Wessen: ["Woher", "Wessen", "Wann", "Warum"],
    Wann: ["Woher", "Wessen", "Wann", "Warum"],
    Warum: ["Woher", "Wessen", "Wann", "Warum"],
    Wo: ["Woher", "Wo", "Wer", "Wie"],
    Wer: ["Woher", "Wo", "Wer", "Wie"],
    Was: ["Wo", "Wer", "Was", "Wie"],
    Wie: ["Woher", "Wo", "Wer", "Wie"],

    // Name
    Tor: ["Top", "Tor", "Mor", "Gor"],

    // bitte
    bitte: ["bitte", "danke", "wenig", "sehr"],

    // modal verb
    muss: ["muss", "müssen", "must", "---"],
    müssen: ["muss", "müssen", "must", "---"],
    kann: ["kann", "können", "kannst", "---"],
    können: ["kann", "können", "kannst", "---"],
};

export default options;
