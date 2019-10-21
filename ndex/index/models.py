from django.db import models

class Bank(models.Model):
	added = models.DateTimeField(auto_now_add=True)
	ticker = models.CharField(max_length=20)
	ncino_weight = models.DecimalField(max_digits=2,decimal_places=2)
	last_price = models.DecimalField(max_digits=10,decimal_places=2)