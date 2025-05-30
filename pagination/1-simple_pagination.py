#!/usr/bin/env python3

import csv
from typing import List

def index_range(page: int, page_size: int) -> tuple:
    """Calculate start and end index for pagination."""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)

class Server:
    """Server class to paginate a database of popular baby names."""
    
    DATA_FILE = "Popular_Baby_Names.csv"  # Replace with your actual CSV file path
    
    def __init__(self):
        self.__dataset = None
    
    def dataset(self) -> List[List]:
        """Load and cache the dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                self.__dataset = [row for row in reader][1:]  # Skip header
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get a page from the dataset with pagination.
        
        Args:
            page: Page number (1-indexed)
            page_size: Number of items per page
            
        Returns:
            List of rows for the requested page, or empty list if out of range
        """
        # Input validation
        assert isinstance(page, int) and page > 0, "page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, "page_size must be a positive integer"
        
        dataset = self.dataset()
        start, end = index_range(page, page_size)
        
        # Return empty list if indexes are out of range
        if start >= len(dataset):
            return []
        
        return dataset[start:end]
    