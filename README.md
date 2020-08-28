# Gratefulness App UI

## v1.0 - Frontend with Localstorage
- Allows user to enter, edit, and delete their grateful thoughts. 
- Is only a React Frontend with Redux state management and localstorage. So grateful thoughts are stored in the browser session and may not persist between browsers or if cache is cleared.

## v2.0 - Connect with Laravel API Backend
### Functionality
- Allows user to enter, edit, and delete their grateful thoughts. 
- Thoughts will persist across browsers, sessions, users as they will be stored in the Laravel database using API requests from the frontend

### Work Plan
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
- [x] Refresh button
  - Clicking refresh button re-loads page for any new thoughts added by other users in the database through the API

## v2.1 - Add a word cloud
### Functionality
- Add a wordcloud using react-wordcloud so people can see the things others are most grateful for. 

### Work Plan
- [x] Create the array of word frequencies from the grateful thoughts
  - The react-wordcloud component requires an array input that is structured like so
```js
[
    { text: 'people', value: 4 },
    { text: 'powers', value: 2 },
    { text: 'time', value: 2 },
    { text: 'free', value: 2 },
]
```
  - [x] Use borrowed code from @chrisrzhou/wordcloud-generator to create this structure with the grateful thoughts when they're loaded from the API backend and then store it in state, this is done in ```reducer.js``` with the help of ```nlp.js``.

- [x] Add in the react-wordcloud component above the grateful thought gallery
    - This was tricky getting the loading sequence right to pass the ```words``` into the wordcloud React component at the right time. I had to make my own React component that is passed the ```words``` array from state using react-redux and then passes it to the wordcloud React component.
    - Used hooks to resize the wordcloud

## v2.2 - Re-name, the why, Instructions
### Functionality
- Renaming and adding the why/instructions on how folks should use the site

### Work Plan
- [x] - Re-name now that we have the word cloud
- [x] - Add instructions on how to use the website
  - The idea is for this to be open to the public to add a grateful thought and see the wordcloud grow over time
  - Add the "why" behind grateful thoughts/gratefullness journaling 

## v2.3 - Loading
### Functionality
 - Display more thoughts with button at the bottom of the page

### Work Plan
- [ ] Display more thoughts with button at the bottom of the page

## Future Ideas
- [ ] Advanced error handling?
  - https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
- [ ] Limit # of thoughts loaded, potentially make it random?

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
