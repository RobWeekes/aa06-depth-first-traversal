/*
Write a function called printDepthFirst that will traverse the given graph
depth-first, printing each node when visited exactly once, on a newline.

Hint: How can you use your code from the breadth-first traversal to get a head
start writing your depth-first traversal?
*/


// Depth-first traversal algorithm

// 1. Create a stack and push the starting node
// 2. Create a set to store visited nodes, and add the starting node
// 3. While the stack is not empty, repeat steps 4-6
// 4. Pop the node on the top of the stack.
// 5. DO THE THING THAT YOU NEED TO DO FOR THE POPPED NODE
// For example, add it to a running total, print it, or save it in an array
// 6. For each unvisited neighbor, add it to the visited nodes and to the top of the stack.

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printDepthFirst(start) {
    // 1. Create a stack and push the starting node
    const stack = [start];
    // 2. Create a set to store visited nodes, and add the starting node
    const visited = new Set();
    visited.add(start);

    // 3. While the stack is not empty, repeat steps 4-6
    while(stack.length) {
        // 4. Pop the node on the top of the stack.
        let node = stack.pop();
        console.log(node);   // 5. DO THE THING
        // 6. For each unvisited neighbor, add it to the visited nodes and to the top of the stack.
        for(let neighbor of adjList[node]) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
    }
}

console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                    // One possible solution:  3, 4, 6, 5, 2, 1
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                    // One possible solution:  6, 4, 5, 2, 3, 1
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                    // One possible solution:  4, 6, 5, 2, 3, 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printDepthFirst;
