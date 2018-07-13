import express  from 'express';
import cookieParser from 'cookie-parser';
import React    from 'react';
import ReactDom from 'react-dom/server';
import App from './components/App/index.jsx';

const app = express();

app.use(cookieParser());

app.use((req, res) => {
  const componentHTML = ReactDom.renderToString(
    <App />
  );

  return res.end(renderHTML(componentHTML));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href = "https://fonts.googleapis.com/css?family=Roboto" rel = "stylesheet">
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
          <title>Students</title>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
