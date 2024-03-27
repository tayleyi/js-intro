# Intro to Programming: JavaScript and Web Development

Link to slides: [https://go.ncsu.edu/yokjfnn](https://go.ncsu.edu/yokjfnn)

## Command Line
If you aren't familiar with the command line, here are some commands that are good to know:
- `cd` Change directory. By default it goes to home, but if you put an argument after it (ex/ `cd places`), it'll go to the directory that you specify (in this case, it'll go to `places`, which would be a relative path).
	- Relative path: go to a location based on where you currently are. You can use `pwd` to see where you currently are.
	- Absolute path: go to a location based on root. For Windows systems, it'll most likely be `C:\...`. On Unix, it'll most likely be `/home/...`.
- `ls` List items in the current directory. By default, it does not show hidden files (anything with a '.' at the beginning of the name, like '.gitignore'). If you want to see those, use `ls -a`.
- `mkdir` Make a new directory. For example, if you want to make a new 'test' folder, you'd use `mkdir test`.
- `curl` Make a request to a URL. This might come in handy for testing API endpoints. This is a helpful resource: [https://cheat.sh/curl](https://cheat.sh/curl)

Some other notes:
- GitHub is where the code is hosted. Git is the version control system that it uses.
- Version control is like Google Docs version history; it allows you to go back and look at what changes have been made and potentially undo things.
- '.gitignore' This file lets Git know which files not to track. Untracked files will not be committed or pushed to remote.
	- 'node_modules' tends to be in the gitignore because it contains installed packages. Packages can be installed anywhere you have npm and they are also not strictly part of your implementation, which is more important to track.
- This is a good resource if your school doesn't touch on non-coding topics: [https://missing.csail.mit.edu/](https://missing.csail.mit.edu/)

## Getting Started: JavaScript Primer
Code is provided in [intro.js](./getting_started/intro.js).
You can run it in the browser console to see results.

## Node.js Beginnings
If you have node installed, you can run [server.js](./getting_started/server.js).
```
node server.js
```
Make sure you are in the [getting_started](./getting_started/) directory.
You can also run the same command on intro.js (`node intro.js`) but it won't really do anything useful.

## Using npm
Go to the [places](./places/) directory.
There is a [package.json](./places/package.json) and [package-lock.json](./places/package-lock.json) in this folder.
You can install dependencies by running `npm install`.
There might be warnings about deprecated packages.
Unless there's an actual error, you can ignore them for now.

## React
In the [places](./places/) directory, there is a folder called `src`.
This contains the React code.
Documentation can be found here: [https://react.dev/](https://react.dev/)
This could be a helpful tool once you become more familiar with the framework: [https://component-party.dev/](https://component-party.dev/)

## Setting up an API with express
In the [examples](./examples/) folder, there is a project called `react-test`.
The [server.js](./examples/react-test/server.js) file contains an example on writing a GET mapping.
In order to run this file, the `npm run backend` script is used (make sure you're in the [react-test](./examples/react-test/) folder).