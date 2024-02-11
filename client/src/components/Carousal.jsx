import React from 'react';

const Carousal = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/900x300/?burger" className="d-block w-100" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x300/?pizza" className="d-block w-100" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x300/?momos" className="d-block w-100" alt="Momos" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className='carousel-caption' style={{ zIndex: "10", position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
                <form className="d-flex justify-content-center">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "70%" }} />
                    <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Carousal;
