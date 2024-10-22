$(document).ready(function() {
	
	$("#txtCep").mask("99999-999");
	
	$("#btnConsultar").on("click", function() {
		
		if ($("#txtCep").val() != "") {
			
			setAguarde();
				
			$.getJSON("https://viacep.com.br/ws/" + $("#txtCep").val().replace(/[^\d]+/g, "") + "/json/?callback=?", function(dados) {
				
				if (!("erro" in dados)) {
					
					$("#txtLogradouro").val(dados.logradouro.toUpperCase());
					$("#txtComplemento").val(dados.complemento == "" ? "SEM COMPLEMENTO" : dados.complemento.toUpperCase());
					$("#txtBairro").val(dados.bairro.toUpperCase());
					$("#txtLocalidade").val(dados.localidade.toUpperCase());
					$("#txtUf").val(dados.uf);
					$("#txtIbge").val(dados.ibge);
					$("#txtGia").val(dados.gia);
					$("#txtDdd").val(dados.ddd);
					$("#txtSiafi").val(dados.siafi);
					
				} else {
					
					Swal.fire({
						title: "Oops!",
						text: "O CEP informado não foi encontrado!",
						icon: "error"
					});
					
				}
				
			});
			
		} else {
			
			Swal.fire({
				title: "Oops!",
				text: "Informe um CEP para consultar!",
				icon: "error"
			});
			
		}
		
	});
	
	$("#btnLimpar").on("click", function() {
		
		$("#txtLogradouro").val("");
		$("#txtComplemento").val("");
		$("#txtBairro").val("");
		$("#txtLocalidade").val("");
		$("#txtUf").val("");
		$("#txtIbge").val("");
		$("#txtGia").val("");
		$("#txtDdd").val("");
		$("#txtSiafi").val("");
		$("#txtCep").val("");
		$("#txtCep").focus();
		
	});
	
});

function setAguarde() {
	$("#txtLogradouro").val("Aguarde..");
	$("#txtComplemento").val("Aguarde..");
	$("#txtBairro").val("Aguarde..");
	$("#txtLocalidade").val("Aguarde..");
	$("#txtUf").val("Aguarde..");
	$("#txtIbge").val("Aguarde..");
	$("#txtGia").val("Aguarde..");
	$("#txtDdd").val("Aguarde..");
	$("#txtSiafi").val("Aguarde..");
}