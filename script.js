//peguei os elementos do html e linkei com variaveis
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dias = document.getElementById('day');
const meses = document.getElementById('month');
const anos = document.getElementById('year');

// setei um intervalo para a funçao time ser executada a todo segundo
setInterval(function time(){
    //peguei a data de hoje (através do new Date())e joguei pra dentro da variavel dateToday
    let dateToday = new Date();
    //
    let dia = dateToday.getDate();
    let mes = dateToday.getMonth();
    let ano = dateToday.getFullYear();


    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    dias.innerHTML = dia;
    meses.innerHTML = mes;
    anos.innerHTML = ano

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
})