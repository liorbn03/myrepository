from django.db import models


class Trip(models.Model):
    destination = models.CharField(max_length=50)
    start_date = models.DateField()
    end_date = models.DateField()
