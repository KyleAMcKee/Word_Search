const { Trie, TrieNode } = require('./trie'); 

describe('Newly created trie', () => {
    let trie = new Trie;
    test('should be an instance of Trie', () => {
        expect(trie instanceof Trie).toBeTruthy();
    });

    test('should have a root that is an instance of TrieNode', () => {
        expect(trie.root instanceof TrieNode).toBeTruthy();
    });
});