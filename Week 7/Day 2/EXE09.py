height_inches = float(input("Enter your height in inches: "))

height_cm = height_inches * 2.54

minimum_height_cm = 145
if height_cm >= minimum_height_cm:
    print("You are tall enough to ride the roller coaster! Enjoy the ride!")
else:
    print("Sorry, you need to grow some more to ride the roller coaster.")
