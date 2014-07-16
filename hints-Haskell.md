# Haskell hints

## Hint 1

Open the REPL with `ghci`.

## Hint 2

Integers can be written as literals:

    Prelude> 666
    666

Literal list syntax is the same as in JavaScript/Python/etc.

## Hint 3

Function application is done with just a space:

    Prelude> min 1 2
    1

## Hint 4

What would be an intuitive name for a polymorphic reverse function?

## Extras

Ranges can be written as `[1..20]`.

If provided a step, you can also write a descending range: `[20,19..1]`.

Ranges actually work on any types that can be enumerated:

    Prelude> ['a'..'z']
    "abcdefghijklmnopqrstuvwxyz"

Strings are just a shorthand syntax to a list of characters:

    Prelude> ['a', 'b', 'c']
    "abc"

And list literals are themselves syntactic sugar:

    Prelude> 'a' : 'b' : 'c' : []
    "abc"
