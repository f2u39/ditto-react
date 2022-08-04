package server

import (
	"ditto-react/internal/handler/todo"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func setRouter() *gin.Engine {
	router := gin.Default()
	router.Use(cors.Default())
	// router.Use(cors.New(cors.Config{
	// 	AllowOrigins:     []string{"http://localhost:3000"},
	// 	AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"},
	// 	AllowHeaders:     []string{"Origin"},
	// 	ExposeHeaders:    []string{"Content-Length"},
	// 	AllowCredentials: true,
	// 	AllowOriginFunc: func(origin string) bool {
	// 		return origin == "https://github.com"
	// 	},
	// 	MaxAge: 12 * time.Hour,
	// }))

	router.RedirectTrailingSlash = true

	api := router.Group("/api")
	{
		// Todo
		api.GET("/todo", todo.All)
		api.POST("/todo/create", todo.Create)
		api.POST("/todo/update", todo.Update)
		api.POST("/todo/toggle", todo.Toggle)
	}

	return router
}
