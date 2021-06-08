const constants = {
  URL: "http://localhost:3000",
  REGEX: {
    TIME: /(?<!\S)(?:(?:(\d{1,2}):)?([0-5]?\d):)?([0-5]?\d)(?!\S)/gm,
    HASHTAG: /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm,
  },
};

export default constants;
