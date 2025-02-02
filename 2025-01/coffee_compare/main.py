# general goal: 
# compare the price of black coffee from at least 3 different vendors, and update it when wanted.
# 

# next program: generate a tracking system for some basic commodities collection that will
# help gauge how pricy is life. Track changes. Create a script that will run once a day
# and record this information in sql or some other format for long term tracking.

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()
driver.get("https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA-%D7%90%D7%9C%D7%9B%D7%95%D7%94%D7%95%D7%9C-%D7%95%D7%99%D7%99%D7%9F/%D7%A7%D7%A4%D7%94-%D7%95%D7%AA%D7%94/%D7%A7%D7%A4%D7%94-%D7%A9%D7%97%D7%95%D7%A8/c/A130507")
driver.maximize_window()
time.sleep(3)
driver.quit()