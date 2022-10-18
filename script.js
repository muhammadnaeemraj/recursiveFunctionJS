function recursion(n) {
  console.log("Line 1 \t", n);
  console.log("Line 2 \t", n);
  console.log("Line 3 \t", n);
  recursion(23); //recursive function
}

recursion(23);
