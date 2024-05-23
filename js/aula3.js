var time1, time2, gol1, gol2, win;

time1= prompt("time de casa:");
time2= prompt("time de fora:");
gol1= prompt(time1+" fez quantos gols?");
gol2= prompt(time2+" fez quantos gols?");

alert(time1+" X "+time2);
alert("placar: "+time1+" "+gol1+" X "+time2+" "+gol2);

if(gol1>gol2){
    alert(`resultado: ${time1} venceu`);
} else if(gol1<gol2){
    alert(`resultado: ${time2} venceu`);
} else{
    alert(`empate`);
}