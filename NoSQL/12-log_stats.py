#!/usr/bin/env python3
"""Python script that provides some stats
about Nginx logs stored in MongoDB:"""
from pymongo import MongoClient


def task_12():
    """Task 12"""
    client = MongoClient("mongodb://localhost:27017/")
    """ return count of methods """
    # db = client["logs"]  # create or use database "logs"
    # collection = db["nginx"]  # create or use collection "nginx"

    # collection = client.logs.nginx  # new way after Mongo 4
    db = client.logs
    collection = db.nginx
    n_logs = collection.count_documents({})
    print(f"{n_logs} logs")
    print("Methods:")
    n_Get = collection.count_documents({"method": "GET"})
    print(f"\tmethod GET: {n_Get}")
    n_Post = collection.count_documents({"method": "POST"})
    print(f"\tmethod POST: {n_Post}")
    n_Put = collection.count_documents({"method": "PUT"})
    print(f"\tmethod PUT: {n_Put}")
    n_Patch = collection.count_documents({"method": "PATCH"})
    print(f"\tmethod PATCH: {n_Patch}")
    n_Delete = collection.count_documents({"method": "DELETE"})
    print(f"\tmethod DELETE: {n_Delete}")
    # n_status = collection.count_documents({"path": "/status"})
    n_status = collection.count_documents({"method": "GET",
                                          "path": "/status"})
    print(f"{n_status} status check")


if __name__ == "__main__":
    task_12()
