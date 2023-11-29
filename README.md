# Amy Liu's Portfolio

![image](https://github.com/amyliu840/portfolio-2023/assets/53245596/edf76f94-ed5e-4257-9ba0-ef4042d8f718)

![image](https://github.com/amyliu840/portfolio-2023/assets/53245596/eef2b440-4d8d-4d65-bd2f-bec040e7df6b)

e. However, you can override the Webpack configuration by using the rewire package in conjunction with the react-app-rewired package.

Here are the steps to set devtool to false in Create React App:

Install the required packages by running the following command in your project's root directory:

Plain Text
Copy code
npm install react-app-rewired rewire --save-dev
Create a new file named config-overrides.js in the root directory of your project.

Inside config-overrides.js, add the following code to modify the Webpack configuration:

javascript
Copy code
module.exports = function override(config, env) {
  // Disable devtool
  config.devtool = false;

  return config;
};
Open the package.json file in the root directory of your project.

Modify the scripts section to use react-app-rewired in place of react-scripts like this:

json
Copy code
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test"
}
Save the package.json file.

Now, when you run the development server (npm start), the devtool configuration will be set to false in the Webpack configuration.

Please note that changing the devtool configuration to false will prevent source maps from being generated, which can make debugging more difficult. It's generally recommended to keep devtool enabled during development.

Let me know if you need any further assistance! 😊