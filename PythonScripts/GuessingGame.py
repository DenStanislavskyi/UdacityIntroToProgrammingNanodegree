import random
number_to_guess = random.randint(1,100)
#print(number_to_guess)

print("WELCOME TO GUESS ME!")
print("Rules of the game are below!")
print("I'm thinking of a number between 1 and 100")
print("If your guess is more than 10 away from my number, I'll tell you you're COLD")
print("If your guess is within 10 of my number, I'll tell you you're WARM")
print("If your guess is farther than your first guess, I'll say you're getting COLDER")
print("If your guess is closer than your first guess, I'll say you're getting WARMER")
print("LET'S PLAY!")

guesses = []

while True:
    
    guess = int(input("I'm thinking of a number between 1 and 100.\n  What is your guess? "))
    
    if guess < 1 or guess > 100:
        print('OUT OF BOUNDS! Please try again: ')
        continue
        
    # here we compare the player's guess to our number
    if guess == number_to_guess:
        print(f'CONGRATULATIONS, YOU GUESSED IT IN ONLY {len(guesses)} GUESSES!!')
        break
        
    # if guess is incorrect, add guess to the list
    guesses.append(guess)
    
    if len(guesses) == 1: 
      if abs(number_to_guess-guess) <= 10:
        print('WARM!')
      else:
        print('COLD!') 
 
    else:
      #print(str(abs(number_to_guess-guess))+" and "+ str(abs(number_to_guess-guesses[0])))
      if abs(number_to_guess-guess) < abs(number_to_guess-guesses[0]):
        print('WARMER!')
      else:
        print('COLDER!')
        
