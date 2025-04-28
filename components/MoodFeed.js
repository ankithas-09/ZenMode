import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Video } from 'expo-av';

// Import JSON data
const videoData = require('../assets/videos.json');

// Manually preload videos (v1.mp4 to v97.mp4)
const videoFiles = {
  'v1.mp4': require('../assets/videos/v1.mp4'),
  'v2.mp4': require('../assets/videos/v2.mp4'),
  'v3.mp4': require('../assets/videos/v3.mp4'),
  'v4.mp4': require('../assets/videos/v4.mp4'),
  'v5.mp4': require('../assets/videos/v5.mp4'),
  'v6.mp4': require('../assets/videos/v6.mp4'),
  'v7.mp4': require('../assets/videos/v7.mp4'),
  'v8.mp4': require('../assets/videos/v8.mp4'),
  'v9.mp4': require('../assets/videos/v9.mp4'),
  'v10.mp4': require('../assets/videos/v10.mp4'),
  'v11.mp4': require('../assets/videos/v11.mp4'),
  'v12.mp4': require('../assets/videos/v12.mp4'),
  'v13.mp4': require('../assets/videos/v13.mp4'),
  'v14.mp4': require('../assets/videos/v14.mp4'),
  'v15.mp4': require('../assets/videos/v15.mp4'),
  'v16.mp4': require('../assets/videos/v16.mp4'),
  'v17.mp4': require('../assets/videos/v17.mp4'),
  'v18.mp4': require('../assets/videos/v18.mp4'),
  'v19.mp4': require('../assets/videos/v19.mp4'),
  'v20.mp4': require('../assets/videos/v20.mp4'),
  'v21.mp4': require('../assets/videos/v21.mp4'),
  'v22.mp4': require('../assets/videos/v22.mp4'),
  'v23.mp4': require('../assets/videos/v23.mp4'),
  'v24.mp4': require('../assets/videos/v24.mp4'),
  'v25.mp4': require('../assets/videos/v25.mp4'),
  'v26.mp4': require('../assets/videos/v26.mp4'),
  'v27.mp4': require('../assets/videos/v27.mp4'),
  'v28.mp4': require('../assets/videos/v28.mp4'),
  'v29.mp4': require('../assets/videos/v29.mp4'),
  'v30.mp4': require('../assets/videos/v30.mp4'),
  'v31.mp4': require('../assets/videos/v31.mp4'),
  'v32.mp4': require('../assets/videos/v32.mp4'),
  'v33.mp4': require('../assets/videos/v33.mp4'),
  'v34.mp4': require('../assets/videos/v34.mp4'),
  'v35.mp4': require('../assets/videos/v35.mp4'),
  'v36.mp4': require('../assets/videos/v36.mp4'),
  'v37.mp4': require('../assets/videos/v37.mp4'),
  'v38.mp4': require('../assets/videos/v38.mp4'),
  'v39.mp4': require('../assets/videos/v39.mp4'),
  'v40.mp4': require('../assets/videos/v40.mp4'),
  'v41.mp4': require('../assets/videos/v41.mp4'),
  'v42.mp4': require('../assets/videos/v42.mp4'),
  'v43.mp4': require('../assets/videos/v43.mp4'),
  'v44.mp4': require('../assets/videos/v44.mp4'),
  'v45.mp4': require('../assets/videos/v45.mp4'),
  'v46.mp4': require('../assets/videos/v46.mp4'),
  'v47.mp4': require('../assets/videos/v47.mp4'),
  'v48.mp4': require('../assets/videos/v48.mp4'),
  'v49.mp4': require('../assets/videos/v49.mp4'),
  'v50.mp4': require('../assets/videos/v50.mp4'),
  'v51.mp4': require('../assets/videos/v51.mp4'),
  'v52.mp4': require('../assets/videos/v52.mp4'),
  'v53.mp4': require('../assets/videos/v53.mp4'),
  'v54.mp4': require('../assets/videos/v54.mp4'),
  'v55.mp4': require('../assets/videos/v55.mp4'),
  'v56.mp4': require('../assets/videos/v56.mp4'),
  'v57.mp4': require('../assets/videos/v57.mp4'),
  'v58.mp4': require('../assets/videos/v58.mp4'),
  'v59.mp4': require('../assets/videos/v59.mp4'),
  'v60.mp4': require('../assets/videos/v60.mp4'),
  'v61.mp4': require('../assets/videos/v61.mp4'),
  'v62.mp4': require('../assets/videos/v62.mp4'),
  'v63.mp4': require('../assets/videos/v63.mp4'),
  'v64.mp4': require('../assets/videos/v64.mp4'),
  'v65.mp4': require('../assets/videos/v65.mp4'),
  'v66.mp4': require('../assets/videos/v66.mp4'),
  'v67.mp4': require('../assets/videos/v67.mp4'),
  'v68.mp4': require('../assets/videos/v68.mp4'),
  'v69.mp4': require('../assets/videos/v69.mp4'),
  'v70.mp4': require('../assets/videos/v70.mp4'),
  'v71.mp4': require('../assets/videos/v71.mp4'),
  'v72.mp4': require('../assets/videos/v72.mp4'),
  'v73.mp4': require('../assets/videos/v73.mp4'),
  'v74.mp4': require('../assets/videos/v74.mp4'),
  'v75.mp4': require('../assets/videos/v75.mp4'),
  'v76.mp4': require('../assets/videos/v76.mp4'),
  'v77.mp4': require('../assets/videos/v77.mp4'),
  'v78.mp4': require('../assets/videos/v78.mp4'),
  'v79.mp4': require('../assets/videos/v79.mp4'),
  'v80.mp4': require('../assets/videos/v80.mp4'),
  'v81.mp4': require('../assets/videos/v81.mp4'),
  'v82.mp4': require('../assets/videos/v82.mp4'),
  'v83.mp4': require('../assets/videos/v83.mp4'),
  'v84.mp4': require('../assets/videos/v84.mp4'),
  'v85.mp4': require('../assets/videos/v85.mp4'),
  'v86.mp4': require('../assets/videos/v86.mp4'),
  'v87.mp4': require('../assets/videos/v87.mp4'),
  'v88.mp4': require('../assets/videos/v88.mp4'),
  'v89.mp4': require('../assets/videos/v89.mp4'),
  'v90.mp4': require('../assets/videos/v90.mp4'),
  'v91.mp4': require('../assets/videos/v91.mp4'),
  'v92.mp4': require('../assets/videos/v92.mp4'),
  'v93.mp4': require('../assets/videos/v93.mp4'),
  'v94.mp4': require('../assets/videos/v94.mp4'),
  'v95.mp4': require('../assets/videos/v95.mp4'),
  'v96.mp4': require('../assets/videos/v96.mp4'),
  'v97.mp4': require('../assets/videos/v97.mp4'),
};

