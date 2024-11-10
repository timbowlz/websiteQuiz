document.addEventListener('DOMContentLoaded', function() {
    updateCarousel('games')
});

const contentCategories = {
    'games': {
        images: [
            'persona5.png',
            'hsr.png',
            'summonnight.png'
        ],
        captions: [
            'Persona 5',
            'Honkai Star Rail',
            'Summon Night Swordcraft Story 2'
        ],
        texts: [
            'Don the mask and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt, and make them change their ways!',
            'Embark on an adventurous and thrilling journey.',
            'In order to protect their new family, Edgar is bound to a wild Summon Beast and embarks on a journey to reseal the ruins.'
        ]
    },
    'music': {
        images: [
            'chillkill.png',
            'ziggystardust.png',
            'abiior.png'
        ],
        captions: [
            'Chill Kill',
            'Ziggy Stardust',
            'A Brief Inquiry into Online Relationship'
        ],
        texts: [
            'Red Velvet',
            'David Bowie',
            'The 1975'
        ]
    },
    'anime': {
        images: [
            'loveiswar.png',
            'bsd.png',
            'snafu.png'
        ],
        captions: [
            'Kaguya-sama: Love Is War',
            'Bungo Stray Dogs',
            'My Youth Romantic Comedy Is Wrong, as I Expected'
        ],
        texts: [
            'With their honor and pride at stake, Miyuki and Kaguya are both equally determined to be the one to emerge victorious on the battlefield of love!',
            'For weeks, Atsushi Nakajima\'s orphanage has been plagued by a mystical tiger that only he seems to be unaware of. Suspected to be behind the strange incidents, the 18-year-old is abruptly kicked out of the orphanage and left hungry, homeless, and wandering through the city.',
            'Hachiman Hikigaya is an apathetic high school student with narcissistic and semi-nihilistic tendencies. He firmly believes that joyful youth is nothing but a farce, and everyone who says otherwise is just lying to themselves.'
        ]
    }
};

function updateCarousel(category) {
    const content = contentCategories[category];
    if (!content) return;
    
    // Add fade effect to carousel items
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.style.opacity = '0');
    
    setTimeout(() => {

        for(let i = 1; i <= 3; i++) {
            document.getElementById(`slide${i}`).src = content.images[i-1];
            document.getElementById(`caption${i}`).textContent = content.captions[i-1];
            document.getElementById(`text${i}`).textContent = content.texts[i-1];
        }
        
        items.forEach(item => item.style.opacity = '1');
        
        const carousel = bootstrap.Carousel.getInstance(document.getElementById('myCarousel'));
        carousel.to(0);
    }, 300);
}