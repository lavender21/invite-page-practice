let count = document.getElementById('count');
let main = document.getElementsByTagName('main')[0];
let checks = document.getElementsByClassName('checked');
let search = document.getElementById('search');
let submit= document.getElementById('submit');
let invited = '';
submit.disabled = true;

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
submit.addEventListener('click',(e)=>{
   alert(invited+'has been invited');
   window.location.reload();
});


function changeCount(){
    let num = 0;
    invited = '';
    for(let i=0;i<checks.length;i++){
        if(checks[i].checked){
            num++;
            invited += checks[i].parentElement.previousElementSibling.children[0].innerText+" ";
        }
    }
    count.innerText = num;
    if (num === 0) {
        submit.disabled = true;
        submit.className = 'submit disabled';
    } else {
        submit.disabled = false;
        submit.className = 'submit';
    }
}
