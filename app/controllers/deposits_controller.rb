class DepositsController < ApplicationController
  def create
    @deposit = Deposit.new(deposit_params)
    @deposit.user_id = current_user.id
    if @deposit.save
      render json: ['successfully made the tranaction'], status:200
    else
      render json: @deposit.errors.full_messages, status: 401
    end
  end

  def show
    @deposits = Deposit.where(user_id: params[:id])
  end

  def deposit_params
    params.require(:deposit).permit(:amount)
  end
end
