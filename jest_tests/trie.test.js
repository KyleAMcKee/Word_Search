const { Trie, TrieNode } = require('../src/trie'); 

describe('Newly created trie', () => {
    let trie = new Trie;
    test('should be an instance of Trie', () => {
        expect(trie instanceof Trie).toBeTruthy();
    });

    test('should have a root that is an instance of TrieNode', () => {
        expect(trie.root instanceof TrieNode).toBeTruthy();
    });
});

describe('When adding words to Trie using the addWord method', () => {
    let trie = new Trie;
    trie.addWord('PIE');
    trie.addWord('PI');
    trie.addWord('GAMMA');

    // Define nodes initially since jest runs tests in parallel
    let root = trie.root;
    let pChild = root.children['P'];
    let iChild = pChild.children['I'];
    let eChild = iChild.children['E'];

    let gChild = root.children['G'];
    let aChild1 = gChild.children['A'];
    let mChild1 = aChild1.children['M'];
    let mChild2 = mChild1.children['M'];
    let aChild2 = mChild2.children['A'];

    
    test('the root node should have P as a child', () => {
        expect('P' in root.children).toBeTruthy();
    });

    test('the root node should not have I as a child', () => {
        expect('I' in root.children).toBeFalsy();
    });

    test('the child of P should have I as a child', () => {
        expect('I' in pChild.children).toBeTruthy();
    });

    test('the I node should be the end of the word PI', () => {
        expect(iChild.endOfWord).toBeTruthy();
    });

    test('the E node should be the end of the word PIE', () => {
        expect(eChild.endOfWord).toBeTruthy();
    });

    test('M nodes should not be the end of the word GAMMA', () => {
        expect(mChild1.endOfWord).toBeFalsy();
        expect(mChild2.endOfWord).toBeFalsy();
    });

    test('the child of A should contain M', () => {
        expect('M' in aChild1.children).toBeTruthy();
    });

    test('the child of A should not contain I', () => {
        expect('I' in aChild1.children).toBeFalsy();
    });

    test('The first A node of GAMMA should not be the end of the word', () => {
        expect(aChild1.endOfWord).toBeFalsy();
    });
    
    test('The second A node of GAMMA should be the end of the word', () => {
        expect(aChild2.endOfWord).toBeTruthy();
    });
});