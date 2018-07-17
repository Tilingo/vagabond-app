class Api::PostsController < ApplicationController
    

    
    
    
    def index
        @posts = City.find(params[:city_id]).posts
        render json: @posts
    end

    def create
        @city = City.find(params[:city_id])
        @post = @city.posts.create(post_params)
        render json: @post
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end

    def update
        @post = Post.find(params[:city_id]).posts.update(post_params)
        render json: @posts
    end
    
    # def destroy
    #     @posts = City.find(params[:id]).destroy
    #     render status: :ok
    # end

    private
    def post_params
        params.require(:post).permit(:title, :content)
    end

end
