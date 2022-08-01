// Package for Todo handlers
package todo

import (
	"ditto-react/internal/model/todo"
	"strconv"

	"github.com/gin-gonic/gin"
)

func Create(c *gin.Context) {
	switch c.Request.Method {
	case "GET":
		c.JSON(200, gin.H{
			"msg": "world",
		})

	case "POST":
		content := c.PostForm("content")
		isDone, _ := strconv.Atoi(c.PostForm("is_done"))

		var t = todo.Todo{
			Content: content,
			IsDone:  isDone == 1,
		}

		todo.Create(t)
	}

}
