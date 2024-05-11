import "./Footer.css"
function Footer(){
    return(
    <div className="footer">
        <div className="footer2">
            <div className="left">
                <h1>Footer</h1>
                <div className= "logo">
                <img src="./images/facebook.png" alt="Electronics"></img>
                <img src="./images/twitter.png" alt="Electronics"></img>
                <img src="./images/youtube.png" alt="Electronics"></img>  
                </div>
                <div className="line">
                    <h5>Pick up</h5>
                    <h5>| Categories |</h5>
                    <h5>Settings</h5>
                    <h5>Tec.Problems</h5>
                    <h5>| Tel |</h5>
                    <h5>Address</h5>
                    <h5>Languaje</h5>
                    <h5>| Work with us |</h5>
                    <h5>Sell</h5>
                </div>
            </div>
            <div className="right">
                <div className="subscribe">
                    <h2>Subscribe</h2>
                    <input placeholder='Write your email...'></input>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;