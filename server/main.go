package main

import (
	"log"

	database "github.com/Eran2001/server/src/configs/db"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	database.Connect()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Welcome to the Sports Federation API")
	})

	log.Fatal(app.Listen(":3000"))
}
