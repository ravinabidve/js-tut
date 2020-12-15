console.log("we are at tut 6");
const name="shubhi";
const greeting="good morning";
console.log(greeting + ' ' + name);


let html;
html= "<h1> this is heading</h1>"+
"<p>this is my para </p>";
html=html.concat('this','str2');
console.log(html);
console.log(html.length);

/*console.log(html.toLowerCase());
console.log(html[3]);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('str2'));
console.log(html.includes('fg'));
console.log(html.substring(1,6));
console.log(html.slice(0,4));
console.log(html.split('>'));
console.log(html.replace('this','it'));*/

let  fruit1 ='Orange \' ';
let fruit2 = 'Apple';
let myHtml = ` Hello ${name}
<h1> this is heading</h1>
<p> you like ${fruit1}  and ${fruit2}`; 
document.body.innerHTML= myHtml;