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

    df = psql.read_sql("SELECT * FROM questions", connection)

    print("dataframe bottom rows: \n")
    print(df.tail())

    df.to_excel("questionsSQLdump.xlsx")
