from django.contrib import admin
from .models import Categoria, Productos


class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre")


class ProductosAdmin(admin.ModelAdmin):
    exclude = ("creado_en",)
    list_display = ("id", "nombre", "stock", "creado_en")


# Register your models here.
admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Productos, ProductosAdmin)
