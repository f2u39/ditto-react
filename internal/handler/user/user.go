// Package for user handler
package user

import (
	"ditto-react/internal/model/user"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Login(c *gin.Context) {
	switch c.Request.Method {
	case "POST":
		var u user.User
		err := c.BindJSON(&u)
		if err != nil {
			log.Println(err)
			return
		}

		if user.Login(u.Username, u.Password) {
			c.JSON(http.StatusOK, gin.H{})
		} else {
			c.JSON(http.StatusNotFound, gin.H{})
		}
	}
}
