import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  // State to manage the animation state (paused, playing, reversing)
  const [animationState, setAnimationState] = useState('paused');

  // Refs to access the DOM elements directly
  const sceneRef = useRef(null);
  const canvasRef = useRef(null);

  // Function to handle the play button click
  const handlePlay = () => setAnimationState('playing');

  // Function to handle the pause button click
  const handlePause = () => setAnimationState('paused');

  // Function to handle the reverse button click
  const handleReverse = () => setAnimationState('reversing');

  // Function to handle the snapshot button click
  const handleSnapshot = () => {
    // Get the scene and canvas elements
    const sceneElement = sceneRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Get the computed styles of the scene element and its child text element
    const computedStyle = getComputedStyle(sceneElement);
    const textElement = sceneElement.querySelector('h1');
    const textStyle = getComputedStyle(textElement);

    // Set the canvas dimensions to match the scene element
    canvas.width = sceneElement.offsetWidth;
    canvas.height = sceneElement.offsetHeight;

    // Set the background color on the canvas
    context.fillStyle = computedStyle.backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Get the font properties from the text element
    const fontSize = textStyle.fontSize;
    const fontWeight = textStyle.fontWeight;
    const fontFamily = textStyle.fontFamily;
    const fontStyle = textStyle.fontStyle;
    const fontVariant = textStyle.fontVariant;

    // Set the font properties on the canvas context
    context.font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize} ${fontFamily}`;
    context.fillStyle = textStyle.color;
    context.textBaseline = 'middle';
    context.textAlign = 'center';

    // Position the text in the center of the canvas
    const text = textElement.textContent.trim();
    const textX = canvas.width / 2;
    const textY = canvas.height / 2;
    context.fillText(text, textX, textY);

    // Create a download link and trigger the download of the canvas image
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'snapshot.png';
    link.click();
  };

  return (
    <div className="App">
      {/* Scene element with animation state */}
      <div id="scene" className={animationState} ref={sceneRef}>
        <h1>Hello World!</h1>
      </div>
      {/* Buttons to control the animation and snapshot */}
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReverse}>Reverse</button>
      <button onClick={handleSnapshot}>Snapshot</button>
      {/* Hidden canvas element used for snapshot */}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
}

export default App;

