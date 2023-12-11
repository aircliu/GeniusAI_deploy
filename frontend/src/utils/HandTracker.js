// @ts-nocheck

import React, { useEffect, useRef, useState } from 'react';
import * as handTrack from 'handtrackjs';

const Handtracker = ({ onPrediction }) => {
  const videoRef = useRef(null);
  const [model, setModel] = useState(null);
  const SAMPLERATE = 500; // Detection interval in milliseconds
  const [detectedGesture, setDetectedGesture] = useState('None');

  const modelParams = {
    flipHorizontal: true,
    maxNumBoxes: 20,
    iouThreshold: 0.5,
    scoreThreshold: 0.6,
  };

  useEffect(() => {
    handTrack.load(modelParams).then(lmodel => {
      setModel(lmodel);
      console.log("Model loaded");
    });

    return () => {
      if (model) {
        model.dispose();
      }
    };
  }, []);

  const startVideo = () => {
    return handTrack.startVideo(videoRef.current).then(status => {
      return status;
    }, err => { return err; });
  };

  const runDetection = () => {
    if (model !== null) {
      model.detect(videoRef.current).then(predictions => {
        if (predictions.length <= 0) return;

        // const hand = predctions[0];
        // const currentPosition = hand.bbox[0];

        let openhands = 0, closedhands = 0, pointing = 0, pinching = 0;
        for (let p of predictions) {
          console.log(`${p.label} at X: ${p.bbox[0]}, Y: ${p.bbox[1]} at X: ${p.bbox[2]}, Y: ${p.bbox[3]}`);
          
          if (p.label === 'open') openhands++;
          if (p.label === 'closed') closedhands++;
          if (p.label === 'point') pointing++;
          if (p.label === 'pinch') pinching++;
        //   handlePrediction(gesture)
        }

        let gesture = 'None';
        // if (openhands === 1 && pointing === 1) {
        //     gesture = "Open Chatbot"
        // }
        // else if (closedhands === 1 && pointing === 1) {
        //     gesture = "Open Chatbot"
        // }

        if (openhands > 1) gesture = "Two Open Hands";
        else if (openhands === 1) {
            if (pointing === 1) {
                gesture = "Open Linkedin";
            } else {
                gesture = "Open Hand";
            }
        }

        if (closedhands > 1) gesture = "Two Closed Hands";
        else if (closedhands === 1) {
            if (openhands === 1) {
                gesture = "Open Github";
            } else {
                gesture = "Close Hand";
            }
        }

        if (pointing > 1) gesture = "Two Hands Pointing";
        // else if (pointing === 1) gesture = "Hand Pointing";

        if (pinching > 1) gesture = "Two Hands Pinching";
        else if (pinching === 1) gesture = "Hand Pinching";


        setDetectedGesture(gesture);
        onPrediction(gesture);
      }, err => {
        console.log("ERROR: ", err);
      });
    } else {
      console.log("No model");
    }
  };

  const startDetection = () => {
    startVideo().then(() => {
      videoRef.current.style.height = '200px';
      console.log("Starting predictions");
      setInterval(runDetection, SAMPLERATE);
    }, err => {
      console.log(err);
    });
  };

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }} />
      <button style={{ color: 'white' }}onClick={startDetection}>Start Detection</button>
      <div style={{ color: 'white' }}>Detected Gesture: {detectedGesture}</div>
    </div>
  );
};

export default Handtracker;