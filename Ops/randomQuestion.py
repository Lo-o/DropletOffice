import psycopg2 as pg
import pandas.io.sql as psql
import json


if __name__ == "__main__":
    with open("../credentials.json") as credentialsJSON:
        credentials = json.load(credentialsJSON)

    connection = pg.connect(
        user=credentials["user"],
        password=credentials["password"],
        host=credentials["hostname"],
        port=credentials["port"],
        database=credentials["database"],
    )

    exclude = [8, 9, 10]

    queryRandom = f"SELECT * " f"FROM questions " f"WHERE id NOT IN (8, 9, 10)"

    df = psql.read_sql(queryRandom, connection)

    print("dataframe: \n")
    print(df)

    print
