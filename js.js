(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "07/10/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

  function mostrarPalabraAleatoria() {
    var c1 = "1) ¿Por qué el psicólogo lleva siempre un lápiz y papel consigo? Por si tiene que tomar apuntes mentales.";
    var c2 = "2) ¿Cuántos psicólogos se necesitan para cambiar una bombilla? Solo uno, pero la bombilla debe querer cambiar.";
    var c3 = "3) ¿Por qué los psicólogos no pueden resolver problemas de matemáticas? Porque siempre están buscando la raíz del problema.";
    var c4 = "4) ¿Cuál es la diferencia entre un psicólogo y un psiquiatra? El psicólogo te hace pensar que estás loco, mientras que el psiquiatra te hace pagar por ello.";
    var c5 = "5) Un motociclista se cayó en la calle y un hombre llegó corriendo: \n-¡déjenme pasar!.  \n-¿Es usted médico? .  \n-¡No! ¡Es mi pizza! ";
    var c6 = "6) ¿Qué tipo de música no les gusta a los globos? \n-Música pop.";
    var c7 = "7) Jaimito, dime dos pronombres. \n- ¿Quién yo? \n- Muy bien";
    var c8 = "8) Hoy he soñado que ganaba 200 millones como mi padre. \n-¿Tu padre gana 200 millones? \n-No, él también lo sueña"
    var c9 = "9) ¿Qué tal tu primer día de parkour?. \nDe futa madfre.";
    var c10 = "10) ¿Me da un café con leche corto?. \n-Se ha roto la máquina, cambio.";
    var c11 = "11) ¿Qué le dice un pingüino a una pingüina? \n-¡Como tú ningüina!";
    var c12 = "12) que le dice un pollo policia a otro en emboscada?, \n-necesitamos apollo";
    var c13 = "13) ¿Qué le dice la foca a su madre? \n-I love you, mother foca.";
    var c14 = "14) Una anciana le dice a otra: \n-Con los años, mi marido se ha convertido en una fiera en la cama. \n-¿Te hace el amor como un salvaje?. \n-No, se mea en las sábanas para marcar su territorio.";
    var c15 = "15) -Mamá, en el colegio me llaman Facebook. \n-¿Y tú qué les has dicho? \n-¡Me gusta!";
    var c16 = "16) (dos panes hablando)  \n-mira... \n-que cosa? \n-te presento unaamiga";
    var c17 = "17) -doctor sufro de perdida de memoria. \n-Desde cuando?, \n-Desde cuando que doctor?";
    var c18 = "18) -doctor mi esposo es el que trajeron accidentado  \n- tranquila que de la cintura para arriba no tiene ni un razguño \n- y de la cintura para abajo? \n- no se esa parte no la han traído";
    
    var palabras = 
    [ 
      c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18
    ];
    var palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    alert(palabraAleatoria);
  }
  