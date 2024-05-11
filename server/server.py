from flask import Flask, request, abort
import json
from config import db
from bson import ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app) #WARNING: this disables CORS protection

#products
@app.get('/')
def home():
    return "This is an API. You shouldn't be here."

def fix_id(record):
    record["_id"] = str(record["_id"])
    return record

@app.get('/api/products')
def get_products():
    catalog = []
    cursor = db.products.find({})
    for record in cursor:
        catalog.append(fix_id(record))
    
    return json.dumps(catalog)

@app.post("/api/products")
def save_products():
    prod = request.get_json()
    db.products.insert_one(prod)
    return json.dumps(fix_id(prod))

@app.get('/api/categories')
def get_categories():
    cats = []
    # read all prods from db into a cursor
    cursor = db.products.find({})
    # travel the cursor with a for
    for x in cursor:
        # get the product from the cursor
        # from the product get the category
        category = x["category"]
        # add the category to the cats list
        if category not in cats:
            cats.append(category)
            
    # return the list as json
    return json.dumps(cats)

# get /api/reports/total
# retun the total value of the stock (sum of prices)
@app.get('/api/reports/total')
def get_totalReports():
    total = 0
    cursor = db.products.find({})
    for y in cursor:
        total += y["price"]

    return json.dumps(total) #you can also only write return total

@app.delete("/api/products/<id>")
def delete_products(id):
    if not ObjectId.is_valid(id):
        return abort(400, "Invalid id")

    db_id = ObjectId(id) # parse the id to ObjectId('adgshzhx')
    result = db.products.delete_one({"_id": db_id})
    if result.deleted_count == 0:
        return abort(404,"No product found for the provided id")
    
    return json.dumps({"deleted":True})

#coupons
# db.coupons
# get /api/coupons
@app.get('/api/coupons')
def get_coupons():
    catalogC = []
    cursor = db.coupons.find({})
    for record in cursor:
        catalogC.append(fix_id(record))
        
    return json.dumps(catalogC)

# post /api/coupons
@app.post('/api/coupons')
def save_coupons():
    cou = request.get_json()
    db.coupons.insert_one(cou)
    return json.dumps(fix_id(cou))

# delete coupons
@app.delete("/api/coupons/<code>")
def delete_coupons(id):
    if not ObjectId.is_valid(id):
        return abort(400,"Invalid code")
    
    db.code = ObjectId(id)
    result = db.coupons.delete_one({"_code":db_code})
    if result.deleted_count == 0:
        return abort(400,"No coupon found")
    
    return json.dumps({"deleted":True})


# get /api/coupons/<code> 
# db.coupons.find({"code": code}) // []
# db.coupons.find_one({"code": code}) // dict
@app.get("/api/coupon/<code>")
def get_coupon(code):
    #more than one
    #coupons = db.coupons.find({"code": code})
    #for one
    coupon = db.coupons.find_one({"code": code})
    if not coupon:
        return abort(404, "No coupon for given code")
    
    return json.dumps(fix_id(coupon))



@app.put("/api/produts/<int:index>")
def update_products(index):
    update_product = request.get_json()
    if 0<= index < len(products):
        products[index] = update_product
        return json.dumps(update_product)
    else:
        return "That index does not exist"
    
    
@app.patch("/api/produts/<int:index>")
def patch_products(index):
    update_field = request.get_json()
    if 0<= index < len(products):
        products(index).update(update_field)
        return json.dumps(update_field)
    else:
        return "That index does not exist"

#app.run(debug=True)