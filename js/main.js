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

    let keywords = []
    const keywordsFilter = document.querySelectorAll('.keyword-tags .btn')

    keywordsFilter.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            e.currentTarget.classList.toggle('active')
            if (e.currentTarget.classList.contains('active')) {
                keywords.push(e.currentTarget.innerHTML)
            } else {
                keywords = keywords.filter((item) => item != e.currentTarget.innerHTML)
            }
            setKeywordsView()
        })
    })

    function setKeywordsView() {
        const container = document.querySelector('.btn-toggles')
        const cards = document.querySelectorAll('.adventure-card')
        cards.forEach(el=>{el.classList.add('filter-enable')})

        if (keywords.length > 0) {
            container.classList.add('keyword')
            cards.forEach(el=>{
                let itemKeys = el.dataset.keywords
                let isInclud = false

                keywords.forEach(item=>{
                    if (itemKeys.includes(item)) {
                        isInclud = true
                    }
                })

                if (!isInclud) {
                    el.classList.remove('filter-enable')
                }
            })
        } else {
            container.classList.remove('keyword')
        }
    }
    

});

function diffFilterAction(enableClass, removeClasses, el) {
    const container = document.querySelector('.btn-toggles')
    const active = el.parentElement.querySelector('.active')

    if (!el.classList.contains('active')) {
        if (active) {
            active.classList.remove('active')
        }
    }

    el.classList.toggle('active')

    removeClasses.forEach((classname) => {
        container.classList.remove(classname)
    })

    container.classList.toggle(enableClass)
}
