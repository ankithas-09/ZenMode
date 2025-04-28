import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MoodSelector from './components/MoodSelector';
import MoodFeed from './components/MoodFeed';

export default function App() {
  const [mood, setMood] = useState(null);

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
  };

  const handleBack = () => {
    setMood(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {mood ? (
        <MoodFeed mood={mood} onBack={handleBack} />
      ) : (
        <MoodSelector onMoodSelect={handleMoodSelect} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
