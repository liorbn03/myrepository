month = int(input("Enter the current month (1 to 12): "))

spring_months = [3, 4, 5]
summer_months = [6, 7, 8]
autumn_months = [9, 10, 11]
winter_months = [12, 1, 2]

if month in spring_months:
    season = "Spring"
elif month in summer_months:
    season = "Summer"
elif month in autumn_months:
    season = "Autumn"
else:
    season = "Winter"

print(f"The season for month {month} is {season}.")
