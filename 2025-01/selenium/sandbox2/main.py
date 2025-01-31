from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


# title = driver.title
# if "ATID" in title:
#     print(f'"ATID" is in {title}')

# url = driver.current_url
# if url == "https://atid.store/":
#     print(f'homepage url = {url}')

# def getAllButtons():
#     try:
#         buttons = WebDriverWait(driver, 5).until(
#             EC.presence_of_all_elements_located((By.TAG_NAME, "button"))
#         )
#         time.sleep(2)
#         buttons[0].click()
#         time.sleep(2)
#         for i in range(len(buttons)):
#             print(f"{i} @@@ {buttons[i]}")
#     except Exception as e:
#         print("exception:",e)


# def checkBtnExist(buttonText):
#     try:
#         button = WebDriverWait(driver, 5).until(
#             EC.presence_of_element_located((By.XPATH, f"//button[text()='{buttonText}']"))
#             )
#         print(f"found button with text {buttonText}")
#         print(f'found button {button}')
#     except:
#         print(f"could not find button with text {buttonText}")

# checkBtnExist("Shop Now")
# checkBtnExist("SHOP NOW")
# getAllButtons()

# element = WebDriverWait(driver, 5).until(
#     EC.presence_of_element_located((By.XPATH, "//div[@class='ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout']"))
# )

# header_element = driver.find_element(By.)
# print(element)
#header_elements = driver.find_elements(By.XPATH, "/*")
# header_elements = element.find_elements(By.CSS_SELECTOR, "button")
# count = 0
# for button in header_elements:
#     print(button.text)
#     count +=1
# print(len(header_elements))
# print(count)

driver = webdriver.Chrome()
driver.get("https://atid.store")
driver.maximize_window()

elements = driver.find_elements(By.XPATH, "//*")

count = 0
for element in elements:
    if(element.text == "SHOP NOW" or element.text == "Shop Now"): 
        print(element)
        count += 1


print(count)

driver.quit()