var path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//loading environment variable 
if(process.env.NODE_ENV === 'test'){  //not necesscery cuz JEST not gonna read this webpack file
  require('dotenv').config({ path: '.env.test' })
}
else {  //development or production (on heroku)
  require('dotenv').config({ path: '.env.development' });
}

module.exports = {
  entry: [
    "@babel/polyfill", //arrow function, promise,...
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,  //if it's a js file -> use babel-loader
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'] //test with babelrc file
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
      "process.env.AUTH_DOMAIN": JSON.stringify( process.env.AUTH_DOMAIN),
      "process.env.DATABASE_URL": JSON.stringify(process.env.DATABASE_URL),
      "process.env.PROJECT_ID": JSON.stringify(process.env.PROJECT_ID),
      "process.env.STORAGE_BUCKET": JSON.stringify(process.env.STORAGE_BUCKET),
      "process.env.MESSAGING_SENDER_ID": JSON.stringify(process.env.MESSAGING_SENDER_ID),
      "process.env.APP_ID": JSON.stringify(process.env.APP_ID),
      "process.env.MEASUREMENT_ID": JSON.stringify(process.env.MESUREMENT_ID)  
    }),
    new CopyPlugin([               //copy folder to dist
      { from: './src/images', to: './images' }  
    ])
  ]
};