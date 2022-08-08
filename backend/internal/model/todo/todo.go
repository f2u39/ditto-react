package todo

import (
	mgo "ditto-react/backend/internal/database"
	"log"

	"gopkg.in/mgo.v2/bson"
)

type JSON struct {
	ID        string `json:"id"`
	Content   string `json:"content"`
	Completed bool   `json:"completed"`
}

func (json *JSON) Transform() Todo {
	return Todo{
		ID:        bson.ObjectIdHex(json.ID),
		Content:   json.Content,
		Completed: json.Completed,
	}
}

type Todo struct {
	ID        bson.ObjectId `json:"id" bson:"_id"`
	Content   string        `json:"content" bson:"content"`
	Completed bool          `json:"completed" bson:"completed"`
}

func ByID(id string) Todo {
	var t Todo
	oid := bson.ObjectIdHex(id)
	err := mgo.Todos.FindId(oid).One(&t)
	if err != nil {
		log.Println(err)
	}
	return t
}

func Create(todo Todo) error {
	return mgo.Todos.Insert(todo)
}

func Update(todo Todo) error {
	return mgo.Todos.UpdateId(todo.ID, todo)
}

func Delete(todo Todo) error {
	return mgo.Todos.Remove(todo)
}

func All() ([]Todo, error) {
	var todos []Todo
	err := mgo.Todos.Find(bson.M{}).All(&todos)
	return todos, err
}
