const inputField = document.getElementById('input1');
const inputField2 = document.getElementById('input2');
const inputField3 = document.getElementById('input3');
const submitOne = document.getElementById('submitA');
const submitTwo = document.getElementById('submitB');
const nb1 = document.getElementById('nb1');
const nb2 = document.getElementById('nb2');
const nb3 = document.getElementById('nb3');
const nb4 = document.getElementById('nb4');
const nb5 = document.getElementById('nb5');
const nb6 = document.getElementById('nb6');
const nb7 = document.getElementById('nb7');
const nb8 = document.getElementById('nb8');
const nb9 = document.getElementById('nb9');
const submit = document.getElementById('submit');
let convNumber = 0;
let arrayNumber = [];
let arrayNumberSecond = [];
let storeNumber = 0;
let secNumber = [];
let arrayField = [];
let newField;

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

function splice(nb1, nb2) {
    arrayNumberSecond.splice(nb1, nb2);
}

function splice2(nb1, nb2) {
    newField.splice(nb1, nb2);
}

const push = (pushItem) => arrayNumberSecond.push(pushItem);


function pushMan() {
    arrayNumberSecond.push('万');
}

function overwriteField() {
    inputField3.value = arrayNumberSecond;
    inputField3.value = arrayNumberSecond.join('');
}

function overwriteNormalField() {
    inputField2.value = newField;
    inputField2.value = newField.join('');
}

function arrayPush() {
    nb1.onclick = () => {
        inputField.value = arrayNumber.push(1);
        inputField.value = arrayNumber.join('');
    }
    nb2.onclick = () => {
        inputField.value = arrayNumber.push(2);
        inputField.value = arrayNumber.join('');

    }
    nb3.onclick = () => {
        inputField.value = arrayNumber.push(3);
        inputField.value = arrayNumber.join('');

    }
    nb4.onclick = () => {
        inputField.value = arrayNumber.push(4);
        inputField.value = arrayNumber.join('');
    }
    nb5.onclick = () => {
        inputField.value = arrayNumber.push(5);
        inputField.value = arrayNumber.join('');
    }
    nb6.onclick = () => {
        inputField.value = arrayNumber.push(6);
        inputField.value = arrayNumber.join('');
    }
    nb7.onclick = () => {
        inputField.value = arrayNumber.push(7);
        inputField.value = arrayNumber.join('');
    }
    nb8.onclick = () => {
        inputField.value = arrayNumber.push(8);
        inputField.value = arrayNumber.join('');
    }
    nb9.onclick = () => {
        inputField.value = arrayNumber.push(9);
        inputField.value = arrayNumber.join('');
    }
    nb0.onclick = () => {
        inputField.value = arrayNumber.push(0);
        inputField.value = arrayNumber.join('');
    }

    bcks.onclick = () => {
        if (arrayNumber.length > 0) {
            inputField.value = arrayNumber.pop();
            inputField.value = arrayNumber.join('');
        }
    }
    inputField.value = arrayNumber.join('');
    arrayNumberSecond = arrayNumber;


    submit.onclick = () => {
        inputField.value = "";
        newField = [...arrayNumber];
        newField.join('');
        secNumber = arrayNumber;
        storeNumber = arrayNumber.join('');

        if (storeNumber.length < 3) {
            alert('Please enter bigger number');
            inputField2.value = "", inputField3.value = "";
        }

        if (storeNumber.length >= 3) {
            switch (storeNumber.length) {
                case 3:
                    arrayPush();
                    splice(1, 3);
                    push('百');
                    overwriteField();
                    overwriteNormalField()
                    break;

                case 4:
                    arrayPush();
                    splice(1, 4);
                    push('千');
                    overwriteField();
                    newField.insert(1, ',');
                    overwriteNormalField();
                    break;

                case 5:
                    arrayPush();
                    splice(1, 5);
                    pushMan();
                    overwriteField();
                    newField.insert(2, ',');
                    overwriteNormalField();

                    break;

                case 6:
                    arrayPush();
                    splice(2, 5);
                    pushMan();
                    overwriteField();
                    newField.insert(3, ',');
                    overwriteNormalField();

                    break;

                case 7:
                    arrayPush();
                    splice(3, 5);
                    pushMan();
                    overwriteField();
                    newField.insert(1, ',');
                    newField.insert(5, ',');
                    overwriteNormalField();

                    break;

                case 8:
                    arrayPush();
                    splice(4, 5)
                    pushMan();
                    overwriteField();
                    newField.insert(2, ',');
                    newField.insert(6, ',');
                    overwriteNormalField();

                    break;

                case 9:
                    arrayPush();
                    splice(1, 9);
                    arrayNumberSecond.push('億');
                    overwriteField();
                    newField.insert(3, ',');
                    newField.insert(7, ',');
                    overwriteNormalField();

                    break;

                default:
                    alert('Input bigger number');

            }
        }
        arrayNumber = [];
    }
};

// Starts the application
arrayPush();

// Copies field 2 or field 3
submitA.onclick = () => {
    inputField2.select();
    document.execCommand("copy");
    const a = newField.join('');
    alert(`The number ${a} has been copied`);

    
}

submitB.onclick = () => {
    inputField3.select();
    document.execCommand("copy");
    const b = arrayNumberSecond.join('');
    alert(`The number ${b} has been copied`);
}

