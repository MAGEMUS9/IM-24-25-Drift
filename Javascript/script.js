let antallBeans = 0
let penger = 10
let minusPengerBeansX2 = 10
let minusPengerSellX2 = 10
let minusPengerAutoX2 = 10
let beansTjent = 1
let beansSell = 2
let beansAuto = 1
let viserAntallBeanX2Cost = minusPengerBeansX2 + 1;
let viserAntallBeanX2SellCost = minusPengerSellX2 + 1; 
const brett = document.getElementById("brett")

function oppdatereUI(){ 

    document.getElementById("viserAntallBeans").innerHTML = antallBeans;
    document.getElementById("viserAntallPenger").innerHTML = penger;
    document.getElementById("viserGetBeanMultiplier").innerHTML = beansTjent;
    document.getElementById("viserSellBeanMultiplier").innerHTML = beansSell;
    document.getElementById("viserBeanX2Cost").innerHTML = viserAntallBeanX2Cost;
    document.getElementById("viserBeanSellX2Cost").innerHTML = viserAntallBeanX2SellCost;
    
}
function getBean(){

    if (beansTjent <= 2 && penger >= beansTjent / 2){
    antallBeans += beansTjent;
    penger = penger - 1;
    oppdatereUI();
    }
    else if (beansTjent >= 4 && penger >= beansTjent / 2){
            antallBeans += beansTjent;
            penger = penger - beansTjent / 2;
            oppdatereUI();
    }
}
function autoBeanSek(){
    if (beansAuto <= 2 && penger >= beansAuto / 2){
        antallBeans = antallBeans + beansAuto;
        penger = penger - 1;
        oppdatereUI();
    }
    else if (beansAuto >= 4 && penger >= beansAuto / 2){
            antallBeans += beansTjent;
            penger = penger - beansAuto / 2;
            oppdatereUI
    }
}

function sellBean(){

    if (antallBeans>=1){
        penger = penger + antallBeans * beansSell;
        antallBeans = antallBeans - antallBeans;
        oppdatereUI();
    }
}
function autoBean(){

    if (penger>=1) {
        setInterval(autoBeanSek, 1000)
        } 
}
function getBeanX2(){

    if (penger > minusPengerBeansX2 + beansTjent / 2) {
        penger -= minusPengerBeansX2;
        minusPengerBeansX2 *= 3;
        beansTjent = beansTjent * 2;
        viserAntallBeanX2Cost = Math.round(minusPengerBeansX2 + beansTjent / 2)
        oppdatereUI();
    }
}
function sellBeanX2(){
    if (penger > minusPengerSellX2 + beansTjent / 2) {
        penger -= minusPengerSellX2;
        minusPengerSellX2 *= 3;
        beansSell = beansSell + 1;
        viserAntallBeanX2SellCost = Math.round(minusPengerSellX2 + beansTjent / 2)
        oppdatereUI();
    }   
}
function autoBeanX2(){
    if (penger > minusPengerAutoX2 + beansTjent / 2){
        penger -= minusPengerAutoX2;
        minusPengerAutoX2 *= 3;
        beansAuto = beansAuto * 2; 
    }
}


oppdatereUI();