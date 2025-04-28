# MoodFeed: A Mood-Based Video Feed Feature for Instagram-like Apps

MoodFeed is a feature that allows users to select their current mood, and based on that mood, view videos that align with their emotional state. This feature integrates seamlessly with an Instagram-like app, offering users a dynamic and personalized video experience.

## Table of Contents

1. [Installation](#installation)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup](#setup)
   1. [Clone the Repository](#clone-the-repository)
   2. [Install Dependencies](#install-dependencies)
   3. [Running the App](#running-the-app)
   4. [Preload Videos](#preload-videos)
   5. [Customize Mood and Hashtag Mappings](#customize-mood-and-hashtag-mappings)
   6. [Customize the Mood Options](#customize-the-mood-options)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- **Mood Selection:** Users can select their current mood from a set of predefined moods (e.g., Happy, Sad, Stressed, Normal) via a simple interface with mood buttons.
- **Personalized Content:** Based on the selected mood, the app filters videos that match the mood's hashtags (e.g., #happyvibes, #calm, #funnyvideos).
- **Video Player:** Embedded video player powered by `expo-av` to stream and play videos, with controls for navigating through the videos.
- **Preloaded Video Assets:** Optimized for performance by preloading videos to minimize load times.
- **Back and Navigation:** Easy-to-use controls to navigate between videos or return to the mood selection screen.

## Technologies Used

- **React Native** – Framework for building cross-platform mobile apps.
- **Expo** – Provides development tools for React Native apps.
- **expo-av** – A library for audio and video playback in React Native apps.
- **JSON** – For storing and managing video data.
- **React Navigation** – Optional (if you plan to use navigation in a more complex app).

## Setup

### Clone the Repository

```bash
git clone https://github.com/yourusername/ZenMode.git
cd ZenMood
```

### Install Dependencies

Before running the app, you need to install the required dependencies. This will create the `node_modules` folder and install all the necessary packages.

To install dependencies, run the following command:

```bash
npm install
```

### Running on iOS Simulator

1. **Install Xcode**  
   - If you haven't installed Xcode, you can download it from the Mac App Store.

2. **Open Xcode**  
   - Open Xcode from the Applications folder or via Spotlight (`Cmd + Space` and search for Xcode).

3. **Launch iOS Simulator**  
   - **From Xcode**:  
     Go to the **Xcode menu** → **Open Developer Tool** → **Simulator**.
   - **Directly from Terminal**:  
     You can also launch it directly by running:
     ```bash
     open -a Simulator
     ```

4. **Choose a Device Model**  
   - In the **Simulator** app, go to **Device** → **[Device Model]** to choose the device you want to simulate.

5. **Run the App on iOS**  
   - Once the simulator is running, navigate to your project folder and execute:
     ```bash
     npx react-native run-ios
     ```

6. **Stopping the Simulator**  
   - To stop the simulator, you can close the window or run:
     ```bash
     killall Simulator
     ```

Now you're ready to see your app in action on an iOS simulator!

### Running the project

```bash
   npm start
```
    


