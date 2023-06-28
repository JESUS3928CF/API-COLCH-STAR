const express = require('express')
const routerUsuarios = require("./routesUsuarios")
const routerRoles = require("./routesRoles")
const routerConfiguracion = require("./routesConfiguracion")
const routerCompra = require("./routesCompra")
const routerDetalleCompra = require("./routesDetalleCompra")
const routerProveedor = require("./routesProveedor")
const routerClientes = require("./routesClientes")
const routerVentas = require("./routesVentas")
const routerDetalleVenta = require("./routesDetalleVenta")
const routerPrenda_talla = require("./routesTalla")
const routerColor = require("./routersColor")
const routerDiseno = require("./routesDiseno")


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
    router.use("/prenda_talla", routerPrenda_talla);
    router.use("/Color", routerColor);
    router.use("/Diseno", routerDiseno);
}

module.exports = routerApi; 

