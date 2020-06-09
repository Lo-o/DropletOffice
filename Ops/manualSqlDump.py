import psycopg2 as pg
import pandas.io.sql as psql

connection = pg.connect(
    user="deno",
    password="Vt2mw&~,tVjg}b>z",
    host="127.0.0.1",
    port="5432",
    database="officetrivia",
)

connection = pg.connect(
    "host=localhost dbname=kinder user=your_username password=your_password"
)
dataframe = psql.read_sql("SELECT * FROM product_product", connection)

