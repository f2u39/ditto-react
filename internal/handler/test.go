// Test handlers
package server

import "github.com/gin-gonic/gin"

func hello(c *gin.Context) {
	c.JSON(200, gin.H{
		"msg": "world",
	})
}
