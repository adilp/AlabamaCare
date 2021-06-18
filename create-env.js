const fs = require("fs");
const path = `./.env`;
const vars = `
 REACT_APP_PROJECT_ID=${process.env.ENV_VAR_1_NETLIFY}\n
 REACT_APP_DATASET=${process.env.ENV_VAR_2_NETLIFY}\n
 REACT_APP_TOKEN=${process.env.ENV_VAR_3_NETLIFY}\n
 REACT_APP_GA_TRACKING_CODE=${process.env.ENV_VAR4_NETLIFY}
`;
fs.writeFileSync(path, vars);
