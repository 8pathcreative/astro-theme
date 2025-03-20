// Simple script to prepare the project for export
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("Preparing project for export...")

// Ensure .env file exists
if (!fs.existsSync(".env")) {
  console.log("Creating .env file from .env.example...")
  fs.copyFileSync(".env.example", ".env")
}

// Build the project
console.log("Building project...")
execSync("npm run build", { stdio: "inherit" })

// Create a zip file of the dist directory
console.log("Creating export zip file...")
execSync("cd dist && zip -r ../design-dev-resources-export.zip .", { stdio: "inherit" })

console.log("Export completed successfully!")
console.log("Your exported project is available at: design-dev-resources-export.zip")

