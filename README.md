# McGill AI Club Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Initial Setup Guide
1. Make sure you have Node.js and NPM from Browser, then run `npm install` to install dependencies into the local `node_modules` folder.
2. Run `npm run start` to run the app locally in development mode, and view it in the browser via [http://localhost:3000](http://localhost:3000).

## Usage Guide
Read the `USAGE.md` file for general file navigation and a guide on updating certain website features.

## Deployment Guide
**Steps 1-2** only need to be done before your first time deploying to the website.
1. Install the AWS command line interface (CLI) [here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html) (version 1 should suffice).
2. Follow the "Configuration basics" guide on the AWS docs [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html). Essentially use the `aws configure` command to setup the installation so you're a user under McGill AI's AWS account. For the Access key and Secret Access key ID, you will need to create a new user and follow the instructions in the link above. Our default region name is `us-west-2`. The default output format is `json`. You shouldn't need to configure anything else apart from what's given by the `aws configure` command.
3. You should be ready to go! When you're ready to deploy your local version of the website, first run `npm run build`. Once that is done running, run `npm run deploy` and you should see changes in a few minutes! (the actual command to push your local content to the AWS bucket is `aws s3 sync build/ s3://www.mcgillai.com --acl public-read` but we've wrapped it in an npm command for ease of use).

As a general note, you can access the McGill AI bucket on the AWS browser console by logging in and navigating to `Services -> Storage -> S3`.

## Available Scripts - from Create React App template

In the project directory (mcgillai), you can run:

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
