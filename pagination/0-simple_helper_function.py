#!/usr/bin/env python3
"""
Write a function named index_range that takes
two integer arguments page and page_size
"""


def index_range(page: int, page_size: int) -> tuple:
    start_index = (page - 1) * page_size  # human count from 0
    end_index = page * page_size
    return (start_index, end_index)
