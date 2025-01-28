from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# driver = webdriver.Chrome()
# driver.get("https://www.google.com")
# print(driver.title)
# time.sleep(2)
# driver.maximize_window()
# time.sleep(1)
# driver.quit()

# driver = webdriver.Chrome()
# driver.get("https://www.python.org")
# driver.maximize_window()
# print("current url:", driver.current_url)
# time.sleep(2)
# driver.quit()

# go to the previous page:
# driver.back()
# move forward in the browser history:
# driver.forward()

# driver = webdriver.Chrome()
# driver.get("https://atid.store")
# time.sleep(1)
# driver.back()
# time.sleep(1)
# driver.forward()
# time.sleep(1)
# driver.refresh()
# time.sleep(1)
# driver.quit()


# element = driver.find_element(By.ID, "element-id")
# element = driver.find_element(By.CLASS_NAME, "class-name")
# element = driver.find_element(By.XPATH, "//button[text()='Click Me']")
# element = driver.find_element(By.CSS_SELECTOR, "button.btn-primary")
# element.click()

# driver = webdriver.Chrome()
# driver.get("https://atid.store")
# driver.maximize_window()
# element = driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/article[1]/div[1]/div[1]/section[3]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[1]")
# element.click()
# driver.back()
# time.sleep(1)
# driver.execute_script("window.open('https://www.google.com');")
# time.sleep(1)
# driver.switch_to.window(active_tabs[1])
# time.sleep(2)
# driver.quit()

driver = webdriver.Chrome()
driver.get("https://atid.store")
print(driver.current_url)
time.sleep(1)
driver.execute_script("window.open('https://www.google.com');")
active_tabs = driver.window_handles
driver.switch_to.window(active_tabs[1])
print(driver.current_url)
time.sleep(1)
driver.quit()