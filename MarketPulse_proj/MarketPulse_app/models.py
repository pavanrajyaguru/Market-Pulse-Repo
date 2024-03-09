from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True,verbose_name="ID")
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=150)
    gender = models.CharField(max_length=50)