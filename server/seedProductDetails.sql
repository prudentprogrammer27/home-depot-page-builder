DROP TABLE if EXISTS products_description;
DROP TABLE if EXISTS product_list;
DROP TABLE if EXISTS img_in_product_list;
DROP TABLE if EXISTS additional_resources;

CREATE TABLE products_description (
id SERIAL PRIMARY KEY,
product_id INT REFERENCES products(id),
description TEXT);

CREATE TABLE product_list (
    list_id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id),
    item_description TEXT
);

CREATE TABLE img_in_product_list (
    id SERIAL PRIMARY KEY, 
    product_id INT REFERENCES products(id), 
    img_product_list_ref TEXT, 
    img_product_list_source TEXT);

CREATE TABLE additional_resources (
    resource_id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id),
    resource_type TEXT,
    resource_url TEXT
);

INSERT INTO products_description (product_id, description) VALUES 
(1, 'The RYOBI 18V ONE+ HP Brushless line of products is redefining power and performance. The RYOBI 18V ONE+ HP Brushless 2-Tool Combo Kit includes a 1/2 in. Drill/Driver, 1/4 in. Impact Driver, (2) 18V 2.0 Ah High-Performance batteries, charger, and tool bag. The 1/2 in. Drill/Driver features a brushless motor, delivering up to 20% faster drilling and up to 50% more torque, saving time and energy per application. Its 750 in./lbs. of torque maximizes output power when drilling through tough materials. This drill includes a two-speed gearbox (0-500 and 0-2,100 RPM) and a 24-position clutch for ultimate control, and is paired with a 1/2 in. ratcheting metal chuck for increased durability and accessory retention during heavy-duty applications. The 1/4 in. Impact Driver features a brushless motor delivering up to 25% faster driving. The brushless motor delivers up to 2,200 in./lbs. of torque, providing this tool the power to drive longer fasteners through tough materials. It features one-handed bit release for quick bit changes and the on-board LED work light ensures your workspace is always illuminated. Best of all, it is part of the RYOBI ONE+ System of over 300 Cordless Products that all work on the same battery platform. This 2-Tool Combo Kit is backed by the RYOBI 3-Year Manufacturer''s Warranty and includes an 18V ONE+ HP Brushless 1/2 in. Drill/Driver, an 18V ONE+ HP Brushless 1/4 in. Impact Driver, (2) 18V 2.0 Ah High-Performance Batteries, charger, bag, and operator''s manuals.');

INSERT INTO product_list (product_id, item_description) VALUES
(1, 'Brushless Motor provides longer runtime, longer motor life, and more power'),
(1, 'Drill/Driver: Brushless motor provides up to 20% faster drilling and up to 750 in./lbs. of torque'),
(1, 'Drill/Driver: 2-speed gearbox for ultimate user control provides 0 - 500 / 0 - 2,100 RPM'),
(1, 'Drill/Driver: 24-position clutch allows users to adjust to desired torque setting when driving a variety of fasteners'),
(1, 'Drill/Driver: 1/2 in. ratcheting metal chuck for increased durability'),
(1, 'Drill/Driver: On-board LED worklight illuminates workspace for clear drilling visibility'),
(1, 'Impact Driver: Brushless motor delivers up to 25% faster driving and up to 2,200 in./lbs. of torque'),
(1, 'Impact Driver: Optimized impacting mechanism delivers up to 4,000 IPM'),
(1, 'Impact Driver: Variable speed trigger provides up to 2,900 RPM'),
(1, 'Impact Driver: Die-cast gear case for maximum durability'),
(1, 'Impact Driver: One-handed bit release for quick bit changes'),
(1, 'Impact Driver: On-board LED worklight illuminates workspace for clear drilling visibility'),
(1, 'Part of the RYOBI 18V ONE+ System of Over 300 Cordless Products'),
(1, '3-year manufacturer''s warranty'), 
(1, 'Includes: (1) PBLDD01 18V ONE+ HP Brushless 1/2 in. Drill/Driver, (1) PBLID01 18V ONE+ HP Brushless 1/4 in. Impact Driver, (2) PBP003 18V ONE+ HP 2.0 Ah High-Performance batteries, charger, tool bag, and operator''s manuals');

