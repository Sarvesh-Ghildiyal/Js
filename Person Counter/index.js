// initialise the count as 0

// listen for clicks on increment button

// increment the count variabel when the button is clicked

// change the count-el in the html

var countEl=document.getElementById("count-el") 

var count=0

function increment(){
    count+=1
    countEl.innerText=count
}

// what does document.getElementById

/*lets learn about DOM  :how u use js to modify website

doucment object model

document: you are dealing with html document

object:you have taken a html document and shoved it into
        the js object.

model:A representation, modulation

 real thing: <h2 id="count-el">0</h2>
 and the model thing:  js representation

 let countEl=doucment.getElementById("count-el")

*/

function save()
{
    console.log(count)
}
function hello(){
    
}