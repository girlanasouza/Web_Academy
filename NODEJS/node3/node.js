const fsPromises = require("fs").promises;

const readFile = async(filePath) => {
    try {
        return await fsPromises.readFile(filePath,'utf8')
    }
}

