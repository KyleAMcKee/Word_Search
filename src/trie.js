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

    addWord(word) {
        let currentNode = this.root;
        let endOfWord = false;
        for (let i = 0; i < word.length; i++) {
            endOfWord = (i === word.length - 1) ? true : false;
            if (!(word[i] in currentNode.children)) {
                currentNode.children[word[i]] = new TrieNode(word[i], endOfWord);
            }
            currentNode = currentNode.children[word[i]];
            currentNode.endOfWord = endOfWord;
        }
    }
}


module.exports = {
    Trie,
    TrieNode
}