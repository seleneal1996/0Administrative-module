

$(document).ready(function () {
    $("#img-person").tooltip();

	var readURL = function (input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('.profile-pic').attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}
	}
    let selects = $('select.select-bs');

	selects.each(function (i, e) {
		$(this).bsSelectDrop({
			btnClass: 'btn btn-outline-primary',
			btnWidth: 'auto',
			btnEmptyText: 'Seleccione',
			darkMenu: false,
			showSelectionAsList: false,
			showActionMenu: true,
			showSelectedText: (count, total) => { return `${count} de ${total} seleccionados` }
		});
	})

    $("#nuevoConjuntoGrupos").on('click', function () {
		
		$('#grupos').modal('show');
		$('#nuevoConjunto').modal('show');
	});
	
	$("#editarConjuntoGrupos").on('click', function () {
		
		$('#grupos').modal('show');
		$('#editarConjunto').modal('show');
	});
	$("#nuevoEsquema").on('click', function () {
		
		$('#esquema').modal('show');
		$('#nuevoEsquemaModal').modal('show');
	});
	$("#nuevoDetalleEsquemaBtn").on('click', function () {
		
		$('#esquema').modal('show');
		$('#nuevoDetalleEsquemaModal').modal('show');
	});
	$("#edicionDetalleEsquemaBtn").on('click', function () {
		
		$('#esquema').modal('show');
		$('#edicionDetalleEsquemaModal').modal('show');
	});
	$("#editarEsquema").on('click', function () {
		
		$('#esquema').modal('show');
		$('#editarEsquemaModal').modal('show');
	});
	$("#editarDetalleEsquema").on('click', function () {
		
		$('#esquema').modal('show');
		$('#editarDetalleEsquemaModal').modal('show');
	});
	$("#formulaBtn").on('click', function () {
		
		$('#esquema').modal('show');
		$('#editarEsquemaModal').modal('show');
		$('#formulaModal').modal('show');

	});
	$("#nuevoFormulaBtn").on('click', function () {
		
		$('#esquema').modal('show');
		$('#nuevoEsquemaModal').modal('show');
		$('#formulaModal').modal('show');

	});
	$("#editarConjuntoBtn").on('click', function () {
		
		$('#grupos').modal('show');
		$('#editarConjunto').modal('show');

	});
	$("#editarGruposBtn").on('click', function () {
		
		$('#grupos').modal('show');
		$('#editarGrupos').modal('show');

	});
	$("#editGrupoIndBtn").on('click', function () {
		
		$('#editarGrupos').modal('show');
		$('#editGrupo').modal('show');

	});
	$("#nuevoGrupoBtn").on('click', function () {
		
		$('#editarGrupos').modal('show');
		$('#nuevoGrupo').modal('show');

	});
	$("#verEstudiantesBtn").on('click', function () {
		
		$('#grupos').modal('show');
		$('#listaEModal').modal('show');

	});
	$("#eliminarDetalleEsquemaBtn").on('click', function () {
		
		$('#editarDetalleEsquemaModal').modal('show');
		$('#advertencia').modal('show');

	});
	$("#eliminarConjuntoBtn").on('click', function () {
		
		$('#grupos').modal('show');
		$('#eliminarConjunto').modal('show');

	});
	$("#eliminarGrupoBtn").on('click', function () {
		
		$('#editarGrupos').modal('show');
		$('#eliminarGrupo').modal('show');

	});
    $('#grupos, #listaEModal, #esquema').on('shown.bs.modal', function () {
		var tableModal = $('#tableModal, #gruposTable').DataTable(
			{
				
				responsive: true,
				"language": {
					"lengthMenu": "#Filas _MENU_ ",
					"emptyTable": "Ningún dato disponible en esta tabla",
					"zeroRecords": "No se encontró resultados",
					"info": "#Registros: _TOTAL_ ",
					"infoEmpty": "No se encontró resultados",
					"infoFiltered": "(filtrados de _MAX_ registros)",
					"paginate": {
						"first": "Primero",
						"last": "Último",
						"next": "Siguiente",
						"previous": "Anterior"
					},
					"search": "Buscar:",
					"searchPlaceholder": "Buscar"
				},
				"bDestroy": true

			}
	
		);
		new $.fn.dataTable.FixedHeader(tableModal);

	});
    var table = $('#notas').DataTable(
        {
            responsive: true,
            "language": {
                "lengthMenu": "#Filas _MENU_ ",
                "emptyTable": "Ningún dato disponible en esta tabla",
                "zeroRecords": "No se encontró resultados",
                "info": "#Registros: _TOTAL_ ",
                "infoEmpty": "No se encontró resultados",
                "infoFiltered": "(filtrados de _MAX_ registros)",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "search": "Buscar:",
                "searchPlaceholder": "Buscar "
            }
        }
    );
    new $.fn.dataTable.FixedHeader(table);
    
	
	$('#select-ge').on('change', function(e){
		
		var optionList = this.options[this.selectedIndex].value;
		if(optionList == 1){
			$('.busqueda-estudiante').show();
			$('.container-selectable-1,  .panel-footer, .count-items').show();

			$('.grupo-aleatorio, .text-grupo-aleatorio').hide();
			console.log("uno")
		}
		if(optionList == 2){
			$('.busqueda-estudiante').hide();
			$('.grupo-aleatorio, .text-grupo-aleatorio').show();
			$('.container-selectable-1,  .panel-footer, .count-items').hide();
			console.log("dos")
		}
	
	  });
	  $(".autocomplete__input autocomplete__input--default").on('click', function () {
		
		$('.autocomplete__input autocomplete__input--default').addClass('form-control form-control-sm');
		
	});
	 
});


