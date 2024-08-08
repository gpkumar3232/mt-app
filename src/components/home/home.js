import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, updateList } from "../../redux/slices/countrySlice";

import GoogleIcon from "../../assets/google.png";
import TwitterIcon from "../../assets/fb.png";
import LinkedInIcon from "../../assets/linkedin.png";
import FbIcon from "../../assets/twitter.png";
import { AiOutlineMenu } from "react-icons/ai";
import HomeStyle from "./home.module.css";
import CommonSlider from "../slider/commonSlider";

const Home = () => {
    // Variable to handle dispatch
    const dispatch = useDispatch();

    // Variable to handle countries data
    const countries = useSelector((state) => state.countries);
    // Variable to handle filter state
    const [isOpen, setIsOpen] = useState(false);
    // Variable to filter value
    const [selected, setSelected] = useState("All");
    // Variable to load the record
    const [loadRec, setLoadRec] = useState(10);
    // useEffect hook to fetch get Country details
    useEffect(() => {
        dispatch(getCountries());
    }, []);
    // Function which is used to maintain menu bar
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // Function which is used to filter changes
    const onFilterChange = (val) => {
        setLoadRec(10);
        setSelected(val);
        dispatch(updateList(val));
        setIsOpen(false);
    };

    return (
        <div className="container vh-100 d-flex flex-column">
            <nav className={`navbar navbar-expand-md bg-white navbar-dark fixed-top ${isOpen ? "show" : ""}`}>
                {/* Navbar */}
                <div class="container">
                    <a href="#" class="navbar-brand text-dark fw-semibold">
                        Countries
                    </a>
                    <button type="button" onClick={toggleMenu} class="navbar-toggler">
                        <AiOutlineMenu color="black" />
                    </button>

                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-3">
                                <a
                                    href="#"
                                    className={`nav-link text-dark`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        onFilterChange("All");
                                    }}
                                >
                                    All
                                </a>
                                {selected === "All" && (
                                    <div
                                        style={{ height: 2, backgroundColor: "grey", width: 40 }}
                                    ></div>
                                )}
                            </li>
                            <li className="nav-item px-3">
                                <a
                                    href="#about"
                                    className={`nav-link text-dark`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        onFilterChange("Asia");
                                    }}
                                >
                                    Asia
                                </a>
                                {selected === "Asia" && (
                                    <div
                                        style={{ height: 2, backgroundColor: "grey", width: 50 }}
                                    ></div>
                                )}
                            </li>
                            <li className="nav-item px-3">
                                <a
                                    href="#"
                                    className={`nav-link text-dark`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        onFilterChange("Europe");
                                    }}
                                >
                                    Europe
                                </a>
                                {selected === "Europe" && (
                                    <div
                                        style={{ height: 2, backgroundColor: "grey", width: 70 }}
                                    ></div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



            {/* List section */}
            {countries?.loading ?
                <div className="d-flex align-items-center justify-content-center" style={{ height: "100%" }}>
                    <div class="spinner-border text-dark" role="status" style={{ height: 50, width: 50 }}>
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                : <div className="d-flex flex-wrap pt-30 g-0" style={{ marginTop: 100, gap: 10 }}>
                    <div className="container d-flex  justify-content-center" style={{ width: '100%' }}>
                        <div className={`${HomeStyle.dividerLeft}`}></div>
                        <div className={`${HomeStyle.title}`}>
                            <h1 className="mt-1 fw-bold ">WELCOME</h1>
                        </div>
                        <div className={`${HomeStyle.dividerRight}`}></div>
                    </div>
                    <div className={`${HomeStyle.sliderContainer}`}>
                        <div className={`${HomeStyle.slider}`}>
                            <CommonSlider />
                        </div>
                        <div style={{ width: '20%' }}>
                            <img state src={require('../../assets/preview.jpeg')} alt="preview" height={500} style={{ borderRadius: 5 }} />
                        </div>
                    </div>

                    {countries?.list?.map((item, index) => (
                        index < loadRec &&
                        <div key={index} className={`col d-flex flex-row border border-1 border-black p-2 shadow ${HomeStyle.itemwidth}`}>
                            <img
                                src={item.flag}
                                className="card-img-left border border-1 rounded-start"
                                alt="..."
                                style={{ height: 90, width: 140, objectFit: "cover" }}
                            />
                            <div className="d-flex flex-column justify-content-start mt-2 mx-3">
                                <p className="fw-semibold">{item.name}</p>
                                <p className="text-dark" style={{ marginTop: -15 }}>
                                    {item.region}
                                </p>
                            </div>
                        </div>
                    ))}
                    {(countries?.list?.length > loadRec) &&
                        <div className="container d-flex  justify-content-center">
                            <button
                                className="bg-dark text-white py-2 mt-3"
                                type="submit"
                                onClick={() => { setLoadRec(loadRec + 10) }}
                            >Load More</button>
                        </div>
                    }
                </div>
            }

            {/* Footer */}
            <footer className="mt-5">
                <div className="d-flex flex-row justify-content-center px-5 mb-3 gap-3 mt-5">
                    <img src={GoogleIcon} alt="google" style={{ height: 40, width: 40 }} />
                    <img src={FbIcon} alt="fb" style={{ height: 40, width: 40 }} />
                    <img src={LinkedInIcon} alt="linkedIn" style={{ height: 40, width: 40 }} />
                    <img src={TwitterIcon} alt="twitter" style={{ height: 40, width: 40 }} />
                </div>

                <div className="d-flex flex-column align-items-center px-5 mb-3 gap-3 mt-5 mb-5">
                    <h6>Example@gmail.com</h6>
                    <h6 className="text-center">
                        Copyirght © 2020 Name. All rights reserved.
                    </h6>
                </div>
            </footer>
        </div>
    );

};

export default Home;
