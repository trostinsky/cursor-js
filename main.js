const taxesByCountry = {
    Ukraine(salary){
        const RECEIVE = 0.18;
        const MILITARY = 0.015;
        const militaryTax = salary * MILITARY;
        const receiveTax = salary * RECEIVE
        return {
            totalTax: militaryTax + receiveTax,
            militaryTax,
            receiveTax
        }
    },
    Spain(salary){
        const RECEIVE = 0.24;
        return {
            receiveTax: salary * RECEIVE
        }
    },
    Germany(salary){
        const BIG_SALARY = 4000;
        const RECEIVE_SMALL = 0.15;
        const RECEIVE_BIG = 0.40;
        return salary < BIG_SALARY ?
            salary * RECEIVE_SMALL : salary * RECEIVE_BIG;
        if(salary < BIG_SALARY){
            return {
                receiveTax: salary * RECEIVE_SMALL
            }
        } else {
            return {
                receiveTax: salary * RECEIVE_BIG
            }
        }
    },
    default(salary){
        return 100;
    }
}

// Ukraine = 18% + 1.5%, Spain = 24%, Germany = [15%, 40%]
const getTax = function(salary = 0, country = "default"){
    // 1. Проверить есть ли ключ в объекте
    if(country in taxesByCountry){
        // 2. Если ключ есть – берем функцию из объекта
        return taxesByCountry[country](salary);
    } else {
        // 3. Если ключа нет – default();
        return taxesByCountry.default();
    }
};

const getRowSum = function(lastNumber, power, isOddOnly = false){
    let sum = 0;
    for(let i = 1; i <= lastNumber; i++){
        if(isOddOnly && i % 2 !== 0){
            continue;
        }
        sum += i ** power;
    }
    return sum;
}

const getMaxDigit = function(number){
    if(typeof number !== "number"){
        return false;
    }
    let maxDigit = -Infinity;
    // 1. Подготовливаем число (Целое и переводим в строку)
    const preparedNumber = number.toFixed(0);
    // 2. Идем по каждому символу в строке
    preparedNumber.split("").forEach(function(digit){
        // 3. Для каждого символа выполняем сравнение с максимальной цифрой
        if(parseInt(digit) > maxDigit){
            // 4. Если цифра больше – заменяем
            maxDigit = parseInt(digit);
        }
        // maxDigit = parseInt(digit) > maxDigit ? parseInt(digit) : maxDigit;
    })
    return maxDigit;
}

const getRandomInt = function(start, end){
    return Math.floor(Math.random() * (end - start) + start);
}

const getRandomArray = function(start, end, totalCount = 10){
    const randomArray = [];
    for(let i = 0; i < totalCount; i++){
        randomArray.push(getRandomInt(start, end));
    }
    return randomArray;
}

const getRandomPassword = function(){
    const ALPHABET = "_-@#$%^&*()qwertyuiopasdfghjklzxcvbnm1234567890".split("");
    const MIN_PASSWORD = 8;
    const MAX_PASSWORD = 32;
    let password = "";
    const randomLength = getRandomInt(MIN_PASSWORD, MAX_PASSWORD);
    for(let i = 0; i < randomLength; i++){
        const randomSymbol = ALPHABET[getRandomInt(0, ALPHABET.length)];
        password += randomSymbol;
    }
    return password;
};

const getSuperPassword = function(){
    const currentMinute = new Date().getMinutes();
    const secret = "secret";
    return secret.split("").reduce((newPassword, letter) => {
        const charCode = letter.charCodeAt(0);
        const newCharCode = charCode * currentMinute;
        const newLetter = String.fromCharCode(newCharCode);
        return newPassword + newLetter;
    }, "")
}

const func = function(param, pampam, anotherFunc){
    anotherFunc(param + pampam);
};

const greeting = function(phrase) {
    const empty = "";
    return function(name) {
        return phrase + name;
    }
};

const hello = greeting("Hello ");
const byebye = greeting("Bye bye ");

const getAverage = function(...numbers){
    let average;
    const sum = numbers.reduce((total, next) => total + next, 0);
    const count = numbers.length;
    average = sum / count;
    return average;
}

// Найти моду в случайном массиве