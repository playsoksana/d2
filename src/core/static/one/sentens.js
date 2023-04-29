/* eslint-disable quotes */
const sentens = [
    {
        deutsch: "Ich weiss es nicht",
        UA: "Я не знаю этого",
        id: "1",
    },
    {
        deutsch: "Er weiss es nicht",
        UA: "Он не знает этого",
        id: "2",
    },
    {
        deutsch: "Sie arbeitet heute",
        UA: "Она работает сегодня",
        id: "3",
    },
    {
        deutsch: "Es hilft mir",
        UA: "Это помогает мне",
        id: "4",
    },
    {
        deutsch: "heute arbeitet sie",
        UA: "Сегодня работает она",
        id: "5",
    },

    {
        deutsch: "Er lernt jetzt",
        UA: "Oн сейчас учится",
        id: "6",
    },
    {
        deutsch: "jetzt lernt er",
        UA: "Cейчас учится oн",
        id: "7",
    },
    {
        deutsch: "Sie spricht Deutsch",
        UA: "Она говорит на немецком",
        id: "8",
    },
    {
        deutsch: "Ich spreche Englisch",
        UA: "Я говорю на английском",
        id: "9",
    },
    {
        deutsch: "Sie sprechen Spanisch",
        UA: "Они говорят на испанском",
        id: "10",
    },
    {
        deutsch: "Du sprichst Deutsch",
        UA: "Ты говоришь по-немецки",
        id: "11",
    },
    {
        deutsch: "Es kostet viel",
        UA: "Это стоит много",
        id: "12",
    },
    {
        deutsch: "Es kostet viel Geld",
        UA: "Это стоит много денег",
        id: "13",
    },
    {
        deutsch: "Es kostet sehr wenig",
        UA: "Это стоит очень мало",
        id: "14",
    },
    {
        deutsch: "Es kostet so viel",
        UA: "Это стоит так много",
        id: "15",
    },
    {
        deutsch: "Es kostet zehn Franken",
        UA: "Это стоит 10 франков",
        id: "16",
    },
    {
        deutsch: "Es kostet zwanzig Euro",
        UA: "Это стоит двадцать Euro",
        id: "17",
    },
    {
        deutsch: "Ich spiele Fussball",
        UA: "Я играю в футбол",
        id: "18",
    },
    {
        deutsch: "Wir spielen Fussball",
        UA: "Мы играем в футбол",
        id: "19",
    },
    {
        deutsch: "Er spielt das Klavier",
        UA: "Он играет на фортепиано",
        id: "20",
    },
    {
        deutsch: "Er verdient gutes Geld",
        UA: "Он зарабатывает хорошие деньги",
        id: "21",
    },
    {
        deutsch: "Er verdient so viel",
        UA: "Он зарабатывает так много",
        id: "22",
    },
    {
        deutsch: "Sie verdienen wenig",
        UA: "Они зарабатывают мало",
        id: "23",
    },
    {
        deutsch: "Es hilft mir wirklich",
        UA: "Это действительно помогает мне",
        id: "24",
    },
    {
        deutsch: "Ich helfe ihnen",
        UA: "Я помогаю им",
        id: "25",
    },
    {
        deutsch: "Sie helfen uns",
        UA: "Они помогают нам",
        id: "26",
    },
    {
        deutsch: "Sie hilft dir",
        UA: "Она помогает тебе",
        id: "27",
    },
    {
        deutsch: "Ich habe eine grosse Familie",
        UA: "У меня есть большая семья",
        id: "28",
    },
    {
        deutsch: "Er hat eine grosse Familie",
        UA: "У него большая семья",
        id: "29",
    },
    {
        deutsch: "Ihr habt viel Geld",
        UA: "У вас много денег (множест)",
        id: "30",
    },
    {
        deutsch: "Es ist schön",
        UA: "Оно красивое",
        id: "31",
    },
    {
        deutsch: "Sie ist gut",
        UA: "Она красивая",
        id: "32",
    },
    {
        deutsch: "Ihr seid gut",
        UA: "Вы хорошие (множест)",
        id: "33",
    },
    {
        deutsch: "Sie sind gut",
        UA: "Они хорошие",
        id: "34",
    },
    {
        deutsch: "Er ist gut",
        UA: "Oн красивый",
        id: "35",
    },
    {
        deutsch: "Du bist gut",
        UA: "Ты хорошая",
        id: "36",
    },
    {
        deutsch: "Ich bin gut",
        UA: "Я хорошая",
        id: "37",
    },
    {
        deutsch: "Du hast Geld",
        UA: "У тебя есть деньги",
        id: "38",
    },
    {
        deutsch: "Sie hat eine Frage",
        UA: "У неё есть вопрос",
        id: "39",
    },
    {
        deutsch: "Ich habe eine Frage",
        UA: "У меня есть вопрос",
        id: "40",
    },
    {
        deutsch: "Wir haben ein Problem",
        UA: "У нас есть проблема",
        id: "41",
    },
    {
        deutsch: "Er hat eine Idee",
        UA: "У него есть идея",
        id: "42",
    },
    {
        deutsch: "Sie haben viele Ideen",
        UA: "У них много идей",
        id: "43",
    },
    {
        deutsch: "Ihr spricht Deutsch",
        UA: "Вы говорите по-немецки (множест)",
        id: "44",
    },
    {
        deutsch: "Sie spricht Deutsch",
        UA: "Она говорит на немецком",
        id: "45",
    },
    {
        deutsch: "Woher kommen Sie",
        UA: "Вы откуда?",
        id: "46",
        question: true,
    },
    {
        deutsch: "Woher kommst du",
        UA: "Tы откуда?",
        id: "47",
        question: true,
    },
    {
        deutsch: "freut mich",
        UA: "Я рад",
        id: "48",
    },
    {
        deutsch: "Wie heissen Sie",
        UA: "Как вас зовут?",
        id: "49",
        question: true,
    },
    {
        deutsch: "Wie heisst du",
        UA: "Как тебя зовут?",
        id: "50",
        question: true,
    },
    {
        deutsch: "Wer bist du",
        UA: "Кто ты?",
        id: "51",
        question: true,
    },
    {
        deutsch: "Wer sind Sie",
        UA: "Кто Вы?",
        id: "52",
        question: true,
    },
    {
        deutsch: "Wer ist er",
        UA: "Кто он?",
        id: "53",
        question: true,
    },
    {
        deutsch: "Ich heisse Tor",
        UA: "Меня зовут Тор",
        id: "54",
    },
    {
        deutsch: "Es ist sehr interessant",
        UA: "Это очень интересно",
        id: "55",
    },
    {
        deutsch: "Es ist nicht interessant",
        UA: "Это не интересно",
        id: "56",
    },
    {
        deutsch: "Er heisst Tor",
        UA: "Его зовут Тор",
        id: "57",
    },
    {
        deutsch: "Ich schaue dich an",
        UA: "Я смотрю на тебя",
        id: "58",
    },
    {
        deutsch: "Er schaut mich an",
        UA: "Oн смотрит на меня",
        id: "59",
    },
    {
        deutsch: "Er hört mir nicht",
        UA: "Oн не слышит меня",
        id: "60",
    },
    {
        deutsch: "wiederholen Sie noch einmal",
        UA: "Повторите еще раз",
        id: "61",
    },
    {
        deutsch: "kreuzen Sie an",
        UA: "Поставьте галочку",
        id: "62",
    },
    {
        deutsch: "Er ergänzt alles",
        UA: "Он дополняет все",
        id: "63",
    },
    {
        deutsch: "Er zeigt es",
        UA: "Oн показывает это",
        id: "64",
    },
    {
        deutsch: "Ich zeige das Buch",
        UA: "Я показываю книгу",
        id: "65",
    },
    {
        deutsch: "Ich suche Arbeit",
        UA: "Я ищу работу",
        id: "66",
    },
    {
        deutsch: "Ihr markiert es",
        UA: "Вы отмечаете это  (множест)",
        id: "67",
    },
    {
        deutsch: "hören Sie und sprechen Sie nach",
        UA: "Слушайте и повторяйте",
        id: "68",
    },
    {
        deutsch: "raten Sie",
        UA: "Угадайте/Посоветуйте",
        id: "69",
    },
    {
        deutsch: "raten Sie das Wort",
        UA: "Угадайте слово",
        id: "70",
    },
    {
        deutsch: "Was meinst du",
        UA: "Что ты имеешь в виду?",
        id: "71",
        question: true,
    },
    {
        deutsch: "Was meinen Sie",
        UA: "Что вы имеете в виду?",
        id: "72",
        question: true,
    },
    {
        deutsch: "Was meint er",
        UA: "Что он имеет в виду?",
        id: "73",
        question: true,
    },
    {
        deutsch: "Was meint ihr",
        UA: "Что вы имеете в виду? (множест)",
        id: "74",
    },
    {
        deutsch: "Ich sage es immer",
        UA: "Я всегда говорю это",
        id: "75",
    },
    {
        deutsch: "sagen Sie mir bitte",
        UA: "пожалуйста, скажите мне",
        id: "76",
    },
    {
        deutsch: "Du sagst es immer",
        UA: "Tы всегда это говоришь",
        id: "77",
    },
    {
        deutsch: "Sie vergleicht es",
        UA: "Она сравнивает это",
        id: "78",
    },
    {
        deutsch: "Ich muss Wörter vergleichen",
        UA: "Я должен сравнить слова",
        id: "79",
    },
    {
        deutsch: "Sie müssen Wörter vergleichen",
        UA: "Вы должны сравнить слова",
        id: "80",
    },
    {
        deutsch: "Sie müssen Wörter vergleichen",
        UA: "Вы должны сравнить слова",
        id: "81",
    },
    {
        deutsch: "Er muss Wörter vergleichen",
        UA: "Он должен сравнить слова",
        id: "82",
    },
    {
        deutsch: "Sie können Wörter vergleichen",
        UA: "Вы можете сравнить слова",
        id: "83",
    },
    {
        deutsch: "Ich kann Wörter vergleichen",
        UA: "Я могу сравнить слова",
        id: "84",
    },
    {
        deutsch: "Er kann es nicht",
        UA: "он не может этого сделать",
        id: "85",
    },
    {
        deutsch: "Ich kann es nicht",
        UA: "Я не могу этого сделать",
        id: "86",
    },
    {
        deutsch: "erzählen Sie",
        UA: "Расскажите",
        id: "87",
    },
    {
        deutsch: "Ich muss es verbinden",
        UA: "Мне нужно это соединить",
        id: "88",
    },
    {
        deutsch: "verbinden Sie es",
        UA: "Соедини это",
        id: "89",
    },
    {
        deutsch: "Ich kann ein bisschen",
        UA: "Могу сделать немного",
        id: "90",
    },
    {
        deutsch: "Ich kann aber nur ein bisschen",
        UA: "Я могу но только немного",
        id: "91",
    },
    {
        deutsch: "Ich stimme zu dir",
        UA: "Я согласен с вами",
        id: "92",
    },
    {
        deutsch: "Er stimmt zu mir nicht",
        UA: "Oн не согласен со мной",
        id: "93",
    },
    {
        deutsch: "Ich brauche es auch",
        UA: "Мне тоже это нужно",
        id: "94",
    },
    {
        deutsch: "brauchst du es",
        UA: "Тебе это нужно?",
        id: "95",
        question: true,
    },
    {
        deutsch: "brauchst du ein Buch",
        UA: "Тебе нужна книга?",
        id: "96",
        question: true,
    },
    {
        deutsch: "brauchst du ein Buch",
        UA: "Тебе нужна книга?",
        id: "97",
        question: true,
    },
    {
        deutsch: "Wie bitte",
        UA: "Что, простите?",
        id: "98",
        question: true,
    },
    {
        deutsch: "das ist meine Stadt",
        UA: "Это мой город",
        id: "99",
    },
    {
        deutsch: "das ist meine neue Postleitzahl",
        UA: "Это мой новый почтовый индекс",
        id: "100",
    },
    {
        deutsch: "das ist meine neue Postleitzahl",
        UA: "Это мой новый почтовый индекс",
        id: "101",
    },
    {
        deutsch: "Ihr seid interessante Nachbarn",
        UA: "Вы интересные соседи",
        id: "102",
    },
    {
        deutsch: "Ihr seid wirklich interessante Nachbarn",
        UA: "Вы действительно интересные соседи",
        id: "103",
    },
    {
        deutsch: "Wer sind diese Leute",
        UA: "Кто эти люди?",
        id: "104",
        question: true,
    },
    {
        deutsch: "Wer ist das",
        UA: "Кто это?",
        id: "105",
        question: true,
    },
    {
        deutsch: "Was ist das",
        UA: "Что это?",
        id: "106",
        question: true,
    },
    {
        deutsch: "Wessen ist das",
        UA: "Чье это?",
        id: "107",
        question: true,
    },
    {
        deutsch: "Wann arbeitest du",
        UA: "Когда ты работаешь?",
        id: "108",
        question: true,
    },
    {
        deutsch: "Wo arbeitest du",
        UA: "Где ты работаешь?",
        id: "109",
        question: true,
    },
    {
        deutsch: "Warum machst du es",
        UA: "Зачем ты это делаешь?",
        id: "110",
        question: true,
    },
    {
        deutsch: "Ich verdiene viel",
        UA: "Я зарабатываю много",
        id: "111",
    },
];

export default sentens;
