#!/usr/bin/env python3
"""Python script that provides some stats
about Nginx logs stored in MongoDB:"""
from pymongo import MongoClient


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
print(f"    method GET: {n_Get}")
n_Post = collection.count_documents({"method": "POST"})
print(f"    method POST: {n_Post}")
n_Put = collection.count_documents({"method": "PUT"})
print(f"    method PUT: {n_Put}")
n_Patch = collection.count_documents({"method": "PATCH"})
print(f"    method PATCH: {n_Patch}")
n_Delete = collection.count_documents({"method": "DELETE"})
print(f"    method DELETE: {n_Delete}")
n_status = collection.count_documents({"path": "/status"})
print(f"{n_status} status check")
