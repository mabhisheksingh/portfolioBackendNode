# portfolio
My personal GitHub repo API's



```cmd
npm run dev to run in dev with nodemon
```

### Note 1 if u changed any thing in .env file then u should must restart the nodemon
### Note 2 This repo is based on ES6 module

## V 1.1.0
* Adding testing and code coverage with the help of jest framework but jest is not supported directly for es6 module so we have use it as experimental.
* New code structure added.
* jest config for testing "node --experimental-vm-modules node_modules/jest/bin/jest.js  --detectOpenHandles --coverage"  

## V 1.0.0
* Added winston for logging and it will print log in console when **NODE_ENV != production** & when it is equal to production it will not pint any log in console all log will write in log file.
* Made separate app and server for better testing
* Add router and handler concept so that we increase its modularity
* Had separate module for api handling and for constant variables **"constant folder under src\main"**
* Add dto so that we can send required data to end user