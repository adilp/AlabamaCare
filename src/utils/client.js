import sanityClient from "@sanity/client";
import env from "react-dotenv";

export default sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: process.env.REACT_APP_DATASET,
});
