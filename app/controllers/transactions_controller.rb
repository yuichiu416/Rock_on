class TransactionsController < ApplicationController
  def create
    @transaction = Transaction.new(transaction_params)
    @transaction.user_id = current_user.id
    if @transaction.save
      render json: ['successfully made the tranaction'], status:200
    else
      render json: @transaction.errors.full_messages, status: 401
    end
  end

  def index
    @transactions = Transaction.where(user_id: params[:user_id])
  end

  def show
    @transactions = Transaction.where(user_id: params[:id], ticker: params[:ticker])
  end
  
  def transaction_params
    params.require(:transaction).permit(:user_id, :ticker, :price, :num_shares)
  end
end
