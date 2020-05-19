from django.urls import path
from guests.views import ListCreateGuestView, RetrieveUpdateDestroyGuestView

urlpatterns = [
    path('', ListCreateGuestView.as_view()),
    path('<int:guest_id>/', RetrieveUpdateDestroyGuestView.as_view()),
]
