class User < ActiveRecord::Base
  extend FriendlyId

  validates :name,
            presence: true
  validates :password,
            presence: true
end
