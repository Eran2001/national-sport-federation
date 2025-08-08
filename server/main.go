package main

import (
	"log"

	database "github.com/Eran2001/server/src/configs/db"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New())

	database.Connect()

	app.Get("/api/v1/", func(c *fiber.Ctx) error {
		return c.SendString("Welcome to the Sports Federation API")
	})

	log.Fatal(app.Listen(":8080"))
}
