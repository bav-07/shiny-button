import { useState } from "react";

const Webcam = () => {

    let [stream, setStream] = useState("");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia( { video: true })
            .then(function (stream) {
                setStream(stream);
                // console.log("stream set")
                // console.log(stream);
            })
            .catch(function (error) {
                console.log("User access to webcam denied.")
            })
    } else {
        console.log("getUserMedia not supported. Your browser may not be up-to-date.")
    }

    return (
        <>
        <h1>shiny button</h1>  
        <div id="container">
            <video src={stream} autoPlay={true} id="videoElement"></video>
        </div>
        </>
    );
}
 
export default Webcam;