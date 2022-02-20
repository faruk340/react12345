import React from "react";
import "./css/footer.css";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="row">
                    <div className="col">
                        <h3>Associate With<div className="underline underline1"><span></span></div></h3>
                        <p>Bharti AXA Life Insurance Company Ltd.</p>
                        <p>Kotak Mahindra Life Insurance Co. Ltd.</p>
                        <p>Max Life Insurance Co. Ltd.</p>
                    </div>
                    <div className="col col2">
                        <h3>Our Services<div className="underline underline2"><span></span></div></h3>
                        <ul>
                            <li>Two Wheeler Insurance</li>
                            <li>Car Insurance</li>
                            <li>Taxi Insurance</li>
                            <li>Goods Carrying Vehicle</li>
                            <li>Bus & School Bus Insurance</li>
                            <li>Tractor & Misc Vehicles Insurance</li>
                        </ul>
                    </div>
                    <div className="col col3">
                        <ul>
                            <li>Health Insurance</li>
                            <li>Personal Accidental Insurance</li>
                            <li>Home Insurance Claim</li>
                            <li>Travel Insurance Claim</li>
                            <li>Fire & burglary Insurance</li>
                            <li>Marine Insurance</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>INSTANT. SIMPLE. SMART<div className="underline underline4"><span></span></div></h3>
                        <p>We have wide range of General Insurance Product. Our commitment to building engaged relationships through claim settlement that your help live confidently.</p>
                    </div>
                </div>
                <hr />
                <p className="copyright">This website developed by Faruk Uddin &copy; 2022 - All Rights Reserved</p>
            </footer>
        </>
    );
};

export default Footer;