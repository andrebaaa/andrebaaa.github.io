function Movie_OnKeyPress(Key){if(Key==39) { // teclado derecha
animacion.X = animacion.X+10;
fondo.X=fondo.X-10;
grito.X=grito.X-30;
mona.X=mona.X-30;
van.X=van.X-30;
frida.X=frida.X-30;
animacion1.X = animacion1.X+10;
ImageSequenceSetIndex("animacion",2);
}
if(Key==37) { // teclado izda
animacion.X = animacion.X-10;
fondo.X=fondo.X+10;
grito.X=grito.X+30;
mona.X=mona.X+30;
van.X=van.X+30;
frida.X=frida.X+30;
animacion1.X = animacion1.X-10;
ImageSequenceSetIndex("animacion",3);
}
if(Key==38) { // Arriba
animacion.Y = animacion.Y-10;
animacion1.Y = animacion1.Y-10;
ImageSequenceSetIndex("animacion",1);
}
if(Key==40) { // Abajo
animacion.Y = animacion.Y+10;
animacion1.Y = animacion1.Y+10;
ImageSequenceSetIndex("animacion",1);
}



}

function Frame__0_0(ID){SceneNext();
SoundPause("ambiente1");

}

function Frame__1_0(ID){PlayLoop(0,40);

}

function Frame__2_0(ID){PlayLoop(0,40);

}

function Frame__3_0(ID){TextBoxSet("quizz", "Quizz: Pregunta nº"+ preguntas);
TextBoxSet("P","Quién pintó La Gioconda");

TextBoxSet("A","Leonardo da Vinci");//Siempre la correcta

TextBoxSet("B","Tiziano ");

TextBoxSet("C","Miguel Ángel");
ImageSequenceSetIndex("fotos",preguntas);
TextBoxSet("R","ACIERTOS:"+aciertos+"FALLOS:"+fallos);
Pause();



}

function Frame__3_1(ID){TextBoxSet("quizz", "Quizz: Pregunta nº"+ preguntas);
TextBoxSet("P","Cómo se llama el pintor que se cortó la oreja");

TextBoxSet("A","Vincent van Gogh");//Siempre la correcta

TextBoxSet("B","Salvador Dalí");

TextBoxSet("C","Paul Cézanne");
ImageSequenceSetIndex("fotos",preguntas);
TextBoxSet("R","ACIERTOS:"+aciertos+"FALLOS:"+fallos);
Pause();



}

function Frame__3_2(ID){TextBoxSet("quizz", "Quizz: Pregunta nº"+ preguntas);
TextBoxSet("P","Cuál es el nombre de este cuadro de Edvard Munch");

TextBoxSet("A","El grito");//Siempre la correcta

TextBoxSet("B","El fantasma");

TextBoxSet("C","El mudo");
ImageSequenceSetIndex("fotos",preguntas);
TextBoxSet("R","ACIERTOS:"+aciertos+"FALLOS:"+fallos);
Pause();



}

function Frame__3_3(ID){TextBoxSet("quizz", "Quizz: Pregunta nº"+ preguntas);
TextBoxSet("P","Quién es la autora de este autorretrato");

TextBoxSet("A","Frida Kahlo");//Siempre la correcta

TextBoxSet("B","Remedios Varo");

TextBoxSet("C","Tamara de Lempicka");
ImageSequenceSetIndex("fotos",preguntas);
TextBoxSet("R","ACIERTOS:"+aciertos+"FALLOS:"+fallos);
Pause();



}

function Frame__3_4(ID){TextBoxSet("quizz", "Quizz: Pregunta nº"+ preguntas);
TextBoxSet("P","Nombre de este pintor");

TextBoxSet("A","Salvador Dalí");//Siempre la correcta

TextBoxSet("B","Diego Rivera");

TextBoxSet("C","Pablo Picasso");
ImageSequenceSetIndex("fotos",preguntas);
TextBoxSet("R","ACIERTOS:"+aciertos+"FALLOS:"+fallos);
Pause();

}

