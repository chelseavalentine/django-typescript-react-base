""" User API routes """
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.decorators import list_route
from rest_framework.response import Response
from web.api.v1.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint for WordType objects.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @list_route(methods=['post'])
    def log_in(self, request):
        """
        Logs in a user.

        Note: the username can be an email or username
        """
        username = request.data.get('username')
        password = request.data.get('password')

        # Check if there's a user with this username
        matching_user = authenticate(username=username, password=password)

        if matching_user is None:
            matching_user = authenticate(email=username, password=password)

        if matching_user is None:
            return Response({
                'errors': [
                    'There are no users matching that username/email and password combination.'
                ]
            }, status=404)

        login(request, matching_user)

        user_data = UserSerializer(matching_user).data

        return Response(user_data, status=200)

    @list_route(methods=['post'])
    def sign_up(self, request):
        """
        Creates a new user.
        """
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        # Validate data
        errors = []

        if not username or not email or not password:
            errors.append('Please specify all fields: username, email, and password.')
            return Response({'errors': errors}, status=422)

        cleaned_username = str.strip(username)
        cleaned_email = str.strip(email)
        cleaned_password = str.strip(password)

        # TODO: Add these values to constants
        if not cleaned_username or len(cleaned_username) > 21:
            errors.append('Your username\'s length must be between 1 and 21 characters.')
        else:
            matching_users = User.objects.filter(username=cleaned_username)

            if matching_users:
                errors.append('That username is already taken. Try a different one.')

        if not cleaned_email:
            errors.append('You need to specify an email address.')
        else:
            matching_accounts = User.objects.filter(email=cleaned_email)

            if matching_accounts:
                errors.append('There is already an account associated with that email.')

        if len(cleaned_password) < 8:
            errors.append('You need to choose a password that is 8 characters or longer.')

        if not errors:
            user = User.objects.create_user(cleaned_username, cleaned_email, cleaned_password)
            user_data = UserSerializer(user).data

            # Create a profile here if desired

            return Response(user_data)

        # TODO: Use constant for this status code
        return Response({'errors': errors}, status=422)

    @list_route(methods=['get'])
    def check_username(self, request):
        """
        Checks whether the specified username is already in use.
        """
        username = request.GET.get('username')

        if not username:
            return Response({'data': True})

        cleaned_username = str.strip(username)
        matching_users = User.objects.filter(username=cleaned_username)

        return Response({'is_taken': len(matching_users) > 0})
