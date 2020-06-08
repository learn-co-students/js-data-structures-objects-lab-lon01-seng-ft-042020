// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
   const newDriver =  Object.assign({},driver, {[key] : value});
return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
    driver[key] = value;
    return driver;
};

function deleteFromDriverByKey (driver, key) {
    const newDriver = Object.assign({},driver)
    delete newDriver[key];
    return newDriver
};

function destructivelyDeleteFromDriverByKey (driver, key) {
    delete driver[key];
    // why doesn't this work? - because the key will be a string, as they all are in JS
    // delete driver.key;
    return driver;
};