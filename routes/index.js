const routerUsuarios = require("./routesUsuarios")
const routerRoles = require("./routesRoles")
const routerConfiguracion = require("./routesConfiguracion")
const routerCompra = require("./routesCompra")
const routerDetalleCompra = require("./routesDetalleCompra")
const routerProveedor = require("./routesProveedor")

const routerClientes = require("./routesClientes");
const routerVentas = require("./routesVentas");
const routerDetalleVenta = require('./routesDetalleVenta');



// const routerRoles = require("./routesMovies")
// const routerConfiguracion = require("./routesMovies")

function routerApi(app){
    app.use("/usuarios", routerUsuarios);
    app.use("/roles", routerRoles);
    app.use("/configuracion", routerConfiguracion);
    app.use("/compra", routerCompra);
    app.use("/detalleCompra", routerDetalleCompra);
    app.use("/proveedor", routerProveedor);

    app.use("/clientes", routerClientes);
    app.use('/ventas', routerVentas);
    app.use('/detalleVentas', routerDetalleVenta);


}

module.exports = routerApi; 




 