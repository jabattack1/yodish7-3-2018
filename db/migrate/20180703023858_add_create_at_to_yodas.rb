class AddCreateAtToYodas < ActiveRecord::Migration[5.2]
  def change
    add_column :yodas, :created_at, :TIMESTAMP
  end
end
