import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img src="https://as1.ftcdn.net/v2/jpg/02/73/09/22/1000_F_273092278_CkXsU2u4NE7T5hJRydWMTk6BcXeDoCtr.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="White watch Sling Office Bag, Water Repellent Fabric for Men and Women (white)"
                        price={11.96}
                        rating={5}
                        image="https://bit.ly/3cvT7FY"
                    />
                    <Product
                        id="49538094"
                        title="Headphone super awesome sound (30BRC2, Black, With Starter Kit)"
                        price={239.0}
                        rating={4}
                        image="https://bit.ly/3wHRR9y"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={29.99}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Super saiyan Goku, yes he is always my super hero!"
                        price={598.99}
                        rating={5}
                        image="https://bit.ly/3TnDwZP"
                    />
                    <Product
                        id="3254354345"
                        title="Modelo such a refleshing taste (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={98.99}
                        rating={4}
                        image="https://bit.ly/3Qb0D7a"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Super high tech key board, you do not even need to type! Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://bit.ly/3e6Gul9"
                    />
                </div>
            </div>   
        </div> 
    )
}

export default Home