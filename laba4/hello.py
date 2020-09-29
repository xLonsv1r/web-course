from flask import Flask, render_template, url_for, redirect, request

app = Flask(__name__)



@app.route('/home', methods=["POST", "GET"])
def index():
    if request.method == "POST":
        user = request.form['name']
        print(user)
        return render_template("newhome.html", user=user)
    else:
        return render_template("home.html")


if __name__ == "__main__":
    app.run(debug=True)