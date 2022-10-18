let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.add('fadeInDown');
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
        body.style.background = 'rgba(110, 23, 197, 0.805)';
        body.style.transition = 'background 1s ease';
    };

    
}
close_modal.onclick = function() { // клик на закрытие
  
    body.style.background = 'white';
    body.style.transition = 'background 1s ease';
    modal.classList.remove('fadeInDown');
    modal.classList.add('bounceOutUp'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
        
    }, 500);
    
};