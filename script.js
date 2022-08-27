const cells=document.querySelectorAll("div Button")
var ocanceled=false;
const gamemode=document.querySelector('.a')
const oneplayer=document.querySelector('.onep')
const twoplayers=document.querySelector('.twop')
const xturn=document.querySelector('.xturn')
const oturn=document.querySelector('.oturn')
const gamepad=document.querySelector('.game-pad')
const winner=document.querySelector('.winner')
const again=document.querySelector('.choosegamemode')
const x="fas fa-times"
const o="far fa-circle"
let playersign="X"
var twoplayerschoosen=false;
   var oisactive=false
   const returnbtn=document.querySelector('.return')
const mainhead=document.querySelector('.main-head')


function putx(event){
    if(twoplayerschoosen&&xturn.classList.contains('active'))
    {
event.target.innerHTML=`<span class="xmark"><i  class="${x}"></i></span> `
console.log(event.target.innerHTML)
oturn.classList.add('active')
xturn.classList.remove('active')
event.target.style.pointerEvents="none"
event.target.setAttribute("id",playersign)
console.log("rrrr")
selectwinner()
oisactive=true
}
if(twoplayerschoosen&&oturn.classList.contains('active')&&event.target.innerHTML=="")
{
    event.target.innerHTML=`<span class="xmark"><i  class="${o}"></i></span> `
console.log(event.target.innerHTML)
xturn.classList.add('active')
oturn.classList.remove('active')
event.target.style.pointerEvents="none"
event.target.setAttribute("id","O")
oisactive=false
selectwinner()
}
if(twoplayerschoosen==false){
event.target.innerHTML=`<span class="xmark"><i  class="${x}"></i></span> `
console.log(event.target.innerHTML)
oturn.classList.add('active')
xturn.classList.remove('active')
event.target.style.pointerEvents="none"
event.target.setAttribute("id",playersign)
setTimeout(() => {
   bot(); 
}, 500);
selectwinner()
}
}
function bot(e){

if(twoplayerschoosen==false){
  let playersign="O"
    let array=[]
for(i=0;i<cells.length;i++){
    if(cells[i].childElementCount==0)
    {
        array.push(i)
        console.log(i+"  hasnochild")
    }

}
let randombox=array[Math.floor(Math.random()*array.length)]
console.log("random "+randombox)
    console.log(array)
    if(ocanceled==false)
    {
    cells[randombox].innerHTML=`<span class="xmark"><i  class="${o}"></i></span> `
    cells[randombox].style.pointerEvents='none'
    cells[randombox].setAttribute("id",playersign)
selectwinner()
oturn.classList.remove('active')
xturn.classList.add('active')
}
}
}

 function getid(idname){

 return document.querySelector('.cell'+idname).id

 }
   function check(v1,v2,v3,sign)
  {
   if(getid(v1)==sign && getid(v2)==sign && getid(v3)==sign)
   return true;
   }
   function selectwinner(){
   
   if(check(1,2,3,"X")||check(1,5,9,"X")||
   check(1,4,7,"X")||check(4,5,6,"X")||
   check(7,8,9,"X")||check(2,5,8,"X")||
   check(3,6,9,"X")||check(3,5,7,"X"))
   
   {
   ocanceled=true;    
       console.log("X is the winner")
       gamepad.style.pointerEvents='none'
       oturn.classList.remove('active')
       winner.innerHTML=`<p>X is The Winner</p><div class="b"><Button class="tryagain" onclick="tryagain()">Try Again</Button><Button onclick="choosegamemode()" class="choosegamemode">Select Gamemode</Button></div>`
       setTimeout(() => {
           winner.classList.add('active') 
           gamepad.classList.remove('active')
           returnbtn.classList.remove('active')
       }, 300);
   }
   if(check(1,2,3,"O")||check(1,5,9,"O")||
   check(1,4,7,"O")||check(4,5,6,"O")||
   check(7,8,9,"O")||check(2,5,8,"O")||
   check(3,6,9,"O")||check(3,5,7,"O"))
   
   {
   xturn.classList.remove('active')
       console.log("O is the winner")
       gamepad.style.pointerEvents='none'
       winner.innerHTML=`<p>X is The Winner</p><div class="b"><Button class="tryagain" onclick="tryagain()">Try Again</Button><Button onclick="choosegamemode()" class="choosegamemode">Select Gamemode</Button></div>`
      setTimeout(() => {
        returnbtn.classList.remove('active')
          winner.classList.add('active')
          gamepad.classList.remove('active')
      }, 500);
       
   }
   }
   
function tryagain(){
   
    for(i=0;i<cells.length;i++)
    {
    cells[i].innerHTML=""
    cells[i].id=""
    cells[i].style.pointerEvents='auto'
   gamepad.style.pointerEvents='auto'
    winner.classList.remove('active')
    ocanceled=false
xturn.classList.add('active')
returnbtn.classList.add('active')
gamepad.classList.add('active')

    }
}
function choosegamemode(){
    for(i=0;i<cells.length;i++)
    {
    cells[i].innerHTML=""
    cells[i].id=""
    cells[i].style.pointerEvents='auto'
   gamepad.style.pointerEvents='auto'
    winner.classList.remove('active')
    gamepad.classList.remove('active')
    gamemode.classList.remove('hide')
    ocanceled=false
    returnbtn.classList.remove('active')
    mainhead.classList.remove('hide')
    }
}
 cells.forEach(e=>{
     e.addEventListener('click',putx);
    })


    
oneplayer.addEventListener('click',()=>{
gamepad.classList.add('active')
gamemode.classList.add('hide')
 xturn.classList.add('active')
 returnbtn.classList.add('active')
 twoplayerschoosen=false
 mainhead.classList.add('hide')
})
twoplayers.addEventListener('click',()=>{
    twoplayerschoosen=true
    gamepad.classList.add('active')
    gamemode.classList.add('hide')
     xturn.classList.add('active')
     returnbtn.classList.add('active')
     mainhead.classList.add('hide')
    })
    returnbtn.addEventListener('click',()=>{
        twoplayerschoosen=true
        gamepad.classList.remove('active')
        gamemode.classList.remove('hide')
        mainhead.classList.remove('hide')
         returnbtn.classList.remove('active')
         for(i=0;i<cells.length;i++)
    {
    cells[i].innerHTML=""
    cells[i].id=""
    cells[i].style.pointerEvents='auto'
   gamepad.style.pointerEvents='auto'

    }

        })
    


