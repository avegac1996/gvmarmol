/* GV MÁRMOL — catálogo tipo libro (page-flip en CSS 3D) */
(function () {
  "use strict";
  var WA = "593988007005";
  var wa = function (m) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(m); };

  var divider = function (kicker, title, sub, bg) {
    return '<div class="pg pg--divider" style="background-image:linear-gradient(rgba(14,13,11,.66),rgba(14,13,11,.78)),url(\'assets/img/' + bg + '\')">' +
      '<span class="pg__kicker">' + kicker + '</span>' +
      '<h2 class="pg__big">' + title + '</h2>' +
      '<p class="pg__sub">' + sub + '</p>' +
      '<span class="pg__rule"></span></div>';
  };

  var material = function (img, name, line) {
    return '<div class="pg pg--mat">' +
      '<div class="pg__photo" style="background-image:url(\'assets/img/' + img + '\')"></div>' +
      '<div class="pg__mbody">' +
      '<p class="pg__line">' + line + '</p>' +
      '<a class="pg__btn" target="_blank" rel="noopener" href="' + wa("Hola GV MÁRMOL, quisiera precio y disponibilidad de: " + name + ".") + '">Pedir precio por WhatsApp</a>' +
      '</div></div>';
  };

  var text = function (kicker, title, body) {
    return '<div class="pg pg--text"><span class="pg__kicker">' + kicker + '</span>' +
      '<h2 class="pg__h">' + title + '</h2>' + body + '</div>';
  };

  var photo = function (img, caption) {
    return '<div class="pg pg--photo" style="background-image:url(\'assets/img/' + img + '\')">' +
      (caption ? '<p class="pg__cap">' + caption + '</p>' : '') + '</div>';
  };

  var PAGES = [
    /* portada */
    '<div class="pg pg--cover">' +
      '<span class="pg__t">Catálogo 2026</span>' +
      '<img class="pg__clogo" src="assets/img/book-emblem.svg" alt="GV MÁRMOL">' +
      '<h1 class="pg__ctitle">GV&nbsp;MÁRMOL</h1>' +
      '<p class="pg__ctag">Superficies en piedra natural y sinterizada</p>' +
      '<span class="pg__cline"></span>' +
      '<p class="pg__t">Quito · Ecuador</p></div>',

    text('GV MÁRMOL', 'Damos forma a la piedra desde hace más de 20 años',
      '<p>Somos un taller familiar de Quito fundado por <strong>Gustavo Vega</strong>. Cortamos losas de mármol, granito y piedra sinterizada con puente CNC, pulimos cantos a mano e instalamos con precisión.</p>' +
      '<p>Este catálogo reúne nuestras superficies más pedidas y la forma en que trabajamos cada proyecto: medición en obra, corte, pulido e instalación con un solo responsable.</p>' +
      '<p class="pg__sign">Gustavo Vega<br><span>Fundador · GV MÁRMOL</span></p>'),

    text('Contenido', 'Índice',
      '<ol class="pg__toc">' +
      '<li><span>Piedra natural</span><b>05</b></li>' +
      '<li><span>Superficies técnicas</span><b>13</b></li>' +
      '<li><span>Pisos, escaleras y grano lavado</span><b>20</b></li>' +
      '<li><span>Nuestro proceso</span><b>25</b></li>' +
      '<li><span>Cómo cotizar</span><b>26</b></li>' +
      '<li><span>Contacto</span><b>27</b></li></ol>'),

    photo('foto-cocina-marmol-negro.jpg', 'Piedra que viste el espacio y dura toda la vida.'),

    divider('01', 'Piedra natural', 'Mármol, granito y cuarzo. Veta única, carácter y durabilidad para mesones, islas y revestimientos.', 'k-isla-marmol.jpg'),
    material('card-granito-san-gabriel.jpg', 'Granito Negro San Gabriel', 'Negro con cristales; muy resistente a rayones y calor. Ideal para mesones de cocina.'),
    material('card-granito-colonial-white.jpg', 'Granito Colonial White', 'Fondo claro con granos grises y granates. Tradición y distinción.'),
    material('card-granito-azul-platino.jpg', 'Granito Azul Platino', 'Oscuro con destellos azulados. Lujo y exclusividad.'),
    material('card-cuarzo-calacatta.jpg', 'Cuarzo Calacatta', 'Blanco con veta marcada, no poroso. Belleza y resistencia.'),
    material('card-cuarzo-beige.jpg', 'Cuarzo Beige', 'Beige cálido y uniforme. Combina con maderas y tonos neutros.'),

    photo('k-cocina-clasica.jpg', 'Cocina clásica · mesón de piedra oscura, Tumbaco.'),

    divider('02', 'Superficies técnicas', 'Porcelanato de gran formato y piedra sinterizada: altísima dureza, no porosas, resistentes a manchas, rayones y calor.', 'k-piedra-negra.jpg'),
    material('card-sinterizada-noir.jpg', 'Piedra Sinterizada Noir', 'Negro con veta dorada. Máxima resistencia, canto fino, gran formato.'),
    material('card-sinterizada-calacatta.jpg', 'Piedra Sinterizada Calacatta', 'Blanco con veta gris. No se mancha con vino, aceite ni cítricos.'),
    material('card-porcelanato-carrara.jpg', 'Porcelanato Carrara', 'Look mármol clásico en placas de gran formato. Fácil mantenimiento.'),
    material('card-porcelanato-cemento.jpg', 'Porcelanato Cemento', 'Acabado concreto, mate y sobrio. Moderno y versátil.'),
    material('card-porcelanato-travertino.jpg', 'Porcelanato Travertino', 'Textura pétrea cálida. Naturaleza en tu hogar.'),

    photo('k-marmol-blanco.jpg', 'Mesón y salpicadero en mármol blanco, Quito.'),

    divider('03', 'Pisos, escaleras y grano lavado', 'Pisos de mármol y porcelanato de gran formato, graderías y peldaños. Grano lavado y pulido para exteriores.', 'p-escalera-curva.jpg'),

    photo('p-piso-marmol.jpg', 'Piso de mármol Calacatta pulido, Cumbayá.'),
    photo('p-escalera-clasica.jpg', 'Gradería en mármol gris para un lobby comercial.'),

    '<div class="pg pg--mat">' +
      '<div class="pg__photo" style="background-image:url(\'assets/img/grano-textura.jpg\')"></div>' +
      '<div class="pg__mbody">' +
      '<h3 class="pg__name">Grano lavado y grano pulido</h3>' +
      '<p class="pg__line">Piso continuo hecho en obra, sin juntas, antideslizante y muy durable. Para piscinas, terrazas, fachadas, gradas de acceso y rampas accesibles.</p>' +
      '<a class="pg__btn" target="_blank" rel="noopener" href="' + wa("Hola GV MÁRMOL, quisiera cotizar grano lavado para exteriores.") + '">Pedir precio por WhatsApp</a>' +
      '</div></div>',

    photo('ext-piscina.jpg', 'Terraza y borde de piscina en grano lavado antideslizante.'),
    photo('ext-rampa-accesible.jpg', 'Rampa accesible: pendiente y textura pensadas para silla de ruedas.'),
    photo('ext-escalera-deco.jpg', 'Escalera exterior en grano lavado con diseño geométrico.'),

    text('Cómo trabajamos', 'Nuestro proceso',
      '<ol class="pg__steps">' +
      '<li><b>Medición en obra</b><span>Medidas reales y plantilla. Asesoría sobre material y canto.</span></li>' +
      '<li><b>Cotización clara</b><span>Precio por metro lineal con piedra, perforaciones, transporte y mano de obra.</span></li>' +
      '<li><b>Corte y pulido</b><span>Corte CNC, perforaciones exactas, pulido de cantos.</span></li>' +
      '<li><b>Instalación</b><span>Montaje limpio en una visita, nivelación y sellado.</span></li></ol>'),

    text('Condiciones', 'Cómo cotizar',
      '<div class="pg__facts">' +
      '<div><b>Por metro lineal</b><span>Incluye perforaciones, materiales de fijación, transporte y mano de obra.</span></div>' +
      '<div><b>Entrega ~7 días</b><span>Desde la aprobación de la proforma y el anticipo.</span></div>' +
      '<div><b>Pago 70 / 30</b><span>70% al iniciar la obra, 30% contra entrega.</span></div>' +
      '<div><b>Cambios</b><span>Toda modificación posterior a la proforma puede variar el costo.</span></div></div>' +
      '<a class="pg__btn" target="_blank" rel="noopener" href="' + wa("Hola GV MÁRMOL, quisiera una cotización. Les paso medidas / dirección:") + '">Pedir cotización</a>'),

    '<div class="pg pg--cover">' +
      '<img class="pg__clogo" src="assets/img/book-emblem.svg" alt="GV MÁRMOL">' +
      '<h2 class="pg__ctitle" style="font-size:1.7rem;letter-spacing:.06em">Hablemos</h2>' +
      '<p class="pg__cinfo">WhatsApp <strong>098 800 7005</strong><br>(02) 241 6481 · gvmarmol@hotmail.com<br>Calle Anagaes N52-521, Quito · RUC 1712721255001</p>' +
      '<a class="pg__btn pg__btn--wa" target="_blank" rel="noopener" href="' + wa("Hola GV MÁRMOL, vi el catálogo y quisiera una cotización.") + '">Escribir por WhatsApp</a>' +
      '<span class="pg__cline"></span><p class="pg__t">GV MÁRMOL · Damos forma a la piedra</p></div>'
  ];

  var book = document.getElementById("book");
  var total = PAGES.length;
  var leaves = Math.ceil(total / 2);
  var current = 0;
  var hp = (location.hash.match(/p(\d+)/) || [])[1];
  if (hp) current = Math.max(0, Math.min(leaves, parseInt(hp, 10)));

  for (var i = 0; i < leaves; i++) {
    var leaf = document.createElement("div");
    leaf.className = "leaf";
    var front = PAGES[i * 2] || "";
    var back = PAGES[i * 2 + 1] || '<div class="pg pg--blank"></div>';
    leaf.innerHTML =
      '<div class="face face--front"><div class="face__inner">' + front + '<span class="folio">' + (i * 2 + 1) + '</span></div></div>' +
      '<div class="face face--back"><div class="face__inner">' + back + '<span class="folio">' + (i * 2 + 2) + '</span></div></div>';
    book.appendChild(leaf);
  }
  var leafEls = Array.prototype.slice.call(book.querySelectorAll(".leaf"));
  var prevBtn = document.getElementById("prev");
  var nextBtn = document.getElementById("next");
  var counter = document.getElementById("counter");

  function render() {
    leafEls.forEach(function (l, idx) {
      var flipped = idx < current;
      l.classList.toggle("flipped", flipped);
      l.style.zIndex = flipped ? idx + 1 : leaves - idx + 1;
    });
    book.classList.toggle("at-start", current === 0);
    book.classList.toggle("at-end", current === leaves);
    counter.textContent = current === 0 ? "Portada"
      : current === leaves ? "Contraportada"
      : "Págs. " + (current * 2) + "–" + Math.min(current * 2 + 1, total);
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === leaves;
  }
  function next() { if (current < leaves) { current++; render(); } }
  function prev() { if (current > 0) { current--; render(); } }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  book.addEventListener("click", function (e) {
    if (e.target.closest("a")) return;
    var r = book.getBoundingClientRect();
    (e.clientX - r.left) / r.width > 0.5 ? next() : prev();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "PageDown") next();
    if (e.key === "ArrowLeft" || e.key === "PageUp") prev();
  });
  var x0 = null;
  book.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  book.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (dx < -40) next(); else if (dx > 40) prev();
    x0 = null;
  }, { passive: true });

  render();
})();
