package server

import (
	"ditto-react/backend/internal/handler/todo"
	"ditto-react/backend/internal/handler/user"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func setRouter() *gin.Engine {
	router := gin.Default()
	router.Use(cors.Default())

	router.RedirectTrailingSlash = true

	api := router.Group("/api")
	{
		// Todo
		api.GET("/todo", todo.All)
		api.POST("/todo/create", todo.Create)
		api.DELETE("/todo/delete", todo.Delete)
		api.POST("/todo/update", todo.Update)
		api.POST("/todo/toggle", todo.Toggle)

		// User
		api.POST("/user/login", user.Login)
	}

	return router
}
