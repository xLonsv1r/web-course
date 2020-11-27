from flask import Flask, render_template, request, redirect, url_for
import math
import numpy as np
from taskClasses import *
app = Flask(__name__)


def firstOrLastLetterFreq(word):
    """ Напишіть функцію, яка визначить, яка з букв перша або остання
        зустрічаються в заданому слові частіше."""
    word = word.lower()
    countFirstChar = word.count(word[0])
    countLastChar = word.count(word[-1])
    if countFirstChar > countLastChar:
        return word[0]
    return word[-1]
    

def getSurnames(surnames, specialChar):
    """Створіть масив з п`яти прізвищ і виведіть їх на екран ті з них, які починаються
        з певної букви, яка вводиться з клавіатури."""
    specialChar = specialChar.upper()
    list_surnames = []
    for surname in surnames:
        if surname[0] == specialChar:
            list_surnames.append(surname)
    return " ".join(list_surnames) if list_surnames else "No items"
    


def func(x, right_bound):
    if x <= 0:
        numerator = math.cos(x**3 - 4 * x + 4)
        denominator = x**3 - math.log10(math.fabs(x)+1) 
        return numerator / denominator

    elif 0 < x and x <= right_bound:
        numerator = math.sin(x + 2)**2
        denominator = (2 * x**2 + x**4)**1/3
        return numerator / denominator
    else:
        numerator = (math.fabs(x)**3)**1/2 * math.sin(x**3)
        denominator = math.cos(x+1)**2
        return numerator / denominator


def createTwoDimMatrix(n, m):
    return np.random.randint(10,size=(n, m))

def printMatrix(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            print(matrix[i][j], end =" ")
        print()

def sumTwoDimMatrix(matrix):
    sum = 0
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if i % 2 != 0 and j % 2 != 0:
                print(matrix[i][j])
                sum += matrix[i][j]
    return sum



#@app.route("/")
#def home():
    #return render_template('index.html')

@app.route("/")
@app.route('/Functions', methods=["POST", "GET"])
def Functions():
    if request.method == 'POST':
        xn = -2.25
        xk = 34.9
        step = 0.5
        y = 0
        for i in np.arange(xn, xk, step):
            y += func(i, xk)
        y = float("{:.2f}".format(y))
        html = "Результат: "+str(y)
        return render_template('Functions.html', content=html)
    else:
        return render_template("Functions.html")

@app.route('/OneDimArrays', methods=["POST", "GET"])
def OneDimArrays():
    if request.method == "POST":
        word = request.form['word']
        char = request.form['char']
        if len(word) < 2:
            word = "1)Input correct value > 2"
        else:
            word = firstOrLastLetterFreq(word)
        if len(char) != 1:
            result = "2)Input correct value == 1"
        else:
            result = getSurnames(['Burakov','Babbage','Ivanov', 'Davidson', 'Cabral'],char)

        return render_template("OneDimArrays.html", word=word,char=result)    
    return render_template("OneDimArrays.html")

@app.route('/TwoDimArrays', methods=["POST", "GET"])
def TwoDimArrays():
    n = 10
    m = 7
    matrix = createTwoDimMatrix(n,m)
    printMatrix(matrix)
    sumMatrix = sumTwoDimMatrix(matrix)
    sumMatrix = "Результат: " + str(sumMatrix)
    return render_template("TwoDimArrays.html",sumMatrix = sumMatrix, matrix=matrix, lengthN = n, lengthM = m)


def readNumbersFile(path):
    array = []
    with open(path, 'r') as f:
        raw = f.read()
        all_numbers_list = raw.split(',')
        for number in all_numbers_list:
            array.append(int(number))
    return array

def createDictArray(array):
    dictArray = {}
    for number in array:
        if number in dictArray:
            dictArray[number] += 1
        else:
            dictArray[number] = 1
    return dictArray

def countNumberOnce(dictArray):
    count = 0
    for key, value in dictArray.items():
        if value == 1:
            count += 1
    return count
            

@app.route('/Files', methods=["POST", "GET"])
def Files():
    array = readNumbersFile('static/numbers.txt')
    dictArray = createDictArray(array)
    count = countNumberOnce(dictArray)
    print(dictArray)
    count = "Кількість унікальних чисел: " + str(count)
    return render_template("files.html",count = count,dictArray=dictArray)


@app.route('/Classes', methods=["POST", "GET"])
def Classes():
    offices = createOfficesDict(3)
    factories = createFactoriesDist(3)
    return render_template("classes.html", offices=offices, factories=factories)


@app.route('/AbstractClasses', methods=["POST","GET"])
def AbsClasses():
    off = createOfficesDict(5)
    printDict(off)
    print(f"MAX height of Offices : {findMaxHeight(off)}")
    print("-"*30)
    printDict(factories)
    print(f"MAX height of Factories : {findMaxHeight(factories)}")
    return render_template("abstractClasses.html", maxOfficeHeight = findMaxHeight(off), \
        maxFactoryHeight = findMaxHeight(factories),factories = factories, offices = off)

@app.route('/<usr>')
def user(usr):
    return f"<h1>{usr}</h1>"




if __name__ == "__main__":
    app.run(debug=True)