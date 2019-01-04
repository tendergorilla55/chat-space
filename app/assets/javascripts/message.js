$(function(){
  function buildHTML(data){
    var image = message.image ? `<img src="${message.image}"> ` : ""
    var html = `<div class="chat-main__message clearfix">
                  <div class="chat-main__message-name">
                    ${message.name}
                  </div>
                  <div class="chat-main__message-time">
                    ${message.time}
                  </div>
                  <p class="chat-main__message-body">
                    ${message.body}
                  </p>
                  <p class="chat-main__message-body">
                    ${image}
                  </p>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this);
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      datatype: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__body--messages-list').append(html)
      $('.message').val('')
      $('.chat-main__body--messages-list').animate({scrollTop: $('.chat-main__body--messages-list')[0].scrollHeight}, 'fast')
    })
    .fale(function(){
      alert('error');
    })
  })
});
