# ProgressCircleBar

A customizable gradient progress circle bar component for React. This component allows you to display a circular progress bar with a variety of customization options including size, stroke width, colors, text, and more.

## Installation

Install the package using npm:

```bash
npm install gradient-progress-circle-bar
```

## Usage

import React from "react";
import ProgressCircleBar from "progress-circle-bar";

const App = () => {
return (
  <div>
    <ProgressCircleBar 
      value={75} 
      label="75%" 
      fontWeight="bold" 
    />
  </div>
  );
};

export default App;

## Props

The ProgressCircleBar component accepts the following props:

• value (number, required): The progress value as a percentage (0-100).
• remainingColor (string, optional): The color for the remaining portion of the circle. Default is "white".
• size (number, optional): The size (diameter) of the progress circle in pixels. Default is 100.
• strokeWidth (number, optional): The width of the progress circle's stroke in pixels. Default is 10.
• progressColors (string[], optional): An array of colors for the gradient of the progress circle. Default is ["#ffffff", "#b3c0ff", "#b3e0ff", "#4d16ff"].
• innerColor (string, optional): The background color of the inner circle. Default is "white".
• clockwise (boolean, optional): The direction of the progress (true for clockwise, false for counterclockwise). Default is true.
• label (string, optional): The text displayed inside the circle. Default is "".
• fontSize (number, optional): The font size of the label text. Default is 16.
• fontColor (string, optional): The color of the label text. Default is "black".
• fontWeight (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "normal" | "bold" | "bolder" | "lighter", optional): The font weight of the label text. Default is "normal".

## Example with All Props

import React from "react";
import ProgressCircleBar from "progress-circle-bar";

const App = () => {
return (
  <div>
    <ProgressCircleBar
      value={75}
      remainingColor="lightgray"
      size={150}
      strokeWidth={15}
      progressColors={["#ff0000", "#00ff00", "#0000ff"]}
      innerColor="#f0f0f0"
      clockwise={false}
      label="75%"
      fontSize={20}
      fontColor="blue"
      fontWeight="bold"
    />
  </div>
  );
};

export default App;
