from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[float, int]]) -> float:
    """
    Calculate the sum of a list containing integers and floats.

    Args:
        mxd_lst: A list containing both integers and floats

    Returns:
        The sum of all numbers in the list as a float
    """
    return float(sum(mxd_lst))
