from django.db import models

class Admin(models.Model):
    AdminName = models.CharField(max_length=100, db_column='AdminName')
    AdminEmail = models.EmailField(unique=True, db_column='AdminEmail')
    AdminPassword = models.CharField(max_length=100, db_column='AdminPassword')

    def __str__(self):
        return self.AdminName

    class Meta:
        db_table = 'admin'


class User(models.Model):
    UserID = models.AutoField(primary_key=True, db_column='UserID')
    UserName = models.CharField(max_length=100, db_column='UserName')
    UserTitle = models.CharField(max_length=100, db_column='UserTitle')
    UserEmail = models.EmailField(unique=True, db_column='UserEmail')
    UserPassword = models.CharField(max_length=100, db_column='UserPassword')

    def __str__(self):
        return self.UserName

    class Meta:
        db_table = 'users'

class Laptop(models.Model):
    SerialNumber = models.CharField(max_length=100, db_column='SerialNumber')
    Model = models.CharField(max_length=100, db_column='Model')
    Make = models.CharField(max_length=100, db_column='Make')
    Color = models.CharField(max_length=100, db_column='Color')
    Status = models.CharField(max_length=100, db_column='Status')

    def __str__(self):
        return self.SerialNumber

    class Meta:
        db_table = 'laptops'