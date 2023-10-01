"use client";
import { useState } from "react";
import Image from "next/image";
import PresentationImage from "/public/assets/images/presentation.png";
import ImageP1 from "/public/assets/images/p1.png";
import ImageP2 from "/public/assets/images/p22.png";
import ImageP3 from "/public/assets/images/p3.png";
import ImageP4 from "/public/assets/images/p4.png";
import ImageP7 from "/public/assets/images/p7.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Book() {
  const [page, setPage] = useState(0);
  const [bookStyle, setBookStyle] = useState({ transform: "translateX(0%)" });
  const [prevBtnStyle, setPrevBtnStyle] = useState({
    transform: "translateX(0px)",
  });
  const [nextBtnStyle, setNextBtnStyle] = useState({
    transform: "translateX(0px)",
  });

  function openBook() {
    setBookStyle({ transform: "translateX(50%)" });
    setPrevBtnStyle({ transform: "translateX(-180px)" });
    setNextBtnStyle({ transform: "translateX(180px)" });
  }

  function closeBook(isAtBeginning: boolean) {
    if (isAtBeginning) {
      setBookStyle({ transform: "translateX(0%)" });
    } else {
      setBookStyle({ transform: "translateX(100%)" });
    }
    setPrevBtnStyle({ transform: "translateX(0px)" });
    setNextBtnStyle({ transform: "translateX(0px)" });
  }

  function handlePrevClick() {
    if (page === 6) openBook();
    if (page > 0) setPage((prevState) => prevState - 1);
    if (page === 1) closeBook(true);
  }

  function handleNextClick() {
    if (page === 0) openBook();
    if (page < 6)
      setPage((prevState) => {
        if (page === 5) closeBook(false);
        return prevState + 1;
      });
  }

  function flip(_page: number) {
    let className = "paper";
    let style = {};

    if (_page < page) {
      style = { zIndex: 1 };
      className = `${className} flipped`;
    }

    return { style, className };
  }

  return (
    <div className="book__container">
      <button
        id="prev-btn"
        onClick={handlePrevClick}
        type="button"
        style={prevBtnStyle}
      >
        <FontAwesomeIcon icon={faArrowCircleLeft} className="fas" />
      </button>

      <div id="book" className="book" style={bookStyle}>
        {/* PAPER 1 */}
        <div id="p1" {...flip(0)}>
          <div className="front">
            <div id="f1" className="front-content">
              <Image
                src={PresentationImage}
                alt="presentation"
                width={350} // Ajusta el ancho según tus necesidades
                height={500} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
          <div className="back">
            <div id="b1" className="back-content">
              <Image
                className="drawing1"
                src={ImageP1}
                alt="drawing"
                width={350} // Ajusta el ancho según tus necesidades
                height={500} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
        </div>

        {/* PAPER 2 */}
        <div id="p2" {...flip(1)}>
          <div className="front">
            <div id="f2" className="front-content">
              <p className="text">
                En las profundidades insondables de un bosque ennegrecido por la
                maldición, existía un pueblo olvidado por la luz. En este rincón
                oscuro del mundo, una niña llamada Rosalinda sufría el peso de
                una maldición que se arrastraba a lo largo de generaciones. Su
                vida, desde el mismísimo día de su nacimiento, estuvo destinada
                a un destino sombrío y dramático.
                <br />
                <br />
                Su madre, una mujer cuyo corazón era un abismo sin fondo, la
                sometía a tormentos inimaginables. Rosalinda estaba condenada a
                vestir una capa roja, tan roja como la sangre derramada por
                generaciones de su linaje. Bajo la mirada gélida de su madre, la
                niña era arrojada al bosque, donde debía buscar desesperadamente
                alimentos y remedios. Pero en su angustiosa travesía, las
                criaturas acechantes y los árboles retorcidos eran lo menos
                aterrador.
                <br />
                <br />
                El bosque mismo era un espectáculo de horrores retorcidos, con
                árboles que parecían retorcerse hacia el cielo como garras
                siniestras y susurros inquietantes que envolvían el aire.
                Rosalinda caminaba con el alma en vilo, las lágrimas que caían
                se confundían con la lluvia implacable que empapaba su capa
                roja, y solo encontraba consuelo en su abuelita, una anciana
                sabia y agonizante que habitaba al otro lado del bosque. Ella
                era la única que le brindaba amor sincero.
                <br />
                <br />
                Un día, mientras Rosalinda avanzaba aún más en las profundidades
                del bosque, sintió una presencia acechante que la erizó de
                terror, una maldad que la observaba con voracidad. Era un lobo
                colosal, con ojos amarillos como la perversion misma, que la
                perseguía sigilosamente. Sus pasos eran lentos y amenazadores, y
                su lengua parecía ser la voz de la perdición. Pero el lobo no
                era la única amenaza en ese lúgubre lugar. En la aldea, la madre
                de Rosalinda conocía la negrura que se cernía sobre su hija.
                Había sellado un pacto impío con el lobo, un ser que no era del
                todo bestia ni del todo humano. Su objetivo era liberarse de
                Rosalinda y obtener poderes ocultos que la hicieran
                invulnerable. La madre, una bruja con un corazón tan corrompido
                como su magia oscura, estaba dispuesta a sacrificar todo por
                ello. El lobo, atraído por la malicia de la madre, estaba
                dispuesto a cumplir su parte del trato.
                <br />
                <br />
                <br />
                Hace muchas generaciones atrás, en el mismo pueblo oscuro donde
                Rosalinda ahora sufría su destino, hubo un acontecimiento
                terrible. Una bruja malvada, con ansias de poder y sed de
                venganza, fue traicionada por su propia familia. En un acto de
                desesperación y maldad, la bruja lanzó una maldición sobre su
                linaje. Juró que sus descendientes estarían condenados a llevar
                una capa roja como la sangre, como una marca inquebrantable de
                la maldición que ella misma había lanzado. <br />
                <br />
                La maldición tenía un propósito retorcido: asegurarse de que la
                infelicidad y el sufrimiento siempre acompañaran a su linaje.
                Esta maldición persistió a lo largo de las generaciones,
                afectando a cada niña nacida en la familia, incluyendo a
                Rosalinda. Cada madre, bajo la influencia de la maldición,
                maltrataba a su hija, perpetuando así el ciclo de dolor y
                oscuridad.
                <br />
                <br />
                Esta maldición, envuelta en tragedia y venganza, había condenado
                a Rosalinda a un destino de sufrimiento desde el momento de su
                nacimiento, y solo el tiempo revelaría si alguna vez podría
                romperse.
              </p>
            </div>
          </div>
          <div className="back">
            <div id="b2" className="back-content">
              <Image
                className="drawing2"
                src={ImageP2}
                alt="drawing"
                width={350} // Ajusta el ancho según tus necesidades
                height={500} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
        </div>

        {/* PAPER 3 */}
        <div id="p3" {...flip(2)}>
          <div className="front">
            <div id="f3" className="front-content">
              <p className="text">
                Mientras Rosalinda avanzaba por el oscuro bosque, se encontró
                con lo que parecía ser una obrera que cortaba leña en el camino.
                Era el lobo cubierto con la piel de una obrera, lo que lo hacía
                parecer inofensivo. Sin embargo, había algo en su mirada que la
                llenaba de inquietud, como si ocultara secretos oscuros detrás
                de su apariencia apacible.
                <br />
                <br />
                La obrera detuvo a Rosalinda con una sonrisa amable y le
                preguntó: ¿A dónde te diriges, niña?
                <br />
                <br />
                Rosalinda, aún temblando de miedo, respondió: Estoy yendo a
                visitar a mi abuelita. Ella está enferma y necesita mi ayuda.
                <br />
                <br />
                La obrera asintió con simpatía, pero sus ojos parecían brillar
                con una malicia oculta. Oh, entiendo. Tu abuelita vive al otro
                lado del bosque. Deberías tomar el camino corto para llegar más
                rápido.
                <br />
                <br />
                Las palabras de la obrera llenaron el aire de una sensación
                inquietante, y Rosalinda sintió que algo no estaba bien. A pesar
                de su apariencia amable, había algo en la voz de la obrera que
                la llenaba de ansiedad.
                <br />
                <br />
                Rosalinda, ansiosa por llegar rápido y aliviar el sufrimiento de
                su abuelita, preguntó: ¿Cuál es el camino más corto?
                <br />
                <br />
                La obrera sonrió con dulzura, ocultando su verdadera naturaleza.
                El camino más corto es a través del bosque profundo y oscuro. Es
                arriesgado y está lleno de bestias y monstruos, pero te llevará
                directo a la casa de tu abuelita. El otro camino es largo y
                seguro, pero te llevará mucho más tiempo.
                <br />
                <br />
                Rosalinda, sin dudarlo, decidió tomar el camino más corto,
                guiada por la urgencia de llegar a su abuelita lo más rápido
                posible. La obrera asintió con aprobación, ocultando su
                verdadera intención detrás de una máscara de amabilidad.
                <br />
                <br />
                Con un último consejo aparentemente benevolente, la obrera le
                dijo: Ve con cuidado, niña. Y no te detengas por nada ni por
                nadie en tu camino.
                <br />
                <br />
                Así, Rosalinda emprendió una carrera a través del bosque,
                siguiendo el camino más corto que la obrera le había indicado.
                El bosque se cerraba a su alrededor, sumiéndola en una oscuridad
                opresiva, y los sonidos de bestias desconocidas parecían
                acecharla desde las sombras. La ansiedad y el miedo se
                apoderaron de ella mientras avanzaba hacia lo desconocido, sin
                sospechar que la obrera tenía sus propios planes retorcidos que
                la llevarían a un encuentro aterrador en la casa de su abuelita.
              </p>
            </div>
          </div>
          <div className="back">
            <div id="b3" className="back-content">
              <Image
                className="drawing3"
                src={ImageP3}
                alt="drawing"
                width={350} // Ajusta el ancho según tus necesidades
                height={500} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
        </div>
        {/* PAPER 4 */}
        <div id="p4" {...flip(3)}>
          <div className="front">
            <div id="f4" className="front-content">
              <p className="text">
                Mientras Rosalinda avanzaba más profundamente en el bosque, la
                oscuridad se cernía sobre ella como un manto asfixiante, un
                abrazo implacable de la negrura que amenazaba con devorar su
                alma. Criaturas insondables acechaban entre los árboles
                retorcidos, como sombras con garras hambrientas que ansiaban
                arrastrarla hacia el abismo.
                <br />
                <br />
                Bestias con ojos incandescentes como ascuas ardientes se
                abalanzaban desde las sombras, y Rosalinda, con lágrimas en los
                ojos y su daga ensangrentada en mano, se vio obligada a luchar
                encarnizadamente por su vida. Cada enfrentamiento era una danza
                macabra de vida y muerte, donde la sangre de las bestias
                derramada se mezclaba con el oscuro rocío del bosque.
                <br />
                <br />
                Las noches eran aún más infernales. Susurros inquietantes
                llenaban el aire como siseos de serpientes invisibles, y el
                viento aullaba como un espectro vengativo. Rosalinda encendía
                una pequeña fogata con manos temblorosas, tratando de mantener a
                raya a las sombras que la rodeaban, como si el fuego fuera el
                último faro de cordura en medio de la locura del bosque.
                <br />
                <br />
                El bosque había sido su prisión y su escuela de pesadillas,
                donde cada árbol retorcido era una metáfora de la malevolencia
                que acechaba en su interior. Aprendió a discernir entre los
                sonidos de las criaturas dóciles y las malignas, a moverse como
                una sombra entre sombras y a sobrevivir en un lugar donde la
                muerte acechaba en cada rincón como una guillotina suspendida.
                <br />
                <br />
                Con cada día que pasaba, Rosalinda se volvía más valiente, más
                astuta y más despiadada, como si el bosque hubiera moldeado su
                alma en un crisol de terror y desesperación. La capa roja que
                vestía, ahora empapada en la sangre de las bestias que había
                aniquilado, se convirtió en un emblema de su transformación
                infernal, un manto de carmesí que simbolizaba su metamorfosis en
                una depredadora de pesadillas.
                <br />
                <br />
                El bosque la había metamorfoseado en un ser sombrío y
                despiadado, y Rosalinda comenzó a darse cuenta de que ya no era
                la misma niña que había adentrado en él. La maldición que había
                acosado a su familia durante eras había hallado en ella una
                guerrera, una superviviente. Mientras avanzaba hacia el centro
                del bosque tenebroso, sabía que el encuentro definitivo con la
                obrera disfrazada de lobo sería la culminación de su
                escalofriante odisea, un enfrentamiento donde las sombras y la
                sangre se entrelazarían en una danza final de redención o
                perdición.
              </p>
            </div>
          </div>
          <div className="back">
            <div id="b4" className="back-content">
              <Image
                src={ImageP4}
                alt="presentation"
                width={350} // Ajusta el ancho según tus necesidades
                height={500} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
        </div>
        {/* PAPER 5 */}
        <div id="p5" {...flip(4)}>
          <div className="front">
            <div id="f5" className="front-content">
              <p className="text">
                El bosque exhudaba un silencio espeso y ominoso cuando el lobo,
                envuelto en su piel de obrera, se acercó sigilosamente a la casa
                de la abuela. El rincón oscuro del mundo parecía retener el
                aliento, como si anticipara el horror que estaba por
                desencadenarse.
                <br />
                <br />
                El lobo, con su mirada perversa y hambrienta, llegó a la puerta
                de la casa. Allí, detuvo su avance y golpeó tres veces con sus
                garras, un golpeteo que sonó como el eco de un corazón
                palpitante en medio de la negrura. Un escalofrío recorrió el
                aire, como si el propio bosque supiera que la hora de la
                tragedia se acercaba.
                <br />
                <br />
                Tras el tercer golpe, el lobo esperó, y el tiempo pareció
                detenerse. Entonces, imitando la voz temblorosa de la niña,
                murmuró desde el otro lado de la puerta: Abuelita, soy yo,
                Rosalinda. He vuelto.
                <br />
                <br />
                Dentro de la casa, la abuela, ajena al peligro, se encontraba
                frente a un espejo, ajustando su vestido con manos ancianas y
                temblorosas. Escuchó la voz de la supuesta nieta y sonrió,
                pensando en el reencuentro con su amada Rosalinda.
                <br />
                <br />
                Pero mientras miraba su reflejo en el espejo, los ojos de la
                abuela se encontraron con los del lobo, reflejados en el
                cristal. No eran los ojos de su nieta, eran los ojos del
                depredador disfrazado, con el brillo voraz de la bestia que
                ansiaba su carne. El horror se apoderó de la abuela, pero fue
                demasiado tarde.
                <br />
                <br />
                El lobo, con una velocidad sobrenatural, atravesó la puerta con
                un aullido infernal y se abalanzó sobre la abuela antes de que
                ella pudiera gritar. Los colmillos del lobo se hundieron en la
                carne de la anciana con una ferocidad grotesca, desgarrando su
                piel y músculos en una danza macabra de sangre y sufrimiento.
                <br />
                <br />
                Los aullidos de agonía se mezclaron con los gruñidos del lobo,
                creando una sinfonía de pesadilla que resonó en el bosque
                oscuro. La sangre salpicó las paredes y el suelo de la casa,
                transformándola en un escenario de horror indescriptible. La
                abuela, en su último suspiro, miró a los ojos amarillos del lobo
                mientras la vida se apagaba de sus ojos, y el lobo continuó
                devorándola con una voracidad insaciable, como un demonio
                insensible a la humanidad.
                <br />
                <br />
                Rosalinda, con el corazón lleno de ansias y preocupación,
                finalmente llegó a la casa de su abuelita. El aire estaba
                impregnado de un silencio siniestro y una oscuridad densa, como
                si el mismo bosque hubiera dejado caer un velo lúgubre sobre el
                lugar.
              </p>
            </div>
          </div>
          <div className="back">
            <div id="b5" className="back-content">
              <Image
                src={ImageP7}
                alt="presentation"
                width={350} // Ajusta el ancho según tus necesidades
                height={500} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
        </div>
        {/* PAPER 6 */}
        <div id="p6" {...flip(5)}>
          <div className="front">
            <div id="f6" className="front-content">
              <p className="text">
                Rosalinda abrió la puerta con cuidado y su mirada cayó de
                inmediato sobre un cuadro dantesco que la dejó sin aliento. Su
                abuela, o lo que quedaba de ella, estaba desparramada en el
                suelo en un macabro rompecabezas de carne y huesos. Un torrente
                de asco y tristeza la inundó, y Rosalinda vomitó en un rincón de
                la habitación, su desesperación y enojo creciendo
                incontrolablemente.
                <br />
                <br />
                Fue entonces cuando escuchó gruñidos procedentes de las sombras
                más profundas de la casa. El lobo, empapado en la sangre de la
                abuela, se acercó lentamente, con los ojos amarillos llenos de
                una maldad profunda. Rosalinda, mientras se secaba la boca con
                el dorso de la mano, clavó su mirada en el monstruo.
                <br />
                <br />
                ¿Por qué, Rosalinda? ¿Por qué has vuelto?, gruñó el lobo con una
                voz que parecía emanar de las mismas profundidades del infierno.
                <br />
                <br />
                Rosalinda, llena de ira y angustia, le espetó: ¿Por qué? ¡Porque
                has matado a mi abuelita, a mi única fuente de amor y consuelo
                en este mundo maldito!
                <br />
                <br />
                El lobo dejó escapar una risa que heló la sangre de Rosalinda.
                Tu abuelita no era lo que parecía, niña. Estaba tan sumida en la
                oscuridad como tu madre. Ambas eran cómplices en el juego de la
                maldición que nos atrapa.
                <br />
                <br />
                La niña, al borde de la locura, gritó: ¡No me importa! ¡Has
                destruido a mi familia y eso no quedará impune!
                <br />
                <br />
                El lobo, con un movimiento rápido como un rayo, se abalanzó
                sobre Rosalinda, y comenzó una lucha épica que sacudió la
                casa.El suelo se empapaba de sangre, creando charcos viscosos
                que reflejaban el rojo de la muerte. Los aullidos de la bestia y
                los gritos de la niña se mezclaban en un coro macabro que
                llenaba la casa como un himno a la locura.
                <br />
                <br />
                Finalmente, en un último acto de desesperación, Rosalinda logró
                inmovilizar al lobo, con sus piernas rodeando su cuerpo peludo y
                sus manos empuñando la daga ensangrentada. Con una fuerza
                sobrenatural, hundió la hoja en el corazón del lobo con un grito
                desgarrador.
                <br />
                <br />
                El lobo, con los ojos inyectados en sangre, dejó escapar un
                alarido de agonía que parecía rasgar el mismo tejido del
                universo. La sangre brotó a borbotones de la herida mortal,
                empapando a Rosalinda en un baño nauseabundo de vísceras y
                fluidos fétidos.
                <br />
                <br />
                El lobo se retorció y convulsionó, como si luchara por negar su
                propia muerte, pero la daga había hecho su trabajo y la bestia
                estaba condenada. Finalmente, con un estertor espeluznante, el
                lobo cayó al suelo, muerto. La escena que quedó era un cuadro
                grotesco de muerte y destrucción, con la niña cubierta de sangre
                y el cuerpo despedazado del lobo como un testimonio a la
                brutalidad del enfrentamiento. La casa se llenó de un silencio
                espeluznante, solo roto por la respiración agitada de Rosalinda.
                <br />
                <br />
                Rosalinda, con la cabeza del lobo ensangrentada en su cesta,
                salió de la casa transformada. La muerte de la abuela y la lucha
                contra el lobo habían dejado su mente en un estado de locura y
                rabia incontrolables. Ahora, llevando consigo la cabeza del
                monstruo, se adentró en el mundo exterior como una criatura de
                oscuridad, una vengadora llena de ira y sed de poder.
              </p>
            </div>
          </div>
          <div className="back">
            <div id="b6" className="back-content">
              <p className="text">
                MORALIDAD (cuento original)<br /><br />En este pasaje se observa que los jóvenes,
                especialmente las jóvenes hermosas, bien parecidas y amables,
                cometen un grave error al escuchar a todo tipo de personas. No
                sorprende que algunos de ellos sean devorados por el Lobo. Digo
                el Lobo, porque no todos los lobos son iguales. Algunos tienen
                un temperamento amable, son tranquilos, sin maldad ni enojo, y
                son complacientes y dóciles. Siguen a las jóvenes damiselas
                hasta sus casas y calles. Pero desafortunadamente, es bien
                sabido que estos lobos apacibles son los más peligrosos de todos
                los lobos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button id="next-btn" type="button" onClick={handleNextClick}>
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          className="fas"
          style={nextBtnStyle}
        />
      </button>
    </div>
  );
}
