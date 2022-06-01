from typing import Dict, Type
from urllib.parse import urlparse
from webparsing.parser import Parser
from webparsing.codeforces_parser import CodeforcesParser


class ParserFactory:
    domain_to_parser: Dict[str, Type[Parser]] = {
        'codeforces': CodeforcesParser
    }
    @staticmethod
    def __extract_domain(url: str) -> str:
        #if '/' in url:
        #    url = url.split('/')[0]
        url = urlparse(url).netloc
        return url.split('.')[-2]

    @staticmethod
    def get_parser(url) -> Parser:
        domain = ParserFactory.__extract_domain(url)
        if domain not in ParserFactory.domain_to_parser:
            raise RuntimeError("Invalid domain")
        return ParserFactory.domain_to_parser[domain]()
