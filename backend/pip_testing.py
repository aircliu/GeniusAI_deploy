from datetime import datetime
import speech_recognition as sr
import pyttsx3
import webbrowser
import wolframalpha
import os
from dotenv import load_dotenv

#OpenAI GPT-3
import openai


load_dotenv()

engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id) # 0 = male, 1 = female
activationWords = ['computer']

#Configure browser
chrome_path = "C:\Program Files\Google\Chrome\Application\chrome.exe"
webbrowser.register('chrome', None, webbrowser.BackgroundBrowser(chrome_path))

#WolframAlpha 
appId = "R4WPPL-QAXJJWWKHL"
wolframClient = wolframalpha.Client(appId)

def speak(text, rate = 120):
    engine.setProperty('rate', rate)
    engine.say(text)
    engine.runAndWait()

def parseCommand():
        listener = sr.Recognizer()
        print('Listening for a command')

        with sr.Microphone() as source:
            listener.pause_threshold = 2
            input_speech = listener.listen(source)

        try:
            print('Recognizing speech...')
            query = listener.recognize_google(input_speech, language='en_gb')
            print(f'The input speech was: {query}')

        except Exception as exception:
            speak("Sorry, I didn't quite catch that")
            print(exception)

            return 'None'

        return query
        

def query_openai(prompt = ""):
    openai.organization = os.environ['OPENAI_ORG']
    openai.api_key = os.environ['OPENAI_API_KEY']

    #Temperature is a measure of randomness
    #Max_token number of tokens to generate
    response = openai.Completion.create(
        engine = "text-ada-001",
        prompt=prompt,
        temperature = 0.3,
        max_tokens=80
    )

    return response.choices[0].text

def listOrDict(var):
    if isinstance(var, list):
        return var[0]['plaintext']
    else:
        return var['plaintext']

def search_wolframAlpha(query = ''):
    response = wolframClient.query(query)
    if response['@success'] == 'false':
        return 'Could not compute'
    
    else:
        result = ''
        pod0 = response['pod'][0]
        pod1 = response['pod'][1]

        if (('result') in pod1['@title'].lower()) or (pod1.get('@primary', 'false') == 'true') or ('definition' in pod1['@title'].lower()):
            result = listOrDict(pod1['subpod'])
            return result.split('(')[0]
        else:
            question = listOrDict(pod0['subpod'])
            return question.split['('][0]
            speak('Computation failed. Asking OpenAI')
            return query_openai(question)



if __name__ == '__main__': 
    speak('Hello, what can I do for you today')

    while True:
        # Parse as a list
        # query = 'computer say hello'.split()
        query = parseCommand().lower().split()
        print(type(query))
        print(query)

        if query[0] in activationWords and len(query) > 1:
            query.pop(0)

            # Set commands
            if query[0] == 'say':
                if 'hello' in query:
                    speak('Greetings, all!')
                else:
                    query.pop(0) # Remove 'say'
                    speech = ' '.join(query) 
                    speak(speech)

            #OpenAI
            if query[0] == 'what':
                query.pop(0)
                query = ' '.join(query)
                speech = query_openai(query)
                speak('Ok')
                speak(speech)


            # # Web Navigation
            # elif query[0] == 'go' and query[1] == 'to':
            #     speak('Opening...')
            #     query = ''.join(query[2:])
            #     webbrowser.get('chrome').open_new(query)

            #WolframAlpha (feeding computing Data aka make the Ai smart lol)

            if query[0] == 'computer' or query [0] == 'compute':
                query = ' '.join(query[1:])
                speak('Computing')
                try:
                    result = search_wolframAlpha(query)
                    speak(result)
                except:
                    speak('Unable to find your answer')


            #add other methods
            # Note taking
            if query[0] == 'log':
                speak('What note do you want to write')
                newNote = parseCommand().lower()
                now = datetime.now().strftime("%Y-%m-%d-%H-%M-%S")
                with open('note_%s.txt' % now, 'w') as newFile:
                    newFile.write(now)
                    newFile.write(' ')
                    newFile.write(newNote)
                speak('Note written')
            
            
            #Exiting Program
            elif query[0] == 'exit':
                speak('Goodbye')
                break

        else:
            print('Not in activation words')

        

