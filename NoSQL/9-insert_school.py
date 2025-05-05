#!/usr/bin/env python3
"""function that inserts a new document
in a collection based on kwargs:"""


def insert_school(mongo_collection, **kwargs):
    """
    function insert_school
    Arguments:
      nongo_collection : collection
      kwarg : arguments passed to be inserted
    Return : id of new document
    """
    new_doc = mongo_collection.insert_one(kwargs)
    # return
    return new_doc.inserted_id
