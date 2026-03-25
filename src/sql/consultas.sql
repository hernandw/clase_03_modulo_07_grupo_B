DROP TABLE IF EXISTS productos_vendidos;
DROP TABLE IF EXISTS productos_activos;

CREATE TABLE productos_activos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio NUMERIC(10,2) NOT NULL
);

CREATE TABLE productos_vendidos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio NUMERIC(10,2) NOT NULL,
    fecha_venta TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO productos_activos (nombre, precio)
VALUES
('Teclado', 25000.00),
('Mouse', 12000.00),
('Monitor', 90000.00);

SELECT * FROM productos_activos;
SELECT * FROM productos_vendidos;