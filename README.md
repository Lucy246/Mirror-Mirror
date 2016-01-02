# Travelcoup Mobile

This is the React-powered front-end of Travelcoup.

## Developing
After cloning the repository, install dependencies. You need NodeJS + npm. You can get both from www.nodejs.org
```
cd <project folder>
npm install
```

Now you can run your local server:
```
npm start
```

## Developing Locally
To develop locally, just run Gulp
```
gulp
```
It will open up a server on port 3001 and have browsersync enabled so as you develop, the browser will auto-reload. All the files are located inside `src/app/components/web`.

The router is located inside `src/app/components/app.jsx`, which tells the application what component to load based on the URL.

### Example URLs
Hotel Search Results
http://localhost:3001/web-hotels.html?startDate=02/07/2016&endDate=02/08/2016&numberOfAdults=2&numberOfChildren=2&currency=usd&language=de&place=Amsterdam

Hotel Details
http://localhost:3001/web-hotel-detail.html?vendorId=392880&startDate=02/07/2016&endDate=02/08/2016&numberOfAdults=2&numberOfChildren=2&currency=usd&language=en&name=Conservatorium%20Hotel&place=Amsterdam

Cart, Prepare Payment, etc. can be accessed from either of those URLs by clicking on the cart.

## Uploading to Travelcoup server
You just want to upload the built file (`build/app.js`) and the build CSS file (`build/web.css`) to the server. Server path is `tc/web/react-app/`.

## Running Built Version
To run the built version, just open the `index.html` file inside `build/` directory.
