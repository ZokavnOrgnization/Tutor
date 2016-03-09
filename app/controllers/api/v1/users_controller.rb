class Api::V1::UsersController < Api::V1::BaseController
  def index
    render json: {name: 'hanh', age: '25'}, status: :ok
  end
end
