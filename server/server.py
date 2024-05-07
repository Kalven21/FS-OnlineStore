from flask import Flask
import json
from config import db

app = Flask(__name__)

@app.get('/')
def home():
    return "This is an API. You shouldn't be here."

def fix_id(record):
    record["_id"] = str(record["_id"])

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
    print (prod)
    #mock save
    # products.append(prod)
    # return json.dumps(prod)
    db.products.insert_one(prod)
    return json.dumps(fix_id(prod))

@app.put("/api/produts/<int:index>")
def update_products(index):
    update_product = request.get_json()
    if 0<= index < len(products):
        products[index] = update_product
        return json.dumps(update_product)
    else:
        return "That index does not exist"
    
@app.delete("/api/produts/<int:index>")
def delete_products(index):
    delete_product = request.get_json()
    if 0<= index < len(products):
        delete_product = products.pop(index)
        return json.dumps(delete_product)
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