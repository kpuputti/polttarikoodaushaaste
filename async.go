package main

import "fmt"

func mkPrint(c string) func() {
	return func() {
		fmt.Println(c)
	}
}

func main() {
	a := mkPrint("A")
	b := mkPrint("B")
	c := mkPrint("C")

	a()

	// TODO: Make the program output 'A', 'B', and 'C' in
	// alphabetical order by only editing the line below.

	/* ===== EDIT ONLY BELOW ===== */
	c()
	/* ===== EDIT ONLY ABOVE ===== */

	b()

	// Never mind the following, it just enables async things to finish.
	var input string
	fmt.Scanln(&input)
	fmt.Println("done")
}
