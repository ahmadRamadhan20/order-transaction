## Address

    POST /shoppingcart

## Description
Add some amounts of a product into a shopping cart

## Example
**Request**

``` json
Content-Type: application/json
Authorization: Bearer __YOUR-AUTH-TOKEN
{
  "prod_id": "MS2M9D",
  "quantity": 2
}
```

**Expected Response**

``` json
{
    "status": "success",
    "message": "Product succesfully added to the cart"
}
```

## Address

    GET /shoppingcart

## Description
Show content of your shopping cart

## Example
**Request**

``` json
Content-Type: application/json
Authorization: Bearer __YOUR-AUTH-TOKEN
```

**Expected Response**

``` json
{
    "status": "success",
    "message": {
        "total": 839000,
        "items": [
            {
                "products": {
                    "_id": "5a37d0e0e80d281994821edb",
                    "prod_id": "MS2M9D",
                    "name": "Hippo Power Bank 10000MAH Eve Simple",
                    "price": 419500,
                    "stock": 100,
                    "__v": 0
                },
                "quantity": 2,
                "_id": "5a37e449c5f39f1bb8e5ab20"
            }
        ]
    }
}
```
