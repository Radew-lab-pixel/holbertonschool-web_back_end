from sqlalchemy import create_engine, Integer, String, Float, Column, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker, relationship
import os


username = os.getenv("DB_USER", "John")
password = os.getenv("DB_PASSWORD", "password")

database_name = "mydatabase"

engine = create_engine(
    f'mysql+pymysql://{username}:{password}@localhost/{database_name}',
    echo=True
)

Base = declarative_base()

class Person(Base):
  __tablename__ = 'people'
  id = Column(Integer, primary_key=True)
  name = Column(String, nullable=False)
  age = Column(Integer)

  things = relationship('Thing', back_populates='person')

  # 'variable_item' = relationship('class of linked external_variable_item', back_populates='external_variable_item')


class Thing(Base):
  __tablename__ = 'things'
  id = Column(Integer, primary_key=True)
  description = Column(String, nullable=False)
  value = Column(Float)
  owner = Column(Integer, ForeignKey('people.id'))

  person = relationship('Person', back_populates='things')

# Create table
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

new_person = Person(name='Charlie',age=80)

session.add(new_person)
# update changes of new_person to generate updated ID so that assigns the database-generated ID to the related object(new_thing).
session.flush() 
new_thing = Thing(description='Camera', value=500, owner=new_person.id)
session.add(new_thing)

session.commit()

print([t.description for t in new_person.things])  # content is an array
print(new_thing.person.name)

result = session.query(Person.name, Person.age).all()
print(result)
print([p.name for p in result])


result = session.query(Person).filter(Person.age > 50).all()

print([p.name for p in result])

result = session.query(Thing).filter(Thing.value < 100).delete()
session.commit()

result = session.query(Thing).filter(Thing.value < 100).all()
print([t.description for t in result])

result = session.query(Person).filter(Person.name == 'Charlie').update({'name':'Charles'})
session.commit()
# print([p.name for p in result])
print(result)  # blank result as update doesn't return value

result = session.query(Person.name).all()
print(result)
