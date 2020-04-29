class ProjectsController < ApplicationController
	def index
		render json: [
			{name: "Ruby"},
			{name: "TypeScript"},
			{name: "SCSS"},
			{name: "HTML"},
		]
	end
end
