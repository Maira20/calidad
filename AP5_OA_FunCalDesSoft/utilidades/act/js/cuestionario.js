var pos=0;

var conaudio=1;
var aleluya=0;

var preguntas = new Array();
var aciertos = new Array();
var errores = new Array();
var listado = new Array(1,2,3,4,5);
var Total = listado.length;

var fraccion = (1/Total)*100;
var fraccion_global = 0;

var puestos = new Array('uno','dos','tres','cuatro');
var letras = {'uno':'A. ','dos':'B. ','tres':'C. ','cuatro':'D. '};

$(document).ready(function() {

  $('#resultados').hide();


  $('body').on('click','.bt__jugar-de-nuevo',function(){
    $('#test').submit();
  })

  $('.toggle').toggles({
    drag: true, // allow dragging the toggle between positions
    click: true, // allow clicking on the toggle
    text: {
      on: 'SI', // text for the ON position
      off: 'NO' // and off
    },
    'on': true,
  });

  $('.toggle').on('toggle', function (e, active) {
    if (active) {
      conaudio=1;
    } else {
      conaudio=2;
    }
  });

  /**************************/
  for(i=0; i<Total; i++) {
    aleatorio = Math.floor(Math.random()*(listado.length));
    seleccion = listado[aleatorio];
    preguntas.push(seleccion);
    listado.splice(aleatorio, 1);
  }

  for(i=1; i<=Total; i++) {
    aux = [];
    puestos = ['uno','dos','tres','cuatro'];

    for(j=0;j<4;j++) {
      aleatorio = Math.floor(Math.random()*(puestos.length));
      seleccion = puestos[aleatorio];
      aux.push(seleccion);
      puestos.splice(aleatorio, 1);
    }

    var posicion=0;
    //console.log($('#p'+i+' .opciones').hasClass('norandom'));
    if(!$('#p'+i+' .opciones').hasClass('norandom')) {
      $('#p'+i+' .opciones div').each(function() {
        $(this).addClass(aux[posicion]);
        $(this).find('span').html(letras[aux[posicion]]);
        posicion++;
      })
    }
  }
  /**************************/

  $('#p'+preguntas[pos]).fadeIn();
  $('.respuesta').bind('click',verificar_respuesta);
});

var verificar_respuesta = function() {
  var PREG = $(this).data('preg');

  if( !$('#'+PREG).hasClass('verificada') ) {
    $('#'+PREG).addClass('verificada');

    var dataRESP = $(this).data('valor');

    $('audio')[0].pause();
    $('audio')[0].load();
    $('.c'+pos).removeClass('normal');

    if(dataRESP) {
      $(this).addClass('buena');
      aciertos.push(pos);
      mover(aciertos.length);
      $('.c'+pos).addClass('gano');
      $('.n'+pos).addClass('bien');
      $('#personaje').addClass('ganop');
      if(conaudio<2) $('audio')[1].play();

    } else {
      $(this).addClass('mala');
      errores.push(pos);
      $('.c'+pos).addClass('perdio');
      $('.n'+pos).addClass('mal');
      $('#personaje').addClass('perdiop');
      if(conaudio<2) $('audio')[2].play();
    }

    $('.respuesta').unbind('click');
    setTimeout(siguiente_pregunta,2000);

  }

} /* --- fin verificar_respuesta() */

function mover(aciertos) {

    switch (aciertos) {
        case 1:
            $('#personaje').animate({'top':'+=0px','left':'+=225px'}, 1000);
            break;
        case 2:
            $('#personaje').animate({'top':'-=86px','left':'+=0px'}, 300);
            setTimeout(function() {
                $('#personaje').animate({'top':'+=0px','left':'+=55px'}, 300);
            },400)
            setTimeout(function() {
                $('#personaje').animate({'top':'+=48px','left':'+=0px'}, 300);
            },800)
            setTimeout(function() {
                $('#personaje').animate({'top':'+=0px','left':'+=44px'}, 300);
            },1200)
            setTimeout(function() {
                $('#personaje').animate({'top':'-=57px','left':'+=0px'}, 300);
            },1600)
            setTimeout(function() {
                $('#personaje').animate({'top':'-=0px','left':'+=132px'}, 200);
            },2000)
            break;
        case 3:
            $('#personaje').animate({'top':'+=95px','left':'-=0px'}, 300);
            setTimeout(function() {
                $('#personaje').animate({'left':'-=130px'}, 300);
            },700);
            setTimeout(function() {
                $('#personaje').animate({'top':'+=65px'}, 300);
            },1100);
            break;
        case 4:
            $('#personaje').animate({'top':'+=65px'}, 400);
            setTimeout(function() {
                $('#personaje').animate({'left':'+=47px'}, 400);
            },850);
            setTimeout(function() {
                $('#personaje').animate({'top':'+=85px'}, 400);
            },1250);
            setTimeout(function() {
                $('#personaje').animate({'left':'+=78px'}, 300);
            },1700);
            break;
        case 5:
            $('#personaje').animate({'top':'-=131px'}, 700);
            setTimeout(function() {
                $('#personaje').animate({'left':'+=151px'}, 700);
            },800);

            break;
        default:

    }
}

var siguiente_pregunta = function() {

    if(conaudio<2) {
      $('audio')[1].pause();
      $('audio')[2].pause();
    }

    //$('.respuesta').removeClass();
    $('#p'+preguntas[pos]).fadeOut('slow');

    pos++;

    if(pos>(Total-1)) {
      resultados();
      return false;
    }

    if(conaudio<2) {
      $('audio')[0].play();
      $('audio')[1].load();
      $('audio')[2].load();
      $('audio')[3].load();
      $('audio')[4].load();
    }

    $('#personaje').removeClass('ganop').removeClass('perdiop').addClass('default');

    $('#p'+preguntas[pos]).fadeIn();
    $('.respuesta').bind('click',verificar_respuesta);
} /* --- fin siguiente pregunta */

var resultados = function() {

  $('#preguntas').hide();
  $('#resultados').fadeIn();

  $('#cinta').hide();
  $('#numeros').hide();

  if(conaudio<2) {
    $('audio')[1].pause();
    $('audio')[2].pause();
    $('audio')[3].load();
    $('audio')[4].load();
  }

  var numeroPreguntas=Total;
  var buenas=aciertos.length;

  var estadistica__puntaje = '';
  var estadistica__porcentaje = '';
  var estadistica__mensaje = '';

  estadistica__puntaje = buenas + " de " + numeroPreguntas;
  estadistica__porcentaje = Math.floor(buenas*100/numeroPreguntas);

  if(estadistica__porcentaje <= 70)
    estadistica__mensaje = "Ha tenido pocos haciertos, ¡Debe estudiar más!";
  if(estadistica__porcentaje > 70 && estadistica__porcentaje <= 99)
    estadistica__mensaje = "¡Buen trabajo!";
  if(estadistica__porcentaje == 100)
    estadistica__mensaje = "¡Excelente! ha logrado el mejor puntaje.";


  $('.estadistica__numero').text(estadistica__puntaje);
  $('.estadistica__porcentaje').text(estadistica__porcentaje+'%');
  $('.estadistica__mensaje p').html(estadistica__mensaje);

  var fraccion = buenas / Total;

  $('.resultados.circle').circleProgress({
      value: fraccion,
      size:150
  }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(parseInt(100 * fraccion) + '<i>%</i>');
  });

  if(conaudio) {
    $('audio')[0].pause();
    $('audio')[1].pause();
    $('audio')[2].pause();
    if(estadistica__porcentaje > 85) $('audio')[3].play();
    else $('audio')[4].play();
  }
} /* -- fin resultados --*/
