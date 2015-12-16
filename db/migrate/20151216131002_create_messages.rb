class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :user
      t.text :text

      t.timestamps null: false
    end
  end
end
