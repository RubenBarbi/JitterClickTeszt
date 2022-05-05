//SCRIPT


function cpsmero(e) {
    if (e.value == 0) {idoKezdes = new Date();}
    e.value = Number(e.value) +1;
    let idotartam = getidoTartam();
    if ( idotartam > 1) {e.disabled = true;
    e.value = "Cps: " + (e.value -1)}}

function getidoTartam() {
    const jelenlegiIdo = new Date();
    const elteltIdo = (jelenlegiIdo.getTime() - idoKezdes.getTime())/1000;
    return elteltIdo;
}


function reset() {
    location.reload()
}