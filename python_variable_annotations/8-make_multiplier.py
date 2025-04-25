#!/usr/bin/env python3
from typing import Callable


def make_multiplier(multipler: float) -> Callable[[float], float]:
    """ function make_multipler
    
    arguments:
    multipler -- float
    Return : multipler * value
    """

    def multipler_func(value: float) -> float:
        return value * multipler

    return multipler_func
