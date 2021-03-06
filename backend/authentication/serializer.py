from django.contrib.auth import user_logged_in

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from users.serializers import UserSerializer


class JWTSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        data['user'] = UserSerializer(self.user).data

        user_logged_in.send(sender=self.user.__class__, request=self.context['request'], user=self.user)

        return data
