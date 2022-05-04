# ifcjs-viewer-101

Basic source code for Web-IFC-Viewer

This projects is a hello world set-up for [web-ifc-viewer](https://ifcjs.github.io/info/docs/Guide/web-ifc-viewer/Introduction).

- web-ifc-viewer is a 3D BIM viewer with many tools and functionalities already implemented (section drawings, dimensions, etc.), allowing you to create BIM tools with very little effort.
- Also check-out [web-ifc-three](https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Introduction) which is a boilerplate 3D BIM Viewer with no in-built functionalities. You can use this if you want to build your own custom application with full control over the implementation.
    - Check out [this repo](https://github.com/AnweshGangula/ifcjs-101) for basics
## Setting up the project (Pre-IFC.js)

The first thing to do is to create an empty folder and [start a new npm project](https://docs.npmjs.com/cli/v8/commands/npm-init) with the command `npm init`. This will generate a package.json file containing some data such as the project name, version, commands and dependencies

### Installing libraries

The next step is to install the dependencies necessarry for this project. Below are the commands that install the respective dependencies:

```bash
npm i web-ifc-viewer

npm i rollup --save-dev
npm i @rollup/plugin-node-resolve --save-dev
```

### Index.html

The next step is to create an HTML file named index.html as the main document of the application. The HTML will have:

- A div element, used to render the web-ifc-viewer.
- An input element, which will open IFC files from our computer to the application.
- A script referencing a file called bundle.js, which is the bundle of the app that we will produce with rollup.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="icon" type="image/png" href="./favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IFC.js</title>
</head>

<body>
    <input type="file" id="file-input">
    <div id="viewer-container"></div>
    <script src="./bundle.js"></script>
</body>

</html>
```

### Adding style

The following CSS file will make the canvas full screen:

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    overflow: hidden;
}

#viewer-container {
    position: fixed;
    /* top: 0; */
    left: 0;
    outline: none;
    width: 100%;
    height: 100%;
}
```
