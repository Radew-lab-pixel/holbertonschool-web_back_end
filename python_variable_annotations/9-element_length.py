#!/usr/bin/env python3
"""Annotate the below function’s parameters and
return values with the appropriate types"""
from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ element_length

    arguments:
    lst -- List of str
    Return: List of Tuple    """
    return [(i, len(i)) for i in lst]

# from typing import List, Tuple


# def element_length(lst: List[str]) -> List[Tuple[str, int]]:
#     """element_length

#     arguments:
#     lst -- List of str
#     Return: List of Tuple    """


#     return [(i, len(i)) for i in lst]
