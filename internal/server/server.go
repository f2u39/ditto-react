package server

func Run(port string) {
	router := setRouter()

	router.Run(port)
}
