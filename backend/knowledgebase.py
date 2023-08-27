import requests
from bs4 import BeautifulSoup
import json
import time

def href(soup):
    hrefs = []
    for i in soup.find_all("a", class_="s-link", href=True):
        if not i['href'].startswith('javascript'):
            hrefs.append(i['href'])
    return hrefs

def add_prefix(href_list):
    new_href = []
    prefix = 'https://stackoverflow.com'
    for h in href_list:
        if 'https' not in h:
            new_href.append(prefix + h)
        else:
            new_href.append(h)
    return new_href

def get_question_links(start_page, end_page):
    all_hrefs = []
    for page in range(start_page, end_page+1):
        req = requests.get(url='https://stackoverflow.com/questions/tagged/python?tab=votes&page={}&pagesize=15'.format(page))
        soup = BeautifulSoup(req.text, "html.parser")
        hrefs = href(soup)
        all_hrefs += hrefs

    question_urls = add_prefix(all_hrefs)
    return question_urls

start_page = 1
end_page = 3  # change as per your requirement
question_links = get_question_links(start_page, end_page)



# azure_url = f"{azure_endpoint}/language/:query-knowledgebases?projectName={project_name}&deploymentName={deployment_name}&api-version={api_version}"

postman_url = 'https://geniusai.cognitiveservices.azure.com/language/query-knowledgebases/projects/GeniusAI/sources?api-version=2021-10-01'
headers = {
    "Ocp-Apim-Subscription-Key": "219884db90984d02b0264a2d814edf65"
}

data = []

# Prepare data for PATCH request
for i in range(3):
    url = question_links[i]
    print(url)
    
    data.append({
        "op": "add",  # you can also use "add" instead of replace here to add sources
        "value": {
            "displayName": "source_name",  # you can generate or manually set a display name here
            "sourceUri": url,
            "sourceKind": "url",
            "source": url
        }
    })

response = requests.patch(postman_url, headers=headers, data=json.dumps(data))

if response.status_code == 202:
    print("Request was successful.", response.headers["Operation-Location"])
else:
    print("Request failed. Response:", response.text)

# waits between requests
time.sleep(1)