// Hashtag mapping
const hashtagMap = {
  sad: ['#funnyvideos', '#laughs', '#positivity', '#feelgood', '#cutepuppies', '#uplifting', '#joyful', '#cheerful', '#comedy'],
  stressed: ['#calm', '#relax', '#meditation', '#naturevibes', '#breathe', '#calmness', '#mindfulmoments', '#innerpeace', '#healingvibes'],
  happy: ['#happyvibes', '#happiness', '#funnyvideos', '#travel', '#goodtimes', '#positivity', '#smile', '#joyful', '#laugh', '#feelgood'],
  normal: ['#trendingnow', '#dailyvibe', '#reelsdaily', '#instatrend', '#newsbite', '#popculture', '#chillmode', '#casualscroll', '#dailyupdate', '#travel'],
};

// Categorize videos
const categorizeVideos = (videos, selectedMood) => {
  const categorizedVideos = {
    sad: [],
    stressed: [],
    happy: [],
    normal: [],
  };

  videos.forEach((video) => {
    let categorized = false;
    for (const [mood, hashtags] of Object.entries(hashtagMap)) {
      if (hashtags.includes(video.hashtag)) {
        categorizedVideos[mood].push(video);
        categorized = true;
        break;
      }
    }
    if (!categorized) {
      categorizedVideos.normal.push(video);
    }
  });

  return selectedMood ? categorizedVideos[selectedMood] : videos;
};

// Video List Component
const VideoList = ({ selectedMood, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(true); // Autoplay

  const filteredVideos = categorizeVideos(videoData, selectedMood);

  const handleNext = () => {
    setShouldPlay(false); // Pause video before playing next
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredVideos.length);
      setShouldPlay(true); // Autoplay next video
    }, 500);
  };

  const handlePrevious = () => {
    setShouldPlay(false); // Pause video before playing previous
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredVideos.length) % filteredVideos.length);
      setShouldPlay(true); // Autoplay previous video
    }, 500);
  };

  const handleBack = () => {
    onBack(); // Trigger the back action passed from the parent (returns to mood selector)
  };

  const video = filteredVideos[currentIndex];

  return (
    <View style={{ flex: 1 }}>
      <Video
        source={videoFiles[video.video]}
        rate={1.0}
        volume={1.0}
        resizeMode="cover" // Make video cover the entire screen
        shouldPlay={shouldPlay} // Autoplay video
        useNativeControls
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
      />
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.controls}>
        <TouchableOpacity style={[styles.nextButton, styles.previousButton]} onPress={handlePrevious}>
          <Text style={styles.buttonText}>Previous Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.nextButton, styles.nextButtonRight]} onPress={handleNext}>
          <Text style={styles.buttonText}>Next Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Main MoodFeed App
const MoodFeed = ({ mood, onBack }) => {
  return (
    <View style={styles.container}>
      <VideoList selectedMood={mood} onBack={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  controls: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    position: 'relative',
    alignItems: 'center',
  },
  previousButton: {
    position: 'absolute',
    left: 30,
  },
  nextButtonRight: {
    position: 'absolute',
    right: 30,
  },
});

export default MoodFeed;
