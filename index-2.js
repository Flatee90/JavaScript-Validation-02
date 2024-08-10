function willfallinlove(myName) {
    let x = myName.includes("a");
    if (x) {
        return true;
    } else {
        return false;
    }
}

function willmarrylate(myName) {
    let x = myName > 7;
    if (x) {
        return true;
    } else {
        return false;
    }
}

function willbelucky(myName) {
    let luck = myName;
    let letter = luck.charAT(0);
    if (letter === "S") {
        return true;
    } else {
        return false;
    }
}

function tellfortune(myName) {
    let n = willmarrylate(myName);
    if (n) {
        console.log(`${myName} you will marry late...`);
    } else {
        console.log(`${myName} ypu will not marry late... `);
    }
}

let t = willgotoflorida(myName);
if (t) {
    console.log(`${myName} You will go to Florida before the year is over!`);
} else {
    console.log(`${myName} You will not go to Florida before the year is over!`);
}

let p = willhaveababy(myName);
if (p) {
    console.log(`${myName} you will be have a baby!`)
} else {
    console.log(`${myName} you will not have baby`)

}

let f = meetbeyonce(myName);
if(f){
    console.log(`${myName} You will meet Beyonce`)
}else{
    console.log(`${myName} You will not meet Beyonce`)

}

let myName = "";
myName1 = "Nick";
myName2 = "Andre";
myName3 = "Devon";
myName4 = "Jarrell";
myName5 = "Ahreal";
myName6 = "Kenya";
myName7 = "Sinnedra";

tellFortune(myName1);
tellFortune(myName2);
tellFortune(myName3);
tellFortune(myName4);
tellFortune(myName5);
tellFortune(myName6);
tellFortune(myName7);