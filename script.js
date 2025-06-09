const manipularCliqueWhatsApp = (e) => {
    e.preventDefault();
    const urlWhatsApp = 'https://wa.me/558191625';
    window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
};

const manipularScrollSuave = (e) => {
    e.preventDefault();
    const idDestino = e.currentTarget.getAttribute('href');
    const destino = document.querySelector(idDestino);
    
    if (destino) {
        destino.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

const alternarMenuMobile = () => {
    const botaoMenu = document.querySelector('.botao-menu');
    const listaNav = document.querySelector('.navegacao-principal ul');

    if (botaoMenu && listaNav) {
        listaNav.classList.toggle('show');
        botaoMenu.classList.toggle('active');
    }
};

const atualizarSecaoAtiva = () => {
    const secoes = document.querySelectorAll('section');
    const linksNav = document.querySelectorAll('.navegacao-principal a');
    let atual = '';

    secoes.forEach(secao => {
        const topoSecao = secao.offsetTop;
        const alturaSecao = secao.clientHeight;
        
        if (window.pageYOffset >= topoSecao - alturaSecao / 3) {
            atual = secao.getAttribute('id');
        }
    });

    linksNav.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${atual}`) {
            link.classList.add('active');
        }
    });
};

const manipularNavegacaoTeclado = (e) => {
    const botaoMenu = document.querySelector('.botao-menu');
    const listaNav = document.querySelector('.navegacao-principal ul');

    if (e.key === 'Escape' && botaoMenu && listaNav) {
        listaNav.classList.remove('show');
        botaoMenu.classList.remove('active');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const criarParticulas = () => {
        const secaoHero = document.querySelector('.secao-hero');
        const numParticulas = 30;

        for (let i = 0; i < numParticulas; i++) {
            const particula = document.createElement('div');
            particula.className = 'particula';
            particula.style.left = Math.random() * 100 + 'vw';
            particula.style.top = Math.random() * 100 + 'vh';
            const tamanho = Math.random() * 5 + 5;
            particula.style.width = tamanho + 'px';
            particula.style.height = tamanho + 'px';
            particula.style.animationDuration = Math.random() * 5 + 5 + 's';
            secaoHero.appendChild(particula);
        }
    };

    criarParticulas();

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            const particulas = document.querySelectorAll('.particula');
            particulas.forEach(particula => particula.remove());
        }
    });

    const manipularCliqueWhatsApp = (evento) => {
        evento.preventDefault();
        const urlWhatsApp = 'https://wa.me/558191625';
        window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
    };

    const manipularScrollSuave = (evento) => {
        evento.preventDefault();
        const idDestino = evento.currentTarget.getAttribute('href');
        const destino = document.querySelector(idDestino);
        
        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', manipularScrollSuave);
    });

    const atualizarSecaoAtiva = () => {
        const secoes = document.querySelectorAll('section');
        const linksNav = document.querySelectorAll('.navegacao-principal a');
        let atual = '';

        secoes.forEach(secao => {
            const topoSecao = secao.offsetTop;
            const alturaSecao = secao.clientHeight;
            
            if (window.pageYOffset >= topoSecao - alturaSecao / 3) {
                atual = secao.getAttribute('id');
            }
        });

        linksNav.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${atual}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', atualizarSecaoAtiva);
    atualizarSecaoAtiva();
});
