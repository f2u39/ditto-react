package mongo

import (
	"log"

	"gopkg.in/mgo.v2"
)

var (
	sess  *mgo.Session
	Todos *mgo.Collection
)

func dial() {
	var err error

	// Connect to MongoDB
	sess, err = mgo.Dial("127.0.0.1")
	if err != nil {
		log.Println("Cannot connect to MongoDB...")
		return
	}

	// Todo collection
	Todos = sess.DB("ditto").C("todo")

	index := mgo.Index{
		Key:        []string{},
		Unique:     true,
		DropDups:   true,
		Background: true,
		Sparse:     true,
	}

	err = Todos.EnsureIndex(index)
	if err != nil {
		log.Println("")
	}
}
