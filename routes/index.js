const express = require('express')
const routerUsuarios = require("./routesUsuarios")
const routerRoles = require("./routesRoles")
const routerConfiguracion = require("./routesConfiguracion")
const routerCompra = require("./routesCompra")
const routerDetalleCompra = require("./routesDetalleCompra")
const routerProveedor = require("./routesProveedor")
const routerClientes = require("./routesProveedor")
const routerVentas = require("./routesProveedor")
const routerDetalleVenta = require("./routesProveedor")


function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router)
    router.use("/usuarios", routerUsuarios);
    router.use("/roles", routerRoles);
    router.use("/configuracion", routerConfiguracion);
    router.use("/Compra", routerCompra);
    router.use("/DetalleCompra", routerDetalleCompra);
    router.use("/Proveedor", routerProveedor);
    router.use("/clientes", routerClientes);
    router.use("/ventas", routerVentas);
    router.use("/detalleVentas", routerDetalleVenta);
}

module.exports = routerApi; 