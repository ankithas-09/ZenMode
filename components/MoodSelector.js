import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import MoodButton from './MoodButton';

const moods = [
  { id: 'happy', label: 'Happy', emoji: '😊', color: '#FFD700' },
  { id: 'sad', label: 'Sad', emoji: '😔', color: '#3498DB' },
  { id: 'stressed', label: 'Stressed', emoji: '😖', color: '#9B59B6' },
  { id: 'normal', label: 'Normal', emoji: '😐', color: '#B0B0B0' },
];

export default function MoodSelector({ onMoodSelect }) {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.heading}>How are you feeling today?</Text>
        {moods.map((mood) => (
          <MoodButton
            key={mood.id}
            label={mood.label}
            emoji={mood.emoji}
            color={mood.color}
            onPress={() => onMoodSelect(mood.id)}
          />
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'rgba(255,255,255,0.3)', // optional white overlay for readability
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    color: '#333',
  },
});