function Frame__3_5(ID){preguntas=preguntas+1;
aciertos=aciertos+1;


if(aciertos==5) { //fin de las preguntas(5)
alert("Felicidades, ganaste");
Stop();
}

GotoAndPlay(preguntas);

}

function Frame__3_6(ID){fallos=fallos+1;


if(fallos==2) {
alert("Perdiste");
}

GotoAndPlay(preguntas);


}

function Frame__4_0(ID){Pause();

}

function Frame__4_1(ID){Pause();

}

function Frame__4_2(ID){Pause();

}

function Frame__4_3(ID){Pause();

}

function Frame__4_4(ID){Pause();

}

function Frame__4_5(ID){Pause();

}

function Frame__4_6(ID){Pause();

}

function Frame__4_7(ID){Pause();

}

function Frame__4_8(ID){Pause();

}

function Frame__4_9(ID){Pause();

}

function Frame__4_10(ID){Pause();

}

function Frame__4_11(ID){Pause();

}

function Frame__4_12(ID){Pause();

}

function Frame__4_13(ID){Pause();

}

function Frame__4_14(ID){Pause();

}

function Frame__5_0(ID){TimelinePlayThenLoop("logo1",0,0,30);


}

function Frame__5_1(ID){PlayLoop(100,140);


}

function Frame__6_0(ID){Pause();
TimelinePlayThenLoop("logo2",0,0,30);

}

function Frame__6_1(ID){Pause();


}

function Frame__6_2(ID){Pause();


}

function Frame__6_3(ID){Pause();


}

function Frame__6_4(ID){Pause();


}

function Frame__7_0(ID){Stop();
TimelinePlayThenLoop("logo3",0,0,30);

}

function Frame__7_1(ID){Pause();


}

function Frame__7_2(ID){Pause();


}

function Frame__7_3(ID){Pause();


}

function Frame__7_4(ID){Pause();


}

function Frame__8_0(ID){SoundStop("motomami");
TimelinePlayThenLoop("logo4",0,0,30);


}

function Frame__8_1(ID){SoundStop("rosalia");


}

function Frame__9_0(ID){SoundStop("motomami");
TimelinePlayThenLoop("logo5",0,0,30);



}

function Frame__9_1(ID){OpenYouTube("bbaa","Qz_RbpBjaFM",true,true,false);


}

function Frame__9_2(ID){GotoSceneNameAndPlay("menu",100);
CloseYouTube("bbaa");
CloseVideo("facultad");
VideoStop("facultad");


}

function Frame__10_0(ID){Pause();

}

function Frame__10_1(ID){Pause();

}

function Frame__10_2(ID){Pause();

}

function Frame__10_3(ID){Pause();

}

function Frame__10_4(ID){Pause();

}

function Frame__10_5(ID){Pause();

}

function Frame__11_0(ID){Pause();

}

function Frame__11_1(ID){Pause();

}

function Frame__11_2(ID){Pause();

}

function Frame__11_3(ID){Pause();

}

function Frame__11_4(ID){Pause();

}

function Frame__11_5(ID){Pause();

}

function Frame__12_0(ID){Pause();

}

function Frame__12_1(ID){Pause();

}

function Frame__12_2(ID){Pause();

}

function Frame__12_3(ID){Pause();

}

function Frame__12_4(ID){Pause();

}

function Frame__12_5(ID){Pause();

}

function Frame__13_0(ID){Pause();

}

function Frame__13_1(ID){Pause();

}

function Frame__13_2(ID){Pause();

}

function Frame__13_3(ID){Pause();

}

function Frame__13_4(ID){Pause();

}

function Frame__13_5(ID){Pause();

}

function Frame__14_0(ID){TextBoxSet("clave","");
TextBoxSet("T","adivina codigo de 4 digitos");
pulsaciones= 0;

}

