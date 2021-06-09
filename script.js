/*------------------------------
Codigo JavaScript para la pagina de cafeteria-------*/


/*-------------Efecto Scroll Menu---------------------------*/

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
})

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('#navu').addClass('black');
    }
    else{
        $('#navu').removeClass('black');
    }
})


/*-------------Menu responsive efecto toggle---(actualizar)---------------*/

$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});
/*-------------Efecto transicion slider------------------*/
$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 5000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});

//Validacion del formulario con expresiones regulares//


//Expresiones Regulares//

const expresiones ={
	nombre: /^[a-zA-ZÀ-ÿ]{3,15}$/, //Valida el nombre, el largo, incluyendo tildes y mayusculas.
	apellido: /^[a-zA-ZÀ-ÿ]{3,10}$/, //Valida el apellido, el largo, incluyendo tildes y mayusculas.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Valida la variedad existente de correos electronicos
	telefono: /^\d{8,8}$/, //Valida el numero de telefono, solo acepta de 8 digitos.
}

//Funciones


function veri(){
	var nom = document.getElementById('nombre-form').value;
	var lastname = document.getElementById("apellido-form").value;
	var mail = document.getElementById('email-form').value;
	var celu = document.getElementById('tel-form').value;

	//Validacion
	if(expresiones.nombre.test(nom)){

		document.getElementById('txt-error-nombre').innerHTML = "";
	}
	else{
		document.getElementById('txt-error-nombre').innerHTML = "El nombre tiene que ser de 4 a 10 dígitos y debe contener solo letras.";
	}

	if(expresiones.apellido.test(lastname)){

		document.getElementById('txt-error-apellido').innerHTML = "";
	}
	else{
		document.getElementById('txt-error-apellido').innerHTML = "El apellido tiene que ser de 4 a 10 dígitos y debe contener solo letras.";
	}

	if(expresiones.correo.test(mail)){

		document.getElementById('txt-error-email').innerHTML = "";
	}
	else{
		document.getElementById('txt-error-email').innerHTML = "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
	}

	if(expresiones.telefono.test(celu)){

		document.getElementById('txt-error-tel').innerHTML = "";
	}
	else{
		document.getElementById('txt-error-tel').innerHTML = "El telefono solo puede contener numeros y el maximo son 8 dígitos.";
	}

}