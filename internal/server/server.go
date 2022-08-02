package server

import (
	mongo "ditto-react/internal/database"
)

func Run(port string) {
	mongo.Dial()

	router := setRouter()

	router.Run(port)
}
