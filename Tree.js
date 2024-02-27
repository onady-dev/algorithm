class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    insertNode(value) {
        const childNode = new Tree(value);
        this.children.push(childNode);
    }
    contailns(value) {
        if (this.value === value) {
            return true;
        }

        for (let childNode of this.children) {
            if (childNode.contailns(value)) {
                return true;
            }
        }

        return false;
    }
}

const rootNode = new Tree(null);

for (let i = 0; i <= 4; i++) {
    if (rootNode.children[i]) {
        rootNode.children[i].insertNode(i);
    } else {
        rootNode.insertNode(i);
    }
}
for (let i = 0; i <= 10; i++) {
    if (rootNode.children[i]) {
        rootNode.children[i].insertNode(i);
    } else {
        rootNode.insertNode(i);
    }
}

console.log(rootNode.children[0].children);
console.log(rootNode.contailns(5));
console.log(rootNode.contailns(1));
