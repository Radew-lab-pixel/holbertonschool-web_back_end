from sqlalchemy import create_engine, text
import sys

# mysql_username = sys.argv[1]
# mysql_password = sys.argv[2]
# database_name = sys.argv[3]
# port = 3306



engine = create_engine('sqlite:///mydatabase.db', echo=True)
# engine = create_engine(
#     f'mysql+mysqldb://{mysql_username}:{my_sql_password}@localhost:{port}/{database_name}', pool_pre_ping=True,
#     echo=True
# )


# Replace these values!
# mysql_username = "root"
# my_sql_password = "secure_password"
# port = 3306
# database_name = "mydatabase"

# engine = create_engine(f'mysql+mysqldb://{mysql_username}:{my_sql_password}@localhost:{port}/{database_name}',
#                        pool_pre_ping=True, echo=True)
conn = engine.connect()

conn.execute(text("CREATE TABLE IF NOT EXISTS people (name str, age int)")) # need to wrap 

conn.commit()

from sqlalchemy.orm import Session

session = Session(engine)
session.execute(text('INSERT INTO people (name, age) VALUES ("Mike", 30);'))

session.commit()