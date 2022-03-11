// Hot Potato Algorithm

const names = ["kiran", "palpali", "niranjan"];
function hotPotato(names, num) {
  const queue = new Queue(); //{1}
  const elimentedList = [];

  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]); //{2}
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); //${3}
    }
    elimentedList.push(queue.dequeue()); //${4}
  }
  return {
    elemented: elimentedList,
    winner: queue.dequeue(), //${5}
  };
}

const result = hotPotato(names, 7);
result.elemented.forEach((name) => console.log(`${name}`));
console.log(result.winner);

/**
 * To implement a simulation of this game, we will use the Queue class
    we implemented at the beginning of this chapter ( {1} ). We will get a
    list of names, and queue all of them ( {2} ). Given a number, we need
    to iterate the queue. We will remove an item from the beginning of
    the queue, and add it to the end of the queue ( {3} ) to simulate the
    hot potato (if you have passed the hot potato to your neighbor, you
    are not threatened with elimination right away). Once we reach the
    number, the person that has the hot potato is eliminated (removed
    from the queue {4} ). When there is onl
 */
