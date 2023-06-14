const express = require('express')
const routerUsuarios = require("./routesUsuarios")
const routerRoles = require("./routesRoles")
const routerConfiguracion = require("./routesConfiguracion")
const routerCompra = require("./routesCompra")
const routerDetalleCompra = require("./routesDetalleCompra")
const routerProveedor = require("./routesProveedor")
const router = require("./routesUsuarios")


// const routerRoles = require("./routesMovies")
// const routerConfiguracion = require("./routesMovies")

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router)
    router.use("/usuarios", routerUsuarios);
    router.use("/roles", routerRoles);
    router.use("/configuracion", routerConfiguracion);
    router.use("/Compra", routerCompra);
    router.use("/DetalleCompra", routerDetalleCompra);
    router.use("/Proveedor", routerProveedor);
}

module.exports = routerApi; 




 