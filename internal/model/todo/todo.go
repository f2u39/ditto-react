package todo

import (
	mgo "ditto-react/internal/database"

	"gopkg.in/mgo.v2/bson"
)

type Todo struct {
	ID        bson.ObjectId `json:"id" bson:"_id"`
	Content   string        `json:"content" bson:"content"`
	Completed bool          `json:"completed" bson:"completed"`
}

func Create(todo Todo) error {
	return mgo.Todos.Insert(todo)
}

func All() ([]Todo, error) {
	var todos []Todo
	err := mgo.Todos.Find(bson.M{}).All(&todos)
	return todos, err
}
