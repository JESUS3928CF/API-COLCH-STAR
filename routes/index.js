const routerUsuarios = require("./routesUsuarios")
const routerRoles = require("./routesRoles")
const routerConfiguracion = require("./routesConfiguracion")
const routerCompra = require("./routesCompra")
const routerDetalleCompra = require("./routesDetalleCompra")
const routerProveedor = require("./routesProveedor")
const routerPrendas=require("./routesPrendas")


// const routerRoles = require("./routesMovies")
// const routerConfiguracion = require("./routesMovies")

function routerApi(app){
    app.use("/usuarios", routerUsuarios);
    app.use("/roles", routerRoles);
    app.use("/configuracion", routerConfiguracion);
    app.use("/Compra", routerCompra);
    app.use("/DetalleCompra", routerDetalleCompra);
    app.use("/Proveedor", routerProveedor);
    app.use("/prendas",routerPrendas)
}

module.exports = routerApi; 




 