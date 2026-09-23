class LRUCache {
  constructor(capacity) {
    if (capacity <= 0) {
      throw new Error("Capacity must be a positive integer.");
    }
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    // Key-ti access kora hoyeche, tai eke most recently used korte 
    // purono entry delete kore abar re-insert korchi.
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Key aage thekei thakle delete kore update korchi
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Capacity par hoye gele shobcheye purono (Least Recently Used) 
      // key-ti delete kora hocche (Map-er prothom key-ti LRU).
      const leastRecentlyUsedKey = this.cache.keys().next().value;
      this.cache.delete(leastRecentlyUsedKey);
    }
    this.cache.set(key, value);
  }
}

// --- Test Case Demonstration ---
console.log("--- Starting LRU Cache Test ---");
const cache = new LRUCache(2);

cache.put("A", 10);
console.log('put("A", 10)');

cache.put("B", 20);
console.log('put("B", 20)');

console.log('get("A") ->', cache.get("A")); // Output: 10

cache.put("C", 30); // "B" evict hoye jabe karon "A" matro get("A") diye use kora hoyeche
console.log('put("C", 30) [Evicts "B"]');

console.log('get("B") ->', cache.get("B")); // Output: -1 (Not Found)
console.log('get("C") ->', cache.get("C")); // Output: 30
console.log('get("A") ->', cache.get("A")); // Output: 10
console.log("--- Test Completed ---");