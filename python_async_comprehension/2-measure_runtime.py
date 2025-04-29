#!/usr/bin/env python3

import asyncio
import time
""" async_comprehension four times in parallel using asyncio.gather"""

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """measure_runtime()

    Keyword arguments:
    argument -- none
    Return: duration
    """

    start_time = time.time()
    # asyncio.gather need multiple coroutine
    # await asyncio.gather( # failed checker WTF
    #     async_comprehension(),
    #     async_comprehension(),
    #     async_comprehension(),
    #     async_comprehension())
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = time.time()
    return (end_time - start_time)
