This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Project Description:

1. CHECK Set a default center and zoom for the google map

2. CHECK Hardcode marker props (passed into whatever component is rendering the google map) amd display those markers
   https://stackoverflow.com/questions/43859785/how-do-i-display-multiple-markers-with-react-google-maps

3. CHECK Allow users to add a marker by typing in a latitude and longitude into input boxes(need to figure this out: https://stackoverflow.com/questions/55263520/google-maps-react-adding-markers-with-lat-lng)

Next up:

1. Show location info on popup CHECK
2. Make form require input for every box CHECK
3. Fix background
4. Create a dynamic list of locations.
5. Create a delete button that lives on each li.
6. Delete a marker from the database.

Must haves:

1. Home page info
2. Make map size smaller on page and add a little info box

Styling:

1. Night mode on map
2. Dark theme everything
3. Icon for navbar
4. Icons for map markers

Parallax: now working
images:
BG blue sky/ clouds/ FG grass/ ticks/ tree
1.Scrolling down tick comes out of grass

Technical:

1. Include redux
2. Handle fast adding of

User stories:

1. As a user, I want to be able to add a tick location (lat and long) by clicking the map
2. As a user, I want to be able to add more information when I create a tick location
3. As a user, I want to be able to see more information in a popup when I click on a marker
4. As a user, I want to be able to edit a tick location
5. As a user, I want to see photos of the area or ticks when I click on a marker (in a popup)
6. As a user, I want the location of the map to generate where I currently am.

![routes](/src/Routes.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

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
