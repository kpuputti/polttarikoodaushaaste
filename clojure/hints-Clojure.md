# Clojure hints

## Clojure hint 1

If the symbol `inception` is a function, you can call the function by
surrounding it with parenthesis: `(inception)`. If it takes arguments,
you provide them inside the parens: `(inception "foobar" 666)`.

## Clojure hint 2

You can define a function and bind it to a name with the `defn`
macro. See how the `-main` function is defined in the file.

## Clojure hint 3

Here's how to use the `defn` macro:

    (defn id [x]
      x)

The above defines the function `id` which takes one argument `x` and
always returns the argument it is called with.

## Clojure hint 4

The `defn` macro defines a function object under-the-hood. You can
define an anonymous function object (lambda!):

    (fn [] "foobar")

The function above takes no arguments, and always returns the string
"foobar".

## Clojure hint 5

You can define a function that returns a function:

    (defn wrapped []
      (fn []
        "foobar"))

The `wrapped` function returns a function that returns the string
"foobar".

## Clojure hint 6

Clojure supports lexical closures, which means that inner functions
have access to names defines in the enclosing functions.

## Clojure hint 7

The wrapped function in hint 5 could be defines like so:

    (defn wrapped [text]
      (fn []
        text))

where the `text` argument is available in the inner function.

# Clojure hint 8

Just define a function that takes an argument and returns a function
that returns a function that returns a function [...] that returns a
function that returns the argument given to the outermost function.
