class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :time
      t.string :game_id
      t.integer :user_id
      t.string :name
      t.string :username

      t.timestamps
    end
  end
end
