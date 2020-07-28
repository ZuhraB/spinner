
const listOfCharacters = (['\r|  ', '\r/  ', '\r-  ', '\r|   ']);

for (const i in listOfCharacters) {
  setTimeout(() => {
    process.stdout.write(listOfCharacters[i]);
  }, 100 + char * 100);
};