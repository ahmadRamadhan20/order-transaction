## Address

    GET /admin

## Description
Show all submitted orders of customers

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
    "message": [
    {
            "_id": "5a37e534c5f39f1bb8e5ab21",
            "user": "5a37d0e0e80d281994821ee1",
            "name": "sugih",
            "phonenumber": "0823288",
            "email": "mwkdwm@gmail.com",
            "address": "melawar",
            "totalPrice": 671200,
            "coupon": {
                "_id": "5a37d0e0e80d281994821ede",
                "code": "XMASHOHO",
                "percentage_discount": 20,
                "quantity": 100,
                "start_valid": "2017-12-01T00:00:00.000Z",
                "end_valid": "2017-12-31T00:00:00.000Z",
                "__v": 0
            },
            "__v": 0,
            "payment": {
                "_id": "5a37e601c5f39f1bb8e5ab22",
                "bank": "BCA",
                "account_number": "1231231",
                "name": "sugih",
                "__v": 0
            },
            "items": [
                {
                    "products": {
                        "_id": "5a37d0e0e80d281994821edb",
                        "prod_id": "MS2M9D",
                        "name": "Hippo Power Bank 10000MAH Eve Simple",
                        "price": 419500,
                        "stock": 98,
                        "__v": 0
                    },
                    "quantity": 2,
                    "_id": "5a37e449c5f39f1bb8e5ab20"
                }
            ],
            "status": "Waiting for verification",
            "order_date": "2017-12-18T15:46:47.132Z"
        }
    ]
}
```


## Address

    GET /admin/:order_id

## Description
Show a particular order

## Example
**Request**

GET /admin/5a37e534c5f39f1bb8e5ab21
``` json
Content-Type: application/json
Authorization: Bearer __YOUR-AUTH-TOKEN
```

**Expected Response**

``` json
{
    "status": "success",
    "message": {
        "_id": "5a37e534c5f39f1bb8e5ab21",
        "user": "5a37d0e0e80d281994821ee1",
        "name": "sugih",
        "phonenumber": "0823288",
        "email": "mwkdwm@gmail.com",
        "address": "melawar",
        "totalPrice": 671200,
        "coupon": {
            "_id": "5a37d0e0e80d281994821ede",
            "code": "XMASHOHO",
            "percentage_discount": 20,
            "quantity": 100,
            "start_valid": "2017-12-01T00:00:00.000Z",
            "end_valid": "2017-12-31T00:00:00.000Z",
            "__v": 0
        },
        "__v": 0,
        "payment": {
            "_id": "5a37e601c5f39f1bb8e5ab22",
            "bank": "BCA",
            "account_number": "1231231",
            "name": "sugih",
            "__v": 0
        },
        "items": [
            {
                "products": {
                    "_id": "5a37d0e0e80d281994821edb",
                    "prod_id": "MS2M9D",
                    "name": "Hippo Power Bank 10000MAH Eve Simple",
                    "price": 419500,
                    "stock": 98,
                    "__v": 0
                },
                "quantity": 2,
                "_id": "5a37e449c5f39f1bb8e5ab20"
            }
        ],
        "status": "Waiting for verification",
        "order_date": "2017-12-18T15:46:47.132Z"
    }
}
```


## Address

    POST /admin/:order_id

## Description
Admin can update a particular order status, valid / invalid

## Example
**Request**

POST /admin/5a37e534c5f39f1bb8e5ab21
``` json
Content-Type: application/json
Authorization: Bearer __YOUR-AUTH-TOKEN
{
    "status": "valid"
}
```

**Expected Response**

``` json
{
    "status": "success",
    "message": "Order 5a37e534c5f39f1bb8e5ab21 status has been updated"
}
```


## Address

    PUT /admin/:order_id

## Description
Admin can change order's status to shipped and create shipment data

## Example
**Request**

PUT /admin/5a37e534c5f39f1bb8e5ab21
``` json
Content-Type: application/json
Authorization: Bearer __YOUR-AUTH-TOKEN
```

**Expected Response**

``` json
{
    "status": "success",
    "message": "Order 5a37e534c5f39f1bb8e5ab21 status has been updated",
    "shipping_id": "5a37e8b0ab3a2c1b6cfbcc5e"
}
```
