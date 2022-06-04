function Movie_OnKeyPress(Key){
StackTrace="Al Pulsar Tecla";
if(Key==39) { // teclado derecha
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

function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
SceneNext();
SoundPause("ambiente1");

}

function Frame__1_0(ID){
StackTrace="Escena 2 Fotograma 0";
PlayLoop(0,40);

}

function Frame__2_0(ID){
StackTrace="Escena 3 Fotograma 0";
PlayLoop(0,40);

}

function Frame__3_0(ID){
StackTrace="Escena 4 Fotograma 0";
TextBoxSet("quizz", "Quizz: Pregunta nº"+ preguntas);
TextBoxSet("P","Quién pintó La Gioconda");

TextBoxSet("A","Leonardo da Vinci");//Siempre la correcta

TextBoxSet("B","Tiziano ");

TextBoxSet("C","Miguel Ángel");
ImageSequenceSetIndex("fotos",preguntas);
TextBoxSet("R","ACIERTOS:"+aciertos+"FALLOS:"+fallos);
Pause();



}

function Frame__3_1(ID){
StackTrace="Escena 4 Fotograma 1";
TextBoxSet("quizz", "Quizz: Pregunta nº"+ preguntas);
TextBoxSet("P","Cómo se llama el pintor que se cortó la oreja");

TextBoxSet("A","Vincent van Gogh");//Siempre la correcta

TextBoxSet("B","Salvador Dalí");

TextBoxSet("C","Paul Cézanne");
ImageSequenceSetIndex("fotos",preguntas);
TextBoxSet("R","ACIERTOS:"+aciertos+"FALLOS:"+fallos);
Pause();



}

function Frame__3_2(ID){
StackTrace="Escena 4 Fotograma 2";
TextBoxSet("quizz", "Quizz: Pregunta nº"+ preguntas);
TextBoxSet("P","Cuál es el nombre de este cuadro de Edvard Munch");

TextBoxSet("A","El grito");//Siempre la correcta

TextBoxSet("B","El fantasma");

TextBoxSet("C","El mudo");
ImageSequenceSetIndex("fotos",preguntas);
TextBoxSet("R","ACIERTOS:"+aciertos+"FALLOS:"+fallos);
Pause();



}

function Frame__3_3(ID){
StackTrace="Escena 4 Fotograma 3";
TextBoxSet("quizz", "Quizz: Pregunta nº"+ preguntas);
TextBoxSet("P","Quién es la autora de este autorretrato");

TextBoxSet("A","Frida Kahlo");//Siempre la correcta

TextBoxSet("B","Remedios Varo");

TextBoxSet("C","Tamara de Lempicka");
ImageSequenceSetIndex("fotos",preguntas);
TextBoxSet("R","ACIERTOS:"+aciertos+"FALLOS:"+fallos);
Pause();



}

function Frame__3_4(ID){
StackTrace="Escena 4 Fotograma 4";
TextBoxSet("quizz", "Quizz: Pregunta nº"+ preguntas);
TextBoxSet("P","Nombre de este pintor");

TextBoxSet("A","Salvador Dalí");//Siempre la correcta

TextBoxSet("B","Diego Rivera");

TextBoxSet("C","Pablo Picasso");
ImageSequenceSetIndex("fotos",preguntas);
TextBoxSet("R","ACIERTOS:"+aciertos+"FALLOS:"+fallos);
Pause();

}

function Frame__3_5(ID){
StackTrace="Escena 4 Fotograma 5";
preguntas=preguntas+1;
aciertos=aciertos+1;


if(aciertos==5) { //fin de las preguntas(5)
alert("Felicidades, ganaste");
Stop();
}

GotoAndPlay(preguntas);

}

function Frame__3_6(ID){
StackTrace="Escena 4 Fotograma 6";
fallos=fallos+1;


if(fallos==2) {
alert("Perdiste");
}

GotoAndPlay(preguntas);


}

function Frame__4_0(ID){
StackTrace="Escena 5 Fotograma 0";
Pause();

}

function Frame__4_1(ID){
StackTrace="Escena 5 Fotograma 1";
Pause();

}

function Frame__4_2(ID){
StackTrace="Escena 5 Fotograma 2";
Pause();

}

function Frame__4_3(ID){
StackTrace="Escena 5 Fotograma 3";
Pause();

}

function Frame__4_4(ID){
StackTrace="Escena 5 Fotograma 4";
Pause();

}

function Frame__4_5(ID){
StackTrace="Escena 5 Fotograma 5";
Pause();

}

function Frame__4_6(ID){
StackTrace="Escena 5 Fotograma 6";
Pause();

}

function Frame__4_7(ID){
StackTrace="Escena 5 Fotograma 7";
Pause();

}

function Frame__4_8(ID){
StackTrace="Escena 5 Fotograma 8";
Pause();

}

function Frame__4_9(ID){
StackTrace="Escena 5 Fotograma 9";
Pause();

}

function Frame__4_10(ID){
StackTrace="Escena 5 Fotograma 10";
Pause();

}

function Frame__4_11(ID){
StackTrace="Escena 5 Fotograma 11";
Pause();

}

function Frame__4_12(ID){
StackTrace="Escena 5 Fotograma 12";
Pause();

}

function Frame__4_13(ID){
StackTrace="Escena 5 Fotograma 13";
Pause();

}

function Frame__4_14(ID){
StackTrace="Escena 5 Fotograma 14";
Pause();

}

function Frame__4_15(ID){
StackTrace="Escena 5 Fotograma 15";
Pause();

}

function Frame__5_0(ID){
StackTrace="Escena 6 Fotograma 0";
TimelinePlayThenLoop("logo1",0,0,30);


}

function Frame__5_1(ID){
StackTrace="Escena 6 Fotograma 1";
PlayLoop(100,140);


}

function Frame__6_0(ID){
StackTrace="Escena 7 Fotograma 0";
Pause();
TimelinePlayThenLoop("logo2",0,0,30);

}

function Frame__6_1(ID){
StackTrace="Escena 7 Fotograma 1";
Pause();


}

function Frame__6_2(ID){
StackTrace="Escena 7 Fotograma 2";
Pause();


}

function Frame__6_3(ID){
StackTrace="Escena 7 Fotograma 3";
Pause();


}

function Frame__6_4(ID){
StackTrace="Escena 7 Fotograma 4";
Pause();


}

function Frame__7_0(ID){
StackTrace="Escena 8 Fotograma 0";
Stop();
TimelinePlayThenLoop("logo3",0,0,30);

}

function Frame__7_1(ID){
StackTrace="Escena 8 Fotograma 1";
Pause();


}

function Frame__7_2(ID){
StackTrace="Escena 8 Fotograma 2";
Pause();


}

function Frame__7_3(ID){
StackTrace="Escena 8 Fotograma 3";
Pause();


}

function Frame__7_4(ID){
StackTrace="Escena 8 Fotograma 4";
Pause();


}

function Frame__8_0(ID){
StackTrace="Escena 9 Fotograma 0";
SoundStop("motomami");
TimelinePlayThenLoop("logo4",0,0,30);


}

function Frame__8_1(ID){
StackTrace="Escena 9 Fotograma 1";
SoundStop("rosalia");


}

function Frame__9_0(ID){
StackTrace="Escena 10 Fotograma 0";
SoundStop("motomami");
TimelinePlayThenLoop("logo5",0,0,30);



}

function Frame__9_1(ID){
StackTrace="Escena 10 Fotograma 1";
OpenYouTube("bbaa","Qz_RbpBjaFM",true,true,false);


}

function Frame__9_2(ID){
StackTrace="Escena 10 Fotograma 2";
GotoSceneNameAndPlay("menu",100);
CloseYouTube("bbaa");
CloseVideo("facultad");
VideoStop("facultad");


}

function Frame__10_0(ID){
StackTrace="Escena 11 Fotograma 0";
Pause();

}

function Frame__10_1(ID){
StackTrace="Escena 11 Fotograma 1";
Pause();

}

function Frame__10_2(ID){
StackTrace="Escena 11 Fotograma 2";
Pause();

}

function Frame__10_3(ID){
StackTrace="Escena 11 Fotograma 3";
Pause();

}

function Frame__10_4(ID){
StackTrace="Escena 11 Fotograma 4";
Pause();

}

function Frame__10_5(ID){
StackTrace="Escena 11 Fotograma 5";
Pause();

}

function Frame__11_0(ID){
StackTrace="Escena 12 Fotograma 0";
Pause();

}

function Frame__11_1(ID){
StackTrace="Escena 12 Fotograma 1";
Pause();

}

function Frame__11_2(ID){
StackTrace="Escena 12 Fotograma 2";
Pause();

}

function Frame__11_3(ID){
StackTrace="Escena 12 Fotograma 3";
Pause();

}

function Frame__11_4(ID){
StackTrace="Escena 12 Fotograma 4";
Pause();

}

function Frame__11_5(ID){
StackTrace="Escena 12 Fotograma 5";
Pause();

}

function Frame__12_0(ID){
StackTrace="Escena 13 Fotograma 0";
Pause();

}

function Frame__12_1(ID){
StackTrace="Escena 13 Fotograma 1";
Pause();

}

function Frame__12_2(ID){
StackTrace="Escena 13 Fotograma 2";
Pause();

}

function Frame__12_3(ID){
StackTrace="Escena 13 Fotograma 3";
Pause();

}

function Frame__12_4(ID){
StackTrace="Escena 13 Fotograma 4";
Pause();

}

function Frame__12_5(ID){
StackTrace="Escena 13 Fotograma 5";
Pause();

}

function Frame__13_0(ID){
StackTrace="Escena 14 Fotograma 0";
Pause();

}

function Frame__13_1(ID){
StackTrace="Escena 14 Fotograma 1";
Pause();

}

function Frame__13_2(ID){
StackTrace="Escena 14 Fotograma 2";
Pause();

}

function Frame__13_3(ID){
StackTrace="Escena 14 Fotograma 3";
Pause();

}

function Frame__13_4(ID){
StackTrace="Escena 14 Fotograma 4";
Pause();

}

function Frame__13_5(ID){
StackTrace="Escena 14 Fotograma 5";
Pause();

}

function Frame__14_0(ID){
StackTrace="Escena 15 Fotograma 0";
TextBoxSet("clave","");
TextBoxSet("T","adivina codigo de 4 digitos");
pulsaciones= 0;

}

function Frame__14_1(ID){
StackTrace="Escena 15 Fotograma 1";
var v = TextBoxGet("clave");
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

function Frame__14_2(ID){
StackTrace="Escena 15 Fotograma 2";
PlayLoop(13,113);

}

function skip_OnClick(){
StackTrace="skip.Al Hacer Clic";
GotoSceneNameAndPlay("menu1",0);

}

function skip_OnOver(){
StackTrace="skip.Al Pasar";
SoundPlay("off-click",false);

}

function volumen1_OnChange(Value){
StackTrace="volumen1.Al Cambiar";
SoundSetVolume("ambiente1",Value);

}

function musica_OnClick(){
StackTrace="musica.Al Hacer Clic";
SoundPlay("ambiente1",false);

}

function pararmusica_OnClick(){
StackTrace="pararmusica.Al Hacer Clic";
SoundPause("ambiente1");

}

function galeria_OnClick(){
StackTrace="galeria.Al Hacer Clic";
GotoSceneNameAndPlay("menu galeria",0);
SoundPlay("off-click",false);
}

function juegos_OnClick(){
StackTrace="juegos.Al Hacer Clic";
GotoSceneNameAndPlay("menu juegos",0);
SoundPlay("off-click",false);
}

function botonquizz_OnClick(){
StackTrace="boton quizz.Al Hacer Clic";
GotoSceneNameAndPlay("quizz",0);
SoundPlay("off-click",false);
}

function Button4_OnClick(){
StackTrace="Button4.Al Hacer Clic";
GotoSceneNameAndPlay("aventura",0);
SoundPlay("off-click",false);
}

function Button1_OnClick(){
StackTrace="Button1.Al Hacer Clic";
//Siempre acierto
GotoAndPlay(30);
}

function Button2_OnClick(){
StackTrace="Button2.Al Hacer Clic";
GotoAndPlay(60);
}

function Button3_OnClick(){
StackTrace="Button3.Al Hacer Clic";
GotoAndPlay(60);
}

function menu_OnClick(){
StackTrace="menu.Al Hacer Clic";
GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}

function abajo_OnClick(){
StackTrace="abajo.Al Hacer Clic";
ImageSequenceSetIndex("animacion",1);
animacion.Y=animacion.Y+10;
SoundPlay("off-click",false);
}

function arriba_OnClick(){
StackTrace="arriba.Al Hacer Clic";
ImageSequenceSetIndex("animacion",1);
animacion.Y=animacion.Y-10;
SoundPlay("off-click",false);
}

function ladoderecho_OnClick(){
StackTrace="lado derecho.Al Hacer Clic";
ImageSequenceSetIndex("animacion",2);


fondo.X=fondo.X-10;

grito.X=grito.X-30;

mona.X=mona.X-30;

van.X=van.X-30;

frida.X=frida.X-30;

SoundPlay("off-click",false);
}

function ladoizquierdo_OnClick(){
StackTrace="lado izquierdo.Al Hacer Clic";
ImageSequenceSetIndex("animacion",3);
animacion.X=animacion.X-10;

fondo.X=fondo.X+10;

grito.X=grito.X+30;

mona.X=mona.X+30;

van.X=van.X+30;

frida.X=frida.X+30;

SoundPlay("off-click",false);
}

function Button5_OnClick(){
StackTrace="Button5.Al Hacer Clic";
Resume();
SoundPlay("off-click",false);
}

function minijuego_OnClick(){
StackTrace="minijuego.Al Hacer Clic";
GotoSceneNameAndPlay("minijuego",0);
SoundPlay("off-click",false);

}

function grito_OnClick(){
StackTrace="grito.Al Hacer Clic";
GotoSceneNameAndPlay("grito",0);

}

function monalisa_OnClick(){
StackTrace="monalisa.Al Hacer Clic";
GotoSceneNameAndPlay("monalisa",0);

}

function vangogh_OnClick(){
StackTrace="van gogh.Al Hacer Clic";
GotoSceneNameAndPlay("van",0);

}

function fridakahlo_OnClick(){
StackTrace="frida kahlo.Al Hacer Clic";
GotoSceneNameAndPlay("fridakahlo",0);

}

function menu_OnClick(){
StackTrace="menu.Al Hacer Clic";
GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}

function vermisobras_OnClick(){
StackTrace="ver mis obras.Al Hacer Clic";
GotoSceneNameAndPlay("obras",0);

}

function vermisobras_OnOver(){
StackTrace="ver mis obras.Al Pasar";
t2.Visible = true;
SoundPlay("off-click",false);
}

function vermisobras_OnOut(){
StackTrace="ver mis obras.Al Salir";
t2.Visible = false;
}

function HotSpot1_OnClick(){
StackTrace="HotSpot1.Al Hacer Clic";
GotoSceneNameAndPlay("creditos",0);

}

function HotSpot1_OnOver(){
StackTrace="HotSpot1.Al Pasar";
TimelinePlay("a");
SoundPlay("off-click",false);
}

function HotSpot1_OnOut(){
StackTrace="HotSpot1.Al Salir";
//TimelineSetSpeed("a",-1);
TimelineGotoAndStop("a",1);
}

function verlafacultad_OnClick(){
StackTrace="ver la facultad.Al Hacer Clic";
GotoSceneNameAndPlay("facultad",0);

}

function verlafacultad_OnOver(){
StackTrace="ver la facultad.Al Pasar";
t1.Visible = true;
SoundPlay("off-click",false);
}

function verlafacultad_OnOut(){
StackTrace="ver la facultad.Al Salir";
t1.Visible = false;
}

function mmenu_OnClick(){
StackTrace="mmenu.Al Hacer Clic";
SoundPlay("motomami",true);
}

function pmmenu_OnClick(){
StackTrace="pmmenu.Al Hacer Clic";
SoundPause("motomami");
}

function volumen2_OnChange(Value){
StackTrace="volumen2.Al Cambiar";
SoundSetVolume("motomami",Value);

}

function HotSpot2_OnClick(){
StackTrace="HotSpot2.Al Hacer Clic";
GotoSceneNameAndPlay("videos",0);
}

function HotSpot2_OnOver(){
StackTrace="HotSpot2.Al Pasar";
TimelinePlay("v");
SoundPlay("off-click",false);
}

function HotSpot2_OnOut(){
StackTrace="HotSpot2.Al Salir";
//TimelineSetSpeed("v",-1);
TimelineGotoAndStop("v",1);
}

function skip2_OnClick(){
StackTrace="skip 2.Al Hacer Clic";
GotoAndPlay(100);

}

function skip2_OnOver(){
StackTrace="skip 2.Al Pasar";
SoundPlay("off-click",false);

}

function derecha_OnClick(){
StackTrace="derecha.Al Hacer Clic";
GotoAndPlay(GetFrame()+20);
SoundPlay("off-click",false);

}

function izquierda_OnClick(){
StackTrace="izquierda.Al Hacer Clic";
GotoAndPlay(GetFrame()-20);
SoundPlay("off-click",false);

}

function menu_OnClick(){
StackTrace="menu.Al Hacer Clic";
GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}

function pmmenu_OnClick(){
StackTrace="pmmenu.Al Hacer Clic";
SoundPause("motomami");
}

function mmenu_OnClick(){
StackTrace="mmenu.Al Hacer Clic";
SoundPlay("motomami",true);
}

function volumen2_OnChange(Value){
StackTrace="volumen2.Al Cambiar";
SoundSetVolume("motomami",Value);

}

function derechaobras_OnClick(){
StackTrace="derecha obras.Al Hacer Clic";
GotoAndPlay(GetFrame()+15);
SoundPlay("off-click",false);
}

function izquierdaobras_OnClick(){
StackTrace="izquierda obras.Al Hacer Clic";
GotoAndPlay(GetFrame()-15);
SoundPlay("off-click",false);
}

function menu_OnClick(){
StackTrace="menu.Al Hacer Clic";
GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}

function pararmusica_OnClick(){
StackTrace="pararmusica.Al Hacer Clic";
SoundPause("ambiente1");

}

function mmenu_OnClick(){
StackTrace="mmenu.Al Hacer Clic";
SoundPlay("motomami",true);
}

function volumen2_OnChange(Value){
StackTrace="volumen2.Al Cambiar";
SoundSetVolume("motomami",Value);

}

function mcreditos_OnClick(){
StackTrace="mcreditos.Al Hacer Clic";
SoundPlay("rosalia",true);
}

function pmcreditos_OnClick(){
StackTrace="pmcreditos.Al Hacer Clic";
SoundPause("rosalia");
}

function volumen3_OnChange(Value){
StackTrace="volumen3.Al Cambiar";
SoundSetVolume("rosalia",Value);

}

function menu2_OnClick(){
StackTrace="menu2.Al Hacer Clic";
GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
CloseYouTube("bbaa");
}

function play_OnClick(){
StackTrace="play.Al Hacer Clic";
VideoPlay("facultad");
SoundPlay("off-click",false);
}

function pause_OnClick(){
StackTrace="pause.Al Hacer Clic";
VideoPause("facultad");
SoundPlay("off-click",false);
}

function volveraventura_OnClick(){
StackTrace="volver aventura.Al Hacer Clic";
GotoSceneNameAndPlay("aventura",90);

}

function Button5_OnClick(){
StackTrace="Button5.Al Hacer Clic";
Resume();
SoundPlay("off-click",false);
}

function volveraventura_OnClick(){
StackTrace="volver aventura.Al Hacer Clic";
GotoSceneNameAndPlay("aventura",90);

}

function Button5_OnClick(){
StackTrace="Button5.Al Hacer Clic";
Resume();
SoundPlay("off-click",false);
}

function volveraventura2_OnClick(){
StackTrace="volver aventura 2.Al Hacer Clic";
GotoSceneNameAndPlay("aventura",110);

}

function Button5_OnClick(){
StackTrace="Button5.Al Hacer Clic";
Resume();
SoundPlay("off-click",false);
}

function volveraventura2_OnClick(){
StackTrace="volver aventura 2.Al Hacer Clic";
GotoSceneNameAndPlay("aventura",110);

}

function Button5_OnClick(){
StackTrace="Button5.Al Hacer Clic";
Resume();
SoundPlay("off-click",false);
}

function Button6_OnClick(){
StackTrace="Button6.Al Hacer Clic";
pulsado1=true;
TextBoxSet("clave", TextBoxGet("clave") + "1" );
pulsaciones = pulsaciones+1;

// if ( "1" ==  TextBoxGet("clave") ) { alert ("sdsdsd"); }
}

function Button7_OnClick(){
StackTrace="Button7.Al Hacer Clic";
pulsado0=true;
TextBoxSet("clave", TextBoxGet("clave") + "0" );
pulsaciones = pulsaciones+1;

}

function Button8_OnClick(){
StackTrace="Button8.Al Hacer Clic";
pulsado5=true;
TextBoxSet("clave", TextBoxGet("clave") + "5" );
pulsaciones = pulsaciones+1;

}

function menu_OnClick(){
StackTrace="menu.Al Hacer Clic";
GotoSceneNameAndPlay("menu1",0);
SoundPlay("off-click",false);
}


StackTrace="General";
var preguntas=1;
var aciertos=0;
var fallos=0;

var pulsado0=false;
var pulsado5=false;
var pulsado1=false;
var pulsaciones= 0;

// codigo secreto = 1505