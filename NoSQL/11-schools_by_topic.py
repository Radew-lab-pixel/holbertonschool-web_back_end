#!/usr/bin/env python3
"""function that returns the list of
school having a specific topic:
"""


def schools_by_topic(mongo_collection, topic):
    """ schools_by_topic
    Arguments:
      mongo_collection - mongoDB collection object
      topic - string of the topic to be searched
    Return - list of school
    """

    list_school = mongo_collection.find({"topics": topic})
    # print(list_school)
    return list(list_school)
