# Gratefulness App UI

## v1.0 - Frontend with Localstorage
- Allows user to enter, edit, and delete their grateful thoughts. 
- Is only a React Frontend with Redux state management and localstorage. So grateful thoughts are stored in the browser session and may not persist between browsers or if cache is cleared.

## v2.0 - Connect with Laravel API Backend
### Goals
- Allows user to enter, edit, and delete their grateful thoughts. 
- Thoughts will persist across browsers, sessions, users as they will be stored in the Laravel database using API requests from the frontend

### To Do
- [x] Axios set up
- [x] Initial page load - query DB API and load Thoughts (GET)
- [x] change new thought box to be at top (reduce scrolling) 
- [x] New Thought 
    - [x] POST new Thought to API
    - [x] Add new Thought to state
- [x] Editing a Thought
    - [x] Update state to edit mode (no changes)
    - [x] PUT Thought changes to API
    - [x] Update state with changes to Thought
- [x] Deleting a Thought
    - [x] DELETE Thought through API
    - [x] Delete Thought in state
- [ ] Refresh button
  - Clicking refresh button re-loads page for any new thoughts added by other users in the database through the API
- [ ] Advanced error handling?
  - https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
- [ ] Load/Render more thoughts as you scroll down the page

# Create React App Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
