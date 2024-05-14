from flask import Flask, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import logging
import json

app = Flask(__name__)
CORS(app)

#api/home = tela inicial, neste caso retorna um JSON
@app.route("/api/home", methods=['GET'])
def return_home():
    vq_home = get_page_html("https://www.viaquatro.com.br/")

    LINES_METRO = ['azul', 'verde', 'vermelha', 'amarela', 'lilás', 'prata']

    LINES_CPTM = ['rubi','diamante','esmeralda','turquesa','coral','safira','jade']

    ALL_LINES = LINES_METRO + LINES_CPTM
    
    status_linhas = scrapper_status(vq_home, ALL_LINES)

    #converten
    status_linhas_str = json.dumps(status_linhas, ensure_ascii=False).encode('utf-8')

    return status_linhas_str
    

def get_page_html(url):
    try:
        page = requests.get(url)
        if page.status_code == 200:
            return page.text
        else:
            return None
    except BaseException:
        return None

def get_operation_status(soup, all_lines):

    extracted_status = {line: '' for line in all_lines}

    # Contains all the info we need
    status_column = soup.find(class_="operacao")

    # The 'amarela' line is shown in a special container
    extracted_status['amarela'] = status_column.find(class_="status").text

    # All of the other lines are shown in a more orderly fashion. Metro has a
    # div and CPTM has another one
    lines_containers = status_column.find_all(class_="linhas")

    for container in lines_containers:
        line_info_divs = container.find_all(class_="info")
        # each info div has two span tags inside: one for line title and one
        # for line status
        for div in line_info_divs:
            line_title = ''
            line_status = ''
            spans = div.find_all("span")
            line_title = spans[0].text.lower()
            line_status = spans[1].text.lower()
            # now that we have line_title and line_status set, we only have to
            # store it to return later
            extracted_status[line_title] = line_status
        logging.info('Extracted: {}'.format(extracted_status))

    
    return(extracted_status)

def get_time_data(soup):
    return soup.find('time').text

def scrapper_status(vq_home, ALL_LINES):

    soup = BeautifulSoup(vq_home, 'html.parser' )
    #time_data = get_time_data(soup)
    op_status = get_operation_status(soup, ALL_LINES)

    status_linhas = {}
    #last_atualization = {}

    for line in ALL_LINES:

        status_linhas[line] = op_status[line]
        #last_atualization[line] = time_data[line]
        print([line, op_status[line]])

    print(status_linhas)
    return status_linhas #last_atualization

if __name__ == '__main__':
    app.run(debug = True, port=8080)