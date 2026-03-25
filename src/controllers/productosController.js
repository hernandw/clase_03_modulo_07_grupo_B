import {
  obtenerProductosActivos,
  venderProducto,
} from "../models/productosModel.js";

const home = (req, res) => {
  res.render("home", {
    pageTitle: "Inicio",
  });
};

const listarProductos = async (req, res) => {
  try {
    const productos = await obtenerProductosActivos();
    res.render("productos/listar.hbs", {
      pageTitle: "Productos",
      productos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al cargar productos");
  }
};

const postVenta = async (req, res) => {
  const id = req.params.id;
  try {
    const producto = await venderProducto(id);
    res.render("productos/resultado", {
      exito: true,
      mensaje: `Producto "${producto.nombre}" vendido correctamente.`,
    });
  } catch (error) {
    res.render("productos/resultado", {
      exito: false,
      mensaje: error.message,
    });
  }
};

export { listarProductos, home, postVenta };
