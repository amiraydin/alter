import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import "./home.css";
import LOGO from "../images/logo.png";
// import LogoInoki from "../images/logo_enoki.svg";
import axios from "axios";

export default function Home() {
    const [pokimons, setPokimons] = useState([]);
    const [chosenCard, setChosenCard] = useState([]);
    const [random, setRandom] = useState(1);
    const [start, setStart] = useState(false);
    const [timer, setTimer] = useState(15);
    const unique = [...new Set(chosenCard)];

    useEffect(() => {
        axios.get("https://pokeapi-enoki.netlify.app/").then((res) => {
            // console.log(res.data);
            let pokemonData = res.data.pokemons;
            setPokimons(pokemonData);
        })
    }, [])

    useEffect(() => {
        if (start) {
            setTimeout(() => setRandom(randomNumber), 1000);
            const time = setInterval(() => {
                TimePass();
            }, 1000);
            if (timer === 0) {
                setStart(false);
                setTimeout(() => {
                    window.confirm("le temps est fini ! \non va redemarer le jeu à nouveau !");
                    setTimer(15);
                    setChosenCard([]);
                }, 1000)
                clearTimeout();
            }
            if (unique.length === 6) {
                setStart(false);
                setTimeout(() => {
                    window.confirm("Bravo ! vous avez choisi tout vous equipe \nredemarez le jeu SVP ! !");
                    // setChosenCard([]);
                    // unique = [];
                    // window.location.reload();
                }, 500);
                clearTimeout();
            }
            return () => {
                clearTimeout();
                clearInterval(time);
            }
        }
        if (!start) {
            clearTimeout();
            clearInterval()
        }

    }, [timer, start, unique.length])
    function TimePass() { return setTimer(a => a - 1) };
    // (s - (s %= 60)) / 60 + (9 < s && s)





    function randomNumber() {
        return Math.floor(Math.random() * 11) + 1;
    }

    const pok = pokimons.find((item) => {
        return item.id === random
    })

    // const existed = chosenCard.find((item) => {
    //     return item === item;
    // })
    // console.log("existed", existed);
    // console.log("unique", unique);

    // console.log("chosencard", chosenCard);
    // console.log("pokisss", pokimons);

    return (
        <div className='home-page'>
            {/* <div>
                <img src="./logo512.png" alt="logo-enoki" />
            </div> */}
            {/* {unique.length <= 1 && unique.map((card, i) => {
                    return (
                        <Cart pok={card} key={i} />
                    )
                })} */}
            <section className='premier-sec'>
                <div className='back-cards'>
                    <h2 className="cards-number" >1</h2>
                    {unique && <Cart pok={unique[0]} />}
                </div>
                <div className='back-cards'>
                    <h2 className="cards-number" >2</h2>
                    {unique && <Cart pok={unique[1]} />}
                </div>
                <div className='back-cards'>
                    <h2 className="cards-number" >3</h2>
                    {unique && <Cart pok={unique[2]} />}
                </div>
            </section>

            <section className='deux-sec'>
                {/* logo */}
                <img src={LOGO} alt="logo" width={300} height={100} />
                {/* carte */}
                {pok &&
                    <div onClick={() => { setChosenCard(oldarr => [...oldarr, pok]) }} className="card home-card border border-3 border-warning" style={{ width: "15rem", height: "23rem", backgroundColor: pok.background_color }}>
                        <div className='p-3'>
                            {/* upp part of cards  */}
                            <div className='d-flex justify-content-between'>
                                <p className='fw-semibold'>{pok.name}</p>
                                <p className='fw-semibold'><span style={{ fontSize: "x-small" }} className="pe-1">Nv</span>{pok.level} <span style={{ fontSize: "small" }}>{pok.abilities[0].icon}</span> </p>
                            </div>
                            {/* image part */}
                            <div className='pt-2'>
                                <div className="fond-cards p-3">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`} alt="avatar" width={100} height={100} />
                                </div>
                            </div>
                            {/* description part */}
                            {pok.abilities.map((items, i) => {
                                return (
                                    <div key={i} className="pt-2">
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex '>
                                                <span style={{ fontSize: "small" }}>{items.icon}</span>
                                                <p className='fw-semibold ps-2'>{items.name}</p>
                                            </div>
                                            <p className='fw-semibold'>{items.power}</p>
                                        </div>
                                        <p className="card-text" style={{ fontSize: "xx-small" }}>{items.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>}
                {/* buttons  */}
                <div className='buttons'>
                    <button onClick={() => { setRandom(randomNumber); setStart(true) }} className='btn btn-warning'>Lancer</button>
                    <button disabled={!start} onClick={() => { setStart(false) }} className='btn btn-danger'>Stop ({timer}) </button>
                    <button type='reset' onClick={() => { setChosenCard([]); setTimer(15) }} className='btn btn-secondary'>Redemarez </button>
                </div>
            </section>

            <section className='premier-sec'>
                <div className='back-cards'>
                    <h2 className="cards-number" >4</h2>
                    {unique && <Cart pok={unique[3]} />}
                </div>
                <div className='back-cards'>
                    <h2 className="cards-number" >5</h2>
                    {unique && <Cart pok={unique[4]} />}
                </div>
                <div className='back-cards'>
                    <h2 className="cards-number" >6</h2>
                    {unique && <Cart pok={unique[5]} />}
                </div>
            </section>

        </div>
    )
}
