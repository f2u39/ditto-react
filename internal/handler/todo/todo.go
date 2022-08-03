// Package for Todo handlers
package todo

import (
	"ditto-react/internal/model/todo"
	"log"

	"github.com/gin-gonic/gin"
	"gopkg.in/mgo.v2/bson"
)

func All(c *gin.Context) {
	todos, err := todo.All()
	if err != nil {
		log.Println(err)
		return
	}
	c.JSON(200, gin.H{
		"todos": todos,
	})
}

func Create(c *gin.Context) {
	switch c.Request.Method {
	case "GET":
		c.JSON(200, gin.H{
			"msg": "world",
		})

	case "POST":
		// content := c.PostForm("Content")
		// t := c.MustGet(gin.BindKey).(*todo.Todo)
		var t todo.Todo
		err := c.BindJSON(&t)
		if err != nil {
			log.Println(err)
			return
		}

		t.ID = bson.NewObjectId()
		err = todo.Create(t)
		if err != nil {
			log.Println(err)
			return
		}
	}
}
