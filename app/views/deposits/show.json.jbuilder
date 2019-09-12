@deposits.each do |deposit|
    json.set! deposit.id do 
        json.extract! deposit, :id, :user_id, :amount
    end
end