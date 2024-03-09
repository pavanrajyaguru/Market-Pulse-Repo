from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from nsepython import *
from .models import *
# Create your views here.

def home(request):
    
    return render(request,"index.html")

@csrf_exempt
def auth_user(request):
    post_data = json.loads(request.body)
    email = post_data["email"]
    password = post_data["password"]

    if email != None and password != None:
        user_obj = User.objects.filter(email = email,password = password).values()
        if len(user_obj) > 0 :
            return HttpResponse("Login Successfull")
        else : 
            return HttpResponse("Incorrect Email or password")
        
    return HttpResponse("Email and Password not found")
        

def get_indices(request):
    positions = nsefetch('https://www.nseindia.com/api/equity-stockIndices?index=SECURITIES%20IN%20F%26O')
    
    start = request.POST.get("start",0)
    end = request.POST.get("end",10)
  
    response = positions["data"][int(start):int(end)]
    
    return HttpResponse(json.dumps(response))

def get_running_status(request):
    return HttpResponse(str(running_status()))