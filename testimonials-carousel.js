// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
  const data = [
    { name: "Juan P · ", city: "Asunción · ", time: "10:28 (am)", text: "Vi el anuncio de Wonbet.vip en Instagram y, gracias al bono del 200%, pude jugar más y gané al instante. El pago fue inmediato." },
    { name: "María C · ", city: "Ciudad del Este · ", time: "9:34 (pm)", text: "El bono del 200% de Wonbet.vip me dio una gran ventaja cuando recién empecé. Ya recomendé la plataforma a mis amigos." },
    { name: "Pedro A · ", city: "Encarnación · ", time: "7:20 (pm)", text: "Los cajeros de Wonbet.vip son muy responsables y siempre cumplen con los retiros. Pagaron mi ganancia al instante." },
    { name: "Ana O · ", city: "Pilar · ", time: "8:57 (am)", text: "Entré a Wonbet.vip por una historia de Instagram y aproveché el bono del 200%. ¡Fue mi primera gran victoria!" },
    { name: "Carlos M · ", city: "San Lorenzo · ", time: "3:46 (pm)", text: "En Wonbet.vip pagan en el momento. Cuando solicité mi retiro, apareció en mi cuenta en minutos." },
    { name: "Lucía A · ", city: "Luque · ", time: "5:55 (pm)", text: "Gracias al bono del 200% de Wonbet.vip, pude jugar más tiempo y tuve suerte. Pagaron mi retiro sin demoras." },
    { name: "Luis G · ", city: "Lambaré · ", time: "11:03 (am)", text: "El servicio de retiro en Wonbet.vip es impecable. Mi amiga retiró pagos muy grandes y le llegó todo al instante." },
    { name: "Verónica R · ", city: "Ñemby · ", time: "8:18 (pm)", text: "No confiaba al principio, pero Wonbet.vip pagó mi ganancia al instante. Los cajeros son muy responsables." },
    { name: "Diego S · ", city: "Caacupé · ", time: "9:42 (am)", text: "Me recomendaron Wonbet.vip y el bono del 200% fue una maravilla para comenzar. Ya he retirado algunas ganancias rápido." },
    { name: "Karina L · ", city: "Villarrica · ", time: "12:30 (pm)", text: "Wonbet paga en el momento y los cajeros cumplen con cada retiro. ¡Recomiendo la plataforma!" },
    { name: "Martín V · ", city: "Concepción · ", time: "2:48 (pm)", text: "La experiencia en Wonbet fue excelente: bono del 200% al registrarme y retiros inmediatos." },
    { name: "Gabriela B · ", city: "Salto del Guairá · ", time: "1:17 (pm)", text: "Entré a Wonbet gracias al bono del 200% y gané en mi primera sesión. El pago fue instantáneo." },
    { name: "Ramón O · ", city: "Caaguazú · ", time: "4:10 (pm)", text: "El bono inicial del 200% en Wonbet me da un gran impulso. Cuando gané, retiré y me pagaron al instante." },
    { name: "Paola F · ", city: "Itauguá · ", time: "6:00 (pm)", text: "Los cajeros de Wonbet cumplen con cada retiro. Mi amiga retiró pagos muy grandes y le pagaron de inmediato." },
    { name: "Roberto C · ", city: "Ciudad del Este · ", time: "7:45 (pm)", text: "Entré a Wonbet sin expectativas, usé el bono del 200% y gané. El pago llegó instantáneo." },
    { name: "Patricia D · ", city: "Coronel Oviedo · ", time: "10:05 (am)", text: "Juego en mi cama con Wonbet y, gracias al bono del 200%, conseguí mi primera ganancia. Pagaron al instante 🛏️💸" },
    { name: "Fernando L · ", city: "San Pedro · ", time: "10:30 (pm)", text: "Vi el bono del 200% en Wonbet y no lo dudé. Gané y el pago fue inmediato." },
    { name: "Sandra M · ", city: "Caacupé · ", time: "7:59 (am)", text: "El trato en Wonbet es profesional: los cajeros son responsables y mis retiros siempre se procesan al instante." },
    { name: "Jorge N · ", city: "Encarnación · ", time: "11:12 (pm)", text: "Wonbet me sorprendió: el bono del 200% me ayudó a ganar al principio y pagaron mi retiro al instante." },
    { name: "Claudia P · ", city: "Luque · ", time: "9:15 (am)", text: "Las tragamonedas en Wonbet son divertidas y, gracias al bono del 200%, tuve más oportunidades. Retiro instantáneo." },
    { name: "Hugo T · ", city: "Asunción · ", time: "8:45 (pm)", text: "Wonbet paga en el momento; cuando retiré, los cajeros fueron muy responsables y cumplidores." },
    { name: "Carla S · ", city: "San Lorenzo · ", time: "1:22 (pm)", text: "Disfruto jugar póker en Wonbet. El bono del 200% me dio buen impulso y el pago llegó rápido." },
    { name: "Daniel N · ", city: "Pilar · ", time: "5:30 (pm)", text: "Gracias al bono del 200% de Wonbet, gané en mi primera partida. El retiro fue instantáneo y sin problemas." },
    { name: "Miguel V · ", city: "Concepción · ", time: "9:10 (pm)", text: "Cobré mis ganancias en Wonbet en minutos. Los cajeros son responsables y cumplen con los retiros." },
    { name: "Lucía O · ", city: "Coronel Oviedo · ", time: "12:05 (pm)", text: "La plataforma de Wonbet es muy intuitiva. El bono del 200% facilitó mi inicio y el pago fue inmediato." },
    { name: "Ramona R · ", city: "Villarrica · ", time: "6:40 (pm)", text: "Los juegos de blackjack en Wonbet son geniales y, con el bono del 200%, gané más. Me pagaron al instante." },
    { name: "Dolores F · ", city: "Itauguá · ", time: "8:25 (am)", text: "El bono de bienvenida del 200% en Wonbet me permitió probar varios juegos y ganar. El retiro fue inmediato." },
    { name: "Sergio C · ", city: "Caacupé · ", time: "3:55 (pm)", text: "La sección de apuestas deportivas en Wonbet es de 5 estrellas. Usé el bono del 200% y retiré al instante." },
    { name: "Paula G · ", city: "San Pedro · ", time: "11:48 (am)", text: "Me llamó la atención la variedad de ruletas en Wonbet. Gracias al bono del 200%, gané y el pago fue inmediato." },
    { name: "Diego A · ", city: "Ciudad del Este · ", time: "10:01 (pm)", text: "En Wonbet pagan en el momento; mi amiga retiró un pago muy grande y todo llegó enseguida." },
    { name: "Ana T · ", city: "Luque · ", time: "4:37 (pm)", text: "El retiro por transferencia bancaria en Wonbet fue instantáneo. El bono del 200% me ayudó a empezar." },
    { name: "Federico U · ", city: "San Lorenzo · ", time: "7:27 (pm)", text: "Las bonificaciones semanales y el bono del 200% en Wonbet me mantienen enganchado. Los retiros son instantáneos." }
];


  const container = document.getElementById('testimonialsCarousel');
  let idx = 0, timer;

  // Crear y anexar elementos al contenedor
  data.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
   div.innerHTML = `
  <p class="header">
    👤 ${item.name.trim()}
    <span class="time">${item.time}</span>
  </p>
  <p class="message">
    "${item.text}"
  </p>
  <p class="meta">
    📌 ${item.city.trim()}
  </p>
`;

    container.appendChild(div);
  });

  const items = container.querySelectorAll('.testimonial-item');

  function show(index) {
    items.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function next() {
    idx = (idx + 1) % items.length;
    show(idx);
  }

  // Mostrar el primero y lanzar auto-scroll
  show(0);
  timer = setInterval(next, 4000);

  // Pausar al hacer hover o touch
  container.addEventListener('mouseenter', () => clearInterval(timer));
  container.addEventListener('mouseleave', () => timer = setInterval(next, 4000));
  container.addEventListener('touchstart', () => clearInterval(timer));
  container.addEventListener('touchend', () => timer = setInterval(next, 4000));
})();


