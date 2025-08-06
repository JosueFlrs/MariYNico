let musicaActivada = false;
let contadorInterval;

function entrarConMusica() {
    musicaActivada = true;
    const audio = document.getElementById('musica-fondo');
    if (audio) {
        audio.play().catch(function (error) {
            console.log('No se pudo reproducir la música automáticamente');
        });
    }
    mostrarInvitacion();
}

function entrarSinMusica() {
    musicaActivada = false;
    mostrarInvitacion();
}

function actualizarIconoMusica() {
    const audio = document.getElementById('musica-fondo');
    const icono = document.getElementById('icono-musica');
    if (!icono || !audio) return;
    if (audio.paused) {
        icono.innerHTML = '&#9658;';
    } else {
        icono.innerHTML = '&#10074;&#10074;';
    }
}

function mostrarInvitacion() {
    document.getElementById('bienvenida').style.display = 'none';

    const secciones = document.querySelectorAll('.oculto');
    secciones.forEach(function (seccion) {
        seccion.style.display = 'block';
    });

    const botonMusica = document.getElementById('boton-musica');
    if (musicaActivada && botonMusica) {
        botonMusica.style.display = 'flex';
    } else if (botonMusica) {
        botonMusica.style.display = 'none';
    }

    actualizarIconoMusica();
    iniciarContador();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function iniciarContador() {
    const fechaBoda = new Date('2025-11-23T12:00:00');

    contadorInterval = setInterval(function () {
        const ahora = new Date().getTime();
        const tiempoRestante = fechaBoda.getTime() - ahora;

        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        document.getElementById('dias').textContent = dias;
        document.getElementById('horas').textContent = horas;
        document.getElementById('minutos').textContent = minutos;
        document.getElementById('segundos').textContent = segundos;

        if (tiempoRestante < 0) {
            clearInterval(contadorInterval);
            document.getElementById('dias').textContent = '0';
            document.getElementById('horas').textContent = '0';
            document.getElementById('minutos').textContent = '0';
            document.getElementById('segundos').textContent = '0';
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('musica-fondo');
    if (audio) {
        audio.addEventListener('ended', function () {
            if (musicaActivada) {
                audio.currentTime = 0;
                audio.play();
            }
        });
    }
});

function toggleMusica() {
    const audio = document.getElementById('musica-fondo');
    if (audio) {
        if (audio.paused) {
            audio.play();
            musicaActivada = true;
        } else {
            audio.pause();
            musicaActivada = false;
        }
        actualizarIconoMusica();
    }
}

function animarAlScroll() {
    const elementos = document.querySelectorAll('.evento-card, .info-item, .entrada-animada');

    elementos.forEach(function (elemento) {
        const posicion = elemento.getBoundingClientRect();
        const alturaVentana = window.innerHeight;

        if (posicion.top < alturaVentana && posicion.bottom > 0) {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animarAlScroll);

document.addEventListener('DOMContentLoaded', function () {
    const elementos = document.querySelectorAll('.evento-card, .info-item, .entrada-animada');
    elementos.forEach(function (elemento) {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(80px)';
        elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    setTimeout(animarAlScroll, 100);
});


function mostrarModalCuenta() {
    document.getElementById('modal-cuenta').classList.remove('oculto');
}
function cerrarModalCuenta() {
    document.getElementById('modal-cuenta').classList.add('oculto');
}

document.addEventListener("DOMContentLoaded", function() {
    lottie.loadAnimation({
    container: document.getElementById('icono-deseos-lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/video/chat.json'
    });

    lottie.loadAnimation({
    container: document.getElementById('icono-camara-lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/video/camara.json'
    });

    lottie.loadAnimation({
    container: document.getElementById('icono-caja-lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/video/caja.json'
    });

    lottie.loadAnimation({
    container: document.getElementById('icono-confirmacion-lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/video/confirmacion.json'
    });
});

const fotosGaleria = [
    'assets/image/foto1.png',
    'assets/image/novios.png',
    'assets/image/novios.png',
    'assets/image/novios.png',
];
let indiceFoto = 0;

function cambiarFoto(direccion) {
    indiceFoto += direccion;
    if (indiceFoto < 0) indiceFoto = fotosGaleria.length - 1;
    if (indiceFoto >= fotosGaleria.length) indiceFoto = 0;
    const img = document.getElementById('foto-galeria');
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = fotosGaleria[indiceFoto];
        img.style.opacity = 1;
    }, 200);
}

window.addEventListener('load', function() {
    const heartLoader = document.getElementById('heart-loader');
    if (heartLoader) {
        setTimeout(function() {
            heartLoader.style.opacity = '0';
            setTimeout(function() {
                if (heartLoader.parentNode) {
                    heartLoader.parentNode.removeChild(heartLoader);
                }
            }, 500); 
        }, 2000); 
    }
});
