import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Model from "./Model";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.model = new Model();
    this.model.questId = 1;
    this.model.quesContent = "which game do you want to play";
    this.model.answerA = "football";
    this.model.answerB = " tennis";
    this.model.answerC = "rudby";
    this.model.answerD = "swimming";
  }
  render() {
    return (
      <View style={{ flex: 1, padding: 24, position: "absolute" }}>
        <Text>
          Sentence:{this.model.questId}: {this.model.quesContent}
        </Text>
        <Text>{this.model.answerA}</Text>
        <Text>{this.model.answerB}</Text>
        <Text>{this.model.answerC}</Text>
        <Text>{this.model.answerD}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}