function Frame__14_1(ID){var v = TextBoxGet("clave");
TextBoxSet("T", pulsaciones + "-> "+ v);

if (pulsaciones < 4) {
// seguir metiendo numeros 
GotoAndPlay(9);
}


if (pulsaciones == 4 ) {
// comprobar numero porque pulsaciones son 4 

// recupero valor de texto  y comparo con contraseña 
var v = TextBoxGet("clave");
if ( v == "1505") { 
alert ("has ganado") ;
GotoAndPlay (13);
}

else {
// has perdido , vuelta a empezar
GotoAndPlay(0);
}


}




}

function Frame__14_2(ID){PlayLoop(13,113);

}

function skip_OnClick(){GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}

function skip_OnOver(){

}

function volumen1_OnChange(Value){SoundSetVolume("ambiente1",Value);

}

function musica_OnClick(){SoundPlay("ambiente1",false);

}

function pararmusica_OnClick(){SoundPause("ambiente1");

}

function galeria_OnClick(){GotoSceneNameAndPlay("menu galeria",0);
SoundPlay("off-click",false);
}

function juegos_OnClick(){GotoSceneNameAndPlay("menu juegos",0);
SoundPlay("off-click",false);
}

function botonquizz_OnClick(){GotoSceneNameAndPlay("quizz",0);
SoundPlay("off-click",false);
}

function Button4_OnClick(){GotoSceneNameAndPlay("aventura",0);
SoundPlay("off-click",false);
}

function Button1_OnClick(){//Siempre acierto
GotoAndPlay(30);
}

function Button2_OnClick(){GotoAndPlay(60);
}

function Button3_OnClick(){GotoAndPlay(60);
}

function menu_OnClick(){GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}

function abajo_OnClick(){ImageSequenceSetIndex("animacion",1);
animacion.Y=animacion.Y+10;
SoundPlay("off-click",false);
}

function arriba_OnClick(){ImageSequenceSetIndex("animacion",1);
animacion.Y=animacion.Y-10;
SoundPlay("off-click",false);
}

function ladoderecho_OnClick(){ImageSequenceSetIndex("animacion",2);


fondo.X=fondo.X-10;

grito.X=grito.X-30;

mona.X=mona.X-30;

van.X=van.X-30;

frida.X=frida.X-30;

SoundPlay("off-click",false);
}

function ladoizquierdo_OnClick(){ImageSequenceSetIndex("animacion",3);
animacion.X=animacion.X-10;

fondo.X=fondo.X+10;

grito.X=grito.X+30;

mona.X=mona.X+30;

van.X=van.X+30;

frida.X=frida.X+30;

SoundPlay("off-click",false);
}

function Button5_OnClick(){Resume();
SoundPlay("off-click",false);
}

function minijuego_OnClick(){GotoSceneNameAndStop("minijuego",0);
SoundPlay("off-click",false);
}

function grito_OnClick(){GotoSceneNameAndPlay("grito",0);

}

function monalisa_OnClick(){GotoSceneNameAndPlay("monalisa",0);

}

function vangogh_OnClick(){GotoSceneNameAndPlay("van",0);

}

function fridakahlo_OnClick(){GotoSceneNameAndPlay("fridakahlo",0);

}

function menu_OnClick(){GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}

function vermisobras_OnClick(){GotoSceneNameAndPlay("obras",0);

}

function vermisobras_OnOver(){t2.Visible = true;
SoundPlay("off-click",false);
}

function vermisobras_OnOut(){t2.Visible = false;
}

function HotSpot1_OnClick(){GotoSceneNameAndPlay("creditos",0);

}

function HotSpot1_OnOver(){TimelinePlay("a");
SoundPlay("off-click",false);
}

function HotSpot1_OnOut(){//TimelineSetSpeed("a",-1);
TimelineGotoAndStop("a",1);
}

function verlafacultad_OnClick(){GotoSceneNameAndPlay("facultad",0);

}

