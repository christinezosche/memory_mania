class GameTemplate < ApplicationRecord

    validates_uniqueness_of :name
    
end
