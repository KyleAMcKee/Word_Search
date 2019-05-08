class TrieNode {
    constructor(letter, endOfWord=false) {
        this.letter = letter;
        this.endOfWord = endOfWord;
        this.children = {}
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('*');
    }
}


module.exports = {
    Trie,
    TrieNode
}