class MessagesController < ApplicationController

  def index
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to group_messages_path(@message)
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :image)
  end

end