INSERT INTO img_in_product_list (product_id, img_product_list_ref, img_product_list_source) VALUES 
(1, 'https://www.homedepot.com/collection/Hardware/RYOBI-LINK-Modular-Storage/Family-319189263?omsid=317939878" target="_blank', 'https://inlinecontent.thdstatic.com/25T/ONE WORLD TECHNOLOGIES I/RYOBILINK.jpg'),
(1, 'https://www.homedepot.com/b/RYOBI/N-5yc1vZm5d?NCNI-5&amp;searchRedirect=RYOBI&amp;semanticToken=300r10r00122002000_202110251835449027801639212_us-east1-lnkk%20300r10r00122002000%20%3E%20%20st%3A%7Bryobi%7D%3Ast%20tgr%3A%7BNo%20stage%20info%7D%20qu%3A%7Bryobi%7D%3Aqu" target="_blank', 'https://inlinecontent.thdstatic.com/25H/ONE WORLD TECHNOLOGIES I/2731695.jpg');


INSERT INTO additional_resources (product_id, resource_type, resource_url) VALUES 
(1, 'SDS', 'https://images.thdstatic.com/catalog/pdfImages/ae/ae3a45df-aa1e-4461-82c8-b611f107c6e7.pdf'), 
(1, 'Warranty', 'https://images.thdstatic.com/catalog/pdfImages/27/27ae821e-be9c-451d-9173-7c86a2215a19.pdf'), 
(1, 'Use and Care Manual', 'https://images.thdstatic.com/catalog/pdfImages/ae/ae7240ad-ba4d-4970-bf24-8ad9c67f26da.pdf'), 
(1, 'Return Policy', 'https://www.homedepot.com/c/Return_Policy');


INSERT INTO products_description (product_id, description)
VALUES (2, 'The DEWALT DCD791P1 Cordless Drill Driver Set is ideal for most drilling and fastening applications on the jobsite or home. This power drill features a DEWALT Brushless Motor that delivers up to 57% more run time over brushed power tools. The 3-mode LED light is 20x brighter than previous cordless drill models to help illuminate dark work spaces. The DCD791P1 Cordless Drill/Driver Kit includes a tool bag, battery pack, and charger.');

INSERT INTO product_list (product_id, item_description)
VALUES (2, 'XR lithium-ion batteries with fuel gauge provide 33% more capacity over standard battery packs'),
       (2, 'Compact (6.9 in. front to back), lightweight drill/driver (3.4 lbs.) design fits into tight areas'),
       (2, 'High-speed transmission with 2-speed settings (0 RPM to 550 RPM/0 RPM to 2,000 RPM) delivers up to 30% faster application speeds'),
       (2, 'Ergonomic comfort grip handle provides ideal balance and tool control'),
       (2, 'Metal 1/2 in. ratcheting chuck for superior bit gripping strength'),
       (2, '3-mode LED provides lighting in dark or confined spaces up to 20X brighter than the previous model'),
       (2, 'LED spotlight mode features a 20-minute shutoff function allowing for extended work time in dark or confined spaces');


INSERT INTO additional_resources (product_id, resource_type, resource_url)
VALUES (2, 'SDS', 'https://images.thdstatic.com/catalog/pdfImages/98/98f33c27-7173-4e56-805f-d4cdcef0658b.pdf'),
       (2, 'Warranty', 'https://images.thdstatic.com/catalog/pdfImages/1b/1b7d9033-6fc4-45ca-a39e-36f2e511b3ce.pdf'),
       (2, 'Use and Care Manual', 'https://images.thdstatic.com/catalog/pdfImages/96/96d56e33-d5c7-471e-9215-e7f09bccb89d.pdf'), 
       (2, 'Return Policy', 'https://www.homedepot.com/c/Return_Policy');

