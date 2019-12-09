/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
/*favicon*/
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
/*favicon*/
/*css*/
var cssId = 'myCss';
      if (!document.getElementById(cssId))
      {
          var head  = document.getElementsByTagName('head')[0];
          var link  = document.createElement('link');
          link.id   = cssId;
          link.rel  = 'stylesheet';
          link.type = 'text/css';
          link.href = 'css/style.css';
          link.media = 'all';
          head.appendChild(link);
      }
/*end-css*/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         
         // Reproducir una pista de audio 
         sym.$("titulo")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-intro}", "click", function(sym, e) {
         sym.setVariable("tema", "intro");
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         var ctema = sym.getVariable("tema")
         
         if (ctema == "") {
         	sym.playReverse();
         	sym.getSymbol("mm-mc").playReverse(500);
         } else if (ctema == "intro") {
         	sym.play("intro");
         	if (sym.getSymbol("mm-mc").getPosition() == 0){
         		sym.getSymbol("mm-mc").play(1);
         	}
         } else if (ctema == "cs") {
         	sym.play("cs");
         } else if (ctema == "mc") {
         	sym.play("mc");
         } else if (ctema == "mp") {
         	sym.play("mp");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();
         sym.getSymbol("mm-mc").stop("intro");
         sym.getSymbol("intro-mc").play(1);
         sym.getSymbol("tm-breadcrumb").stop("intro");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1950, function(sym, e) {
         sym.playReverse("puntos");
         sym.getSymbol("intro-mc").$("intro")[0].currentTime = 0;
         sym.getSymbol("intro-mc").$("intro")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();
         sym.getSymbol("mm-mc").stop("cs");
         sym.getSymbol("cs-mc").play(1);
         sym.getSymbol("tm-breadcrumb").stop("cs");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2950, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3950, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         sym.getSymbol("mm-mc").stop("mc");
         sym.getSymbol("mc-mc").play(1);
         sym.getSymbol("tm-breadcrumb").stop("mc");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4950, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.stop();
         sym.getSymbol("mm-mc").stop("mp");
         sym.getSymbol("mp-mc").play(1);
         sym.getSymbol("tm-breadcrumb").stop("mp");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mm-mc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${mm_intro}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","intro");
         sym.getComposition().getStage().playReverse();
         sym.getComposition().getStage().getSymbol("intro-mc").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_cs}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","cs");
         sym.getComposition().getStage().playReverse();
         sym.getComposition().getStage().getSymbol("cs-mc").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_mc}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","mc");
         sym.getComposition().getStage().playReverse();
         sym.getComposition().getStage().getSymbol("mc-mc").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_mp}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","mp");
         sym.getComposition().getStage().playReverse();
         sym.getComposition().getStage().getSymbol("mp-mc").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         var ctema = sym.getVariable("tema");
         
         if (ctema == "") {
         	sym.playReverse();
         	sym.getSymbol("mm-mc").stop(0);
         } else if (ctema == "intro") {
         	sym.play("intro");
         	if (sym.getSymbol("mm-mc").getPosition() == 0) {sym.getSymbol("mm-mc").play(1);}
         }

      });
      //Edge binding end

   })("mm-mc");
   //Edge symbol end:'mm-mc'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'opciones-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${op_op-trigger}", "click", function(sym, e) {
         if (sym.getPosition() == 0 ) { sym.play(); }
         else { sym.playReverse(); }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${op_op-trigger-a}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_mapa}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("mapa/index.html", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_ad}", "click", function(sym, e) {
         window.open("actividad/index.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_bibliografia}", "click", function(sym, e) {
         window.open("materiales/bibliografia.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_glosario}", "click", function(sym, e) {
         window.open("materiales/glosario.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_oa}", "click", function(sym, e) {
         window.open("oa.zip", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_pdf}", "click", function(sym, e) {
         window.open("materiales/AP08_OA_ModCalDesSof.pdf", "_blank");

      });
      //Edge binding end

   })("opciones-mc");
   //Edge symbol end:'opciones-mc'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tm-breadcrumb'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn-home}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","");
         sym.getComposition().getStage().playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${inicio}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","");
         sym.getComposition().getStage().playReverse();
         sym.stop("inicio");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${intro}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","intro");
         sym.getComposition().getStage().playReverse();
         sym.stop("intro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","interfaz");
         sym.getComposition().getStage().playReverse();
         sym.stop("interfaz");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cs}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","principios");
         sym.getComposition().getStage().playReverse();
         sym.stop("principios");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","proceso");
         sym.getComposition().getStage().playReverse();
         sym.stop("proceso");

      });
      //Edge binding end

      

      

   })("tm-breadcrumb");
   //Edge symbol end:'tm-breadcrumb'

   //=========================================================
   
   //Edge symbol: 'intro-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("intro-mc");
   //Edge symbol end:'intro-mc'

   //=========================================================
   
   //Edge symbol: 'cs-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cs-mcm-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("cs-mcm");

      });
      //Edge binding end

   })("cs-mc");
   //Edge symbol end:'cs-mc'

   //=========================================================
   
   //Edge symbol: 'popups-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup}", "click", function(sym, e) {
         if (sym.getPosition() == 3000){
         	sym.stop(2250);
         } else if (sym.getPosition() >= 2000 && sym.getPosition() < 2750){
         	sym.playReverse(1999);
         } else if (sym.getPosition() == 2750){
         	sym.stop(2250);
         }else if (sym.getPosition() >= 4250 && sym.getPosition() <= 6000){
         	sym.playReverse(4400);
         	sym.setVariable("stema","")
         } else {
         	sym.playReverse();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-m15504-2-img2}", "click", function(sym, e) {
         if (sym.getPosition() == 2750){
         	sym.play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination-w_fw}", "click", function(sym, e) {
         var lt = sym.getPosition()
         if (lt == 2000 || lt == 2250) {
         	sym.play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination-w_bw}", "click", function(sym, e) {
         var lt = sym.getPosition()
         if (lt == 2250 || lt == 2500) {
         	sym.playReverse();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-ver-grafica2}", "click", function(sym, e) {
         sym.stop(2750);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         var stemas = sym.getVariable("stema")
         if (stemas == "funcionalidad") {
         	sym.stop("funcionalidad");
         } else if (stemas == "confiabilidad") {
         	sym.stop("confiabilidad");
         } else if (stemas == "usabilidad") {
         	sym.stop("usabilidad");
         } else if (stemas == "eficiencia") {
         	sym.stop("eficiencia");
         } else if (stemas == "mantenibilidad") {
         	sym.stop("mantenibilidad");
         } else if (stemas == "portabilidad") {
         	sym.stop("portabilidad");
         } else if (stemas == "") {
         	sym.stop(4000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-m25000-img1-but_funcionalidad}", "click", function(sym, e) {
         sym.setVariable("stema","funcionalidad")
         if (sym.getPosition() == 4000) {
         	sym.play();
         } else {
         	sym.setVariable("stema","funcionalidad")
         	sym.playReverse(4400);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-m25000-img1-but_confiabilidad}", "click", function(sym, e) {
         sym.setVariable("stema","confiabilidad")
         if (sym.getPosition() == 4000) {
         	sym.play();
         } else {
         	sym.playReverse(4400);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-m25000-img1-but_eficiencia}", "click", function(sym, e) {
         sym.setVariable("stema","eficiencia")
         if (sym.getPosition() == 4000) {
         	sym.play();
         } else {
         	sym.playReverse(4400);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-m25000-img1-but_mantenibilidad}", "click", function(sym, e) {
         sym.setVariable("stema","mantenibilidad")
         if (sym.getPosition() == 4000) {
         	sym.play();
         } else {
         	sym.playReverse(4400);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-m25000-img1-but_portabilidad}", "click", function(sym, e) {
         sym.setVariable("stema","portabilidad")
         if (sym.getPosition() == 4000) {
         	sym.play();
         } else {
         	sym.playReverse(4400);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-m25000-img1-but_usabilidad}", "click", function(sym, e) {
         sym.setVariable("stema","usabilidad")
         if (sym.getPosition() == 4000) {
         	sym.play();
         } else {
         	sym.playReverse(4400);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5950, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("popups-mc");
   //Edge symbol end:'popups-mc'

   //=========================================================
   
   //Edge symbol: 'mc-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fw}", "click", function(sym, e) {
         var lt = sym.getPosition()
         if (lt == 1500) {
         	sym.play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_bw}", "click", function(sym, e) {
         var lt = sym.getPosition()
         if (lt == 1750) {
         	sym.playReverse();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-2}", "click", function(sym, e) {
         sym.play(750);
         sym.getSymbol("mc-rsm-mc").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-m15504-edm-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("mc-m15504-edn");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-ver-grafica}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("mc-m25000-img1");

      });
      //Edge binding end

   })("mc-mc");
   //Edge symbol end:'mc-mc'

   //=========================================================
   
   //Edge symbol: 'mc-rsm-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-rsm_mcmmi}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("mc-mc").play("mcmmi");
         sym.stop("mcmmi");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-rsm_m15504}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("mc-mc").play("m15504");
         sym.stop("m15504");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mc-rsm_m25000}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("mc-mc").play("m25000");
         sym.stop("m25000");

      });
      //Edge binding end

   })("mc-rsm-mc");
   //Edge symbol end:'mc-rsm-mc'

   //=========================================================
   
   //Edge symbol: 'mp-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-ver-grafica}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("mp-img1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-2}", "click", function(sym, e) {
         sym.play(750);
         sym.getSymbol("mp-rsm-mc").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-3}", "click", function(sym, e) {
         var lt = sym.getPosition();
         
         if (lt >= 1500 && lt < 3000) {
         	sym.play("psp");
         } else if (lt >= 3250) {
         	sym.play("tsp");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fw}", "click", function(sym, e) {
         var lt = sym.getPosition()
         if (lt == 2500 || lt == 3500 || lt == 4500) {
         	sym.play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_bw}", "click", function(sym, e) {
         var lt = sym.getPosition()
         if (lt == 2750 || lt == 3750 || lt == 4750) {
         	sym.playReverse();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp-psp-caracteristicas-but}", "click", function(sym, e) {
         sym.stop("psp-c");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp-psp-objetivos-but}", "click", function(sym, e) {
         sym.stop("psp-o");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp-psp-aplicacion-but}", "click", function(sym, e) {
         sym.stop("psp-a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp-psp-principios-but}", "click", function(sym, e) {
         sym.stop("psp-p");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp-psp-caracteristicas-but2}", "click", function(sym, e) {
         sym.stop("tsp-c");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp-psp-principios-but2}", "click", function(sym, e) {
         sym.stop("tsp-p");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp-psp-objetivos-but2}", "click", function(sym, e) {
         sym.stop("tsp-o");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp-tsp-r-but}", "click", function(sym, e) {
         sym.stop("tsp-r");

      });
      //Edge binding end

   })("mp-mc");
   //Edge symbol end:'mp-mc'

   //=========================================================
   
   //Edge symbol: 'mp-rsm-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp-rsm_psp}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("mp-mc").play("psp");
         sym.stop("psp");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mp-rsm_tsp}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("mp-mc").play("tsp");
         sym.stop("tsp");

      });
      //Edge binding end

   })("mp-rsm-mc");
   //Edge symbol end:'mp-rsm-mc'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-79808291");