import * as fs from 'fs';

function spew() {
    return (fs.readFileSync('allwords2.txt', 'utf8').split("\n"));
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
    for (let i = 0; i < data.length; i++) {
        let word = data[i].split("");
        if (word.length < 11) {
            let points = 0;
            let pointsA = 0;
            let pointsN = 0;
            let pointsB = 0;
            let proc = 0;
            //rule 1
            if (word.length == 2) {
                points = points * 5;
                pointsA = pointsA * 5;
                pointsN = pointsN * 5;
                pointsB = pointsB * 5;
                proc++;
            }
            //rule 2
            if (word.length == 5 || word.length == 9) {
                points -= 15;
                pointsA -= 15;
                pointsN -= 15;
                pointsB -= 15;
                proc++;
            }
            // rule 3
            pointsA += 30;
            pointsB += 30;
            pointsN += 0;
            points += 0;
            proc += 0;
            //proc added at end
            //rule 4
            pointsN = pointsN * 1.5;
            pointsB = pointsB * 1.5;
            pointsA += 0;
            points += 0;
            //proc added at end
            //rule 5 probably not relevant
            //rule 6 probably not relevant
            //rule 7
            let initPoints3 = points;
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
            if (initPoints3 == points) {
                proc++
            }
            //rule 8
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
            //rule 9
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
            //rule 10
            let initPoints4 = points;
            for (let i = 0; i < word.length; i++) {
                switch (word[i]) {
                    case "u":
                        points += 15;
                        pointsA += 15;
                        pointsB += 15;
                        pointsN += 15;
                        break;
                    default:
                        break;
                }
            }
            if (initPoints4 == points) {
                proc++
            }
            //rule 11
            let initPoints2 = points
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
            if (initPoints2 == points) {
                proc++;
            }
            //rule 12
            if (word.includes("g") && word.includes("o") && word.includes("l") && word.includes("d")) {
                points += 100;
                pointsA += 100;
                pointsN += 100;
                pointsB += 100;
                proc++
            }
            //rule 13
            let numEx = 0;
            for (let i = 0; i < word.length; i++) {
                switch (word[i]) {
                    case "!":
                        numG++
                        break;
                    default:
                        break;
                }
            }
            if (numEx == 1) {
                points += 20;
                pointsA += 20;
                pointsN += 20;
                pointsB += 20;
                proc++;
            }
            //rule 14
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
                let pointsAdd = (numN * Math.pow(4, numB));
                points += pointsAdd;
                pointsA += pointsAdd;
                pointsN += pointsAdd;
                pointsB += pointsAdd;
                proc++;
            }
            //rule 15
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
            //rule 16 not relevant
            //rule 17
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
            points += (proc * 5);
            pointsA += (proc * 5) + 5;
            pointsN += (proc * 5) + 5;
            pointsB += (proc * 5) + 10;
            if (points > bestWordPoints){
                bestWord = word;
                bestWordPoints = points;
            }
            if (pointsA > bestWordPointsA){
                bestWordA = word
                bestWordPointsA = pointsA;
            }
            if (pointsN > bestWordPointsN){
                bestWordN = word
                bestWordPointsN = pointsN;
            }
            if (pointsB > bestWordPointsB){
                bestWordB = word
                bestWordPointsB = pointsB;
            }
            // if (pointsA > 175) {
            //     console.log("A better adjective was found: " + word + " at " + pointsA)
            // }
            // if (pointsB > 175) {
            //     console.log("A better both was found: " + word + " at " + pointsB)
            // }
        }
    }
    console.log("best word was " + bestWord + " at " + bestWordPoints);
    console.log("best adjective was " + bestWordA + " at " + bestWordPointsA);
    console.log("best noun was " + bestWordN + " at " + bestWordPointsN);
    console.log("best adjective and noun was" + bestWordB + " at " + bestWordPointsB);
}
optimize();
