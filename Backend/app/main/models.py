from django.db import models

# Create your models here.
# your_app_name/models.py

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    seller = models.ForeignKey('auth.User', related_name='products', on_delete=models.CASCADE)

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    reviewer = models.ForeignKey('auth.User', related_name='reviews', on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField(max_length=500)
    
class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    buyer = models.ForeignKey('auth.User', related_name='cart', on_delete=models.CASCADE)
    quantity = models.IntegerField()

class Transaction(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    buyer = models.ForeignKey('auth.User', related_name='buyer', on_delete=models.CASCADE)
    seller = models.ForeignKey('auth.User', related_name='seller', on_delete=models.CASCADE)
