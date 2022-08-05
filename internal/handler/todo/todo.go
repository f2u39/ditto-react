// Package for todo handler
package todo

import (
	"ditto-react/internal/model/todo"
	"log"
	"net/http"

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
	case "POST":
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

func Update(c *gin.Context) {
	var t todo.JSON
	err := c.BindJSON(&t)
	if err != nil {
		log.Println(err)
		return
	}

	err = todo.Update(t.Transform())
	if err != nil {
		log.Println(err)
		return
	}
	c.JSON(http.StatusOK, gin.H{})
}

func Toggle(c *gin.Context) {
	id := c.PostForm("id")
	t := todo.ByID(id)
	t.Completed = !t.Completed
	todo.Update(t)
}

func Delete(c *gin.Context) {
	id := c.PostForm("id")
	t := todo.ByID(id)
	todo.Delete(t)
}
