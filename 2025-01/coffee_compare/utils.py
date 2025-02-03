
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def reverse_string(word):
        new_word = ''
        for i in range(len(word)):
            new_word += word[-(1 + i)]
        return new_word

def substring_until_substring(text, substring):
    if not text:  # handle empty string case
        return ""

    index = text.find(substring)

    if index == -1:  # Substring not found
        return text
    else:
        return text[:index]
