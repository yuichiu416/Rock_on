class Api::SessionsController < ApplicationController
  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      # render :json => { :errors => @user.errors.full_messages }
      render :json => { errors: "404 hehehe" }
    else
      login!(@user)
      render 'users/show';
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end
end
