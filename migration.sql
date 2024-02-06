DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS descriptions;
DROP TABLE IF EXISTS specifications;


CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR,
    manufacturer VARCHAR,
    price VARCHAR,
    has_warranty BOOLEAN
);

CREATE TABLE descriptions (
    id SERIAL PRIMARY KEY,
    fact_1 VARCHAR,
    fact_2 VARCHAR,
    fact_3 VARCHAR, 
    product_id INTEGER REFERENCES products(id)
);

CREATE TABLE specifications (
    id SERIAL PRIMARY KEY, 
    battery_amp_hours INT,
    blows_per_minute ,
    color_family,
    cordless_tool_type,
    drill_driver_type,
    battery_power_type,
    charger_included,
    condition,
    is_cordless,
    max_speed_rpm,
    num_batteries_included,
    product_weight,
    Tools_Product_Type,
    voltage 
);