import React from "react";

export default class Model {
  questId;
  quesContent;
  answerA;
  answerB;
  answerC;
  answerD;
  rightAnswer;
  constructor(
    questId = 6969,
    quesContent = "",
    answerA = "",
    answerB = "",
    answerC = "",
    answerD = "",
    rightAnswer = ""
  ) {
    this.questId = questId;
    this.quesContent = quesContent;
    this.answerA = answerA;
    this.answerB = answerB;
    this.answerC = answerC;
    this.answerD = answerD;
    this.rightAnswer = rightAnswer;
  }
}
