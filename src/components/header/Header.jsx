import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

const Header = ({navPosition})=>{

    const [positionClass,setPositionClass] = useState();

    const getPositionClass = ()=>{
        if(navPosition==="start"){
            setPositionClass("justify-content-start");
        }
        if(navPosition==="center"){
            setPositionClass("justify-content-center");
        }
        if(navPosition==="end"){
            setPositionClass("justify-content-end");
        }
    }

    useEffect(getPositionClass,[]);

    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container">
                        <a class="navbar-brand" href="#">Brand</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class={`collapse navbar-collapse ${positionClass}`} id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
Header.prototype = {
    navPosition: PropTypes.oneOf([
        "start",
        "center",
        "end"
    ]).isRequired
}
export default Header;