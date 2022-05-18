//instanciando variáveis 
const button = document.querySelector(".nav-toggle"), nav = document.querySelector(".wrapper .itens"), 
menu = document.querySelector(".wrapper"),
sliders = document.querySelectorAll("[data-scroll-anime]"),
button_icon = document.querySelector(".nav-toggle span"), 
button_to_top = document.querySelector(".back_to_top_toggle");

var collapsed = true, pressed = true, absolute_top  = 0;

//função para ação do botão em resolução para dispositivo móvel
function btnNav_click(){
    nav.style.transition = "0.6s ease";
    menu.style.transition = "0.6s ease";
    button.style.transition = "0.6s ease";
    menu.classList.toggle("expanded");
    nav.classList.toggle("expanded");
    button.classList.toggle("pressed");
    if (pressed){
        button_icon.classList.remove("fa-solid", "fa-bars", "fa-lg", "fa-fade");
        button_icon.classList.add("fa-solid", "fa-xmark", "fa-lg", "fa-fade");
        pressed = false;
    }else{
        button_icon.classList.remove("fa-solid", "fa-xmark", "fa-lg", "fa-fade");
        button_icon.classList.add("fa-solid", "fa-bars", "fa-lg", "fa-fade");
        pressed = true;
    }
    if(collapsed){
        collapsed = false;
        button_to_top.classList.add("display_top_button_from_right");
    }else{
        collapsed = true;
        button_to_top.classList.remove("display_top_button_from_right");
    }
}
function btnTop_click(){
    //Scroll para o ponto 0 da página
   window.scrollTo(0,0);
}

//função para resetar a interação caso não esteja mais na resolução ideal
function screen_resize(){
    sliders.forEach(function(item){
        item.classList.add("to_slide");
    });
    if (window.innerWidth>842){
        //transição nula para não ocorrer animação indesejada
        nav.style.transition = "none";
        button.style.transition = "none";
        button_icon.classList.remove("fa-solid", "fa-xmark", "fa-lg", "fa-fade");
        button_icon.classList.add("fa-solid", "fa-bars", "fa-lg", "fa-fade");
        button_to_top.classList.remove("display_top_button_from_right");
        pressed = true;
        if(!collapsed){
            //se a navbar não estiver fechada, deixe-a no estado padrão novamente junto com o botão
            nav.classList.toggle("expanded");
            menu.classList.toggle("expanded");
            button.classList.toggle("pressed");
            collapsed = true;
        }
    }
}

//função de detecção de scroll da página
document.addEventListener('scroll', function(){
    slide();
    display_btnTop();
});

//slide dos elementos em função do scroll
function slide(){
    top_mark = window.pageYOffset +(window.innerHeight*1.3)/4; //+ ((window.innerHeight*3.5)/4);
    sliders.forEach(function(item){
        if(top_mark>item.offsetTop){
            item.classList.add("to_slide");
        }else{
            item.classList.remove("to_slide");
        }
    });
    //console.log(scroll)
}

//botão para voltar para o topo em função do scroll
function display_btnTop(){
    if(window.pageYOffset>button_to_top.offsetTop){
        button_to_top.classList.add("display_top_button");
    }else{
        button_to_top.classList.remove("display_top_button");
    }
}