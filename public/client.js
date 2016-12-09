$(function(){
  $.get('/blocks', appendToList);

  function appendToList(blocks) {
    var list =[];
    for(var i in blocks) {
      block = blocks[i];
      content = '<a href="blocks"/'+block+'">'+block+'</a>';
      list.push($('<li>', { html: content }));
    }
    $('.block-list').append(list);
  }

  $('form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var blcokData = form.serialize();

    $.ajax({
      type:'POST', url:'/blcok', data: blockData
    }).done(function.(blockName) {
      appendToList([blockName]);
      form.trigger('reset');
    });
  });
});
