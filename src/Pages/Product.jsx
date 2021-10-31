import React from 'react';
import "./product.css"
import { Link } from "react-router-dom";
import Chart from "../components/Chart/Chart"
import { productData } from "../dummydata.js";

const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link className="link" to="/newproduct" >
                    <button className="productAddBtn">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Perfomence" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            className="productImg"
                            src="https://images.pexels.com/photos/5099868/pexels-photo-5099868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">

                    </div>
                    <div className="productFormRight">

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Product;
