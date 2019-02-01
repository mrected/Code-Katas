#*****************************************************************

# https://www.codewars.com/kata/ones-and-zeros/ruby

# Given an array of one's and zero's convert the equivalent binary value to an integer.
# Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

def binary_array_to_number(arr)
    arr.join("").to_i(2)
end

#*****************************************************************