import sanityClient from "@sanity/client";
require("dotenv").config();

export default sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: process.env.REACT_APP_DATASET,
});
