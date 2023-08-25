    import React, { useState, useEffect, useCallback } from 'react'
    import "./About.css";
    import foto from "./Rectangle 30.png";
    import dot from "./Dot Ornament.png";
    import line from "./Line Ornament.png";

    function About() {
        const Card = (props) => (
            <div className="card w-[288px] h-[292px] text-[#F35578] lg:m-4 overflow-hidden flex justify-center text-center items-center">
                <div className="card-content p-10 md:p-10 lg:p-8">
                    <h1 className='text-[#A4183F] text-lg lg:text-2xl md:text-xl pb-2'>{props.title}</h1>
                    <p className=''>{props.content}</p>
                </div>
            </div>
        );

        const CardContainer = (props) => {
            const [startIndex, setStartIndex] = useState(0);
            const [windo, setWindo] = useState(false);

            const goToPreviousCards = () => {
                setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            };

            const goToNextCards = useCallback(() => {
                setStartIndex((prevIndex) =>
                    Math.min(prevIndex + 1, props.cards.length - 3)
                );
            }, [props.cards.length]);

            const visibleCards = props.cards.slice(startIndex, startIndex + 3);
            const autoplayInterval = 2300;

            useEffect(() => {
                const handleResize = () => {
                    setWindo(window.innerWidth <= 768);
                };

                handleResize();

                const autoplayTimer = windo
                    ? null // No autoplay when screen width is less than or equal to 768px
                    : setInterval(() => {
                        if (startIndex >= props.cards.length - 3) {
                            setStartIndex(0);
                        } else {
                            goToNextCards();
                        }
                    }, autoplayInterval);

                window.addEventListener("resize", handleResize);

                return () => {
                    clearInterval(autoplayTimer);
                    window.removeEventListener("resize", handleResize);
                };
            }, [startIndex, goToNextCards, props.cards.length, windo]);
            return (
                <div className="cards-container block lg:flex   overflow-hidden md:overflow-auto justify-center relative items-center">
                    {windo ? (
                        props.cards.map((card) => (
                            <Card
                                key={card.id}
                                title={card.title}
                                content={card.content}
                                imgUrl={card.imgUrl}
                            />
                        ))
                    ) : (
                        <>
                            <button className="button lg:w-[40px] lg:h-[40px] lg:rounded-[50%] lg:text-[40px] items-center justify-center md:pointer-events-auto pointer-events-none flex text-[#FDD3C4] relative overflow-hidden z-50 cursor-pointer bg-[#F35578] lg:pb-[6px]" onClick={goToPreviousCards}>
                                &#8249;
                            </button>
                            {visibleCards.map((card) => (
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    content={card.content}
                                    imgUrl={card.imgUrl}
                                />
                            ))}
                            <button className="button lg:w-[40px] lg:h-[40px] bg-[#F35578] lg:rounded-[50%] lg:text-[40px] items-center justify-center flex text-[#FDD3C4] relative md:pointer-events-auto pointer-events-none overflow-hidden z-50 cursor-pointer lg:pb-[6px]" onClick={goToNextCards}>
                                &#8250;
                            </button>
                        </>
                    )}
                </div>
            );
        };

        const cardsData = [
            { id: 1, title: 'THIS IS SERVICE 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros.' },
            { id: 2, title: 'THIS IS SERVICE 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros.' },
            { id: 3, title: 'THIS IS SERVICE 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros.' },
            { id: 4, title: 'THIS IS SERVICE 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros.' },
            { id: 5, title: 'THIS IS SERVICE 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros.' },
            { id: 6, title: 'THIS IS SERVICE 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros.' },
            { id: 7, title: 'THIS IS SERVICE 7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros.' },
            { id: 8, title: 'THIS IS SERVICE 8', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros.' },
            { id: 9, title: 'THIS IS SERVICE 9', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros.' },
            { id: 10, title: 'THIS IS SERVICE 10', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros.' },
        ]
        return (
            <section className='background'>
                <div className="about min-h-[130vh] bg-[#F35578]">
                    <div className="judulatas flex justify-center items-center text-white">
                        <span className='garis bg-white lg:mr-[10px] lg:ml-[10px]'></span><h1>About.</h1><span className='garis bg-white lg:mr-[10px] lg:ml-[10px]'></span>
                    </div>
                    <div className="isi block justify-center md:flex text-white md:justify-around md:pt-[20%] md:w-[100%] lg:pt-[12%] absolute lg:w-[100%]">
                        <div className="bunga flex relative">
                            <img src={foto} alt="flower" className='fotobunga max-w-full max-h-full lg:h-auto md:w-auto lg:w-auto' />
                        </div>
                        <div className="word md:inline-block flex lg:pt-[15%] items-center relative md:pl-4 md:w-[50%] pl-[10%] lg:pl-[2%] lg:w-[80%]">
                            <div className="dot">
                                <img src={dot} alt="dot" className='fotodot' />
                            </div>
                            <h2 className='md:text-2xl text-3xl pb-3 pt-3'>LOREM IPSUM</h2>
                            <p className='paragraf pt-2 w-[85%] md:w-[80%] lg:w-[70%] text-justify'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam nec facilisis sem, quis ultrices erat. Mauris tincidunt, lacus aliquam porttitor suscipit, leo nunc lobortis augue, eget lacinia augue ante et odio. Aenean a tempus magna, ut venenatis nunc. Sed interdum cursus ligula, vitae ultrices purus ullamcorper vel.</p>
                        </div>
                    </div>
                    <div className="line lg:pl-[90%] pl-[85%] lg:pt-[12%]">
                        <img src={line} alt="line" className='fotogaris' />
                    </div>
                </div>
                <div className="service bg-[#FDD3C4] min-h-[80vh]">
                    <div className="judulbawah flex justify-center items-center pt-3 text-[#A4183F]">
                        <h1 className='text-2xl pb-10'>OUR SERVICES</h1>
                    </div>
                    <div className="container lg:w-[90%] justify-center md:justify-evenly z-0 flex">
                        <CardContainer cards={cardsData} />
                    </div>
                </div>
            </section>
        )
    }

    export default About;
