from flask import Flask, render_template, request, redirect, url_for
 
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')


@app.route('/login', methods=["POST", "GET"])
def login():
    if request.method == "POST":
        user = request.form['name']
        return redirect(url_for("user", usr=user))
    else:
        return render_template("login.html")

@app.route('/OneDimArrays', methods=["POST", "GET"])
def OneDimArrays():
    return render_template("OneDimArrays.html")

@app.route('/TwoDimArrays', methods=["POST", "GET"])
def TwoDimArrays():
    return render_template("TwoDimArrays.html")

@app.route('/Files', methods=["POST", "GET"])
def Files():
    return render_template("files.html")


@app.route('/<usr>')
def user(usr):
    return f"<h1>{usr}</h1>"




if __name__ == "__main__":
    app.run(debug=True)