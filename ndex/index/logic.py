from . import banks
from iexfinance.stocks import Stock
import os 
from . import alphavantage as av

KEY = os.getenv('IEX_TOKEN')
BANKS = banks.BANKS

def price_index():
	index_price = 0
	for ticker,weight in BANKS.items():
		price = av.get_current_price(ticker)
		index_price += price*weight
	return index_price