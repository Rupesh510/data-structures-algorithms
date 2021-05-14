const trie = new Trie();

trie.insert("apple");

trie.search("apple"); // true
trie.search("app"); // false
trie.startsWith("app"); // true

trie.insert("dog");
trie.insert("app");

trie.search("app"); // true
