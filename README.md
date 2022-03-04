# Node Delete Folders

Quick JS snippet to delete folders in Node.js. This can be customized for any folder. Typical use is for build related folders that don't have an installed "clean" option. 

## Usage
-Create "utils" folder in root dir.<br>
-add js file to "utils" folder.<br>
-add this script to package.json<br>
```
"scripts": {
    "build:reset": "node utils/delete-build-folders.js"
}
```
<br>

## Customizing
-create a variable and console line for each folder.<br>
- - example Javascript file below, you only have a "dist" folder to remove.
```js

const del = require('del');
 
(async () => {
    const deleteDistFolder = await del(['dist']);
 
    console.log('/dist Deleted files:\n', deleteDistFolder.join('\n'));
})();

```
<br>

## Running the Script
To run the script, use the npm run commands to execute.
<br>
-option 1<br>
```
npm build:reset
```
<br>
-option 2<br>

```
npm run build:reset
```
