// Queue

function Queue() {
	const queue = [];

	function add(value) {
        queue.push(value)
    }
    
    function peek() {
        if (queue.length === 0) {
            return null
        }
        return queue[0]
    }
    
    function remove() {
        if (queue.length === 0) {
            return null
        }
        return queue.shift(queue[0]);
    }
    
    function isEmpty() {
        return queue.length === 0
    }
        
    return {
        add,
        peek,
        remove,
        isEmpty,
    }
};

// Stack

function Stack() {
    const stack = [];

	function push(value) {
        stack.push(value)
    }
  
    function peek() {
        if (stack.length === 0) {
            return null
        }
        return stack[stack.length - 1];
    }
    
    function pop() {
        if (stack.length === 0) {
            return null
        }
        return stack.pop(stack[stack.length - 1]);
    }
    
    function isEmpty() {
        return stack.length === 0;
    }
	
	return {
        push,
        peek,
        pop,
        isEmpty,
    }
};