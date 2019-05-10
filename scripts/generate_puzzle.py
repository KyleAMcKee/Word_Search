import argparse
import sys
from urllib.parse import urlencode
from urllib.request import Request, urlopen
try:
    from bs4 import BeautifulSoup
except:
    print('BeatifulSoup module is required to run this script. Try pip3 install beautiful soup')


"""
Puzzle will automatically have dimensions large enough to accommodate the longest word
"""
def generate_puzzle(words, dimension):

    longest_word = max(words, key=len)
    if len(longest_word) > dimension:
        print(longest_word, "is longer than the dimensions given: {0}, changing the size to".format(dimension), len(longest_word))
        dimension = len(longest_word)
    word_str = ','.join(words)
    url = 'http://puzzlemaker.discoveryeducation.com/code/BuildWordSearch.asp'
    post_fields =   {   'WIDTH': dimension,
                        'HEIGHT': dimension,
                        'OPTIONS': 'RANDOM',
                        'OUTPUTTYPE': 'TEXT',
                        'WORDS': word_str
                    }

    request = Request(url, urlencode(post_fields).encode())
    html = urlopen(request).read().decode()
    soup = BeautifulSoup(html, 'html.parser')
    puzzle = soup.pre.get_text()
    return puzzle.replace(' ', ',').replace(',\r', '')

"""
Allow a maximum of 20 words per puzzle
The website's API only allows 8 words per request, 
so make requests until we have the amount of words we want
"""
def generate_words(amount):
    if amount > 20:
        amount = 20
    url = 'https://creativitygames.net/random-word-generator/randomwords/8'
    words = []
    while len(words) < amount:
        request = Request(url)
        html = urlopen(request).read().decode()
        soup = BeautifulSoup(html, 'html.parser')
        ul = soup.find('ul', id='randomwordslist')
        for tag in ul:
            if tag.get_text():
                words.append(tag.get_text().strip().upper().replace(' ', '').replace('-', ''))
    return words[:amount]


parser = argparse.ArgumentParser()
parser.add_argument('height', help="The height of the puzzle, puzzle will always be square", type=int)
parser.add_argument('word_amount', help="The number of words in the puzzle. 20 max", type=int)
parser.add_argument('file_name', help="Give your output a name")
args = parser.parse_args()
words = generate_words(args.word_amount)
puzzle = generate_puzzle(words, args.height)
word_str = ','.join(words)
full_puzzle = (word_str + puzzle).rstrip('\r\n')

with open('test_files/' + args.file_name + '.txt', 'w', newline='\n') as file:
    file.write(full_puzzle)

print('Puzzle successfully created! Saved in test_files/{0}.txt\n'.format(args.file_name))
