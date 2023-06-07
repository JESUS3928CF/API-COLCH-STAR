const routerUsuarios = require("./routesUsuarios")
const routerRoles = require("./routesRoles")
const routerConfiguracion = require("./routesConfiguracion")

// const routerRoles = require("./routesMovies")
// const routerConfiguracion = require("./routesMovies")

function routerApi(app){
    app.use("/usuarios", routerUsuarios);
    app.use("/roles", routerRoles);
    app.use("/configuracion", routerConfiguracion);
}

module.exports = routerApi;