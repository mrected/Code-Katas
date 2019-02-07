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

# https://www.codewars.com/kata/find-the-divisors/train/ruby

# Create a function named divisors/Divisors that takes an integer n > 1 
# and returns an array with all of the integer's divisors(except for 1 
# and the number itself), from smallest to largest. If the number is 
# prime return the string '(integer) is prime' 

def divisors(n)
    
    numbers = (1..n).select { |number| n % number == 0}
    if numbers.count > 2
      return numbers.delete_if {|number| number == 1 || number == n}
    else 
      return "#{n} is prime"
    end
  
  end
   
# --------- or ---------

  def divisors(n)
  
    i = 1
    numbers = []
    while i < n
      if n % i == 0
        numbers.push(i)
      end
      i += 1
    end
    if numbers.count > 1
      return numbers.delete_if {|number| number == 1}
    else 
      return "#{n} is prime"
    end
    
  end

#*****************************************************************