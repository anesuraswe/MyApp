from django.db import models

class PlantManager(models.Model):
    ManagerID = models.AutoField(primary_key=True, db_column='ManagerID')
    ManagerName = models.CharField(max_length=100, db_column='ManagerName')
    ManagerSurname = models.CharField(max_length=100, db_column='ManagerSurname')
    ManagerPhone = models.CharField(max_length=10, db_column='ManagerPhone')
    ManagerEmail = models.EmailField(unique=True, db_column='ManagerEmail')
    ManagerPassword = models.CharField(max_length=100, db_column='ManagerPassword')
    ManagerFingerprint = models.BiometricField()

    def __str__(self):
        return self.ManagerSurname

    class Meta:
        db_table = 'manager'



class PlantClerk(models.Model):
    ClerkID = models.AutoField(primary_key=True, db_column='ClerkID')
    ClerkName = models.CharField(max_length=100, db_column='ClerkName')
    ClerkSurname = models.CharField(max_length=100, db_column='ClerkSurname')
    ClerkPhone = models.CharField(max_length=10, db_column='ClerkPhone')
    ClerkEmail = models.EmailField(unique=True, db_column='ClerkEmail')
    ClerkPassword = models.CharField(max_length=100, db_column='ClerkPassword')
    ClerkFingerprint = models.BiometricField()

    def __str__(self):
        return self.ClerkSurname + self.ClerkName

    class Meta:
        db_table = 'clerk'




class Engineer(models.Model):
    EngineerID = models.AutoField(primary_key=True, db_column='EngineerID')
    EngineerName = models.CharField(max_length=100, db_column='EngineerName')
    EngineerSurname = models.CharField(max_length=100, db_column='EngineerSurname')
    EngineerPhone = models.CharField(max_length=10, db_column='EngineerPhone')
    EngineerEmail = models.EmailField(unique=True, db_column='EngineerEmail')
    EngineerPassword = models.CharField(max_length=100, db_column='EngineerPassword')
   
    def __str__(self):
        return self.EngineerSurname

    class Meta:
        db_table = 'engineer'
        

class Operator(models.Model):
  OperatorID = models.AutoField(primary_key=True, db_column='OperatorID')
    OperatorName = models.CharField(max_length=100, db_column='OperatorName')
    OperatorSurname = models.CharField(max_length=100, db_column='OperatorSurname')
    Role = models.CharField(max_length=100, db_column='Role')
      
    def __str__(self):
        return self.OperatorSurname + self.Role

    class Meta:
        db_table = 'operator'



class Site(models.Model):
    SiteID = models.AutoField(primary_key=True, db_column='SiteID')
    SiteName = models.CharField(max_length=100, db_column='SiteName')
       
    def __str__(self):
        return self.SiteName

    class Meta:
        db_table = 'site'




class Plant(models.Model):
    FleetCode = models.CharField(max_length=8, db_column='FleetCode')
    PlantName = models.CharField(max_length=100, db_column='PlantName')
    Make = models.CharField(max_length=30, db_column='Make')
    RegNumber = models.CharField(max_length=10, unique=True, db_column='RegNumber')
    ChaseNumber = models.CharField(max_length=10, db_column='ChaseNumber')
    SiteID = models.ForeignKey(Site, on_delete=models.CASCADE)
   
    def __str__(self):
        return self.FleetCode + self.PlantName

    class Meta:
        db_table = 'plant'


class PlantStatus(models.Model):
    PlantStatusCode = models.IntegerField(max_length=1, db_column='PlantStatusCode')
    PlantStatusName = models.CharField(max_length=50, db_column='PlantStatusName')
    FleetCode = models.ForeignKeiy(Plant, on_delete=models.CASCADE)
    Description = models.CharField(max_length=100, db_column='Description')
   
    def __str__(self):
        return self.FleetCode + self.PlantStatusName

    class Meta:
        db_table = 'plantstatus'

