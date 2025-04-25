#!/usr/bin/env python3
from typing import Callable


def make_multiplier(multipler: float) -> Callable[[float], float]:

    def multiple_func(value: float) -> float:
        return value * multipler

    return multiple_func
