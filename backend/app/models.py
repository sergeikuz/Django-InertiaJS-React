from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название товара')
    description = models.TextField(blank=True, null=True, verbose_name='Описание товара')

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

# Create your models here.
