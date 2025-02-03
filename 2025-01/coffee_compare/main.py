# general goal: 
# compare the price of black coffee from at least 3 different vendors, and update it when wanted. 

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
elements = driver.find_elements(By.XPATH, "//li[@data-product-name]")
def reverse_print(elements):
    for element in elements:
        word = element.get_attribute("data-product-name")
        new_word = ''
        for i in range(len(word)):
            new_word += word[-(1 + i)]
        print(new_word)

time.sleep(3)
driver.quit()

#//tagName[@AttributeName="Value"]
#data-product-name="קפה טורקי בצלופן"
#//li[@data-product-name="קפה טורקי בצלופן"]

# <li class="miglog-prod miglog-sellingmethod-by_unit" data-product-name="קפה טורקי בצלופן" data-entry-number="" data-product-box="" data-product-replace="" data-product-price="10.9" data-product-purchasable="false" data-food="true" data-selling-method="BY_UNIT" data-product-code="P_176062" xpath="1" style="">

# 	<div class="tile miglog-prod-inStock notOverlay ui-draggable ui-draggable-handle">
		
# 		<div class="miglog-prod-outOfStock-msg">חסר במלאי</div> 
#     <div class="miglog-prod-lowStock-msg">מלאי מוגבל</div>

# 		<div class="wrapper-top-product">
# 			<div class="hidden-md hidden-lg health-labels">
# 				</div>
# 			<a href="javascript:void(0)" role="button" class="imgContainer" aria-label="קפה טורקי בצלופן" data-target="#productModal" data-product-code="P_176062" draggable="false">
# 				<img src="https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/ZKP22_L_P_176062_1.png" alt="קפה טורקי בצלופן" class="pic" draggable="false" width="150" height="150" loading="lazy">
# 	<div>
# 					</div>
# 			</a>
# 		</div>
# 		<div class="textContainer">
# 			<div class="middleContainer">
# 				<div class="bigText promotion-section">
# 	<div class="compareProductMobile">מבצע</div>
# 	</div>




# <div class="text description" style="-webkit-box-orient: vertical;">
#                         <span data-target="#productModal" data-product-code="P_176062">קפה טורקי עלית</span>
#                     </div>
# 				 <div class="labelsListContainer">
# 					<div class="smallText">
#                         <div class="brand-name">
# <span>100 גרם</span> |
#             <span>עלית</span>
#     </div></div>
# 				</div>
# 				<div class="line">
# 					<div class="flex-right">
# 						<span class="price">
# 									<span class="number">10.90</span>
# 									<span class="currency"><span aria-hidden="true">₪</span><span class="sr-only">שקלים חדשים</span></span>
# 								</span>
# 								</div>
# 				</div>
# 				<div class="flex-line">
# 					<div class="smallText">
# 						10.9&nbsp;ש"ח ל- 100 גרם</div>
# 					<div class="hidden-xs hidden-sm health-labels">
# 						</div>
# 				</div>

# 				</div>


# 		</div>
# 		<div class="addToCartWrapperOld hidden-xs">
# 				<div class="addToCart bottomContainer initialized">
#     <div class="miglog-prod-outOfStock-msg">חסר במלאי</div>

    





















    






    










#     <input type="text" name="comment_2" value="" class="inputNote miglog-text3 " maxlength="26" placeholder="הקלד הערה">





# <div class="compareProductMobile">כמות </div>
# <div class="touchSpinBox   initialized" data-spin-initialized="true">
    
    
#     <input type="hidden" name="productCodePost" value="P_176062">
#     <input type="hidden" value="false" name="longtail">
    
    
    
    
    
    
    
#     <div class="input-group bootstrap-touchspin buttonsShow"><span class="input-group-btn"><button class="btnTouchspin bootstrap-touchspin-up" type="button" aria-label="הוסף 1">+</button></span><span class="input-group-btn"><button class="btnTouchspin bootstrap-touchspin-down" type="button" aria-label="הפחת 1">-</button></span><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span><input class="spinContainer active js-qty-selector-input  form-control minMaxEvent" inputmode="numeric" data-min-qty="" data-max-qty="100" data-min-qty-text="כמות המינימלית בקניה 1 יח'" data-max-qty-text="הגעת לכמות המקסימלית לקניה" data-min-weight="" data-max-weight="100.0" data-min-weight-text="כמות המינימלית בקניה 0.05  ק&quot;ג" data-max-weight-text="הגעת לכמות המקסימלית לקניה" data-inc="0.1" data-miglog-sellingmethod="BY_UNIT" type="text" value="1" name="qty" autocomplete="off" data-placement="top" data-trigger="manual" aria-live="assertive" aria-label="כמות שנבחרה 1" aria-labelledby="P_176062" data-spin-initialized="true" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span></div>

    
#                 <div class="btn-group bootstrap-select miglog-sm miglog-sm-select customer_selection"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="יח'" aria-label="בחר סוג מידה"><span class="filter-option pull-left">יח'</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">יחידות</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span aria-hidden="true">ק"ג</span>
#                                           <span class="sr-only">קילוגרמים</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select class="selectpicker miglog-sm miglog-sm-select customer_selection" name="sellingMethod" data-select-method="CUSTOMER_SELECTION" data-label="בחר סוג מידה" tabindex="-98">
#                     <option selected="" value="BY_UNIT" title="יח'">יחידות</option>
#                     <option value="BY_WEIGHT" title="ק&quot;ג" data-content="<span aria-hidden='true'>ק&quot;ג</span>
#                                           <span class='sr-only'>קילוגרמים</span>">
#                             ק"ג
#                     </option>
#                 </select></div>


