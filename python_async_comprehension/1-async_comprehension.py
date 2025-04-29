#!/usr/bin/env python3

import asyncio
import random
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    # return [num async for num]
    numbers = []
    # count = 0
    # async for num in async_generator():
    #     random_float = random.random()
    #     numbers.append(random_float)
    # return numbers

    # return [random_float async for num in async_comprehension()>random_float = random.random()]
    return [random.random() async for _ in async_generator()]
