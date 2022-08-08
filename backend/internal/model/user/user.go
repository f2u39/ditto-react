package user

var Users []*User

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func Login(username, password string) bool {
	if username == "admin" && password == "admin" {
		return true
	} else {
		return false
	}
}
