from sqlalchemy import create_engine, Column, String, Integer, ForeignKey
# from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship, declarative_base
from sqlalchemy.exc import IntegrityError

username = 'John'
password = 'password'
port = '3306'
database_name = 'mydatabase'

# engine = create_engine (f"mysql+pymysql://{username}:{password}@localhost:{port}/{database_name}", echo=True)

engine = create_engine(
        f"mysql+pymysql://{username}:{password}@localhost/{database_name}",
        echo=True, # for debugging
        pool_pre_ping=True  # Check connection before use
    )

Base = declarative_base()


class User(Base):
  __tablename__ = "users"
  id = Column(Integer, primary_key = True)
  name = Column(String(20), nullable=False)
  email = Column(String(25), nullable=False, unique=True)
  tasks = relationship('Task', back_populates='user', cascade="all, delete-orphan")

class Task(Base):
  __tablename__ = "tasks"
  id = Column(Integer, primary_key=True)
  title = Column(String(50), nullable=True)
  description = Column(String(30))
  user_id = Column(Integer, ForeignKey('users.id'))
  user = relationship('User', back_populates='tasks')

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# uility functions
def get_user_by_email(email):
  return session.query(User).filter_by(email = email).first()

def confirm_action(prompt:str) -> bool:
  return input(f"{prompt} (yes/no): ").strip().lower() == "yes"
#CRUD ops
def add_user():
  name, email = input("Entr your name: "), input("Enter the email: ")
  if get_user_by_email(email):
    print(f"User already exists: {email}")
    return
  try:
    session.add(User(name=name, email=email))
    session.commit()
    print(f"USer: {name} added")
  except IntegrityError:
    session.rollback()
    print(f"Error")

def add_task():
  email = input("Enter the email of the user to add tasks : ")
  user = get_user_by_email(email)
  if not user:
    print(f"No user found with that email")
    return

  title, description = input("Enter the title"), input ("Enter description")
  session.add(Task(title=title, description = description, user=user))
  session.commit()
  print(f"Added to the database: {title}:{description}")

def query_users():
    for user in session.query(User).all():
      print(f"ID: {user.id}, Name: {user.name}, Email: {user.email}")

def query_tasks():
    email = input ("Enter the enail if the user for task")
    user = get_user_by_email(email)
    if not user:
        print("There was no user with that email")
        return

    for task in user.tasks:
        print(f"Task ID: {task.id}, Title: {task.title}")

def update_user():
    email = input("Enter the email of user you want to update: ")
    user = get_user_by_email(email)
    if not user:
      print("User not found")
      return

    # name, email = input("Enter the new name"), input ("Enter new email")
    name = input("Enter new name ( leave blank if unchange) ") or user.name
    email = input ("Enter new email ( leave blank if unchange) ") or user.email
    user.name = name
    user.email = email
    session.commit()
    print(f"{name} with new email {email} been updated")

def delete_user():
    email = input("Enter the email of user you want to delete : ")
    user = get_user_by_email(email)
    if not user:
       print("User not found ! ")
       return
    session.delete(user)
    print(f"User {user.name} with email {email} deleted ")
    session.commit()

def delete_task():
    email = input("Enter the email of user you want to delete : ")
    user = get_user_by_email(email)
    if not user:
        print("User not found !")
        return
    task_id = int(input("Enter the task ID number you want to delete"))
    for task in user.tasks:
      if (task.id == task_id):
        session.delete(task)
        print(f"User {user.name} with task {task_id} deleted")
        session.commit()
        return
    print("Task {id} not found")

    # task = session.query(Task).get(task_id) or 
    # task = session.query(Task).filter_by(id == task_id).first() or
    # task = session.query(Task).filter(Task.id == task_id).first()


def main() -> None:
  actions = {
    "1":add_user,
    "2":add_task,
    "3": query_users,
    "4": query_tasks,
    "5": update_user,
    "6": delete_user,
    "7": delete_task
  }

  while True:
    print("\nOptions:\n1. Add USer\n2. Add Task\n3. Query Users\n4. Query Tasks\n5. Update User\n6. \
          Delete User\n7. Delete Task\n8. Exit")
    choice = input("Enter an option : ")
    if choice == "8":
      print("Aidos")
      break
    action = actions.get(choice)
    if action:
      action()
    else:
      print("That not an option")

if __name__ == '__main__':
    main()
  