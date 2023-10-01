'use client';
import { useState } from 'react';
import Image from 'next/image';
import PresentationImage from '/public/assets/images/presentation.png';
import ImageP1 from '/public/assets/images/p1.png';
import ImageP2 from '/public/assets/images/p22.png';
import ImageP3 from '/public/assets/images/p3.png';
import ImageP4 from '/public/assets/images/p4.png';
import ImageP7 from '/public/assets/images/p7.png';
import ImageP6 from '/public/assets/images/p6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Book() {
  const [page, setPage] = useState(0);
  const [bookStyle, setBookStyle] = useState({ transform: 'translateX(0%)' });
  const [prevBtnStyle, setPrevBtnStyle] = useState({ transform: 'translateX(0px)' });
  const [nextBtnStyle, setNextBtnStyle] = useState({ transform: 'translateX(0px)' });

  function openBook() {
    setBookStyle({ transform: 'translateX(50%)' });
    setPrevBtnStyle({ transform: 'translateX(-180px)' });
    setNextBtnStyle({ transform: 'translateX(180px)' });
  }

  function closeBook(isAtBeginning: boolean) {
    if (isAtBeginning) {
      setBookStyle({ transform: 'translateX(0%)' });
    } else {
      setBookStyle({ transform: 'translateX(100%)' });
    }
    setPrevBtnStyle({ transform: 'translateX(0px)' });
    setNextBtnStyle({ transform: 'translateX(0px)' });
  }

  function handlePrevClick() {
    if (page === 4) openBook();
    if (page > 0) setPage((prevState) => prevState - 1);
    if (page === 1) closeBook(true);
  }

  function handleNextClick() {
    if (page === 0) openBook();
    if (page < 4)
      setPage((prevState) => {
        if (page === 3) closeBook(false);
        return prevState + 1;
      });
  }

  function flip(_page: number) {
    let className = 'paper';
    let style = {};

    if (_page < page) {
      style = { zIndex: 1 };
      className = `${className} flipped`;
    }

    return { style, className };
  }

  return (
    <div className="book__container">
      <button id="prev-btn" onClick={handlePrevClick} type="button" style={prevBtnStyle}>
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
              {/* Contenido de Paper 2 (Front) */}
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
              {/* Contenido de Paper 2 (Front) */}
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
              {/* Contenido de Paper 2 (Front) */}
            </div>
          </div>
          <div className="back">
            <div id="b4" className="back-content">
              <Image
                className="drawing4"
                src={ImageP4}
                alt="drawing"
                width={350} // Ajusta el ancho según tus necesidades
                height={500} // Ajusta la altura según tus necesidades
              />
            </div>
          </div>
          {/* PAPER 5 */}
          <div id="p5" {...flip(4)}>
            <div className="front">
              <div id="f5" className="front-content">
                {/* Contenido de Paper 2 (Front) */}
              </div>
            </div>
            <div className="back">
              <div id="b5" className="back-content">
                <Image
                  className="drawing5"
                  src={ImageP7}
                  alt="drawing"
                  width={100} // Ajusta el ancho según tus necesidades
                  height={100} // Ajusta la altura según tus necesidades
                />
              </div>
            </div>
            {/* PAPER 6 */}
            <div id="p6" {...flip(5)}>
              <div className="front">
                <div id="f6" className="front-content">
                  {/* Contenido de Paper 2 (Front) */}
                </div>
              </div>
              <div className="back">
                <div id="b6" className="back-content">
                  <Image
                    className="drawing6"
                    src={ImageP6}
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

      <button id="next-btn" type="button" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faArrowCircleRight} className="fas" style={nextBtnStyle} />
      </button>
    </div>
  );
}
