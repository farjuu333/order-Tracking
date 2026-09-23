# LRU Cache Implementation

This repository contains a JavaScript implementation of a Least Recently Used (LRU) Cache supporting O(1) average time complexity for both `get` and `put` operations.

## Data Structure Used & Reasoning
JavaScript's native `Map` object is used to build the LRU Cache. 
- **Why Map?** A JS `Map` maintains keys in insertion order. When a key is accessed or updated, we delete and re-insert it so it moves to the end of the map (Most Recently Used). The first item in the `Map` iterator always represents the Least Recently Used (LRU) item.

## Time & Space Complexity
- **Time Complexity:**
  - `get(key)`: **O(1) average time** (Map lookup, deletion, and insertion).
  - `put(key, value)`: **O(1) average time** (Map lookup, deletion, insertion, and iterator access).
- **Space Complexity:** **O(N)**, where N is the maximum capacity of the cache.

## How to Run
1. Ensure Node.js is installed.
2. Run the test script using:
   ```bash
   node lru-cache.js