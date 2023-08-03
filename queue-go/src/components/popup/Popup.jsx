import React, {useState, useEffect} from 'react'
import styles from "./popup.module.css"

const [isClosed, setIsClosed] = useState(false)

function closePopup() {
  setIsClosed(false);
}

function openPopup() {
  setIsClosed(true);
}
const Popup = (children) => {

    var popup =
        <div className={"popupContainer" + " " + styles.qrPopupContainer}>
            {children}
        <h2 onClick={closePopup} class={"popupClose"}>X</h2>
        </div>;

    return (
        <div>
            <button onClick={openPopup} className="button">Generate QR code</button>
            {isClosed && popup}
        </div>
        
    )
}

export default Popup