# Mirror Mirror

This is the React-powered front-end of Mirror Mirror.

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
It will open up a server on port 3001 and have browsersync enabled so as you develop, the browser will auto-reload. All the files are located inside `src/app/components`.

The router is located inside `src/app/components/app.jsx`, which tells the application what component to load based on the URL.

## Running Built Version
To run the built version, just open the `index.html` file inside `build/` directory.
