#!/usr/bin/env python3
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ function to_kv
    arguments:
    k - string input
    v - either integer or float
    Return: tuple(k, v*v)
    """
    return (k, v*v)
