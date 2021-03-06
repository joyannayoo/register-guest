from rest_framework_simplejwt.views import TokenObtainPairView

from authentication.serializer import JWTSerializer


class UpdateLastLoginTokenObtainPairView(TokenObtainPairView):

    serializer_class = JWTSerializer
