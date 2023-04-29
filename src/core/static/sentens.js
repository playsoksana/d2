/* eslint-disable quotes */
const sentens = [
    {
        deutsch: "Ich weiss es nicht",
        UA: "Я не знаю этого",
        id: 1,
    },
    {
        deutsch: "Er weiss es nicht",
        UA: "Он не знает этого",
        id: 2,
    },
    {
        deutsch: "Sie arbeitet heute",
        UA: "Она работает сегодня",
        id: 3,
    },
    {
        deutsch: "Es hilft mir",
        UA: "Это помогает мне",
        id: 4,
    },
    {
        deutsch: "heute arbeitet sie",
        UA: "Сегодня работает она",
        id: 5,
    },

    {
        deutsch: "Er lernt jetzt",
        UA: "Oн сейчас учится",
        id: 6,
    },
    {
        deutsch: "jetzt lernt er",
        UA: "Cейчас учится oн",
        id: 6,
    },
    {
        deutsch: "Sie spricht Deutsch",
        UA: "Она говорит на немецком",
        id: 7,
    },
    {
        deutsch: "Ich spreche Englisch",
        UA: "Я говорю на английском",
        id: 8,
    },
    {
        deutsch: "Sie sprechen Spanisch",
        UA: "Они говорят на испанском",
        id: 9,
    },
    {
        deutsch: "Du sprichst Deutsch",
        UA: "Ты говоришь по-немецки",
        id: 10,
    },
    {
        deutsch: "Es kostet viel",
        UA: "Это стоит много",
        id: 11,
    },
    {
        deutsch: "Es kostet viel Geld",
        UA: "Это стоит много денег",
        id: 12,
    },
    {
        deutsch: "Es kostet sehr wenig",
        UA: "Это стоит очень мало",
        id: 13,
    },
    {
        deutsch: "Es kostet so viel",
        UA: "Это стоит так много",
        id: 14,
    },
    {
        deutsch: "Es kostet zehn Franken",
        UA: "Это стоит 10 франков",
        id: 15,
    },
    {
        deutsch: "Es kostet zwanzig Euro",
        UA: "Это стоит двадцать Euro",
        id: 16,
    },
    {
        deutsch: "Ich spiele Fussball",
        UA: "Я играю в футбол",
        id: 17,
    },
    {
        deutsch: "Wir spielen Fussball",
        UA: "Мы играем в футбол",
        id: 18,
    },
    {
        deutsch: "Er spielt das Klavier",
        UA: "Он играет на фортепиано",
        id: 19,
    },
    {
        deutsch: "Er verdient gutes Geld",
        UA: "Он зарабатывает хорошие деньги",
        id: 25,
    },
    {
        deutsch: "Er verdient so viel",
        UA: "Он зарабатывает так много",
        id: 26,
    },
    {
        deutsch: "Sie verdienen wenig",
        UA: "Они зарабатывают мало",
        id: 27,
    },
    {
        deutsch: "Ich verdiene viel",
        UA: "Я зарабатываю много",
        id: 28,
    },
    {
        deutsch: "Es hilft mir wirklich",
        UA: "Это действительно помогает мне",
        id: 29,
    },
    {
        deutsch: "Ich helfe ihnen",
        UA: "Я помогаю им",
        id: 30,
    },
    {
        deutsch: "Sie helfen uns",
        UA: "Они помогают нам",
        id: 31,
    },
    {
        deutsch: "Sie hilft dir",
        UA: "Она помогает тебе",
        id: 32,
    },
    {
        deutsch: "Ich habe eine grosse Familie",
        UA: "У меня есть большая семья",
        id: 33,
    },
    {
        deutsch: "Er hat eine grosse Familie",
        UA: "У него большая семья",
        id: 34,
    },
    {
        deutsch: "Ihr habt viel Geld",
        UA: "У вас много денег (множест)",
        id: 35,
    },
    {
        deutsch: "Es ist schön",
        UA: "Оно красивое",
        id: 36,
    },
    {
        deutsch: "Sie ist gut",
        UA: "Она красивая",
        id: 37,
    },
    {
        deutsch: "Ihr seit gut",
        UA: "Вы хорошие (множест)",
        id: 38,
    },
    {
        deutsch: "Sie sind gut",
        UA: "Они хорошие",
        id: 39,
    },
    {
        deutsch: "Er ist gut",
        UA: "Oн красивый",
        id: 40,
    },
    {
        deutsch: "Du bist gut",
        UA: "Ты хорошая",
        id: 41,
    },
    {
        deutsch: "Ich bin gut",
        UA: "Я хорошая",
        id: 42,
    },
    {
        deutsch: "Du hast Geld",
        UA: "У тебя есть деньги",
        id: 43,
    },
    {
        deutsch: "Sie hat eine Frage",
        UA: "У неё есть вопрос",
        id: 44,
    },
    {
        deutsch: "Ich habe eine Frage",
        UA: "У меня есть вопрос",
        id: 45,
    },
    {
        deutsch: "Wir haben ein Problem",
        UA: "У нас есть проблема",
        id: 46,
    },
    {
        deutsch: "Er hat eine Idee",
        UA: "У него есть идея",
        id: 47,
    },
    {
        deutsch: "Sie haben viele Ideen",
        UA: "У них много идей",
        id: 48,
    },
    {
        deutsch: "Ihr spricht Deutsch",
        UA: "Вы говорите по-немецки (множест)",
        id: 49,
    },
    {
        deutsch: "Sie spricht Deutsch",
        UA: "Она говорит на немецком",
        id: 50,
    },
    {
        deutsch: "Woher kommen Sie",
        UA: "Вы откуда?",
        id: 51,
        question: true,
    },
    {
        deutsch: "Woher kommst du",
        UA: "Tы откуда?",
        id: 52,
        question: true,
    },
    {
        deutsch: "freut mich",
        UA: "Я рад",
        id: 53,
    },
    {
        deutsch: "Wie heissen Sie",
        UA: "Как вас зовут?",
        id: 54,
        question: true,
    },
    {
        deutsch: "Wie heisst du",
        UA: "Как тебя зовут?",
        id: 55,
        question: true,
    },
    {
        deutsch: "Wer bist du",
        UA: "Кто ты?",
        id: 56,
        question: true,
    },
    {
        deutsch: "Wer sind Sie",
        UA: "Кто Вы?",
        id: 57,
        question: true,
    },
    {
        deutsch: "Wer ist er",
        UA: "Кто он?",
        id: 58,
        question: true,
    },
    {
        deutsch: "Ich heisse Tor",
        UA: "Меня зовут Тор",
        id: 59,
    },
    {
        deutsch: "Es ist sehr interessant",
        UA: "Это очень интересно",
        id: 60,
    },
    {
        deutsch: "Es ist nicht interessant",
        UA: "Это не интересно",
        id: 61,
    },
    {
        deutsch: "Er heisst Tor",
        UA: "Его зовут Тор",
        id: 62,
    },
    {
        deutsch: "Ich schaue dich an",
        UA: "Я смотрю на тебя",
        id: 63,
    },
    {
        deutsch: "Er schaut mich an",
        UA: "Oн смотрит на меня",
        id: 64,
    },
    {
        deutsch: "Er hört mir nicht",
        UA: "Oн не слышит меня",
        id: 65,
    },
    {
        deutsch: "wiederholen Sie noch einmal",
        UA: "Повторите еще раз",
        id: 66,
    },
    {
        deutsch: "kreuzen Sie an",
        UA: "Поставьте галочку",
        id: 67,
    },
    {
        deutsch: "Er ergänzt alles",
        UA: "Он дополняет все",
        id: 69,
    },
    {
        deutsch: "Er zeigt es",
        UA: "Oн показывает это",
        id: 70,
    },
    {
        deutsch: "Ich zeige das Buch",
        UA: "Я показываю книгу",
        id: 71,
    },
    {
        deutsch: "Ich suche Arbeit",
        UA: "Я ищу работу",
        id: 72,
    },
    {
        deutsch: "Ihr markiert es",
        UA: "Вы отмечаете это  (множест)",
        id: 73,
    },
    {
        deutsch: "hören Sie und sprechen Sie nach",
        UA: "Слушайте и повторяйте",
        id: 74,
    },
    {
        deutsch: "raten Sie",
        UA: "Угадайте/Посоветуйте",
        id: 75,
    },
    {
        deutsch: "raten Sie das Wort",
        UA: "Угадайте слово",
        id: 76,
    },
    {
        deutsch: "Was meinst du",
        UA: "Что ты имеешь в виду?",
        id: 77,
        question: true,
    },
    {
        deutsch: "Was meinen Sie",
        UA: "Что вы имеете в виду?",
        id: 78,
        question: true,
    },
    {
        deutsch: "Was meint er",
        UA: "Что он имеет в виду?",
        id: 79,
        question: true,
    },
    {
        deutsch: "Was meint ihr",
        UA: "Что вы имеете в виду? (множест)",
        id: 80,
    },
    {
        deutsch: "Ich sage es immer",
        UA: "Я всегда говорю это",
        id: 81,
    },
    {
        deutsch: "sagen Sie mir bitte",
        UA: "пожалуйста, скажите мне",
        id: 82,
    },
    {
        deutsch: "Du sagst es immer",
        UA: "Tы всегда это говоришь",
        id: 83,
    },
    {
        deutsch: "Sie vergleicht es",
        UA: "Она сравнивает это",
        id: 84,
    },
    {
        deutsch: "Ich muss Wörter vergleichen",
        UA: "Я должен сравнить слова",
        id: 85,
    },
    {
        deutsch: "Sie müssen Wörter vergleichen",
        UA: "Вы должны сравнить слова",
        id: 86,
    },
    {
        deutsch: "Sie müssen Wörter vergleichen",
        UA: "Вы должны сравнить слова",
        id: 87,
    },
    {
        deutsch: "Er muss Wörter vergleichen",
        UA: "Он должен сравнить слова",
        id: 88,
    },
    {
        deutsch: "Sie können Wörter vergleichen",
        UA: "Вы можете сравнить слова",
        id: 89,
    },
    {
        deutsch: "Ich kann Wörter vergleichen",
        UA: "Я могу сравнить слова",
        id: 90,
    },
    {
        deutsch: "Er kann es nicht",
        UA: "он не может этого сделать",
        id: 91,
    },
    {
        deutsch: "Ich kann es nicht",
        UA: "Я не могу этого сделать",
        id: 92,
    },
    {
        deutsch: "erzählen Sie",
        UA: "Расскажите",
        id: 93,
    },
    {
        deutsch: "Ich muss es verbinden",
        UA: "Мне нужно это соединить",
        id: 94,
    },
    {
        deutsch: "verbinden Sie es",
        UA: "Соедини это",
        id: 95,
    },
    {
        deutsch: "Ich kann ein bisschen",
        UA: "Могу сделать немного",
        id: 96,
    },
    {
        deutsch: "Ich kann aber nur ein bisschen",
        UA: "Я могу но только немного",
        id: 97,
    },
    {
        deutsch: "Ich stimme zu dir",
        UA: "Я согласен с вами",
        id: 98,
    },
    {
        deutsch: "Er stimmt zu mir nicht",
        UA: "Oн не согласен со мной",
        id: 99,
    },
    {
        deutsch: "Ich brauche es auch",
        UA: "Мне тоже это нужно",
        id: 100,
    },
    {
        deutsch: "brauchst du es",
        UA: "Тебе это нужно?",
        id: 101,
        question: true,
    },
    {
        deutsch: "brauchst du ein Buch",
        UA: "Тебе нужна книга?",
        id: 102,
        question: true,
    },
    {
        deutsch: "brauchst du ein Buch",
        UA: "Тебе нужна книга?",
        id: 103,
        question: true,
    },
    {
        deutsch: "Wie bitte",
        UA: "Что, простите?",
        id: 104,
        question: true,
    },
    {
        deutsch: "das ist meine Stadt",
        UA: "Это мой город",
        id: 105,
    },
    {
        deutsch: "das ist meine neue Postleitzahl",
        UA: "Это мой новый почтовый индекс",
        id: 106,
    },
];

export default sentens;
