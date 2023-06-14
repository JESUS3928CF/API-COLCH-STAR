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
const routerDiseno = require("./routesDiseno")


// const routerRoles = require("./routesMovies")
// const routerConfiguracion = require("./routesMovies")

function routerApi(app){
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
}

module.exports = routerApi; 