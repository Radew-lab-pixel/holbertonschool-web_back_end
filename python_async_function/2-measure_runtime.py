#!/usr/bin/env python3
"""
Measure the average execution time per task for wait_n
"""
import asyncio
import time
from typing import List

wait_n = __import__('1-concurrent_coroutines').wait_n
# from 1-concurrent_coroutines import wait_n  # failed checker


def measure_time(n: int, max_delay: int) -> float:
    """
    Args:
        n: Number of tasks to spawn
        max_delay: Maximum delay for each task
    Returns:
        Average time per task (total_time / n)
    """
    start_time = time.time()  # Start timer
 
    # Run the async function
    asyncio.run(wait_n(n, max_delay))

    end_time = time.time()  # End timer
    total_time = end_time - start_time

    return total_time / n  # Return average time per task
