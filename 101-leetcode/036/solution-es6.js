/**
 * Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */

{
  class Trie {
    constructor() {}

    insert(word) {}

    search(word) {}

    startsWith(prefix) {}
  }

  const trie = new Trie();

  trie.insert("apple");

  console.log(`trie.search("apple"):`, trie.search("apple")); // true
  console.log(`trie.search("app"):`, trie.search("app")); // false
  console.log(`trie.startsWith("app"):`, trie.startsWith("app")); // true

  trie.insert("dog");
  trie.insert("app");

  console.log(`trie.search("app"):`, trie.search("app")); // true
}
