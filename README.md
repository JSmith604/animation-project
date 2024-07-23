# Animation Project

## Description
This project is a simple React application that demonstrates basic animation. In this animation the background and text color changes, and users can control the animation state with buttons.

## Features
- **Play**: Users can start the animation by clicking the "Play" button.
- **Pause**: Users can pause the animation by clicking the "Pause" button.
- **Reverse**: Users can reverse the animation by clicking the "Reverse" button. 
- **Snapshot**: Users can capture the current state of the animation and downloads it as a PNG image by clicking the "Snapshot" button. 

## Demo
Try it out! [here](https://animation-project-omega.vercel.app/).

## Technologies Used
- React
- HTML5
- CSS3
- JavaScript
- html2canvas

## Setup Instructions
To set up and run this project locally, follow these steps:

1. Clone the repository and `cd` into the project directory

2. `npm install` to install dependencies 

3. `npm start` to run the application

4. Navigate to `http://localhost:3000`

## Approach to Testing

To ensure this React application remains robust and reliable, I would use a comprehensive automated testing strategy with **unit**, **integration** and **end-to-end tests**. 

**Unit tests** would verify that individual components render correctly and confirm the `Play`, `Pause`, `Reverse`, and `Snapshot` buttons trigger the correct functions when clicked. **Integration tests** would focus on the interaction between components. Such as verifying that the `Reverse` button changes the animation direction and that the `Snapshot` button captures and downloads the correct image. **Jest** would be appropriate for unit and integration testing due to its built-in mocking capabilities, and support for snapshot testing. **React Testing Library** would complement Jest by focusing on testing components from the user’s perspective.

**End-to-end tests** would simulate user interactions to ensure the entire application flow works as expected. This includes testing scenarios where a user starts, pauses, reverses the animation, and takes a snapshot. For end-to-end testing, I would use **Cypress** to run tests in a real browser environment and verify that the application works across different browsers and devices. 

### Examples of Test Acceptance Criteria

1. **Play Button**:
    - **Given** the application is loaded,
    - **When** the user clicks the "Play" button,
    - **Then** the animation should start, changing the background and text color as defined in the CSS.
2. **Pause Button**:
    - **Given** the animation is playing,
    - **When** the user clicks the "Pause" button,
    - **Then** the animation should pause, and the background and text color should remain at the current state.
3. **Reverse Button**:
    - **Given** the animation is playing or paused,
    - **When** the user clicks the "Reverse" button,
    - **Then** the animation should reverse direction, playing the animation backwards.
4. **Snapshot Button**:
    - **Given** the application is loaded,
    - **When** the user clicks the "Snapshot" button,
    - **Then** the current state of the animation should be captured and downloaded as a PNG image, accurately reflecting the current background and text color.

### Unique Challenges and Considerations

Automating tests for this project presents several unique challenges. Managing animation timing can be challenging, but using `waitFor` utilities in Jest and Cypress can help handle these timing issues. Testing the snapshot button involves ensuring accurate image capture and verification, which requires precise visual comparisons and file download checks. This could involve using visual regression tools to compare the captured images against the expected results. Making sure the application works with a variety of browsers is crucial. Using Cypress to run tests on multiple browsers can help catch issues early. Additionally, Cypress can adjust the viewport size to simulate different devices, ensuring the application is responsive and functions correctly across various screen sizes and resolutions.
