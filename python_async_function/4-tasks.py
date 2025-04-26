#!/usr/bin/env python3
'''
Test file for printing the correct output of the wait_n coroutine
'''
import asyncio
from typing import Coroutine
from typing import List

wait_n = __import__('1-concurrent_coroutines').wait_n


def task_wait_n(n: int, max_delay: int) -> List[float]:
    """task_wait_n

    arguments:
            n : number of loops
            max_delay : maximum delay
    Return: lists of time taken
    """
    # Create the coroutine object
    routine = wait_n(n, max_delay)
    return routine
