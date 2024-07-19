from django.db import models
from django.utils import timezone


# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre


class Productos(models.Model):
    nombre = models.CharField(max_length=255)
    stock = models.IntegerField()
    puntaje = models.FloatField()
    # CASCADE: ELIMINA EL PRODUCTO
    # PROTECT: LANZA UN ERROR
    # RESTRICT: SOLO ELIMINA SI NO EXISTE PRODUCTOS
    # SET_NULL: ACTUALIZA A VALOR CERO
    # SET_DEFAULT: ASIGNA VALOR POR DEFECTO
    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.CASCADE,
    )
    creado_en = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.nombre
