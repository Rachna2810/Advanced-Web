//Using constant
//var pizza= true
const pizza="Yummy"
//pizza= false
console.log(pizza)

// Using constant for webite URL
const WEBSITE_URL="http://www.abc.com"
console.log(WEBSITE_URL)

//Template_Laterals
let a="Rachna"
let b="Shukla"
//let c=`${a} ${b}`
let c= a+b
console.log(c)

//Usage of function with local and global scope variable

var num=10
function test()
{
    var num=100
    console.log("value of number in test()"+num)
}
console.log("value of num outside test()" +num)
test()

//Function to find square of a number using let instead of var keyword
function square()
{
    let num=4
    console.log("value of square" +num)
}
square()

//Not defining  the variable in the function
function add(n1,n2)
{
    var sum=n1+n2
    console. log("Sum of the number is:" +sum)
}
add(10,20)
add("Rachna","Shukla")
add('Rachna','Shukla')

//For template string
//Not defining  the variable in the function
function add(n1,n2)
{
    var sum=n1+n2
    console. log("Sum of the number is:" +sum)
}
add(`${"Rachna"} ${"Shuka"}`)

//Multiplication  for the above function
function mul(n1,n2)
{
    var mul=n1*n2
    console. log("Multiplication of the number is:" +mul)
}
mul(10,20)

//Multiplication for string in above function
function mul(n1,n2)
{
    var mul=n1*n2
    console. log("Multiplication of the number is:" +mul)
}
mul("Rachna","Shukla")