from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def login_page():
    return render_template("templates/login.html")  # Laadt de HTML-pagina

@app.route("/verify_captcha", methods=["POST"])
def verify_captcha():
    user_captcha_input = request.form["captcha"]  # Input van gebruiker
    correct_answer = 8

    if int(user_captcha_input) == correct_answer:
        return "CAPTCHA succesvol opgelost! Welkom."
    else:
        return "Foutieve CAPTCHA. Probeer het opnieuw."

if __name__ == "__main__":
    app.run(debug=True)
