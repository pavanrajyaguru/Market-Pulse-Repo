from django.http import HttpResponse
from django.shortcuts import render
from nsepython import *
# Create your views here.

def home(request):
    
    return render(request,"index.html")


def get_indices(request):
    positions = nsefetch('https://www.nseindia.com/api/equity-stockIndices?index=SECURITIES%20IN%20F%26O')
    
    start = request.POST.get("start",0)
    print("start", start)
    end = request.POST.get("end",10)
    print("end", end)
  
    response = positions["data"][int(start):int(end)]
    
    print(response[0].keys())
    
    response 
    
    return HttpResponse(json.dumps(response))