from django.shortcuts import render
from django.http import HttpResponse
from . import banks
from django.template import loader
from . import alphavantage as av
from . import logic
from .models import Bank

def index(request):
	template = loader.get_template('index/index.html')
	banks = Bank.objects.all()
	for bank in banks:
		bank.last_price = av.get_current_price(bank.ticker)
	price = 0 #get from dynamo
	context = {
		'banks': banks,
		'index_price': price
	}
	return HttpResponse(template.render(context, request))
