import React from 'react';
// import fondCart from "../images/fond-carte.jpg";

export default function Cart({ chosenCard }) {
    return (
        <div>
            {chosenCard &&
                <section>
                    <div className="card" style={{ width: "10rem", height: "12rem" }}>
                        {/* <img src={fondCart} className="card-img-top p-2" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">{ }</h5>
                            <p className="card-text">{ }</p>
                        </div>
                    </div>
                </section>
            }


            {/* <div>
                        <div>
                            <h5>titre</h5><h5>numbre</h5>
                        </div>
                        <img src="" alt="poky 1" />
                        <div><h5>deux title</h5><h5>numb</h5></div>
                        <p>description</p>
                        <div><h5>trois title</h5><h5>numbre</h5></div>
                        <p>description</p>
                    </div> */}
        </div>
    )
}
