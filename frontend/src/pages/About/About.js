import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About</h1>
      <div className="about-main">
        <p className="about-content">
          This is a realtime AI based Yoga Trainer which detects your posture
          and lets you know if you are doing an aasan properly. We have deployed
          this project and made it open source so that more people can use it
          and contribute more aasanas to it. This AI first identifies the
          keypoints or the coordinates of different parts of the person's
          body(basically where they are present in an image) and using it, it
          identifies the person's pose and uses a classification model to tell
          if pose matches one of the aasanas in the repository or not. If the
          pose resembles an actual aasan with 95% accuracy, then the indicators
          on the screen turn green indicating that the pose is correct.The model
          that we have used is a pretrained Tensorflow Movenet Model to predict
          the keypoints and build a neural network top of that which uses these
          coordinates and classify the yoga pose. We have trained the model in
          python because of tensorflowJS we can leverage the support of browser
          so we converted the keras/tensorflow model to tensorflowJS.
        </p>
        <div className="developer-info">
          <h4>About Developers</h4>
          <p className="about-content">We are team DeSync</p>
        </div>
      </div>
    </div>
  );
}
