import pool from "../config/db.js";

export const obtenerProductosActivos = async () => {
  const { rows } = await pool.query("SELECT * FROM productos_activos");
  return rows;
};

export const venderProducto = async (id) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    //verificar que el producto exista
    const productResult = await client.query(
      "SELECT * from productos_activos where id = $1",
      [id],
    );
    //Si no existe ejecuta el error
    if (productResult.rows.length === 0) {
      throw new Error("Producto no encontrado");
    }

    const producto = productResult.rows[0]

    //Insertamos el producto en la tabla vendidos
await client.query(
      `INSERT INTO productos_vendidos (nombre, precio)
       VALUES ($1, $2)`,
      [producto.nombre, producto.precio]
    );

    //eliminamos el producto de la tabla activos
    await client.query(
      'DELETE FROM productos_activos WHERE id = $1',
      [id]
    );

    await client.query('COMMIT');
    return producto;

  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};
