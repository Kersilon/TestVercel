import React, {useState, useEffect} from 'react'
import styles from "./popup.module.css"

const Popup = ({children}) => {
    const [popupIsVisible, setpopupIsVisible] = useState({
        visibility: "hidden"
      })

    return (
        <div>
            <button onClick={() => {setpopupIsVisible({visibility:"visible"});}} className="button">Generate QR code</button>

            <div style={{visibility:`${popupIsVisible.visibility}`}} className={"popupContainer" + " " + styles.qrPopupContainer}>
                {children}
            <h2 onClick={() => {setpopupIsVisible({visibility:"hidden"});}} class={"popupClose"}>X</h2>
        </div>
        </div>
        
    )
}

export default Popup