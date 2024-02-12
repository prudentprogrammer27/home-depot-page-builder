DROP TABLE if EXISTS review_images;

CREATE TABLE review_images (
  id SERIAL PRIMARY KEY,
  review_id INTEGER REFERENCES reviews(id),
  img_url VARCHAR,
  product_id INTEGER REFERENCES products(id)
);


INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (1,
  'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/ac3eddff-13c3-5215-93d1-627a68e5670f', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (1, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/297cb5b2-7698-5e9c-ac1f-47f63de92db7', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (1, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/878bca29-ddb4-5db9-854a-2cb9532dd054', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (1, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/c4a9ae2b-0a48-53cf-a307-121ea0c9b44d', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (2, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/703c82d0-17c3-59f8-b2b1-b9b21ebaf10d', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (2, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/2b998987-6b49-58bf-ae51-255a68be412b', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (2, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/2b998987-6b49-58bf-ae51-255a68be412b', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (2, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/93c59c2f-343f-5660-a8b6-c81e26d0aa7a', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (3, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/ac3eddff-13c3-5215-93d1-627a68e5670f', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (3, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/297cb5b2-7698-5e9c-ac1f-47f63de92db7', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (3, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/4c1006ff-737b-5b14-8c6d-eeb486d7b1c2', 2);


INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (4, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/6b5fa244-0497-5642-8be1-c0c0f42ba5f4', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (4, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/4722a60e-fb3a-544b-a8fd-5ffaf8e95e5c', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (4, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/b2ffbed6-1d1d-50a3-87b9-620a0dd2df4e', 2);


INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (5, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/62ca989c-02e4-5ae4-9fef-c78de93d3eae', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (5, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/24e6cbde-5dc7-5d64-a0f9-9d475eaace9c', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (5, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/99796027-11be-5748-b5d7-6f8c74112511', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (6, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/8a833484-4d6d-5372-8185-5bd6dfc7942b', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (6, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/c6eee920-2f20-5336-967e-3ae956e53bcd', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (6, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/d50032b3-6da6-5749-98b0-674a020bd280', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (7, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/a05b458f-54f5-5ad1-8639-7ac6d4a14098', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (7, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/3cac0e28-a1d4-58ae-b999-08a38e9420ea', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (8, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/495adebe-e387-53e8-809b-25d6465a48ee', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (8, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/fe3a558a-db8b-5170-9a7b-80a4b23d4a18', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (8, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/df4a0e39-d3a9-58c9-b261-4d0a9fa81b79', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (9, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/2475d310-2635-55e5-9d51-7f73b9b7b2f8', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (9, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/468fa07e-9ddd-561c-8a9c-be0341e72dc6', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (10, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/48c62ed6-f77b-5b61-9a2c-fbb5cb2989b6', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (10, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/0a957780-af98-5da2-91ce-2674d6298c67', 2);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (10, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGV3YWx0/202fe5b2-285a-5fe4-b21e-b0c088ef2f3b', 2);

-- product 1 ryobi

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (1,
  'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/d453da74-d39e-5dd7-a6cd-cfa7663adda9', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (1, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/83e31712-dd37-5758-9b5b-fb0b0c975a4f', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (2, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/1a43ad26-b59b-5b5a-869c-ad192a572904', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (3, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/f6ff6f43-f4b1-5ac6-898c-2f47277417c7', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (3, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/845bed0e-6999-5643-8b58-250caedeb430', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (3, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/1cb787ba-6a8b-5f09-9132-3374399e7081', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (4, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86aG9tZWRlcG90/c35a7ff4-411d-5e46-b1b9-02a97332c8ee', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (5, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/b0d21583-97af-5449-97af-53532bcb11d8', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (6, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/92228bc7-6429-5915-ab3d-60701555ebfd', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (6, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/627fb2fa-8e17-5eb5-ac18-9724409d04c5', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (7, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86aG9tZWRlcG90/b97a385f-73cf-5b11-ae24-639fd9e38087', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (7, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86aG9tZWRlcG90/aba1858b-8332-5680-a61a-874241bb2a34', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (7, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86aG9tZWRlcG90/fbbb1fe2-9223-5ac8-9917-a434dd774202', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (8, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/31bf8243-f64a-5a59-8d7e-b8f91d5bb026', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (9, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/1d75fc6d-1f13-5b63-b4e2-e2ba52ae8412', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (9, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/f5c41e6b-fef6-53ce-942a-ae9adc6e27ae', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (9, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/f49b090a-8ad0-55be-90ad-47c1b0f9c532', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (9, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/c64b5669-60cd-57eb-8f64-3e44a30425fa', 1);

INSERT INTO review_images (review_id, img_url, product_id) VALUES 
  (10, 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cnlvYmlvdXRkb29ydG9vbHM/9e64e96b-b10f-57b7-911b-381c60a66f72', 1);
