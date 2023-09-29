import React from "react";
import "./fontawesome"; // Importa el archivo fontawesome.ts

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <button id="prev-btn">
        <FontAwesomeIcon icon="arrow-circle-left" className="fas" />
      </button>

      <div id="book" className="book">
        {/* PAPER 1 */}
        <div id="p1" className="paper">
          <div className="front">
            <div id="f1" className="front-content">
              <Image
                src=".public/assets/images/presentation.png"
                alt="presentation"
                width={100} // Ajusta el ancho según tus necesidades
                height={100} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
          <div className="back">
            <div id="b1" className="back-content">
              <Image
                className="drawing1"
                src=".public/assets/images/p1.png"
                alt="drawing"
                width={100} // Ajusta el ancho según tus necesidades
                height={100} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
        </div>

        {/* PAPER 2 */}
        <div id="p2" className="paper">
          <div className="front">
            <div id="f2" className="front-content">
              {/* Contenido de Paper 2 (Front) */}
            </div>
          </div>
          <div className="back">
            <div id="b2" className="back-content">
              <Image
                className="drawing2"
                src=".public/assets/images/p22.png"
                alt="drawing"
                width={100} // Ajusta el ancho según tus necesidades
                height={100} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
        </div>

        {/* PAPER 3 */}
        <div id="p3" className="paper">
          <div className="front">
            <div id="f3" className="front-content">
              {/* Contenido de Paper 2 (Front) */}
            </div>
          </div>
          <div className="back">
            <div id="b3" className="back-content">
              <Image
                className="drawing3"
                src=".public/assets/images/p22.png"
                alt="drawing"
                width={100} // Ajusta el ancho según tus necesidades
                height={100} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
        </div>
        {/* PAPER 4 */}
        <div id="p4" className="paper">
          <div className="front">
            <div id="f4" className="front-content">
              {/* Contenido de Paper 2 (Front) */}
            </div>
          </div>
          <div className="back">
            <div id="b4" className="back-content">
              <Image
                className="drawing4"
                src=".public/assets/images/p22.png"
                alt="drawing"
                width={100} // Ajusta el ancho según tus necesidades
                height={100} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
          {/* PAPER 5 */}
          <div id="p5" className="paper">
            <div className="front">
              <div id="f5" className="front-content">
                {/* Contenido de Paper 2 (Front) */}
              </div>
            </div>
            <div className="back">
              <div id="b5" className="back-content">
                <Image
                  className="drawing5"
                  src=".public/assets/images/p22.png"
                  alt="drawing"
                  width={100} // Ajusta el ancho según tus necesidades
                  height={100} // Ajusta la altura según tus necesidades
                />
              </div>
            </div>
            {/* PAPER 6 */}
            <div id="p6" className="paper">
              <div className="front">
                <div id="f6" className="front-content">
                  {/* Contenido de Paper 2 (Front) */}
                </div>
              </div>
              <div className="back">
                <div id="b6" className="back-content">
                  <Image
                    className="drawing6"
                    src=".public/assets/images/p22.png"
                    alt="drawing"
                    width={100} // Ajusta el ancho según tus necesidades
                    height={100} // Ajusta la altura según tus necesidades
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button id="next-btn">
        <FontAwesomeIcon icon="arrow-circle-right" className="fas" />
      </button>
    </div>
  );
}
