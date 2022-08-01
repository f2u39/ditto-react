package todo

import (
	mgo "ditto-react/internal/database"

	"gopkg.in/mgo.v2/bson"
)

type Todo struct {
	ID      string `json:"id"`
	Content string `json:"content"`
	IsDone  bool   `json:"is_done"`
}

func Create(todo Todo) error {
	return mgo.Todos.Insert(&todo)
}

func All(todo *Todo) error {
	return mgo.Todos.Find(bson.M{}).All(todo)
}
