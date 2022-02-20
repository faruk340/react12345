import React from "react";
import Typewriter from 'typewriter-effect';
import car_img from "./images/hero_car_1.png";
import bike_img from "./images/hero_bike_1.png";
import packages from "./images/package.png";
import stand_od from "./images/stand_od.png";
import tp_package from "./images/tp_package.png";
import rupees from "./images/rupees.png";
import salesman from "./images/salesman.png";
import Zero_Hassle from "./images/Zero_Hassle.jpg";
import home_img from "./images/home_img_1.jpg";
import car_claim from "./images/car_claim_4.png";
import idv from "./images/idv.png";
import addon from "./images/addon.png";
import insurance_type from "./images/insurance_type.png";
import car_cc from "./images/car_cc.png";
import age from "./images/age.png";
import claim from "./images/claim.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";



const Home = () => {
    const thirdBoxOpacity = () => {
        alert("its work");
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className="header_text">
                        <h2>Save upto 80% on</h2>
                        <h1>
                            <span>Your Car & Bike Comprehensive</span>
                            <span style={{ color: "#d52342" }}>
                                <Typewriter
                                    options={{
                                        strings: ["Insurance Policy"],
                                        delay: 100,
                                        autoStart: true,
                                        pauseFor: 2000,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h1>
                        <div className="bottom_svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7fffd4" fill-opacity="1" d="M0,0L40,32C80,64,160,128,240,176C320,224,400,256,480,245.3C560,235,640,181,720,170.7C800,160,880,192,960,218.7C1040,245,1120,267,1200,256C1280,245,1360,203,1400,181.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                        </div>
                        <div className="header_content">
                            <div className="header_swaper">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        reverseDirection: true,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img src={car_img} alt="car_img" /></SwiperSlide>
                                    <SwiperSlide><img src={bike_img} alt="bike_img" /></SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="header_form">
                                <form>
                                    <h2>Your vehicle is safe with us</h2>
                                    <div className="checkbox">
                                        <div className="check">
                                            <input type="radio" name="vehicle" id="bike" value="bike" /><br />
                                            <label for="bike">bike</label>
                                        </div>
                                        <div className="check">
                                            <input type="radio" name="vehicle" id="car" value="car" /><br />
                                            <label for="car">Car</label>
                                        </div>
                                        <div className="check">
                                            <input type="radio" name="vehicle" id="bus" value="bus" /><br />
                                            <label for="bus">Bus</label>
                                        </div>
                                        <div className="check">
                                            <input type="radio" name="vehicle" id="school-bus" value="school-bus" /><br />
                                            <label for="school-bus">School Bus</label>
                                        </div>
                                        <div className="check">
                                            <input type="radio" name="vehicle" id="taxi" value="taxi" /><br />
                                            <label for="taxi">Taxi</label>
                                        </div>
                                        <div className="check">
                                            <input type="radio" name="vehicle" id="commercial" value="commercila" /><br />
                                            <label for="commercial">Commercial</label>
                                        </div>
                                    </div>
                                    <div className="inputBox">
                                        <input type="text" name="" required />
                                        <span>Enter your vehicle number</span>
                                    </div>
                                    <div className="inputBox">
                                        <input type="text" name="" required />
                                        <span>Enter your name</span>
                                    </div>
                                    <div className="inputBox">
                                        <input type="text" name="" required />
                                        <span>email@example.com</span>
                                    </div>
                                    <div className="inputBox">
                                        <input type="text" name="" required />
                                        <span>Please enter your mobile number</span>
                                    </div>
                                    <div className="inputBox">
                                        <input type="submit" name="" value="send" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="secound_section">
                <div className="container">
                    <div className="secound_section_box">
                        <div className="secound_section_content_flex">
                            <div className="secound_section_heading">
                                <h2>Package Policy</h2>
                                <img src={packages} alt="" />
                            </div>
                            <div>
                                <p>A comprehensive car insurance policy offers complete protection to you. It covers not only the costs incurred on damages to a third party but also the damages to your car. This policy type also covers car theft and damages caused by fire, burglary and natural disasters.</p>
                            </div>
                        </div>
                        <div className="secound_section_content_flex">
                            <div className="secound_section_heading">
                                <h2>Stand-Alone<br />
                                    Own-Damage</h2>
                                <img src={stand_od} alt="" />
                            </div>
                            <div>
                                <p>This type policy covers for any accidental damages to your car. These could be due to natural disasters like earthquake, flood, cyclone, and landslide, or due to manmade disasters like theft, burglary, riot or strike. To buy this insurance, you should have an active third party insurance policy of the vehicle.</p>
                            </div>
                        </div>
                        <div className="secound_section_content_flex">
                            <div className="secound_section_heading">
                                <h2>Third party car<br />insurance</h2>
                                <img src={tp_package} alt="" />
                            </div>
                            <div>
                                <p>In this type of insurance policy, you are covered against legal liabilities arising out of an accident. If your car causes injuries to a third party or damages surrounding property, then we will take care of the expenses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="third_section">
                <div className="container">
                    <div className="third_section_wrap">
                        <div className="third_section_box">
                            <div className="third_section_box1">
                                <div className="third_section_img">
                                    <img src={rupees} alt="rupees" />
                                </div>
                                <div className="third_section_content">
                                    <h2>Incredibly Low Prices</h2>
                                    <p>Get the best price, every single time. for your Car and Bike</p>
                                </div>
                            </div>
                            <div className="third_section_box1 third_section_box_one">
                                <div className="third_section_img">
                                    <img src={salesman} alt="salesman" />
                                </div>
                                <div className="third_section_content">
                                    <h2>Terribly Convenient</h2>
                                    <p>Get your Car & Bike Insurance serviced at a time and place of your choice</p>
                                </div>
                            </div>
                            <div className="third_section_box1">
                                <div className="third_section_img">
                                    <img src={Zero_Hassle} alt="Zero_Hassle" />
                                </div>
                                <div className="third_section_content">
                                    <h2>Zero-Hassle Claims</h2>
                                    <p>You can make a Car & Bike Insurance claim without facing any issue.</p>
                                </div>
                            </div>
                        </div>
                        <div className="third_section_box third_section_box_two">
                            <div className="third_section_box_two_img">
                                <img src={home_img} alt="home_img" />
                            </div>
                            <div className="third_section_box_two_content">
                                <h2><span style={{ color: "#d52342" }}>Special support & caring</span><br />
                                    Claim Service</h2>
                                <p>Once you have informed us about the claim, we will guide you through the claim process and assist you in finding a suitable workshop to repair your vehicle on priority and to the highest quality standards, so you can get back on the road as soon as possible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fourth_section">
                <div className="container">
                    <div className="fourth_section_box">
                        <div className="fourth_section_box_two fourth_section_box1">
                            <div className="box">
                                <img src={rupees} alt="rupees" />
                                <h2>Accidents</h2>
                                <p>Policy covers any damages to your car and third party liability due to accidents.</p>
                            </div>
                            <div className="box">
                                <img src={salesman} alt="salesman" />
                                <h2>Fire</h2>
                                <p>Comprehensive Car Insurance cover fire damage .</p>
                            </div>
                            <div className="box">
                                <img src={Zero_Hassle} alt="Zero_Hassle" />
                                <h2>Theft</h2>
                                <p>In case your car is stolen, Insurance Company pay for your loss.</p>
                            </div>
                            <div className="box">
                                <img src={rupees} alt="rupees" />
                                <h2>Calamities</h2>
                                <p>protect against any loss or damages due to natural and man-made calamities.</p>
                            </div>
                        </div>
                        <div className="fourth_section_box_one fourth_section_box2">
                            <h2>What's Covered Under Insurance?</h2>
                            <h2 className="h2_content">Comprehensive Insurance Covers damages to the third party, as well as your own car.</h2>
                            <p>Third Party Insurance Covers only the damages<br /> to a third party and their property.</p>
                            <button className="btn"><a href="http://insurancedukaan.in/dukaan2/?7044292222">GET A QUOTE</a></button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fifth_section">
                <div className="container">
                    <div className="insurance">
                        <div className="insurance_box insurance_box_one">
                            <img src={car_claim} alt="car_claim" />
                            <h1><span style={{ color: "#d52342" }}>6 Factors Affect</span><br />
                                Insurance Cost</h1>
                            <p>There are a number of factors that determine the premium amount to be paid by customers. There are few factors:</p>
                        </div>
                        <div className="insurance_box">
                            <div className="insurance_box_content box1">
                                <div className="img_box">
                                    <img src={idv} alt="idv" />
                                    <h2>Value of your Vehicle</h2>
                                </div>
                                <div>
                                    <p>IDV or Insured Declared value which refers to the maximum amount that can be claimed by a customer for the Vehicle.</p>
                                </div>
                            </div>
                            <div className="insurance_box_content box2">
                                <div className="img_box">
                                    <img src={insurance_type} alt="insurance_type" />
                                    <h2>Type of Vehicle Insurance</h2>
                                </div>
                                <div>
                                    <p>For comprehensive policy you need to pay own damage as well as Third party. The Third-Party premium is decided by the Government of India and it is a mandatory cover.</p>
                                </div>
                            </div>
                            <div className="insurance_box_content box3">
                                <div className="img_box">
                                    <img src={addon} alt="addon" />
                                    <h2>Riders/Add-Ons Coverage</h2>
                                </div>
                                <div>
                                    <p>These may be extra covers when you seek to widen the limits of cover under the car insurance policy. Depending upon the types of add-on covers, the premium will increase. Some of the add-ons you can choose from including Engine and Gearbox Protection, Zero Depreciation, Consumable Cover, PA cover for passengers, and others.</p>
                                </div>
                            </div>
                        </div>
                        <div className="insurance_box">
                            <div className="insurance_box_content box4">
                                <div className="img_box">
                                    <img src={car_cc} alt="car_cc" />
                                    <h2>Cubic capacity of the Vehicle</h2>
                                </div>
                                <div>
                                    <p>Higher the cubic or engine capacity of the car, higher will be the premium payment to be made. As higher CC vehicle have more risk.</p>
                                </div>
                            </div>
                            <div className="insurance_box_content box5">
                                <div className="img_box">
                                    <img src={age} alt="age" />
                                    <h2>Age of the Vehicle</h2>
                                </div>
                                <div>
                                    <p>Older the Vehicle, higher is the premium that has to be paid. Because cars are depreciating assets whose value decreases with time.</p>
                                </div>
                            </div>
                            <div className="insurance_box_content box6">
                                <div className="img_box">
                                    <img src={claim} alt="claim" />
                                    <h2>Your Claim History</h2>
                                </div>
                                <div>
                                    <p>Claiming after an accident will give a dent in your insurance profile and turn your premium amount increases. If you're filling claims frequently, your profile will be flagged as 'risky profile' and the premium amount will increase rapidly. On the other hand, if you do not raise the claim, you enjoy highest discounts and Bonus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;