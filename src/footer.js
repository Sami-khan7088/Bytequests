import image2 from "./logo.jpg"
function Footer() {
    return(
        <>
            <div className="footer">
                <div className="Let">
                    <div className="Let1">
                        <h1>Let's Discuss</h1>
                        <p>We have built a panel of dedicated and hardworking 
                        experts<br/> who provide services anytime you need.</p>
                    </div>
                    <div className="in_div">
                    <div>
                        <input type="text" className="inpt"></input>
                        <button>Sign Up</button>
                    </div>
                    </div>
                </div>
                <div className="main_footer">
                    <div className="footer_image">
                        <img src={image2} className="footi" alt="logo"/>
                        <p> We have built a panel of dedicated and hardworking <br/>experts who provide services anytime you need.</p>
                    </div>
                    <div className="link">
                        <h3>Link</h3>
                        <ul>
                            <li>Our Client</li>
                            <li>Privacy Policy</li>
                            <li>Our Benefits</li>
                        </ul>
                    </div>
                    <div className="link">
                        <h3>Information</h3>
                        <ul>
                            <li>Our Client</li>
                            <li>Privacy Policy</li>
                            <li>Our Benefits</li>
                        </ul>
                    </div>
                    <div className="link">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>+91 9711999770</li>
                            <li>Info@bytequests.com</li>
                            <li>84,Block A,Sector 4,Noida,UP</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="bottum_foot">
                <h3>Copyright@bytequests Softwere Private Limited. All RightS Reserved. </h3>
            </div>
        </>
    )
    
}
export default Footer;