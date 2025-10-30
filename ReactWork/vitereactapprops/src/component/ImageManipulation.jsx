import React from "react";
import cat from "../assets/cat.jpeg";

function ImageManipulation() {
    const [catHeight, setCatHeight] = React.useState(200);
    const [catWidth, setCatWidth] = React.useState(200);
    return (
        <div>
            <h2>Image Manipulation Component</h2>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid red', height: 'auto', width: catWidth, margin: '10px'}}>
                <img src={cat} alt="Cat" style={{ height: catHeight, width: catWidth }} />
            </div>
            <div>
                <button onClick={() => setCatHeight(catHeight + 20)}>Increase Height</button>
                <button onClick={() => setCatHeight(catHeight - 20)}>Decrease Height</button>
                <button onClick={() => setCatWidth(catWidth + 20)}>Increase Width</button>
                <button onClick={() => setCatWidth(catWidth - 20)}>Decrease Width</button>
            </div>
        </div>
    );
}

export default ImageManipulation;
