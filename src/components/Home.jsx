import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import "./home.css";
// import fondCart from "../images/fond-carte.jpg";
import LOGO from "../images/logo.png";
import axios from "axios";

export default function Home() {
    const [pokimons, setPokimons] = useState([]);
    // const [pokData, setPokData] = useState({
    //     name: "",
    //     mark: "",
    //     power: "",
    //     imag: "",
    //     titreA: "",
    //     numbreA: "",
    //     descriptionA: "",
    //     titreB: "",
    //     numberB: "",
    //     descriptionB: "",
    // })
    const [chosenCard, setChosenCard] = useState([]);
    const [random, setRandom] = useState(1);
    var unique = [...new Set(chosenCard)];

    // console.log("random number ::::", random);

    useEffect(() => {
        axios.get("https://pokeapi-enoki.netlify.app/").then((res) => {
            // console.log(res.data);
            let pokemonData = res.data.pokemons;
            setPokimons(pokemonData);
        })
    }, [])

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


    // console.log("find", pok);
    console.log("chosencard", chosenCard);
    // console.log("pokisss", pokimons);


    return (
        <div className='home-page'>
            <section className='premier-sec'>
                {[...Array(3)].map((card, i) => {
                    return (
                        <div key={i} >
                            {/* <input type="radio" /> */}
                            <Cart chosenCard={unique} className="cards" />
                        </div>
                    )
                })}
            </section>

            <section className='deux-sec'>
                <img src={LOGO} alt="logo" width={300} height={100} />
                {/* {pokimons && pokimons.slice(0, random).map((pok, j) => {
                    return (
                        <div key={j} className="card" style={{ width: "17rem", height: "19rem" }}>
                            <div className='d-flex justify-content-between ps-2 pe-2'><h4>{pok.name}</h4> <h4>{pok.level} </h4></div>
                            <div className='p-3'>
                                <div className="fond-cards">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`} alt="avatar" width={200} height={150} />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Title {j}</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    )
                })} */}
                {pok &&
                    <div onClick={() => { setChosenCard(oldarr => [...oldarr, pok]) }} className="card border border-3 border-warning" style={{ width: "15rem", height: "23rem", backgroundColor: pok.background_color }}>
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

                <div className='buttons'>
                    <button onClick={() => setRandom(randomNumber)} className='btn btn-warning'>Lancer</button>
                    <button className='btn btn-danger'>Stop</button>
                </div>
            </section>

            <section className='premier-sec'>
                {[...Array(3)].map((card, i) => {
                    return (
                        <div key={i} >
                            {/* <input type="radio" /> */}
                            <Cart chosenCard={unique} className="cards" />
                        </div>
                    )
                })}
            </section>

        </div>
    )
}
