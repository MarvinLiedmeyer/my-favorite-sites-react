[![license](https://img.shields.io/github/license/TobitSoftware/chayns-react-todo-example.svg)]() [![GitHub pull requests](https://img.shields.io/github/issues-pr/TobitSoftware/chayns-react-todo-example.svg)]() [![](https://img.shields.io/github/issues-pr-closed-raw/TobitSoftware/chayns-react-todo-example.svg)]()


chayns® React example
===================
This project is an example for how u can use chayns® + [React][4]. <br>
It's a simple ToDo-List where u can add, check/uncheck and remove ToDos. The ToDos will be saved in the localstorage.

Development
-------------
1. Install all project dependencies with  `npm i`
2. Start your webpack-dev-server for debugging your project with `npm start`
    > The webpack-dev-server is now running on your localhost on the port 8080. If the port is not available you can change it in the dev.babel.js in the webpack folder. 

    > `npm start` runs the server in HTTPS mode. You need to add a ssl certificate to `/webpack/ssl`. If you just need HTTP then you can use `npm run start:http`
3. Enable eslint in your development environment. *(not necessary, but recommended)*
4. Implement the example Tapp to your [chayns® site][3] .
    1. Go to configuration -> Tapps
    2. Click `Add Tapp`
    3. Use external content
    4. Give the Tapp a name and type in the following URL : `http[s]://localhost:8080`
    5. Click `add`
5. Start development.

> **Hint:** Writing Tapps with React? You might also want to take a look at our [React Style Guide][2].

Building
---------
You can build this project via `npm run build`.

You can also build this project with sourceMaps for testing via `npm run build:staging`.

 [1]: https://nodejs.org/en/
 [2]: https://github.com/TobitSoftware/chayns-guides/blob/master/TobitReactJsxStyleGuide.md
 [3]: https://chayns.net
 [4]: https://reactjs.org/
