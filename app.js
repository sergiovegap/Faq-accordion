const faqs =  document.querySelectorAll('.faq');


faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        if (faq.classList.contains('active')) {
            faq.classList.remove('active');
        } else {
            faqs.forEach(ans=> {
                ans.classList.remove('active');
            })
            faq.classList.toggle('active');
        }
    })
})