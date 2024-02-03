$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nova-tarefa').val();
    const novoItem = $(`<li>${novaTarefa}</li>`);
    novoItem.appendTo('ul');

    $('#efeito-click').click(()=>{
        $('li').css({"text-decoration":"line-through"})
    })
})
