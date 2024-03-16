from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from nsepython import *
from django.contrib.auth.hashers import make_password, check_password
from .models import *
# Create your views here.

def home(request):
    
    return render(request,"index.html")

def login(request):
    return render(request,"index.html")
    
def register(request):
    return render(request,"index.html")

@csrf_exempt
def register_action(request):
    post_data = json.loads(request.body)
    uname =  post_data["username"]
    email = post_data["email"]
    password = make_password(post_data["password"])
    gender = post_data["gender"]
    
    user_obj = User.objects.filter(email = email).values()
    if len(user_obj) > 0:
        return HttpResponse("Email already exist!")
    else :
        user_obj = User(name = uname,email = email,password = password,gender = gender)
        user_obj.save()
        return HttpResponse("User saved successfully!")

@csrf_exempt
def auth_user(request):
    post_data = json.loads(request.body)
    email = post_data["email"]
    password = post_data["password"]
    password_hashed = make_password("Diya@2753")

    if email != None and password != None:
        user_obj = User.objects.filter(email = email).values()
        if len(user_obj) > 0 :
            if check_password(password,user_obj[0]["password"]):
                response = { "code":1,"msg":"Login Successfull" }
            else : 
                response = { "code":0,"msg":"Incorrect Email or password" }
            return HttpResponse(json.dumps(response))
        
    return HttpResponse(json.dumps({ "code":0,"msg":"Email and Password not found" }))
        
@csrf_exempt
def get_indices(request):
    positions = nsefetch('https://www.nseindia.com/api/equity-stockIndices?index=SECURITIES%20IN%20F%26O')
    post_data = json.loads(request.body)
    start = post_data.get("start",0)
    end = post_data.get("end",10)
  
    response = positions["data"][int(start):int(end)]
    
    return HttpResponse(json.dumps(response))

def get_running_status(request):
    return HttpResponse(str(running_status()))
