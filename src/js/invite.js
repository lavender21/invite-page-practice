let count = document.getElementById('count');
let main = document.getElementsByTagName('main')[0];
let checks = document.getElementsByClassName('checked');

main.addEventListener('change',(e)=>{
    if (e.target.className = "checked"){
        changeCount();
    }
});
function changeCount(){
    let num = 0;
    for(let i=0;i<checks.length;i++){
        if(checks[i].checked){
            num++;
        }
    }
    console.log(num);
    count.innerText = num;
}
