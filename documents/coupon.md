## Address

   GET  /coupons

## Description
Apply a coupon to your shopping cart

## Example
**Request**

``` json
Content-Type: application/json
Authorization: Bearer __YOUR-AUTH-TOKEN
{
    "code": "XMASHOHO"
}
```

**Expected Response**

``` json
{
    "status": "success",
    "message": "Coupon has been applied"
}
```
