document.querySelectorAll('.question_blok').forEach(el => { //forEach для кожного елемента el- element
el.addEventListener('click', e => {             //addEventListener слухай подій
    e.target.closest('.question_blok').classList.toggle('open')  // е елемент події // target.closest('.question_blok') підіймаємось в гору до найблищого елемента .question_blok
    //toggle якщо класу немає то додає якщо є то відіймає
})
})


// всі кнопки
const manikur = document.querySelectorAll('.manikur')
// всі фото роботи
const foto_tehniks = document.querySelectorAll('.foto_tehniks')

// перебираємо всі кнопки
for (let i = 0; i < manikur.length; i++) {
    // фіксуємо клік по кнопці
    manikur[i].addEventListener('click', () => {
        // перебираємо всі таблиці, забираємо активність таблиці та кнопки
        for (let u = 0; u < foto_tehniks.length; u++) {
            if (foto_tehniks[u].classList.contains('foto_tehniks_active')) {
                foto_tehniks[u].classList.remove('foto_tehniks_active')
                manikur[u].classList.remove('manikur_active')
            }
        }

        // даємо активний клас потрібному номеру таблиці і кнопц 
        foto_tehniks[i].classList.add('foto_tehniks_active')
        manikur[i].classList.add('manikur_active')
    })
}




// всі кнопки
const coments = document.querySelectorAll('.coments')
// всі фото роботи
const content_right_review = document.querySelectorAll('.content_right_review')

// перебираємо всі кнопки
for (let i = 0; i < coments.length; i++) {
    // фіксуємо клік по кнопці
    coments[i].addEventListener('click', () => {
        // перебираємо всі таблиці, забираємо активність таблиці та кнопки
        for (let u = 0; u < content_right_review.length; u++) {
            if (content_right_review[u].classList.contains('content_right_review_active')) {
                content_right_review[u].classList.remove('content_right_review_active')
                coments[u].classList.remove('coments_active')
            }
        }

        // даємо активний клас потрібному номеру таблиці і кнопц 
        content_right_review[i].classList.add('content_right_review_active')
        coments[i].classList.add('coments_active')
    })
}



// маню скрол

window.addEventListener('scroll', () => {
    if (window.scrollY > 80 ) {
        document.querySelector('.first_menu').classList.add('first_menu_none')
    } else {
        document.querySelector('.first_menu').classList.remove('first_menu_none')
    }
})

//  Перехід в гороу
window.addEventListener('scroll', () => {
    if (window.scrollY > 800 ) {
        document.querySelector('.up_block').classList.add('up_block_active')
    } else {
        document.querySelector('.up_block').classList.remove('up_block_active')
    }
})




//мобільне меню
const burger = document.querySelector('.burger')
const hover_menu = document.querySelector('.hover_menu')
const hover_menu_bg = document.querySelector('.hover_menu_bg')
const hover_menu_bg_link = document.querySelector('.hover_menu_bg_link')
const hover_menu_bg_link1 = document.querySelector('.hover_menu_bg_link1')
const hover_menu_bg_link2 = document.querySelector('.hover_menu_bg_link2')
const hover_menu_bg_link3 = document.querySelector('.hover_menu_bg_link3')
const hover_menu_body = document.querySelector('.hover_menu_body')

function openMenu() {
    if (hover_menu.classList.contains('hover_menu_active')) {
        //менюшка виключається
        hover_menu.classList.remove('hover_menu_active')
        hover_menu_body.style = 'left: -75%;'
        setTimeout(() => {
            hover_menu.style.display = 'none'
        }, 200)

    } else {
        // менюшка включається
        hover_menu.classList.add('hover_menu_active')
        hover_menu.style.display = 'block'
        setTimeout(() => {
            hover_menu_body.style = 'left: 0;'
        }, 0)
    }
}

burger.addEventListener('click', openMenu)
hover_menu_bg.addEventListener('click', openMenu)
hover_menu_bg_link.addEventListener('click', openMenu)
hover_menu_bg_link1.addEventListener('click', openMenu)
hover_menu_bg_link2.addEventListener('click', openMenu)
hover_menu_bg_link3.addEventListener('click', openMenu)