function verlafacultad_OnOver(){t1.Visible = true;
SoundPlay("off-click",false);
}

function verlafacultad_OnOut(){t1.Visible = false;
}

function mmenu_OnClick(){SoundPlay("motomami",true);
}

function pmmenu_OnClick(){SoundPause("motomami");
}

function volumen2_OnChange(Value){SoundSetVolume("motomami",Value);

}

function HotSpot2_OnClick(){GotoSceneNameAndPlay("videos",0);
}

function HotSpot2_OnOver(){TimelinePlay("v");
SoundPlay("off-click",false);
}

function HotSpot2_OnOut(){//TimelineSetSpeed("v",-1);
TimelineGotoAndStop("v",1);
}

function skip2_OnClick(){GotoAndPlay(100);

}

function skip2_OnOver(){SoundPlay("off-click",false);

}

function derecha_OnClick(){GotoAndPlay(GetFrame()+20);
SoundPlay("off-click",false);

}

function izquierda_OnClick(){GotoAndPlay(GetFrame()-20);
SoundPlay("off-click",false);

}

function menu_OnClick(){GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}

function pmmenu_OnClick(){SoundPause("motomami");
}

function mmenu_OnClick(){SoundPlay("motomami",true);
}

function volumen2_OnChange(Value){SoundSetVolume("motomami",Value);

}

function derechaobras_OnClick(){GotoAndPlay(GetFrame()+15);
SoundPlay("off-click",false);
}

function izquierdaobras_OnClick(){GotoAndPlay(GetFrame()-15);
SoundPlay("off-click",false);
}

function menu_OnClick(){GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}

function pararmusica_OnClick(){SoundPause("ambiente1");

}

function mmenu_OnClick(){SoundPlay("motomami",true);
}

function volumen2_OnChange(Value){SoundSetVolume("motomami",Value);

}

function mcreditos_OnClick(){SoundPlay("rosalia",true);
}

function pmcreditos_OnClick(){SoundPause("rosalia");
}

function volumen3_OnChange(Value){SoundSetVolume("rosalia",Value);

}

function menu2_OnClick(){GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
CloseYouTube("bbaa");
}

function play_OnClick(){VideoPlay("facultad");
SoundPlay("off-click",false);
}

function pause_OnClick(){VideoPause("facultad");
SoundPlay("off-click",false);
}

function volveraventura_OnClick(){GotoSceneNameAndPlay("aventura",90);

}

function Button5_OnClick(){Resume();
SoundPlay("off-click",false);
}

function Button5_OnClick(){Resume();
SoundPlay("off-click",false);
}

function volveraventura_OnClick(){GotoSceneNameAndPlay("aventura",90);

}

function volveraventura2_OnClick(){GotoSceneNameAndPlay("aventura",100);

}

function Button5_OnClick(){Resume();
SoundPlay("off-click",false);
}

function volveraventura2_OnClick(){GotoSceneNameAndPlay("aventura",100);

}

function Button5_OnClick(){Resume();
SoundPlay("off-click",false);
}

function Button6_OnClick(){pulsado1=true;
TextBoxSet("clave", TextBoxGet("clave") + "1" );
pulsaciones = pulsaciones+1;

// if ( "1" ==  TextBoxGet("clave") ) { alert ("sdsdsd"); }
}

function Button7_OnClick(){pulsado0=true;
TextBoxSet("clave", TextBoxGet("clave") + "0" );
pulsaciones = pulsaciones+1;

}

function Button8_OnClick(){pulsado5=true;
TextBoxSet("clave", TextBoxGet("clave") + "5" );
pulsaciones = pulsaciones+1;

}

function menu_OnClick(){GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}

var preguntas=1;
var aciertos=0;
var fallos=0;

var pulsado0=false;
var pulsado5=false;
var pulsado1=false;
var pulsaciones= 0;

// codigo secreto = 1505