from django.urls import path

from users.views import ListMeView

urlpatterns = [
    path('me/', ListMeView.as_view()),
]
