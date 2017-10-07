class ResponsesController < ApplicationController
  skip_before_action :verify_authenticity_token, except: [:create]
  skip_before_action :authenticate!, only: [:index]

  def index
    if current_user.present? && current_user.supported.blank?
      redirect_to action: :new
    elsif current_user.blank?
      redirect_to user_facebook_omniauth_authorize_path
    end
  end

  def new
    @user = current_user
  end

  def questions
    @user = current_user
  end

  def create
    current_user.update user_params
    if current_user.valid?
      current_user.save!
      flash[:notice] = "Bio saved!"
      redirect_to action: :questions
    else
      flash[:alert] = current_user.errors.messages
      redirect_to action: :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:zip, :supported, :desired, :background, :email, :country_id, :event_code)
  end
end
