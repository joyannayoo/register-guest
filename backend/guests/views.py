from django.db.models import Q
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from guests.models import Guest
from guests.serializers import GuestSerializer


# Create your views here.
class ListCreateGuestView(ListCreateAPIView):
    serializer_class = GuestSerializer

    def get_queryset(self):
        return Guest.objects.filter(Q(first_name__icontains=self.request.query_params.get('search', '')) | Q(
            last_name__icontains=self.request.query_params.get('search', '')))


class RetrieveUpdateDestroyGuestView(RetrieveUpdateDestroyAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer
    lookup_url_kwarg = 'guest_id'
