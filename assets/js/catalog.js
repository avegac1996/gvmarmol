/* GV MÁRMOL — catálogo tipo libro (page-flip en CSS 3D) */
(function () {
  "use strict";
  var WA = "593988007005";
  var wa = function (m) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(m); };

  /* ---------- mismo libro de portada que el inicio ---------- */
  var intro = document.getElementById("bookIntro");
  if (intro) {
    if (/[?&]nointro/.test(location.search)) {
      intro.remove();
    } else {
      var bk = intro.querySelector(".book");
      var hint = intro.querySelector(".book__hint");
      var closed = false, fb;
      var close = function () {
        if (closed) return; closed = true; clearTimeout(fb);
        document.body.style.overflow = "";
        intro.classList.add("is-hidden");
        setTimeout(function () { intro.remove(); }, 900);
      };
      var open = function () {
        bk.classList.add("is-open");
        if (hint) hint.textContent = "Toca para hojear";
        fb = setTimeout(close, 9000);
      };
      var onClick = function () { bk.classList.contains("is-open") ? close() : open(); };
      document.body.style.overflow = "hidden";
      bk.addEventListener("click", onClick);
      bk.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); }
      });
      intro.querySelector(".book-intro__skip").addEventListener("click", close);
    }
  }

  var src = function (f) { return 'assets/img/' + f; };

  var divider = function (kicker, title, sub, bg) {
    return '<div class="pg pg--divider">' +
      '<img class="pg__bg" src="' + src(bg) + '" alt="" loading="lazy">' +
      '<span class="pg__kicker">' + kicker + '</span>' +
      '<h2 class="pg__big">' + title + '</h2>' +
      '<p class="pg__sub">' + sub + '</p>' +
      '<span class="pg__rule"></span></div>';
  };

  var material = function (img, family, name, note, body, spec) {
    return '<div class="pg pg--mat">' +
      '<div class="pg__mfig">' +
        '<img src="' + src(img) + '" alt="' + family + ' ' + name + '" loading="lazy">' +
        '<span class="pg__ftag">' + family + '</span></div>' +
      '<div class="pg__mbody">' +
        '<span class="pg__kicker">' + note + '</span>' +
        '<h3 class="pg__name">' + name + '</h3>' +
        '<p class="pg__body">' + body + '</p>' +
        '<p class="pg__spec">' + spec + '</p>' +
        '<a class="pg__btn" target="_blank" rel="noopener" href="' +
          wa("Hola GV MÁRMOL, quisiera precio y disponibilidad de: " + family + " " + name + ".") +
          '">Pedir precio por WhatsApp</a>' +
      '</div></div>';
  };

  var text = function (kicker, title, body) {
    return '<div class="pg pg--text"><span class="pg__kicker">' + kicker + '</span>' +
      '<h2 class="pg__h">' + title + '</h2>' + body + '</div>';
  };

  var photo = function (img, caption) {
    return '<div class="pg pg--photo">' +
      '<img class="pg__bg" src="' + src(img) + '" alt="" loading="lazy">' +
      (caption ? '<p class="pg__cap">' + caption + '</p>' : '') + '</div>';
  };

  var PAGES = [
    text('GV MÁRMOL · Quito', 'Damos forma a la piedra desde hace más de 20 años',
      '<p>Somos un taller familiar de Quito fundado por <strong>Gustavo Vega</strong>. Empezamos con grano lavado y hoy cortamos losas de mármol, granito y piedra sinterizada con puente CNC, pulimos cantos a mano e instalamos con precisión milimétrica.</p>' +
      '<p>Este catálogo recorre nuestras superficies —mármol, granito, cuarzo, porcelanato de gran formato, piedra sinterizada y grano lavado— y explica de qué está hecha cada una y dónde luce mejor.</p>' +
      '<p class="pg__sign">Gustavo Vega<br><span>Fundador y director · GV MÁRMOL</span></p>'),

    text('Contenido', 'Índice',
      '<ol class="pg__toc">' +
      '<li><span>Mármol</span><b>04</b></li>' +
      '<li><span>Granito</span><b>10</b></li>' +
      '<li><span>Cuarzo</span><b>16</b></li>' +
      '<li><span>Porcelanato gran formato</span><b>20</b></li>' +
      '<li><span>Piedra sinterizada</span><b>26</b></li>' +
      '<li><span>Grano lavado · exteriores</span><b>30</b></li>' +
      '<li><span>Proceso y cómo cotizar</span><b>36</b></li></ol>'),

    photo('foto-cocina-marmol-negro.jpg', 'La piedra bien elegida y bien instalada dura toda la vida.'),

    /* ---- MÁRMOL ---- */
    divider('01', 'Mármol', 'La piedra más noble y decorativa. Veta irregular y única en cada plancha, tacto sedoso y una pátina que mejora con los años. Para baños, revestimientos y los detalles donde manda la estética.', 'k-isla-marmol.jpg'),
    material('k-isla-marmol.jpg', 'Mármol', 'Blanco Carrara', 'Blanco cálido · veta gris fina',
      'El mármol de siempre. Sobre un fondo blanco cálido corren vetas grises finas y difusas, nunca iguales. Pulido refleja la luz y da amplitud; apomazado se vuelve mate y sedoso. Es piedra viva: con el uso toma carácter.',
      'Acabado pulido o apomazado · Plancha 2 cm · Baños, revestimientos, mesas'),
    material('foto-cocina-calacatta.jpg', 'Mármol', 'Calacatta', 'Blanco puro · veta dorada y gris',
      'El más señorial de los blancos. Vetas anchas en gris y oro cruzan un fondo casi puro con un dibujo dramático. Cada plancha es una obra única; conviene elegirla en persona. Se reserva para el elemento protagonista: una isla, una chimenea, un baño principal.',
      'Acabado pulido · Plancha 2 cm · Islas, chimeneas, baños principales'),
    material('foto-cocina-marmol-negro.jpg', 'Mármol', 'Negro Marquina', 'Negro profundo · veta blanca nítida',
      'Negro intenso cortado por venas blancas casi gráficas. Es el contraste llevado al límite: sobrio y a la vez teatral. Funciona en superficies acotadas —un mesón de baño, un piso de acento, la recepción de un local— donde remata sin competir.',
      'Acabado pulido · Plancha 2 cm · Baños, pisos de acento, recepciones'),

    photo('k-marmol-blanco.jpg', 'Mesón y salpicadero en mármol blanco — residencia en Quito.'),

    /* ---- GRANITO ---- */
    divider('02', 'Granito', 'La piedra más resistente a rayones y calor, y casi nada porosa. La preferida para el mesón de cocina que se usa a diario, durante años, sin miramientos.', 'k-piedra-negra.jpg'),
    material('k-piedra-negra.jpg', 'Granito', 'Negro San Gabriel', 'Negro · cristales que destellan',
      'Granito ecuatoriano de fondo negro con cristales que brillan al girar la luz. Durísimo, resistente al calor directo y a los rayones, prácticamente no absorbe líquidos. Es el mesón que se usa sin miedo cada día y sigue igual con los años.',
      'Acabado pulido o flameado · Plancha 2–3 cm · Mesones de cocina, barras'),
    material('k-cocina-clasica.jpg', 'Granito', 'Colonial White', 'Fondo claro · granos grises y granates',
      'Fondo luminoso salpicado de granos grises y granates, con movimiento parejo y sin sorpresas de plancha a plancha. Combina con madera, con blanco y con acero. Un clásico noble para quien quiere granito en clave clara.',
      'Acabado pulido · Plancha 2–3 cm · Mesones, islas, mesones de exterior'),
    material('k-terrazo-azul.jpg', 'Granito', 'Azul Platino', 'Oscuro · reflejos azulados',
      'Oscuro, con reflejos azules que aparecen y desaparecen según la luz. Es el granito de las cocinas de autor: presencia, exclusividad y la resistencia de siempre.',
      'Acabado pulido · Plancha 2–3 cm · Mesones e islas de cocina'),

    photo('k-marmol-blanco.jpg', 'Mesón y salpicadero en mármol blanco — residencia en Quito.'),

    /* ---- CUARZO ---- */
    divider('03', 'Cuarzo', 'Cuarzo de ingeniería: la estética de la piedra natural con superficie no porosa, veta consistente y cero mantenimiento. No necesita sellado.', 'k-terrazo-azul.jpg'),
    material('foto-cocina-marmol-dorado.jpg', 'Cuarzo', 'Calacatta', 'Blanco · veta gris consistente',
      'La estética del mármol Calacatta sin ninguna de sus exigencias. No es poroso: no se mancha con vino, café ni cítricos y no lleva sellado. La veta es pareja de plancha a plancha, así que el proyecto se planifica sin sorpresas.',
      'Acabado pulido · Plancha 2 cm · Mesones de cocina y baño'),
    material('k-gris-madera.jpg', 'Cuarzo', 'Beige', 'Beige cálido · textura uniforme',
      'Beige cálido, textura homogénea, cero drama. La base neutra que deja hablar a la madera y al resto de la cocina, con la misma resistencia y facilidad de cualquier cuarzo.',
      'Acabado pulido · Plancha 2 cm · Mesones, islas, revestimientos'),

    /* ---- PORCELANATO ---- */
    divider('04', 'Porcelanato gran formato', 'Placas de hasta 160 × 320 cm, livianas y estables, con juntas mínimas y mantenimiento nulo. Sirven para piso, pared y fachada con la misma pieza.', 'k-marmol-blanco.jpg'),
    material('k-marmol-blanco.jpg', 'Porcelanato', 'Carrara', 'Look mármol · gran formato',
      'Reproduce el mármol Carrara en placas enormes con juntas casi invisibles. Liviano, estable y sin mantenimiento. La misma pieza resuelve el piso, la pared del baño y la fachada ventilada.',
      'Formato hasta 160×320 cm · 6–12 mm · Pisos, paredes, fachadas'),
    material('p-piso-marmol.jpg', 'Porcelanato', 'Cemento', 'Concreto pulido · mate',
      'El aspecto del concreto pulido sin fisuras ni curado. Mate, gris parejo, urbano. Une pisos continuos de gran superficie con un acabado sobrio y actual.',
      'Gran formato · 9–12 mm · Pisos continuos, locales, oficinas'),
    material('ext-entrada-villa.jpg', 'Porcelanato', 'Travertino', 'Textura pétrea · cálido',
      'La calidez y los poros del travertino, pero antideslizante, sin sellado y apto para exterior. Para terrazas, halls y zonas húmedas.',
      'Gran formato · 9–20 mm · Terrazas, halls, zonas húmedas'),

    /* ---- SINTERIZADA ---- */
    divider('05', 'Piedra sinterizada', 'Lo más duro que instalamos. No porosa, resistente al calor directo, a los rayones y a toda mancha. Canto finísimo y formatos enormes para islas con canto waterfall.', 'foto-cocina-marmol-negro.jpg'),
    material('foto-cocina-marmol-negro.jpg', 'Piedra sinterizada', 'Noir', 'Negro · veta dorada sutil',
      'La superficie definitiva para una cocina exigente. Negro con una veta dorada discreta, canto finísimo y formatos grandes. Aguanta el calor directo de una olla, no se raya con el cuchillo y no le entra ninguna mancha.',
      'Sinterizada · 12 mm · Islas con canto waterfall, mesones, mesas'),
    material('foto-cocina-calacatta.jpg', 'Piedra sinterizada', 'Calacatta', 'Blanco · veta gris',
      'El blanco con veta gris del Calacatta con la resistencia total de la piedra sinterizada. Ni el vino, ni el aceite, ni los cítricos la afectan y no necesita sellado nunca. Belleza sin cuidados.',
      'Sinterizada · 12 mm · Mesones e islas de cocina, baños'),

    /* ---- GRANO LAVADO ---- */
    divider('06', 'Grano lavado · exteriores', 'Pisos continuos hechos en obra con áridos de canto rodado a la vista: sin juntas, antideslizantes y muy durables. La opción de siempre para el exterior, con acabado prolijo.', 'ext-piscina.jpg'),
    material('grano-textura.jpg', 'Grano lavado', 'Grano lavado y grano pulido', 'Árido a la vista · antideslizante',
      'Mortero con áridos de canto rodado expuestos. Ajustamos la textura y el color de la piedra según el uso: más rugoso donde se necesita agarre —bordes de piscina, rampas— y más fino donde manda la estética. Continuo, sin juntas donde se acumule suciedad.',
      'Hecho en obra · Piscinas, terrazas, fachadas, gradas y rampas accesibles'),

    photo('ext-piscina.jpg', 'Terraza y borde de piscina en grano lavado antideslizante.'),
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
      '<p class="pg__cinfo">WhatsApp <strong>098 800 7005</strong><br>(02) 241 7545 · gvmarmol@hotmail.com<br>Calle Anagaes N52-521, Quito · RUC 1712721255001</p>' +
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

  var leaving = false, leaveTimer;
  function render() {
    leafEls.forEach(function (l, idx) {
      var flipped = idx < current;
      l.classList.toggle("flipped", flipped);
      l.style.zIndex = flipped ? idx + 1 : leaves - idx + 1;
    });
    book.classList.toggle("at-start", current === 0);
    book.classList.toggle("at-end", current === leaves);
    var atEnd = current === leaves;
    counter.textContent = current === 0 ? "Presentación"
      : atEnd ? (leaving ? "Volviendo al sitio…" : "Contraportada")
      : "Págs. " + (current * 2) + "–" + Math.min(current * 2 + 1, total);
    prevBtn.disabled = current === 0;
    nextBtn.disabled = atEnd;

    /* al llegar al final: cerrar el catálogo y volver al sitio */
    if (atEnd && !leaving) {
      leaving = true;
      leaveTimer = setTimeout(function () {
        document.body.classList.add("catalog-out");
        setTimeout(function () { window.location.href = "index.html?nointro"; }, 750);
      }, 2200);
    } else if (!atEnd && leaving) {
      leaving = false; clearTimeout(leaveTimer);
    }
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
