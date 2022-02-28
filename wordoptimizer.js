import * as fs from 'fs';

function spew() {
    return (fs.readFileSync('Allwords.txt', 'utf8').split("\n"));
}
function rule1(word, points, pointsA, pointsN, pointsB, proc) {
    if (word.length == 2) {
        points = points * 5;
        pointsA = pointsA * 5;
        pointsN = pointsN * 5;
        pointsB = pointsB * 5;
        proc++;
    }
}
function rule2(word, points, pointsA, pointsN, pointsB, proc) {
    if (word.length == 5 || word.length == 9) {
        points -= 15;
        pointsA -= 15;
        pointsN -= 15;
        pointsB -= 15;
        proc++;
    }
}
function rule3(word, points, pointsA, pointsN, pointsB, proc) {
    pointsA += 30;
    pointsB += 30;
    pointsN += 0;
    points += 0;
    proc += 0;
    //proc added at end
}
function rule4(word, points, pointsA, pointsN, pointsB, proc) {
    pointsN = pointsN * 1.5;
    pointsB = pointsB * 1.5;
    pointsA += 0;
    points += 0;
    //proc added at end
}
function rule7(word, points, pointsA, pointsN, pointsB, proc) {
    for (let i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                points++;
                pointsA++;
                pointsB++;
                pointsN++;
                break;
            default:
                break;
        }
    }
    proc++;
}
function rule8(word, points, pointsA, pointsN, pointsB, proc) {
    let initPoints = points;
    for (let i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "a":
            case "b":
            case "c":
            case "d":
            case "e":
            case "f":
            case "g":
            case "h":
            case "i":
            case "j":
            case "k":
            case "l":
            case "m":
                points -= 2;
                pointsA -= 2;
                pointsN -= 2;
                pointsB -= 2;
                break;
            default:
                break;
        }
    }
    if (initPoints == points) {
        proc++
    }
}
function rule9(word, points, pointsA, pointsN, pointsB, proc) {
    if (word.includes("q")) {
        if (word.includes("u")) {
        }
        else {
            points += 50;
            pointsA += 50;
            pointsN += 50;
            pointsB += 50;
            proc++;
        }
    }
}
function rule11(word, points, pointsA, pointsN, pointsB, proc) {
    let initPoints = points
    for (let i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "q":
            case "w":
            case "e":
            case "r":
            case "t":
            case "y":
            case "u":
            case "i":
            case "o":
            case "p":
                points -= 10;
                pointsA -= 10;
                pointsB -= 10;
                pointsN -= 10;
                break;
            default:
                break;
        }
    }
    if (initPoints == points) {
        proc++;
    }
}
function rule12(word, points, pointsA, pointsN, pointsB, proc) {
    if (word.contains("g") && word.contains("o") && word.contains("l") && word.contains("d")) {
        points += 100;
        pointsA += 100;
        pointsN += 100;
        pointsB += 100;
        proc++
    }
}
function rule14(word, points, pointsA, pointsN, pointsB, proc) {
    let numN = 0;
    let numB = 0;
    for (let i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "n":
                numN++
                break;
            case "b":
                numB++
                break;
            default:
                break;
        }
    }
    if (numN > 0) {
        let pointsAdd = Math.pow(4, numB);
        points += pointsAdd;
        pointsA += pointsAdd;
        pointsN += pointsAdd;
        pointsB += pointsAdd;
        proc++;
    }
}
function rule15(word, points, pointsA, pointsN, pointsB, proc) {
    let numG = 0;
    for (let i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "g":
                numG++
                break;
            default:
                break;
        }
    }
    if (numG == 1) {
        points += 30;
        pointsA += 30;
        pointsN += 30;
        pointsB += 30;
        proc++;
    }
}
function rule17(word, points, pointsA, pointsN, pointsB, proc) {
    let alterations = 0;
    for (let i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "p":
                points *= -1;
                pointsA *= -1;
                pointsN *= -1;
                pointsB *= -1;
                alterations++;
                break;
            default:
                break;
        }

    }
    if (alterations > 0) {
        proc++;
    }
}

function optimize() {
    let data = spew();
    let bestWordPoints = 0;
    let bestWordPointsA = 0;
    let bestWordPointsN = 0;
    let bestWordPointsB = 0;
    let bestWord;
    let bestWordA;
    let bestWordN;
    let bestWordB;
    let proc = 0;
    for (let i = 0; i < data.length; i++) {
        let currentWord = data[i].split("")
        if (currentWord.length < 11) {
            let points = 0;
            let pointsA = 0;
            let pointsN = 0;
            let pointsB = 0;
            rule1(currentWord);
            rule2(currentWord);
            rule3();
            rule4();
            rule7(currentWord);
            rule8(currentWord);
            rule9(currentWord);
            rule11(currentWord);
            rule12(currenWord);
            rule14(currentWord);
            rule15(currentWord);
            rule17(currentWord);
            points += (proc * 5);
            pointsA += (proc * 5) + 5;
            pointsN += (proc * 5) + 5;
            pointsB += (proc * 5) + 10;
            if (points > bestWordPoints) {
                bestWord = currentWord
            }
            if (pointsA > bestWordPointsA) {
                bestWordA = currentWord
            }
            if (pointsN > bestWordPointsN) {
                bestWordN = currentWord
            }
            if (pointsB > bestWordPointsB) {
                bestWordB = currentWord
            }
        }
    }
    console.log("best word was " + bestWord + " at " + bestWordPoints);
    console.log("best adjective was " + bestWordA + " at " + bestWordPointsA);
    console.log("best noun was " + bestWordN + " at " + bestWordPointsN);
    console.log("best adjective and noun was" + bestWordB + " at " + bestWordPointsB);
}
optimize();
