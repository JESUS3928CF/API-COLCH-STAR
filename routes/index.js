<<<<<<< HEAD
const express = require('express')
const routerUsuarios = require("./routesUsuarios")
const routerRoles = require("./routesRoles")
const routerConfiguracion = require("./routesConfiguracion")
const routerCompra = require("./routesCompra")
const routerDetalleCompra = require("./routesDetalleCompra")
const routerProveedor = require("./routesProveedor")
const router = require("./routesUsuarios")
=======
const routerUsuarios = require("./routesUsuarios");
const routerRoles = require("./routesRoles");
const routerConfiguracion = require("./routesConfiguracion");
const routerCompra = require("./routesCompra");
const routerDetalleCompra = require("./routesDetalleCompra");
const routerProveedor = require("./routesProveedor");
const routerPrendas=require("./routesPrendas");
const routerClientes = require("./routesClientes");
const routerVentas = require("./routesVentas");
const routerDetalleVenta = require("./routesDetalleVenta");
const routerDiseno = require("./routesDiseno");
const routerTalla=require("./routesTalla");
const routerColor=require("./routersColor")
>>>>>>> f4a2d9a5dd7836f0001abcfd8cc3b944b6aed62c


// const routerRoles = require("./routesMovies")
// const routerConfiguracion = require("./routesMovies")

function routerApi(app){
<<<<<<< HEAD
    const router = express.Router();
    app.use('/api/v1', router)
    router.use("/usuarios", routerUsuarios);
    router.use("/roles", routerRoles);
    router.use("/configuracion", routerConfiguracion);
    router.use("/Compra", routerCompra);
    router.use("/DetalleCompra", routerDetalleCompra);
    router.use("/Proveedor", routerProveedor);
=======
    app.use("/usuarios", routerUsuarios);
    app.use("/roles", routerRoles);
    app.use("/configuracion", routerConfiguracion);
    app.use("/Compra", routerCompra);
    app.use("/DetalleCompra", routerDetalleCompra);
    app.use("/Proveedor", routerProveedor);
    app.use("/prendas",routerPrendas);
    app.use("/cliente",routerClientes);
    app.use("/Ventas",routerVentas);
    app.use("/detalleVenta",routerDetalleVenta);
    app.use("/diseno",routerDiseno);
    app.use("/talla",routerTalla);
    app.use("/color",routerColor);
>>>>>>> f4a2d9a5dd7836f0001abcfd8cc3b944b6aed62c
}

module.exports = routerApi; 