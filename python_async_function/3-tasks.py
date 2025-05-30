#!/usr/bin/env python3
"""
Write a function (do not create an async function,
use the regular function syntax to do this) task_wait_random
that takes an integer max_delay and returns a asyncio.Task
"""
import asyncio
from typing import Coroutine
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """task_wait_random
    
    arguments:
    max_delay -- max delay for asynchronous process
    Return: return_description
    """
    
    # return wait_random(max_delay)

    # Create the coroutine object
    routine = wait_random(max_delay)
    
    # Create and return a Task from the coroutine
    return asyncio.create_task(routine)
