let text = document.querySelector('.lesstext');
let btn = document.querySelector('.view button');


btn.onclick = function(){
    if(btn.textContent == 'View less'){
        text.style.display = 'none';
        text.style.opacity = '0';
        btn.textContent = 'View More';
    }else{
        text.style.display = 'block';
        text.style.opacity = '1';
        btn.textContent = 'View less';


    }
};

