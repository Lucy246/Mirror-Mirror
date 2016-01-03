1. `pip install -r requirements.txt`
2. `cp config.py{.template,}`
3. Edit `config.py`
4. `python app.py`

For Amazon Echo setup:

1. Sign in at https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide
2. Go to "Apps & Services"
3. Click on "Alexa"
4. Click "Add New Skill"
5. Fill out the first page form (if using ngrok, endpoint would be https://<subdomain>.ngrok.io/echo/MirrorAPI)
6. On the second page, copy over the intentSchema.json and sampleUtterances.txt into the appropriate text boxes
7. If using ngrok, select the option that the parent domain has a valid certificate