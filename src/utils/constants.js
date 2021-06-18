const constants = {
  URL: "https://silly-bartik-f69563.netlify.app",
  REGEX: {
    TIME: /(?<!\S)(?:(?:(\d{1,2}):)?([0-5]?\d):)?([0-5]?\d)(?!\S)/gm,
    HASHTAG: /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm,
  },
};

export default constants;
