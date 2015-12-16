class MessagesController < ApplicationController
  def index
    messages = Message.all
    render json: messages.as_json(only: [:id, :user, :text])
  end

  def create
    message = Message.new message_params
    if message.save
      render json: message, status: :created
    else
      render json: message, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.permit(:user, :text)
  end
end
