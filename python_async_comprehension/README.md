Week 27: Python : Asynchronise Comprehension

Task 0: Write a coroutine called async_generator that takes no arguments. 

0-async_generator.py
#!/usr/bin/env python3
import asyncio
from typing import Generator
"""Asychronised generator"""


async def async_generator() -> Generator[float, None, None]:
    """function async_ generator loop 10 times

    Keyword arguments:
    argument -- none
    Return: Generator type
    """
    for num in range(10):
        await asyncio.sleep(1)
        yield num  # generate generator( pause till next num request)

0-main.py

#!/usr/bin/env python3

import asyncio

async_generator = __import__('0-async_generator').async_generator

async def print_yielded_values():
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)

asyncio.run(print_yielded_values())

Task 1 : Import async_generator from the previous task and then write a coroutine called async_comprehension that takes no arguments. 

1-async_comprehension.py
#!/usr/bin/env python3

import asyncio
import random
from typing import List
"""The coroutine will collect 10 random numbers
using an async comprehensing 10 times"""

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """async_comprehension

    Keyword arguments:
    argument -- none
    Return:
    list"""

    # return [num async for num]
    numbers = []

    # count = 0
    # async for num in async_generator():
    #     random_float = random.random()
    #     numbers.append(random_float)
    # return numbers

    # return[random_float async for num in async_comprehension()>
    # random_float=random.random()]
    return [random.random() async for _ in async_generator()]

1-main.py
#!/usr/bin/env python3

import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def main():
    print(await async_comprehension())

asyncio.run(main())

Task 2 : Import async_comprehension from the previous file and write a measure_runtime coroutine that will execute async_comprehension four times

2-measure_runtime.py
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

2-main.py
#!/usr/bin/env python3

import asyncio


measure_runtime = __import__('2-measure_runtime').measure_runtime


async def main():
    return await(measure_runtime())

print(
    asyncio.run(main())
)