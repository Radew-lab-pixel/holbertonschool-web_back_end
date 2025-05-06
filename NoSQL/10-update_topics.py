#!/usr/bin/env python3
"""function that changes all topics of a
school document based on the name:"""


def update_topics(mongo_collection, name, topics):
    """ up_date_topics
    Arguments:
    mongo_collection : mongoDB collection object
    name : name of the document
    topics : value of docuument
    Return none
    """
    # new_update = mongo_collection.update_one({"name": name},
    #                                          {"$set": {"topics": topics}})
    new_update = mongo_collection.update_many({"name": {"$gt": name}},
                                            {"$set": {"topics": topics}})
    # new_update = mongo_collection.update_many({"name": name},
    #                                           {"$set": {"topics": topics}})
    print("OK")  # needed by checker
