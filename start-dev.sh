#!/bin/bash

# Print colorful status messages
print_status() {
    echo -e "\n\033[1;34m===> $1\033[0m"
}

# Error handling
set -e

# Navigate to the project directory (uncomment and modify if needed)
# cd /path/to/your/project

# Check if we want to do a clean set up.
argument="$1"

if ["$argument" == "clean"] then
print_status "Cleaning up previous build artifacts..."
rm -rf .wasp node_modules

print_status "Installing npm dependencies..."
npm install

print_status "Cleaning Wasp..."
wasp clean
else


print_status "Starting Wasp database..."
wasp db migrate-dev

print_status "Starting Wasp development server..."
wasp start 
fi