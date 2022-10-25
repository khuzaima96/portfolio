
import json
from flask import Flask, jsonify, render_template, request
import requests
app = Flask(__name__)


@app.route('/', methods = ['GET'])
def main():
    return render_template('portfolio.html')

@app.route('/weather', methods = ['GET'])
def weather():
    return render_template('weather.html')

@app.route('/employee1', methods = ['GET'])
def showData():
    data = open('portfolio.json')
    data2 = json.load(data)
    data2 = data2['Employees'][0]['emailAddress']
    return jsonify({'data': data2})



@app.route('/saveMessage', methods=['POST'])
def savMessage():
    inbox = request.json
    print(inbox)
    return jsonify({'msg':'You Got it'})



@app.route('/aboutME', methods= ['GET'])
def openAbout():
    return jsonify({})

# 127.0.0.1:5000/saveSearch?x=khuzaima
@app.route('/saveSearch', methods=  ['GET'])
def saveSearch():
    search = request.args.get('search')
    print(search)
    file = open('portfolio.json')
    file2 = json.load(file)
    for i in range(0,len(file2['Employees'])):
        if search in file2['Employees'][i]['userId']:
            print(file2["Employees"][i])
            return jsonify({'say':file2["Employees"][i]})
    return jsonify({'data':'not found'})



@app.route('/dashBoard', methods =['GET'])
def getWeather():
        url = "http://api.weatherapi.com/v1/forecast.json?key=b79b5b79dda7411182c130448222706&q=savannah&days=10"
    
        resp = requests.get(url)
        weatherData = resp.json()

 #       location = weatherData['location']['name']
#        print(location)
        
 #       currentWind = weatherData['current']['temp_f']
#        print(currentWind)

#        currentForecast = weatherData['forecast']['forecastday']
        
        for i in range(0,len(weatherData)):
            location = weatherData['location']['name']
            ForecastDate = weatherData['forecast']['forecastday'][0]['date']
            #forecastDay = weatherData['forecast']['forecastday'][1]
            currentTemp = weatherData['current']['temp_f']
            print(location)
            print(ForecastDate)
           # print(forecastDay)
            print(currentTemp)
        return jsonify({'data':location, 'Date':ForecastDate, 'temp':currentTemp})

@app.route('/news', methods=['GET'])
def getnew():
    url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=70a5481a3f6245429bae7fa100dc4dd2"
    resp = requests.get(url)
    newsData = resp.json()
    articles = newsData['articles']
    print(articles)
    return jsonify({'kilo':articles})




@app.route('/prayerTimes', methods = ['GET'])
def getNews():
    url = "https://dailyprayer.abdulrcs.repl.co/api/savannah"
    resp = requests.get(url)
    timesJson = resp.json()
    city = timesJson['city']
    date =timesJson['date']
    salah = timesJson['today']
    print(salah)
    return jsonify({'city':city, 'date':date, 'salah':salah})
app.run(debug=True)