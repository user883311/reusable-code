/* Credit on this regex to validate URLs goes to Daveo
https://stackoverflow.com/a/3809435 */
const urlReg = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);


/* Sort strings
https://www.codewars.com/kata/523a86aa4230ebb5420001e1/solutions/javascript
*/
String.prototype.sort = function () {
    return this.split("").sort().join("");
};