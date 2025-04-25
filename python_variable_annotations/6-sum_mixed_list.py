#!/usr/bin/env python3
from typing import List, Union


"""sun_mixed_list"""
def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculate the sum of a list containing integers and floats.

    Args:
        mxd_lst: A list containing both integers and floats

    Returns:
        The sum of all numbers in the list as a float
    """
    return float(sum(mxd_lst))
