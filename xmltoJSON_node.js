const convert = require('xml-js'); 
const importXML = require("./importXML");
const xml = importXML.endPoint;

const result1 = convert.xml2json(xml, {
    compact: true,
    spaces: 4
});
const result2 = convert.xml2json(xml, {
    compact: false,
    spaces: 4
});
// console.log(result1);
// console.log(result2);
const jsonObj = JSON.parse(result2);
console.log(jsonObj); 
// console.log(typeof(jsonObj)); // object

// MODULE EXPORTS
// --------------
module.exports.endPoint = jsonObj;