#!/usr/bin/env python3
from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """element_length

    arguments:
    lst -- List of str
    Return: List of Tuple    """


    return [(i, len(i)) for i in lst]
