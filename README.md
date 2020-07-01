![Build & Deploy](https://github.com/DamnedCatStudio/damnedcatstudio.github.io/workflows/Build%20&%20Deploy/badge.svg)

# damnedcatstudio.github.io
The website for Damned Cat Studio

### Note
pushing to master runs CI to clean up code.

### commenting
Commenting in JavaScript is handled by [JSDOC](https://jsdoc.app/). 
@param denotes that there is a required parameter
@return denotes what the expected return 
{type} denote the type of parameter or return expected. If there is not return then return type is '{void}'

```js
    /**
     * This is a description of a function
     * @param {type} name
     * 
     * @return {type}
     */
```
#### Example:

```js
    /**
     * This function takes in a name and returns an object with the name in the message property.
     * @param {string} name
     * 
     * @return {object}
     */
    function(name) {
        return {
            "code": 0
            "message": `Hello ${name}!`
        }
    }
```
