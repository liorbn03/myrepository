from django.shortcuts import render, redirect, get_object_or_404
from .models import Trip
from .forms import TripForm


def homepage(request):
    if request.method == "POST":
        # Check if the form data is for creating a new trip
        if 'startDate' in request.POST:
            startDate = request.POST['startDate']
            endDate = request.POST['endDate']
            destination = request.POST['destination']

            # Create a new Trip instance and save it to the database
            trip = Trip(start_date=startDate, end_date=endDate, destination=destination)
            trip.save()
            return redirect('homepage')  # Redirect to the homepage after saving

        if 'tripToDelete' in request.POST:
            trip_id = request.POST['tripToDelete']

            # Retrieve the Trip instance by its ID and delete it
            trip = Trip.objects.get(id=trip_id)
            trip.delete()
            return redirect('homepage')

    trips = Trip.objects.all()  # Retrieve all trips from the database
    return render(request, 'homepage.html', {'trips': trips})




def create_trip(request):
    if request.method == "POST":
        form = TripForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('trip_list')
    else:
        form = TripForm()
    return render(request, 'trip_management/create_trip.html', {'form': form})


def delete_trip(request, trip_id):
    trip = get_object_or_404(Trip, id=trip_id)
    if request.method == "POST":
        trip.delete()
        return redirect('trip_list')
    return render(request, 'trip_management/delete_trip.html', {'trip': trip})
