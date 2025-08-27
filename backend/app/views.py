from django.views.generic import ListView, DetailView
from inertia import render
from .models import Product

def index(request):
    return render(request, "Index", props={"description": "Демо Django + InertiaJS + React"})


def about(request):
    return render(request, "About", props={"description": "Демо Django + InertiaJS + React, для лучшего понимания SPAшки"})


class ProductsListView(ListView):
    model = Product

    def get(self, request, *args, **kwargs):
        products = self.get_queryset()
        return render(
            request,
            'ProductsList',
            props={
                'products':[
                    {
                        'id': product.id,
                        'title': product.title,
                    }
                    for product in products
                ]
            })

class ProductDetailView(DetailView):
    model = Product

    def get(self, request, *args, **kwargs):
        product = self.get_object()
        return render(
            request,
            'ProductDetail',
            props={
                'product': {
                    'title': product.title,
                    'description': product.description,
                }
            }
        )
