# the function play_game, which takes in as inputs parts_of_speech
# (a list of acceptable replacement words) and ml_string (a string that
# can contain replacement words that are found in parts_of_speech). play_game
# function should return the joined list replaced, which will have the same structure
# as ml_string, only that replacement words are swapped out with user input

parts_of_speech = ["PLACE", "PERSON", "PLURALNOUN", "NOUN"]

test_string = """This is PLACE, no NOUN named PERSON, We have so many PLURALNOUN around here."""


def word_in_pos(word, parts_of_speech):
    for pos in parts_of_speech:
        if pos in word:
            return pos
    return None


def play_game(ml_string, parts_of_speech):
    replaced = []
    ml_string = ml_string.split()
    for elem in ml_string:
       replacement = word_in_pos(elem, parts_of_speech)
       if replacement != None:
           inp = input("type in a: " + replacement+ " ")
           elem = elem.replace(replacement, inp)
           replaced.append(elem)
       else:
           replaced.append(elem)
    replaced = " ".join(replaced)
    return replaced
    # your code here


print (play_game(test_string, parts_of_speech))