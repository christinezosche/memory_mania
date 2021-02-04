class CreateGameTemplates < ActiveRecord::Migration[6.0]
  def change
    create_table :game_templates do |t|
      t.string :name
      t.string :creator
      t.string :image_urls, array: true, default: []
      t.integer :times_played

      t.timestamps
    end
  end
end
