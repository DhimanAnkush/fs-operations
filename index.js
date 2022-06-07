const fs = require('fs')

function fileRead(op1, op2, operation) {

    if (operation == "read") {
        return (fs.readFileSync(op1, 'utf8'));
    }

    else if (operation == 'append') {
        return (fs.appendFileSync(op1, op2))
    }

    else if (operation == 'delete') {
        (fs.unlinkSync(op1))
    }

    else if (operation == 'create') {
        fs.writeFileSync(op1, op2);
    }

    else if (operation == "rename") {
        fs.renameSync(op1, op2)
    }

    else if (operation === 'list') {
        fs.readdirSync(op1).forEach(file => {
            return file;
        });
    }
}

var data = fileRead(process.argv[3], process.argv[4], process.argv[2]);
console.log(data)