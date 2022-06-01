import React from 'react';
// import fondCart from "../images/fond-carte.jpg";

export default function Cart({ chosenCard }) {

    console.log("card unique", chosenCard);
    return (
        <div>
            {chosenCard && chosenCard.map((pok, i) => {
                return (
                    <div key={i} className="card border border-3 border-warning" style={{ width: "9rem", height: "13rem", backgroundColor: pok.background_color }}>
                        <div className='p-2'>
                            {/* upp part of cards  */}
                            <div className='d-flex justify-content-between'>
                                <p className='fw-semibold' style={{ fontSize: "47%" }} >{pok.name}</p>
                                <p className='fw-semibold' style={{ fontSize: "47%" }}><span style={{ fontSize: "47%" }} className="pe-1">Nv</span>{pok.level} <span style={{ fontSize: "x-small" }}>{pok.abilities[0].icon}</span> </p>
                            </div>
                            {/* image part */}
                            <div className='pt-1'>
                                <div className="fond-cards p-3">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`} alt="avatar" width={50} height={50} />
                                </div>
                            </div>
                            {/* description part */}
                            {pok.abilities.map((items, i) => {
                                return (
                                    <div key={i} className="pt-1">
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex '>
                                                <span style={{ fontSize: "x-small" }}>{items.icon}</span>
                                                <p className='fw-semibold ps-1' style={{ fontSize: "47%" }}>{items.name}</p>
                                            </div>
                                            <p className='fw-semibold' style={{ fontSize: "47%" }}>{items.power}</p>
                                        </div>
                                        <p className="card-text" style={{ fontSize: "27%" }}>{items.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }
            )}
        </div>
        // <section>
        //     <div className="card" style={{ width: "10rem", height: "12rem" }}>
        //         {/* <img src={fondCart} className="card-img-top p-2" alt="..." /> */}
        //         <div className="card-body">
        //             <h5 className="card-title">{ }</h5>
        //             <p className="card-text">{ }</p>
        //         </div>
        //     </div>
        // </section>
    )
}
