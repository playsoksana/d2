import num from "core/static/numbers";

const getMainNum = (num, element) => {
    const count = Math.floor(num / element);
    const newNum = num - (element * count);

    if (element === 1000000 || element === 100000 || element === 1000 || element === 100) {
        return { newNum, count }
    }

    return { newNum }
}

const getNumbers = (randomValue) => {
    if (!randomValue) {
        return "null";
    }

    let result = "";
    const afterLast = Number([...`${randomValue}`].slice(-2).join(""));
    const last = Number([...`${randomValue}`].slice(-1).join(""));

    randomValue -= afterLast;
    const arrNumSort = Object.keys(num).sort((a, b) => { return +b - a }).map(e => +e);

    for (let i = 0; i < arrNumSort.length; i++) {
        const element = arrNumSort[i];
        if (element <= randomValue) {
            const { newNum, count = 0 } = getMainNum(randomValue, element);
            if (element === 1000000 && count === 1) {
                result += "eine Million "
                randomValue -= 1000000;
            } else {
                if (count) {
                    if (element === 1000000) {
                        result += num[count] + " ";
                    } else {
                        if (!num[count]) {
                            const string = getNumbers(count);
                            result += string;
                        }
                        else {
                            console.log(num[count], num[element]);
                            result += num[count];
                        }
                    }
                }

                result += num[element];
                randomValue = newNum;
            }

        }
    }

    if (afterLast === 0 && last === 0) {
        return result;
    }

    if (afterLast > 20) {
        if (last === 0) {
            result += num[afterLast];
        }
        else {
            result += num[last] + "und" + num[afterLast - last]
        }
    } else {
        result += num[afterLast]
    }

    return result;
}

export default getNumbers;


// return num[randomValue]
// const arrNum = randomValue.toString();