#!/usr/bin/env python3
import asyncio


"""Asychronised generator"""

async def async_generator():
    """function async_ generator loop 10 times
    
    Keyword arguments:
    argument -- none
    Return: 
    """
    for num in range(10):
        await asyncio.sleep(1)
        yield num  # generate generator( pause till next num request)
