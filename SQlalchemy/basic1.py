from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, URL

engine = create_engine('sqlite:///mydatabase.db', echo=True)
# Use the 'mysql+mysqldb' URL format
# engine = create_engine(
#     "mysql+mysqldb://john:password@localhost/mydatabase",
#     echo=True
# )

# Replace with your MySQL credentials and database name
# username = "john"
# password = "password"
# database_name = "mydatabase"

# engine = create_engine(
#     f'mysql+pymysql://{username}:{password}@localhost/{database_name}',
#     echo=True
# )

meta = MetaData()

people = Table(
  "people",
  meta,
  Column('id', Integer, primary_key=True),
  Column('name', String, nullable=False),
  Column('age', Integer)
)

meta.create_all(engine)
conn = engine.connect()

insert_statement = people.insert().values(name="Mike", age=30)
result = conn.execute(insert_statement)

select_statement = people.select().where(people.c.age > 30)
result = conn.execute(select_statement)

conn.commit()

for row in result.fetchall():
  print(row)

delete_statement = people.delete().where(people.c.name == 'Mike')
result = conn.execute(delete_statement)

conn.commit()
