const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {
  if (l == null) {
    return null;
  }
  if (l.value === k) {
    l = l.next;
    if (l != null) {
      l = removeKFromList(l, k);
    }
  } else {
    l.next = removeKFromList(l.next, k);
  }
  return l;
}

module.exports = {
  removeKFromList
};
