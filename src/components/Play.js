import React from "react";

function Play() {
    return (
        <div className="play-wrapper">
            <div className="your-pick">
                <div className="your-pick__title">You Picked</div>    
            </div>
            <div className="house-pick">
                <div className="house-pick__title">The House Picked</div>
            </div>
        </div>
    )
}

export default Play;