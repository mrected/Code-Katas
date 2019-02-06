#*****************************************************************

# https://www.codewars.com/kata/ones-and-zeros/ruby

# Given an array of one's and zero's convert the equivalent binary value to an integer.
# Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

def binary_array_to_number(arr)
    arr.join("").to_i(2)
end

#*****************************************************************

# https://www.codewars.com/kata/replace-with-alphabet-position/train/ruby

# Welcome.

# In this kata you are required to, given a string, replace every letter with its position in the alphabet.

# If anything in the text isn't a letter, ignore it and don't return it.

# "a" = 1, "b" = 2, etc.

# Example
# alphabet_position("The sunset sets at twelve o' clock.")
# Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)


def alphabet_position(text)
    # removes white space, numbers & punctuation, runs "convert" on each letter, returns an array 
    text = text.downcase.gsub!(/[^a-z]/, '').chars.map { |letter| convert(letter) } 
    # converts array to a string with spaces between entries
    text.join(' ')
end
  
# converts given letter to ascii code and subtracts 96 to make a = 1, b = 2, etc
def convert(letter)
    letter.ord - 96
end

#*****************************************************************