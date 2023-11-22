from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Admin, User, Laptop
from .serializers import UserSerializer, LaptopSerializer

@api_view(['POST'])
def signup_view(request):
    if request.method == 'POST':
        admin_email = request.data.get('email')
        admin_name = request.data.get('name')
        admin_password = request.data.get('password')

        # Check if the email is already taken
        if Admin.objects.filter(AdminEmail=admin_email).exists():
            return JsonResponse({'error': 'Email already exists.'}, status=400)

        try:
            # Create a new admin
            admin = Admin(AdminName=admin_name, AdminEmail=admin_email, AdminPassword=admin_password)
            admin.save()

            return JsonResponse({'success': 'Admin created.'}, status=201)
        except Exception as e:
            return JsonResponse({'error': 'An error occurred while creating the admin.'}, status=500)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)


@api_view(['POST'])
def add_user(request):
    if request.method == 'POST':
        user_name = request.data.get('name')
        user_title = request.data.get('title')
        user_email = request.data.get('email')
        user_password = request.data.get('password')

        # Check if the email is already taken
        if User.objects.filter(UserEmail=user_email).exists():
            return Response({'error': 'Email already exists.'}, status=400)

        try:
            # Create a new user
            user = User(UserName=user_name, UserTitle=user_title, UserEmail=user_email, UserPassword=user_password)
            user.save()

            return Response({'success': 'User created.'}, status=201)
        except Exception as e:
            return Response({'error': 'An error occurred while creating the user.'}, status=500)

    return Response({'error': 'Invalid request method.'}, status=405)

@api_view(['POST'])
def add_laptop(request):
    if request.method == 'POST':
        serial_number = request.data.get('serial_number')
        model = request.data.get('model')
        make = request.data.get('make')
        color = request.data.get('color')
        status = request.data.get('status')

        try:
            # Create a new laptop
            laptop = Laptop(SerialNumber=serial_number, Model=model, Make=make, Color=color, Status=status)
            laptop.save()

            return Response({'success': 'Laptop added.'}, status=201)
        except Exception as e:
            return Response({'error': 'An error occurred while adding the laptop.'}, status=500)

    return Response({'error': 'Invalid request method.'}, status=405)

@api_view(['GET'])
def get_users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=200)
    return Response({'error': 'Invalid request method.'}, status=405)

@api_view(['GET'])
def get_laptops(request):
    if request.method == 'GET':
        laptops = Laptop.objects.all()
        serializer = LaptopSerializer(laptops, many=True)
        return Response(serializer.data, status=200)
    return Response({'error': 'Invalid request method.'}, status=405)