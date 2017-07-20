let count = document.getElementById('count');
let main = document.getElementsByTagName('main')[0];
let checks = document.getElementsByClassName('checked');
let search = document.getElementById('search');

main.addEventListener('change',(e)=>{
    if (e.target.className = "checked"){
        changeCount();
    }
});
search.addEventListener('focus',(e)=>{
    search.className = 'active';
});
search.addEventListener('blur',(e)=>{
    search.className = 'search';
});
function changeCount(){
    let num = 0;
    for(let i=0;i<checks.length;i++){
        if(checks[i].checked){
            num++;
        }
    }
    count.innerText = num;
}
