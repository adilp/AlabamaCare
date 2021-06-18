import ReactGA from "react-ga";

const init = () => {
  // Enable debug mode on the local development environment
  console.log(process.env.REACT_APP_GA_TRACKING_CODE);
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
};

const sendEvent = (payload) => {
  ReactGA.event(payload);
};

const sendPageview = (path) => {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
};

const exportedObject = {
  init,
  sendEvent,
  sendPageview,
};
export default exportedObject;
