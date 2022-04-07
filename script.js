$(document).ready(() => {
  $("#documentacao").on("click", () => {
    //$('#pagina').load('documentacao.html')

    /*
		$.get('documentacao.html', data => { 
			$('#pagina').html(data)
		})
		*/
    $.post("documentacao.html", (data) => {
      $("#pagina").html(data);
    });
  });

  $("#suporte").on("click", () => {
    //$('#pagina').load('suporte.html')

    /*
		$.get('suporte.html', data => { 
			$('#pagina').html(data)
		})
		*/
    $.post("suporte.html", (data) => {
      $("#pagina").html(data);
    });
  });

  //ajax
  $("#competencia").on("change", (e) => {
    let competencia = $(e.target).val();

    $.ajax({
      type: "GET",
      url: "app.php",
      data: `competencia=${competencia}`, //x-www-form-urlencoded
      dataType: "json",
      success: (dados) => {
        $("#numeroVendas").html(dados.numeroVendas);
        $("#totalVendas").html(dados.totalVendas);
        $("#clientes_ativos").html(dados.clientes_ativos);
        $("#clientes_inativos").html(dados.clientes_inativos);
        $("#total_despesas").html(dados.total_despesas);
        $("#total_elogios").html(dados.total_elogios);
        $("#total_reclamacao").html(dados.total_reclamacao);
        $("#total_sugestao").html(dados.total_sugestao);
        // console.log(dados);
      },
      error: (erro) => {
        console.log(erro);
      },
    });

    //método, url, dados, sucesso, erro
  });
});
