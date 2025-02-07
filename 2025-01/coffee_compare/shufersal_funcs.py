
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import utils

def get_product_name(element):
    return element.get_attribute("data-product-name")

# def get_product_name(driver, locator):  # Pass the driver and locator
#     try:
#         element = WebDriverWait(driver, 10).until(  # Wait up to 10 seconds
#             EC.presence_of_element_located(locator)  # Wait for element to be present
#         )
#         return element.get_attribute("data-product-name")
#     except Exception as e:
#         print(f"Error getting product name: {e}")
#         return "unknown"

def get_product_price(element):
    new_element = element.find_element(By.XPATH,'.//div[@class="flex-line"]')
    new_text = utils.substring_until_substring(new_element.text, 'ש"ח')
    return float(new_text)
