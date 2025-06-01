from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Float, ForeignKey, func

import os

# engine = create_engine('sqlite:///mydatabase.db', echo=True)
# Use the 'mysql+mysqldb' URL format
# engine = create_engine("mysql+mysqldb://john:password@localhost/mydatabase",
#     echo=True
# )

# Replace with your MySQL credentials and database name
# username = "John"
# password = "password"

# for security reason, load from environment
# Load credentials from environment variables
username = os.getenv("DB_USER", "John")
password = os.getenv("DB_PASSWORD", "password")

database_name = "mydatabase"

engine = create_engine(
    f'mysql+pymysql://{username}:{password}@localhost/{database_name}',
    echo=True
)

# engine = create_engine(
#     f'mysql://{username}:{password}@localhost/{database_name}',
#     echo=True
# )

meta = MetaData()

people = Table(
  "people",
  meta,
  Column('id', Integer, primary_key=True),
  Column('name', String(25), nullable=False),
  Column('age', Integer)
)

things = Table(
  "things",
  meta,
  Column('id', Integer, primary_key=True),
  Column('description', String(25), nullable=False),
  Column('value', Float),
  Column('owner', Integer, ForeignKey('people.id'))
)

meta.create_all(engine)
conn = engine.connect()

insert_statement = people.insert().values( name="Mike", age=30)
result = conn.execute(insert_statement)

select_statement = people.select().where(people.c.age >= 30)
result = conn.execute(select_statement)

conn.commit()

for row in result.fetchall():
  print(row)

delete_statement = people.delete().where(people.c.name == 'Mike')
result = conn.execute(delete_statement)

conn.commit()

insert_people = people.insert().values([
  {'name': 'Mike', 'age':30},
  {'name': 'Bob', 'age':30},
  {'name': 'Anna', 'age': 35},
  {'name': 'Jimmy', 'age': 32},
  {'name': 'Clara', 'age': 40}
])

insert_things = things.insert().values([
  {'owner': 12, 'description': 'Laptop', 'value': 899.50},
  {'owner': 12, 'description': 'PC', 'value': 343.50},
  {'owner': 12, 'description': 'mouse', 'value': 50.20},
  {'owner': 12, 'description': 'laptop', 'value': 800.50},
  {'owner': 14, 'description': 'Book', 'value': 10.29}
])

conn.execute(insert_people)
conn.commit()
conn.execute(insert_things)
conn.commit()

join_statement = people.join(things, people.c.id == things.c.owner)
select_statement = people.select().with_only_columns(people.c.name, things.c.description).select_from(join_statement)

# SELECT people.name, things.description
# FROM people
# INNER JOIN things ON people.id = things.owner

result = conn.execute(select_statement)

for row in result.fetchall():
  print(row)

# group_by_statement = things.select().with_only_columns(things.c.owner, func.sum(things.c.value)).group_by(things.c.owner)

group_by_statement = things.select().with_only_columns(
    things.c.owner, 
    func.sum(things.c.value)
# ).group_by(things.c.owner)
).group_by(things.c.owner).having(func.sum(things.c.value) > 50)

# SELECT owner, SUM(value)
# FROM things
# GROUP BY owner

result = conn.execute(group_by_statement)

for row in result.fetchall():
  print(row)