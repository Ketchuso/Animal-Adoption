import React from "react";

function Footer() {

    
    return(
        <footer className="footer">
            <h3 id="footerLogo">
                🐾 Cuddly Cats & Adorable Dogs Adoption 🐾
                <span className="logo" role="img">
                      🐈  🐕
                </span>
            </h3>
            <div className="contact">
                <strong>Contact info:</strong>
                <p>(555) Pet-4You</p>
                <p>CCADA@toocuteforyou.com</p>
            </div>
            <div className="address">
                <strong>Locations:</strong>
                <p>123 Cuddly Lane, Los Angeles, CA 90003</p>
                <p>321 Adorable Street, Los Angeles, CA 90163</p>
            </div>
        </footer>
    )
}

export default Footer