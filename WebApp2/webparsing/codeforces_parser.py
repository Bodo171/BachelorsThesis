import requests
import scrapy

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from webparsing.parser import Parser


class CodeforcesParser(Parser):
    special_chars = {'$', '{', '}'}
    def _clean_special_chars(self, raw_str):
        ascii_str = "".join(c for c in raw_str if c.isascii())
        idx = 0
        filtered_str = ''
        while idx < len(ascii_str):
            # blocks have the form \ x char1 char2
            if idx + 1 < len(ascii_str) and ascii_str[idx] == '\\' and ascii_str[idx+1] == 'x':
                idx += 4
                continue
            if ascii_str[idx] in CodeforcesParser.special_chars:
                idx += 1
                continue
            filtered_str += ascii_str[idx]
            idx += 1
        return filtered_str

    def _clean_body(self, html_doc: str) -> str:
        soup = BeautifulSoup(html_doc, 'html.parser')
        statement = soup.select('.problem-statement')[0]
        divs = list(statement.children)[1:-2]  # ignoring header and examples
        raw_str = str(" ".join(div.get_text() for div in divs))
        return self._clean_special_chars(raw_str)

    def parse(self, url: str) -> str:
        """
        driver = webdriver.Chrome()
        driver.get(url)
        element = driver.find_element(By.CLASS_NAME, 'problem-statement')
        """
        body = str(requests.get(url).content)
        ret = self._clean_body(body)
        # print(ret, type(ret))
        return ret
