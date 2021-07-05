import constants from "./constants";

// const { TIME, HASHTAG } = constants.REGEX;

const utils = {
  // _extractRegex: (inputText, regex) => {
  //   var matches = [];
  //   var match;
  //   while ((match = regex.exec(inputText.trim()))) {
  //     matches.push(match[0]);
  //   }
  //   return matches;
  // },
  // _getTitleOnly: (str, arr) => {
  //   let regex = new RegExp("\\b" + arr.join("|") + "\\b", "gi");
  //   return str.replace(regex, "");
  // },
  // cleanText: (inputText) => {
  //   let time = utils._extractRegex(inputText, TIME);
  //   let hashtag = utils._extractRegex(inputText, HASHTAG);
  //   let title = utils._getTitleOnly(inputText, [time, hashtag]);
  //   return {
  //     timeStamp: time.toString().trim(),
  //     hashTag: hashtag.toString().trim(),
  //     title: title.toString().trim(),
  //   };
  // },
};

export default utils;
