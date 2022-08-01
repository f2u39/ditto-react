package server

import (
	"ditto-react/internal/handler/todo"

	"github.com/gin-gonic/gin"
)

func setRouter() *gin.Engine {
	router := gin.Default()

	router.RedirectTrailingSlash = true

	api := router.Group("/api")
	{
		// Todo
		api.POST("/todo/create", todo.Create)
	}

	return router
}
