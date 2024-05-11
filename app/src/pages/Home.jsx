import "./Home.css";

function Home(){
    return(
        <div className="home">
            <h1>Welcome to our store</h1>
            <div className="content">
                <h2>Buy everything you want</h2>
                <div className="sections">
                    <div className="food">
                        <h3>Fruits & Vegetables</h3>
                        <img src="./images/FandV.jpg" alt="Fruits & Vegetables"></img>
                    </div>
                    <div>
                        <h3>Electronics</h3>
                        <img src="./images/Electronics.jpg" alt="Electronics"></img>
                    </div>
                    <div>
                        <h3>House decoration</h3>
                        <img src="./images/HouseDec.png" alt="HouseDec"></img>
                    </div>
                </div>
            </div>
            <div className="blocks">
                <div className="L">
                    <h3>Lorem, ipsum dolor.</h3>
                    <text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consequatur itaque labore reprehenderit, fuga excepturi modi dolores molestiae. Voluptas atque facere, inventore rem dolorem dignissimos rerum explicabo eveniet fugit sed? Eaque ut provident odit dignissimos perferendis, ipsa eius laudantium animi?</text>
                </div>
                <div className="R">
                    <img src="./images/inside.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Home;