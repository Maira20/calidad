$(function() {

    var aciertos = 0;
    var invalidas = 0;

    var conaudio=1;

    $('audio')[0].load();
    $('audio')[1].load();
    $('audio')[2].load();
    $('audio')[3].load();
    $('audio')[4].load();

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


    $('body').on('click','#bt_inicio',function(){
      location.href='../index.html';
    })

    $('body').on('click','.bt__siguiente',function(){
        location.href= '../actividad_1/index.html';
    })

    $('body').on('click','.bt__jugar-de-nuevo',function(){
    	$('#test').submit();
    })

    $('#resultados').hide();

    $('#conceptos').find('ul').find('li').draggable({
    	helper:'clone'
    })

    $('.question').droppable({
    	activeClass:'selected',
    	hoverClass: 'estado-hover',
        tolerance: 'intersect',
    	accept: '.concepto',
    	drop: function(event, ui) {
    	    var idpadre = $(this).attr('id');

            idQ = idpadre.replace('concepto','');

    	    var li = $(this).find('.respuesta').find('ul').find('li');

            if(li.length < 1) {

                var ul = $(this).find('.respuesta').find('ul');

                //$('audio')[0].play();
                ui.draggable.fadeOut(function() {

                    ui.draggable.appendTo( ul ).fadeIn();

                    var idR = ui.draggable.attr('id');
                    idR = idR.replace('resp','');

                    if(idR==idQ) {
                        aciertos++;
                        $('#concepto'+idQ+'_r').addClass('buena');
                        $('.c'+idQ).addClass('gano');
                        if(conaudio<2) $('audio')[1].play();
                        $('#personaje').removeClass('default').addClass('gano');
                        $('.resultadoParcial').show();
                    }else {
                        invalidas++;
                        $('#concepto'+idQ+'_r').addClass('mala');
                        $('.c'+idQ).addClass('perdio');
                        if(conaudio<2) $('audio')[2].play();
                        $('#personaje').removeClass('default').addClass('perdio');
                        $('.resultadoParcial').show();
                    }

                    //console.log(' aciertos : ',aciertos);

                    var opciones = $('#conceptos').find('ul').find('li');


                    setTimeout(function() {
                        $('audio')[0].pause();
                        $('audio')[0].load();
                        $('audio')[1].load();
                        $('audio')[2].load();
                        $('#personaje').removeClass('gano perdio').addClass('default');
                        $('.resultadoParcial').hide();

                        if( opciones.length < 1 ) {
                            verificar();
                        }

                    }, 2000);


                });
            }

    	}
    })



    var aciertos=0;
    var incorrectas=[];

    function devolverItem($item){
        $item.fadeOut(function() {
            $item.appendTo( $('#opciones').find('ul') ).fadeIn();
        });
    }

    function verificar() {

        $('#lienzo').addClass('bgresultados');

        $('#preguntas').hide();
        $('#cinta').hide();
        $('#conceptos').hide();

    	var opciones = $('#conceptos').find('ul').find('li');
    	var preguntas = $('.question');
    	var npreguntas = preguntas.length;

    	var estadistica__puntaje = '';
    	var estadistica__porcentaje = '';
    	var estadistica__mensaje = '';


    	/*for(var i=0; i<npreguntas; i++) {
    		contexto = $(preguntas[i]);
    		idQ = $(contexto).attr("id").replace('concepto','');
    		R = $('li',contexto);
    		idR = $('li',contexto).attr("id").replace('resp','');

    		if(idR==idQ) {
    			aciertos++;
    			$('#concepto'+idQ+'_r').addClass('buena');
    			$('.c'+idQ).addClass('gano');
    		}else {
    			invalidas++;
    			$('#concepto'+idQ+'_r').addClass('mala');
    			$('.c'+idQ).addClass('perdio');
    		}
    	}*/

    	/**************/

        estadistica__puntaje = aciertos + " de " + npreguntas;

        estadistica__porcentaje = Math.floor(aciertos*100/npreguntas);


        if(estadistica__porcentaje <= 70)
        	estadistica__mensaje = "Ha tenido pocos aciertos. ¡Debe estudiar más!";
        if(estadistica__porcentaje > 70 && estadistica__porcentaje <= 99)
        	estadistica__mensaje = "Buen trabajo!";
        if(estadistica__porcentaje == 100)
        	estadistica__mensaje = "!Felicidades¡ ha logrado el mejor puntaje";


        $('.estadistica__numero').text(estadistica__puntaje);
        $('.estadistica__mensaje p').html(estadistica__mensaje);

        setTimeout(function() { $('#resultados').fadeIn(); }, 10);


        var fraccion = aciertos / npreguntas;

        $('.resultados.circle').circleProgress({
            value: fraccion,
            size:150
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(parseInt(100 * fraccion) + '<i>%</i>');
        });


        /*----------------------------------
        /* Verificamos que sonido ejecutar BIEN o MAL ?
        /*----------------------------------*/
        $('audio')[0].pause();
        $('audio')[1].pause();
        $('audio')[2].pause();

        if(estadistica__porcentaje > 70) {
        	if(conaudio<2) $('audio')[3].play();
            $('#personajeR').removeClass('normal').removeClass('perdio').addClass('gano');
        }
        else {
        	if(conaudio<2) $('audio')[4].play();
            $('#personajeR').removeClass('normal').removeClass('gano').addClass('perdio');
        }

        /**********************/

    }

})
