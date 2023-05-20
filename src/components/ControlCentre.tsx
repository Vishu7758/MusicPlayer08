import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import TrackPlayer, {usePlaybackState, State} from 'react-native-track-player';

const ControlCentre = () => {
  const playBackState = usePlaybackState();

  // next button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  // previous button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Text style={styles.icon}>Prev</Text>
      </Pressable>

      <Pressable
        onPress={() => togglePlayback(playBackState)}
        style={styles.playButton}>
        <Text style={styles.icon}>
          {playBackState === State.Playing ? `Pause` : 'Play'}
        </Text>
      </Pressable>

      <Pressable onPress={skipToNext}>
        <Text style={styles.icon}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});

export default ControlCentre;
