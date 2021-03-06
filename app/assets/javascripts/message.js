$(function(){
  function buildHTML(message){
    var image = message.image ? `<img src="${message.image}" class="chat-main__message-body"> ` : "" ;
    var html = `<div class="chat-main__message clearfix" deta-message-id="${message.id}">
                  <div class="chat-main__message-name">
                    ${message.user_name}
                  </div>
                  <div class="chat-main__message-time">
                    ${message.time}
                  </div>
                  <p class="chat-main__message-body">
                    ${message.body}
                  </p>
                  ${image}
                </div>`
    return html;
  }

  function clearBox(html){
    $('.chat-main__body--messages-list').append(html);
    $('.message').val('');
    $('.chat-main__body').animate({scrollTop: $('.chat-main__body')[0].scrollHeight}, 'fast');
  }

  $('#send_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      clearBox(html);
    })
    .fail(function() {
      alert('error');
    })
  });

  var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      if ($('.chat-main__message')[0]) {
        var messageId = $('.chat-main__message:last').data('messageId');
      } else {
        var messageId = 0;
      }
      $.ajax({
        url: location.href.json,
        type: 'GET',
        data: {id: messageId},
        dataType: 'json'
      })
      .done(function(messages) {
        var insertHTML = "";
        messages.forEach(function(message) {
          insertHTML += buildHTML(message);
        });
        $('.chat-main__body--messages-list').append(insertHTML);
        $('.chat-main__body').animate({scrollTop: $('.chat-main__body')[0].scrollHeight}, 'fast');
      })
      .fail(function() {
        alert("自動更新に失敗しました");
      })
    } else {
      clearInterval(interval);
    }
  }, 5000);
});
