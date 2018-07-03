class YodasController < ApplicationController


	def index
		# binding.pry
		@trans = Yoda.all
    	render :json => @trans
	end

  	def create	

        Yoda.create({
        	sentence: params["yoda"]["sentence"]
        })
        # redirect_to '/'
	end

	def destroy

      chump = Yoda.find_by(name: params["sentence"])
      chump.destroy
  	end

end
