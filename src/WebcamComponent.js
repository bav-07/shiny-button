import React from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
    
    // const videoConstraints = {
    //     width: 300,
    //     height: 575
    //   }

    return (  
        <>
            <Webcam
                height={375}
                width={500}
                audio={false}
                
            />
        </>
    );
}
 
export default WebcamComponent;