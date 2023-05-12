//peguei os elementos do html e linkei com variaveis
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dias = document.getElementById('day');
const meses = document.getElementById('month');
const anos = document.getElementById('year');

// setei um intervalo(setinterval) para a funçao time ser executada a todo segundo
setInterval(function time(){
    //peguei a data de hoje (através do new Date())e joguei pra dentro da variavel dateToday
    let dateToday = new Date();
    //peguei o atributo q eu queria através do .get e joguei pra dentro das variaves
    let dia = dateToday.getDate();
    let mes = dateToday.getMonth() + 1;
    let ano = dateToday.getFullYear();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    //peguei os valores com os atributos e joguei pra dentro das variaveis para retornar la no html através do inner html
    
    dias.innerHTML = dia;
    meses.innerHTML = mes;
    anos.innerHTML = ano
    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
})