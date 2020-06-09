// Write your solution in this file!
const driver = { };

// Non-destructively returns a driver 
// With the original key value pairs and the new key value pair
function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver, { [key]: value})
}

// Destructively updates the driver object
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key]: value})
}

// Non-destructively deletes a key-value pair from the driver object
function deleteFromDriverByKey(driver, key) {
    const copyOfDriver = Object.assign({}, driver);
    delete copyOfDriver[key];
    return copyOfDriver
}

// Destructively deletes a key-value pair from the driver object
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}