import json
import alphavantage as av
import os

# This lambda should be scheduled to run once a day

def price_index(banks):
	index_price = 0

	prices = []
	for ticker,weight in banks.items():
		price = av.get_current_price(ticker)
		prices.append(price*weight)

	temp_index_val = sum(prices)
	for price in prices:
		weight = price / temp_index_val
		price = price * weight
		index_price += price
	return index_price


def lambda_handler(event, context):
	index_price = price_index(event['banks'])
    return {
        'statusCode': 200,
        'body': {
			'price': index_price
		}
    }

	## Send this to dynamo db and create an entry for price in the db so we can have a running list of prices and times (only daily granularity)
	### Create API gateway for dynamo db
	#### Consume the info from Dynamo in the Django app




