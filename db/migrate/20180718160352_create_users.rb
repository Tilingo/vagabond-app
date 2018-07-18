class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :last_name
      t.string :profile_picture
      t.string :email
      t.string :current_city

      t.timestamps
    end
  end
end
