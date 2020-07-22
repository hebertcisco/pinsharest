import React, { useState } from "react";

import { PinShareParams } from "../../api/pinterest/";
import openNewWindow from '../../utils/openNewWindow.ts';

function Form() {
    const [valueURL, setValueURL] = useState("");
    const [valueImage, setValueImage] = useState("");
    const [valueDescription, setValueDescription] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault(); // prevents refresh of the browser
        let url = PinShareParams(
            valueURL,
            valueImage,
            valueDescription
        );
        openNewWindow(url)
    };

    return (
        <>
            <form className="share-it" onSubmit={onFormSubmit}>
                <br></br>
                <label>Link</label>
                <br/>
                <input
                    value={valueURL}
                    type="text"
                    placeholder="Input the link"
                    onChange={(e) => setValueURL(e.target.value)}
                />
                <br></br>
                <label>Image</label>
                <br/>
                <input
                    value={valueImage}
                    type="text"
                    placeholder="Input the image URL"
                    onChange={(e) => setValueImage(e.target.value)}
                />
                <br></br>
                <label>Description</label>
                <br/>
                <input
                    id="input-desc"
                    value={valueDescription}
                    type="text"
                    placeholder="Input the description"
                    onChange={(e) => setValueDescription(e.target.value)}
                />
                <br></br>
                <button className="share-it-btn">Share it</button>
            </form>
        </>
    );
}

export default Form;
