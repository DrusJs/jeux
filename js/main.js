document.addEventListener('DOMContentLoaded', () => {

    if (document.querySelector('.menu-wrapper')) {
        document.querySelector('.menu-wrapper').addEventListener('click', (e)=>{
            e.currentTarget.classList.toggle('active')
        })
    }

    if (document.querySelector('.avatar-card')) {
        document.querySelectorAll('.avatar-card').forEach(el=>{
            el.addEventListener('click', (e)=>{
                if (!e.currentTarget.classList.contains('active')) {
                    const active = document.querySelector('.avatar-card.active') 
                    
                    active && active.classList.remove('active')
                    e.currentTarget.classList.add('active')
                } else {
                    e.currentTarget.classList.remove('active')
                }
            })
        })
    }

    if (document.querySelector('.btn-toggles')) {
        let btns = Array.from(document.querySelector('.btn-toggles').children)

        btns.forEach(el=>{
            el.addEventListener('click', (e)=>{
                if (!e.currentTarget.classList.contains('selected')) {
                    const active = document.querySelector('.selected') 
                    
                    active && active.classList.remove('selected')
                    e.currentTarget.classList.add('selected')
                } else {
                    e.currentTarget.classList.remove('selected')
                }
            })
        })
    }

});

function diffFilterAction(enableClass, removeClasses) {
    const container = document.querySelector('.btn-toggles')

    removeClasses.forEach((classname) => {
        container.classList.remove(classname)
    })

    container.classList.toggle(enableClass)
}
