/* eslint-disable quotes */
const sentens = [
    {
        deutsch: "Ich weiss es nicht",
        UA: "Я не знаю этого",
        id: "A111S1",
    },
    {
        deutsch: "Er weiss es nicht",
        UA: "Он не знает этого",
        id: "A111S2",
    },
    {
        deutsch: "Sie arbeitet heute",
        UA: "Она работает сегодня",
        id: "A111S3",
    },
    {
        deutsch: "Es hilft mir",
        UA: "Это помогает мне",
        id: "A111S4",
    },
    {
        deutsch: "heute arbeitet sie",
        UA: "Сегодня работает она",
        id: "A111S5",
    },

    {
        deutsch: "Er lernt jetzt",
        UA: "Oн сейчас учится",
        id: "A111S6",
    },
    {
        deutsch: "jetzt lernt er",
        UA: "Cейчас учится oн",
        id: "A111S7",
    },
    {
        deutsch: "Sie spricht Deutsch",
        UA: "Она говорит на немецком",
        id: "A111S8",
    },
    {
        deutsch: "Ich spreche Englisch",
        UA: "Я говорю на английском",
        id: "A111S9",
    },
    {
        deutsch: "Sie sprechen Spanisch",
        UA: "Они говорят на испанском",
        id: "A111S10",
    },
    {
        deutsch: "Du sprichst Deutsch",
        UA: "Ты говоришь по-немецки",
        id: "A111S11",
    },
    {
        deutsch: "Es kostet viel",
        UA: "Это стоит много",
        id: "A111S12",
    },
    {
        deutsch: "Es kostet viel Geld",
        UA: "Это стоит много денег",
        id: "A111S13",
    },
    {
        deutsch: "Es kostet sehr wenig",
        UA: "Это стоит очень мало",
        id: "A111S14",
    },
    {
        deutsch: "Es kostet so viel",
        UA: "Это стоит так много",
        id: "A111S15",
    },
    {
        deutsch: "Es kostet zehn Franken",
        UA: "Это стоит 10 франков",
        id: "A111S16",
    },
    {
        deutsch: "Es kostet zwanzig Euro",
        UA: "Это стоит двадцать Euro",
        id: "A111S17",
    },
    {
        deutsch: "Ich spiele Fussball",
        UA: "Я играю в футбол",
        id: "A111S18",
    },
    {
        deutsch: "Wir spielen Fussball",
        UA: "Мы играем в футбол",
        id: "A111S19",
    },
    {
        deutsch: "Er spielt das Klavier",
        UA: "Он играет на фортепиано",
        id: "A111S20",
    },
    {
        deutsch: "Er verdient gutes Geld",
        UA: "Он зарабатывает хорошие деньги",
        id: "A111S21",
    },
    {
        deutsch: "Er verdient so viel",
        UA: "Он зарабатывает так много",
        id: "A111S22",
    },
    {
        deutsch: "Sie verdienen wenig",
        UA: "Они зарабатывают мало",
        id: "A111S23",
    },
    {
        deutsch: "Es hilft mir wirklich",
        UA: "Это действительно помогает мне",
        id: "A111S24",
    },
    {
        deutsch: "Ich helfe ihnen",
        UA: "Я помогаю им",
        id: "A111S25",
    },
    {
        deutsch: "Sie helfen uns",
        UA: "Они помогают нам",
        id: "A111S26",
    },
    {
        deutsch: "Sie hilft dir",
        UA: "Она помогает тебе",
        id: "A111S27",
    },
    {
        deutsch: "Ich habe eine grosse Familie",
        UA: "У меня есть большая семья",
        id: "A111S28",
    },
    {
        deutsch: "Er hat eine grosse Familie",
        UA: "У него большая семья",
        id: "A111S29",
    },
    {
        deutsch: "Ihr habt viel Geld",
        UA: "У вас много денег (множест)",
        id: "A111S30",
    },
    {
        deutsch: "Es ist schön",
        UA: "Оно красивое",
        id: "A111S31",
    },
    {
        deutsch: "Sie ist gut",
        UA: "Она красивая",
        id: "A111S32",
    },
    {
        deutsch: "Ihr seid gut",
        UA: "Вы хорошие (множест)",
        id: "A111S33",
    },
    {
        deutsch: "Sie sind gut",
        UA: "Они хорошие",
        id: "A111S34",
    },
    {
        deutsch: "Er ist gut",
        UA: "Oн красивый",
        id: "A111S35",
    },
    {
        deutsch: "Du bist gut",
        UA: "Ты хорошая",
        id: "A111S36",
    },
    {
        deutsch: "Ich bin gut",
        UA: "Я хорошая",
        id: "A111S37",
    },
    {
        deutsch: "Du hast Geld",
        UA: "У тебя есть деньги",
        id: "A111S38",
    },
    {
        deutsch: "Sie hat eine Frage",
        UA: "У неё есть вопрос",
        id: "A111S39",
    },
    {
        deutsch: "Ich habe eine Frage",
        UA: "У меня есть вопрос",
        id: "A111S40",
    },
    {
        deutsch: "Wir haben ein Problem",
        UA: "У нас есть проблема",
        id: "A111S41",
    },
    {
        deutsch: "Er hat eine Idee",
        UA: "У него есть идея",
        id: "A111S42",
    },
    {
        deutsch: "Sie haben viele Ideen",
        UA: "У них много идей",
        id: "A111S43",
    },
    {
        deutsch: "Ihr spricht Deutsch",
        UA: "Вы говорите по-немецки (множест)",
        id: "A111S44",
    },
    {
        deutsch: "Sie spricht Deutsch",
        UA: "Она говорит на немецком",
        id: "A111S45",
    },
    {
        deutsch: "Woher kommen Sie?",
        UA: "Вы откуда?",
        id: "A111S46",
    },
    {
        deutsch: "Woher kommst du?",
        UA: "Tы откуда?",
        id: "A111S47",
    },
    {
        deutsch: "freut mich",
        UA: "Я рад",
        id: "A111S48",
    },
    {
        deutsch: "Wie heissen Sie?",
        UA: "Как вас зовут?",
        id: "A111S49",
    },
    {
        deutsch: "Wie heisst du?",
        UA: "Как тебя зовут?",
        id: "A111S50",
    },
    {
        deutsch: "Wer bist du?",
        UA: "Кто ты?",
        id: "A111S51",
    },
    {
        deutsch: "Wer sind Sie?",
        UA: "Кто Вы?",
        id: "A111S52",
    },
    {
        deutsch: "Wer ist er?",
        UA: "Кто он?",
        id: "A111S53",
    },
    {
        deutsch: "Ich heisse Tor",
        UA: "Меня зовут Тор",
        id: "A111S54",
    },
    {
        deutsch: "Es ist sehr interessant",
        UA: "Это очень интересно",
        id: "A111S55",
    },
    {
        deutsch: "Es ist nicht interessant",
        UA: "Это не интересно",
        id: "A111S56",
    },
    {
        deutsch: "Er heisst Tor",
        UA: "Его зовут Тор",
        id: "A111S57",
    },
    {
        deutsch: "Ich schaue dich an",
        UA: "Я смотрю на тебя",
        id: "A111S58",
    },
    {
        deutsch: "Er schaut mich an",
        UA: "Oн смотрит на меня",
        id: "A111S59",
    },
    {
        deutsch: "Er hört mich nicht",
        UA: "Oн не слышит меня",
        id: "A111S60",
    },
    {
        deutsch: "wiederholen Sie noch einmal",
        UA: "Повторите еще раз",
        id: "A111S61",
    },
    {
        deutsch: "kreuzen Sie an",
        UA: "Поставьте галочку",
        id: "A111S62",
    },
    {
        deutsch: "Er ergänzt alles",
        UA: "Он дополняет все",
        id: "A111S63",
    },
    {
        deutsch: "Er zeigt es",
        UA: "Oн показывает это",
        id: "A111S64",
    },
    {
        deutsch: "Ich zeige das Buch",
        UA: "Я показываю книгу",
        id: "A111S65",
    },
    {
        deutsch: "Ich suche Arbeit",
        UA: "Я ищу работу",
        id: "A111S66",
    },
    {
        deutsch: "Ihr markiert es",
        UA: "Вы отмечаете это  (множест)",
        id: "A111S67",
    },
    {
        deutsch: "hören Sie und sprechen Sie nach",
        UA: "Слушайте и повторяйте",
        id: "A111S68",
    },
    {
        deutsch: "raten Sie",
        UA: "Угадайте/Посоветуйте",
        id: "A111S69",
    },
    {
        deutsch: "raten Sie das Wort",
        UA: "Угадайте слово",
        id: "A111S70",
    },
    {
        deutsch: "Was meinst du?",
        UA: "Что ты имеешь в виду?",
        id: "A111S71",
    },
    {
        deutsch: "Was meinen Sie?",
        UA: "Что вы имеете в виду?",
        id: "A111S72",
    },
    {
        deutsch: "Was meint er?",
        UA: "Что он имеет в виду?",
        id: "A111S73",
    },
    {
        deutsch: "Was meint ihr?",
        UA: "Что вы имеете в виду? (множест)",
        id: "A111S74",
    },
    {
        deutsch: "Ich sage es immer",
        UA: "Я всегда говорю это",
        id: "A111S75",
    },
    {
        deutsch: "sagen Sie mir bitte",
        UA: "пожалуйста, скажите мне",
        id: "A111S76",
    },
    {
        deutsch: "Du sagst es immer",
        UA: "Tы всегда это говоришь",
        id: "A111S77",
    },
    {
        deutsch: "Sie vergleicht es",
        UA: "Она сравнивает это",
        id: "A111S78",
    },
    {
        deutsch: "Ich muss Wörter vergleichen",
        UA: "Я должен сравнить слова",
        id: "A111S79",
    },
    {
        deutsch: "Sie müssen Wörter vergleichen",
        UA: "Вы должны сравнить слова",
        id: "A111S80",
    },
    {
        deutsch: "Sie müssen Wörter vergleichen",
        UA: "Вы должны сравнить слова",
        id: "A111S81",
    },
    {
        deutsch: "Er muss Wörter vergleichen",
        UA: "Он должен сравнить слова",
        id: "A111S82",
    },
    {
        deutsch: "Sie können Wörter vergleichen",
        UA: "Вы можете сравнить слова",
        id: "A111S83",
    },
    {
        deutsch: "Ich kann Wörter vergleichen",
        UA: "Я могу сравнить слова",
        id: "A111S84",
    },
    {
        deutsch: "Er kann es nicht",
        UA: "он не может этого сделать",
        id: "A111S85",
    },
    {
        deutsch: "Ich kann es nicht",
        UA: "Я не могу этого сделать",
        id: "A111S86",
    },
    {
        deutsch: "erzählen Sie",
        UA: "Расскажите",
        id: "A111S87",
    },
    {
        deutsch: "Ich muss es verbinden",
        UA: "Мне нужно это соединить",
        id: "A111S88",
    },
    {
        deutsch: "verbinden Sie es",
        UA: "Соедините это",
        id: "A111S89",
    },
    {
        deutsch: "Ich kann ein bisschen",
        UA: "Могу сделать немного",
        id: "A111S90",
    },
    {
        deutsch: "Ich kann aber nur ein bisschen",
        UA: "Я могу но только немного",
        id: "A111S91",
    },
    {
        deutsch: "Ich stimme zu dir",
        UA: "Я согласен с вами",
        id: "A111S92",
    },
    {
        deutsch: "Er stimmt zu mir nicht",
        UA: "Oн не согласен со мной",
        id: "A111S93",
    },
    {
        deutsch: "Ich brauche es auch",
        UA: "Мне тоже это нужно",
        id: "A111S94",
    },
    {
        deutsch: "brauchst du es?",
        UA: "Тебе это нужно?",
        id: "A111S95",
    },
    {
        deutsch: "brauchst du ein Buch?",
        UA: "Тебе нужна книга?",
        id: "A111S96",
    },
    {
        deutsch: "brauchst du ein Buch?",
        UA: "Тебе нужна книга?",
        id: "A111S97",
    },
    {
        deutsch: "Wie bitte?",
        UA: "Что, простите?",
        id: "A111S98",
    },
    {
        deutsch: "das ist meine Stadt",
        UA: "Это мой город",
        id: "A111S99",
    },
    {
        deutsch: "das ist meine neue Postleitzahl",
        UA: "Это мой новый почтовый индекс",
        id: "A111S100",
    },
    {
        deutsch: "das ist meine neue Postleitzahl",
        UA: "Это мой новый почтовый индекс",
        id: "A111S101",
    },
    {
        deutsch: "Ihr seid interessante Nachbarn",
        UA: "Вы интересные соседи",
        id: "A111S102",
    },
    {
        deutsch: "Ihr seid wirklich interessante Nachbarn",
        UA: "Вы действительно интересные соседи",
        id: "A111S103",
    },
    {
        deutsch: "Wer sind diese Leute?",
        UA: "Кто эти люди?",
        id: "A111S104",
    },
    {
        deutsch: "Wer ist das?",
        UA: "Кто это?",
        id: "A111S105",
    },
    {
        deutsch: "Was ist das?",
        UA: "Что это?",
        id: "A111S106",
    },
    {
        deutsch: "Wessen ist das?",
        UA: "Чье это?",
        id: "A111S107",
    },
    {
        deutsch: "Wann arbeitest du?",
        UA: "Когда ты работаешь?",
        id: "A111S108",
    },
    {
        deutsch: "Wo arbeitest du?",
        UA: "Где ты работаешь?",
        id: "A111S109",
    },
    {
        deutsch: "Warum machst du es?",
        UA: "Зачем ты это делаешь?",
        id: "A111S110",
    },
    {
        deutsch: "Ich verdiene viel",
        UA: "Я зарабатываю много",
        id: "A111S111",
    },
];

export default sentens;
