package server

import (
	mongo "ditto-react/backend/internal/database"
)

func Run(port string) {
	mongo.Dial()

	router := setRouter()

	router.Run(port)
}
