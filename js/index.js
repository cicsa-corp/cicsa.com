	var ban = true;
	var ban2 = true;

	$(document).ready(function() {
		$('#fullpage').fullpage({
			anchors: ['Inicio', 'Corporativo', 'Soluciones', 'GruasMarinas', 'Equipos', 'Clientes', 'Instalaciones', 'Contacto'],
			menu: '.MainNav-List',
			slidesNavigation: true,
			verticalCentered: false,

			afterLoad: function(anchorLink, index)
			{
				//resertAnimaciones();

				$(".MainNav-LinkList").removeClass('activo');
				$(".MainNav-LinkList").eq(index-1).addClass('activo');			

				if(index == 1){
					setTimeout(function(){
						$(".Home-Img").addClass("slideDown");
					},800);

					setTimeout(function(){
						$(".Home-Center p").addClass("slideUp2");
					},1200);

					setTimeout(function(){
						$(".Home-Barra").addClass("fadeIn");
					},1600);
				}

				else if(index == 2){
					$(".Corporativo-Info").addClass("fadeIn");
					
					$(".Corporativo-Title").addClass("fadeIn");
					
					setTimeout(function(){
						$(".Corporativo-Txt").addClass("slideUp2");
					},300);
					
					setTimeout(function(){
						$(".Corporativo-Info p").eq(1).addClass("slideUp2");
					},600);
					
					setTimeout(function(){
						$(".Corporativo-Info h3").eq(0).addClass("slideUp2");
					},900);
					
					setTimeout(function(){
						$(".Corporativo-Info p").eq(2).addClass("slideUp2");
					},1200);
					
					setTimeout(function(){
						$(".Corporativo-Info h3").eq(1).addClass("slideUp2");
					},1500);
					
					setTimeout(function(){
						$(".Corporativo-Info p").eq(3).addClass("slideUp2");
					},1800);
					
					
					setTimeout(function(){
						$(".Corporativo-Logos").addClass("fadeIn");
					},2100);
				}
				else if(index == 3){
					$(".Soluciones-Title").addClass("fadeIn");
					
					setTimeout(function(){
						$(".Soluciones-Item").eq(0).addClass("slideUp2");
					},200);

					setTimeout(function(){
						$(".Soluciones-Item").eq(1).addClass("slideDown2");
					},400);	
					
					setTimeout(function(){
						$(".Soluciones-Item").eq(2).addClass("slideUp2");
					},800);			
				}
				else if(index == 4){
					$(".GruasMarinas-Center").addClass("fadeIn");
					
					$(".GruasMarinas-Title").addClass("fadeIn");
					
					setTimeout(function(){
						$(".GruasMarinas-Txt").addClass("fadeIn");
					},300);

					setTimeout(function(){
						$(".GruasMarinas-ColImg").addClass("slideRight2");
					},600);

					setTimeout(function(){
						$(".GruasMarinas-ColInfo").addClass("slideLeft2");
					},900);

					setTimeout(function(){
						$(".GruasMarinas-Imagenes img").eq(0).addClass("slideUp2");
					},1200);

					setTimeout(function(){
						$(".GruasMarinas-Imagenes img").eq(1).addClass("slideUp2");
					},1500);
					
					setTimeout(function(){
						$(".GruasMarinas-Imagenes img").eq(2).addClass("slideUp2");
					},1800);

					setTimeout(function(){
						$(".GruasMarinas-Imagenes img").eq(3).addClass("slideUp2");
					},2100);
				}
				else if(index == 5){
					$(".Equipos-Title").addClass("fadeIn");

					setTimeout(function(){
						$(".Equipos-Center p").addClass("fadeIn");
					},300);

					setTimeout(function(){
						$(".Equipos-Imagenes img").eq(0).addClass("fadeIn");
					},600);

					setTimeout(function(){
						$(".Equipos-Imagenes img").eq(1).addClass("fadeIn");
					},900);	
					
					setTimeout(function(){
						$(".Equipos-Imagenes img").eq(2).addClass("fadeIn");
					},1200);

					setTimeout(function(){
						$(".Equipos-Imagenes img").eq(3).addClass("fadeIn");
					},1500);	
					
					setTimeout(function(){
						$(".Equipos-Imagenes img").eq(4).addClass("fadeIn");
					},1800);

					setTimeout(function(){
						$(".Equipos-Imagenes img").eq(5).addClass("fadeIn");
					},2100);					
				}

				else if(index == 6){
					$(".Clientes-Title").addClass("slideDown2");

					setTimeout(function(){
						$(".Clientes-Txt").addClass("fadeIn");
					},300);

					setTimeout(function(){
						$(".Clientes-Logos img").eq(0).addClass("fadeIn");
					},600);

					setTimeout(function(){
						$(".Clientes-Logos img").eq(1).addClass("fadeIn");
					},900);
				}

				else if(index == 7){
					$(".Instalaciones-Title").addClass("slideDown2");

					setTimeout(function(){
						$(".Instalaciones-Center p").addClass("fadeIn");
					},300);
				}
				
				else if(index == 8){
					$(".Contacto-Title").addClass("slideDown2");

					setTimeout(function(){
						$(".Contacto-Txt").addClass("fadeIn");
					},300);
					
					setTimeout(function(){
						$(".Contacto-Formulario input").eq(0).addClass("slideUp2");
					},600);
					
					setTimeout(function(){
						$(".Contacto-Formulario input").eq(1).addClass("slideUp2");
					},900);
					
					setTimeout(function(){
						$(".Contacto-Formulario input").eq(2).addClass("slideUp2");
					},1200);
					
					setTimeout(function(){
						$(".Contacto-Formulario textarea").addClass("slideUp2");
					},1500);
					
					setTimeout(function(){
						$(".Contacto-Btn").addClass("slideUp2");
					},1800);
				}
			}
		});
	});
