var target = 0;

$(document).ready(function () {
	// Eventos
	$(".control").click(cambiarImagen);
	$(".previous").click(anteriorImagen);
	$(".next").click(siguienteImagen);
});

var cambiarImagen = function () {
	target = parseInt($(this).data("target"));
	mostrarImagen(target);
};

var mostrarImagen = function (target) {
	$("div.active").removeClass("active");
	$("div[data-slide='" + target + "']").addClass("active");
};

var anteriorImagen = function (e) {
	e.preventDefault();
	target = target - 1;
	target = (target < 0) ? 3 : target;
	mostrarImagen(target);
};

var siguienteImagen = function (e) {
	e.preventDefault();
	target = target + 1;
	target = (target > 3) ? 0 : target;
	mostrarImagen(target);mostrarImagen(target);
};
