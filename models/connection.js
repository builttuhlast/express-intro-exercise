/* Import the mongoose module
 *
 */
const mongoose = require('mongoose');

/* The Mongo URI that we're connecting with
 *
 * TODO: replace <db-name> with the name of your mongo database. 
 * This will need to change for every new project you create.
 *
 */
const connectionString = "mongodb://localhost/<db-name>";


/* Open up a connection to the mongo database.
 *
 * NOTE: newUrlParser diables a deprecation warning
 */
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


/* Export the mongoose object.
 *
 * This will allow us to use the same connection to our DB
 * across our different controllers.
 *
 */
module.exports = mongoose

/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */
global.shops = [];

/* 
 * TODO: delete this it's just a sample
 *
 */
function createShop() {
  return {
    name: "",
    employees: 0,
    currentlyOpen: false
  };
}

function getShops() {
  return global.shops;
}

function getShop(i) {
  return global.shops[i];
}

function addShop(newShop) {
  global.shops.push(newShop);
}

function updateShop(i, shop) {
  global.shops[i] = shop;
}

function deleteShop(i) {
  global.shops.splice(i, 1);
}

/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addShop,
  createShop,
  deleteShop,
  getShop,
  getShops,
  updateShop,
};
