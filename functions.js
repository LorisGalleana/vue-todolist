function createElementWithClass(tag, classToAdd) {
    //creo il nuovo elemento
    const newElement = document.createElement(tag);
    //aggiungo la classe all'elemento
    newElement.classList.add(classToAdd);

    return newElement
}
function appendElement(appendTo, appendWhat) {
    appendTo.append(appendWhat)
}
function rangeNumber(max, min) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number
}
function genSequenzaNumRandom() {
    const arrToGen = [];
    while (arrToGen.length < 64) {
        let newRandomNum = rangeNumber(64, 1);
        
        
        if(!arrToGen.includes(newRandomNum)) {
            arrToGen.push(newRandomNum)
        }
    }
}
function countDown() {
    timer.innerHTML = x;
    counter.innerHTML = y;
    x--
    if (x === 0) {
        y++
        x = 60;
    }
}
function oddEven(number) {
    let even = (number % 2 === 0)
    return even
}
function showHide(classToShow, classToHide) {
    let show = document.querySelector(classToShow)
    let hide = document.querySelector(classToHide)
    show.style.display = "flex"
    hide.style.display = "none"
}
function newDiv(dove, cosa1, cosa2) {
    
    dove.innerHTML +=
    `
    <div>${cosa1}${cosa2}</div>
    `
}
function newImg(dove, immagine) {
    
    dove.innerHTML +=
    `
    <img src="img/${immagine}" alt="">
    `
}
function calcDate(startingDate) {
    const date1 = new Date(`${startingDate}`);
    const date2 = new Date();

    const timeDifferenceInMilliseconds = date2.getTime() - date1.getTime();
    const monthDifference = timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24 * 30)

    

    /* return Math.round(monthDifference) + " mesi fa" */

    if (Math.round(monthDifference) < 12) {
        return Math.round(monthDifference) + " mesi fa"
    }
    else if (Math.round(monthDifference) === 12) {
        return "1 anno fa"
    }
    else {
        const yearDifference = monthDifference / 12
        const minusMonth = monthDifference - (Math.round(yearDifference) * 12)
        return Math.round(yearDifference) + " anno e " + Math.round(minusMonth) + " mesi fa";
    }
}
