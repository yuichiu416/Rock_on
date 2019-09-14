@transactions.each do |transaction|
    json.set! transaction.id do 
        json.extract! transaction, :id, :user_id, :ticker, :price, :num_shares
    end
end