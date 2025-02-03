
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import utils

def getShufersalProductName(element):
    return element.get_attribute("data-product-name")


def get_product_price(element):
    new_element = element.find_element(By.XPATH,'.//div[@class="flex-line"]')
    new_text = utils.substring_until_substring(new_element.text, 'ש"ח')
    return float(new_text)
