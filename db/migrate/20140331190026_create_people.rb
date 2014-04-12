class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :lastName
      t.string :email
      t.string :skype
      t.string :phone
      t.integer :age
      t.string :sex

      t.timestamps
    end
  end
end
