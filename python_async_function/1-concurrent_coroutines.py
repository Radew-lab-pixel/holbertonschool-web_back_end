#!/usr/bin/env python3
"""Import wait_random from the previous python file that
you’ve written and write an async routine called wait_n
that takes in 2 int arguments (in this order): n and
max_delay
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random
# from 0-basic_async_syntax import wait_random


async def wait_n(n: int, max_delay: int):
    """wait_n
    arguments:
        n : number of loops
        max_delay : maximum delay
    Return: total delay as list
    """

    delay_list = []  # create an  empty list
    for i in range(0, n):
        timing = wait_random(max_delay)
        delay_list.append(timing)
    # needed else RuntimeWarning: coroutine 'wait_random' was never awaited
    delays = await asyncio.gather(*delay_list)
    return delays
