import sanityClient from "@sanity/client";
import env from "react-dotenv";

export default sanityClient({
  projectId: env.REACT_APP_PROJECT_ID,
  dataset: env.REACT_APP_DATASET,
});