#         <span class="unitPick" id="P_176062">
#                 <span class="unitPick  miglog-sm miglog-sm-label by_weight">
#                     <span aria-hidden="true">ק"ג</span>
#                     <span class="sr-only">קילוגרמים</span>
#                 </span>
#                 <span class="unitPick  miglog-sm miglog-sm-label by_unit">
#                     <span aria-hidden="true">יח'</span>
#                     <span class="sr-only">יחידות</span>
#                 </span>
#         </span>
    
    

# </div>
# <button class="btn js-add-to-cart js-enable-btn miglog-btn-add" type="">
#                 הוספה<span class="sr-only">כמותקפה טורקי בצלופן</span>
#             </button>
#             <button class="btn js-update-cart js-enable-btn miglog-btn-update" type="button" data-miglog-role="cart-item-updater">
#                 עדכון<span class="sr-only">כמותקפה טורקי בצלופן</span>
#             </button>
#         </div>

# <div class="miglog-dragging-msg text-center miglog-bg-color4 miglog-text2 miglog-bold animated fadeIn">
#     להוספה - גררו אותי לסל</div>
# </div>
# 			<div class="addToCartMobileWrapperNew hidden-sm hidden-md hidden-lg">
# 				<div class="addToCart bottomContainer addToCartMobileWrapper  ">
#     <div class="miglog-prod-outOfStock-msg">חסר במלאי</div>


#     <div class="add-to-cart-actions-wrapper ">
#         <button class="delete-item">
#             <img src="/online/_ui/responsive/theme-miglog/img/trash.svg" loading="lazy" alt="מחק קפה טורקי בצלופן">
#         </button>
#         <div class="add-item initialized">
            


























    










#     <input type="text" name="comment_2" value="" class="inputNote miglog-text3 " maxlength="26" placeholder="הקלד הערה">





# <div class="compareProductMobile">כמות </div>
# <div class="touchSpinBox   initialized" data-spin-initialized="true">
    
    
#     <input type="hidden" name="productCodePost" value="P_176062">
#     <input type="hidden" value="false" name="longtail">
    
    
    
    
    
    
    
#     <div class="input-group bootstrap-touchspin buttonsShow"><span class="input-group-btn"><button class="btnTouchspin bootstrap-touchspin-up" type="button" aria-label="הוסף 1">+</button></span><span class="input-group-btn"><button class="btnTouchspin bootstrap-touchspin-down" type="button" aria-label="הפחת 1">-</button></span><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span><input class="spinContainer active js-qty-selector-input js-add-to-cart-mobile form-control minMaxEvent" inputmode="numeric" data-min-qty="" data-max-qty="100" data-min-qty-text="כמות המינימלית בקניה 1 יח'" data-max-qty-text="הגעת לכמות המקסימלית לקניה" data-min-weight="" data-max-weight="100.0" data-min-weight-text="כמות המינימלית בקניה 0.05  ק&quot;ג" data-max-weight-text="הגעת לכמות המקסימלית לקניה" data-inc="0.1" data-miglog-sellingmethod="BY_UNIT" type="text" value="0" name="qty" autocomplete="off" data-placement="top" data-trigger="manual" aria-live="assertive" aria-label="כמות שנבחרה 0" aria-labelledby="P_176062" data-spin-initialized="true" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span></div>

    
#                 <div class="btn-group bootstrap-select miglog-sm miglog-sm-select customer_selection"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="יח'" aria-label="בחר סוג מידה"><span class="filter-option pull-left">יח'</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">יחידות</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span aria-hidden="true">ק"ג</span>
#                                           <span class="sr-only">קילוגרמים</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select class="selectpicker miglog-sm miglog-sm-select customer_selection" name="sellingMethod" data-select-method="CUSTOMER_SELECTION" data-label="בחר סוג מידה" tabindex="-98">
#                     <option selected="" value="BY_UNIT" title="יח'">יחידות</option>
#                     <option value="BY_WEIGHT" title="ק&quot;ג" data-content="<span aria-hidden='true'>ק&quot;ג</span>
#                                           <span class='sr-only'>קילוגרמים</span>">
#                             ק"ג
#                     </option>
#                 </select></div>


#         <span class="unitPick" id="P_176062">
#                 <span class="unitPick  miglog-sm miglog-sm-label by_weight">
#                     <span aria-hidden="true">ק"ג</span>
#                     <span class="sr-only">קילוגרמים</span>
#                 </span>
#                 <span class="unitPick  miglog-sm miglog-sm-label by_unit">
#                     <span aria-hidden="true">יח'</span>
#                     <span class="sr-only">יחידות</span>
#                 </span>
#         </span>
    
    

# </div>
# </div>

#         <button class="add-item-drop-down">
#             <img src="/online/_ui/responsive/theme-miglog/img/spinner.svg" loading="lazy" alt="בחירת כמות לפריט קפה טורקי בצלופן">
#         </button>
#         <div class="dropdown">
#             <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-up" data-max-quantity="100" data-step="1"></ul>
#         </div>
#     </div>
# <div class="btn-wrapper">
# <button class="btn miglog-btn-add" type="" aria-label="כפתור הרחבה הוספה לסל">
#                 <span class="expand-icon"></span> <span class="sr-only">כמותקפה טורקי בצלופן</span>
#             </button>

#             <button class="btn miglog-btn-update" type="button" data-miglog-role="cart-item-updater" aria-label="כפתור הרחבה הוספה לסל">
#                 עדכון<span class="sr-only">כמותקפה טורקי בצלופן</span>
#             </button>
#         </div>
# </div>

# <div class="miglog-dragging-msg text-center miglog-bg-color4 miglog-text2 miglog-bold animated fadeIn">
#     להוספה - גררו אותי לסל</div>
# </div>
# 		</div>
# </li>