#!/usr/bin/env python3
"""  Write a Python function that lists all documents in a collection
"""
from typing import Dict, List
from pymongo import MongoClient
# import pprint


def list_all(mongo_collection) -> List[Dict]:  # not list but List
    """ list_all
      argument :
      mongo_collection : mongo collections object
      Return : list of documents in collection
    """
    #  for doc in tutorial.find():
    #   pprint.pprint(doc)
    find_result = mongo_collection.find({})
    return list(find_result)
