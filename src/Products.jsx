import React from "react";
import "./css/products.css"

const Products = () => {
    return (
        <>
            <section className="product_section">
                <div className="product_section_header">
                    <h3>We serve</h3>
                    <h2>Quality Products</h2>
                </div>
                <div className="container">
                    <div className="product_section_box">
                        <div className="box box1">
                            <i class="fa fa-car-crash"></i>
                            <h3>Car Insurance</h3>
                        </div>
                        <div className="box box2">
                            <i class="fa fa-motorcycle"></i>
                            <h3>Bike Insurance</h3>
                        </div>
                        <div className="box box3">
                            <i class="fa fa-truck"></i>
                            <h3>Commercial Vehicle</h3>
                        </div>
                        <div className="box box4">
                            <i class="fa fa-hospital-user"></i>
                            <h3>Health Insurance</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;