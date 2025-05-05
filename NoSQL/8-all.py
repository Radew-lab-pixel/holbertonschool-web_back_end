#!/usr/bin/env python3
""" 8-main """
from typing import Dict, List
from pymongo import MongoClient
import pprint


def list_all(mongo_collection) -> List[Dict]:  # not list but List
    #  for doc in tutorial.find():
    #   pprint.pprint(doc)
    find_result = mongo_collection.find({})
    return list(find_result)
