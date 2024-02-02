import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

await client.connect();

const app = express();

app.use(express.json());

app.get('/api/specifications_dimensions', async (req, res) => {
  try{
    const query = `SELECT * FROM specifications_dimensions`;

    const result = await client.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('InternalS Server Error');
  }
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
