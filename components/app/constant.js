
const backgroudcolor= "100dd28"



export const systemRight = {
    'testRight':"testRight",
    'readSettings': 'read:settings',
    'createUser':'create:user',
    'updateUser':'update:user',
    'deleteUser':'delete:user',
    'readUser':'read:user',
    'createSales':'create:sales',
    'updateSales':'update:sales',
    'deleteSales':'delete:sales',
    'readSales':'read:sales',
    'createPurchase':'create:purchase',
    'updatePurchase':'update:purchase',
    'deletePurchase':'delete:purchase',
    'readPurchase':'read:purchase',
    'createItem':'create:item',
    'updateItem':'update:item',
    'deleteItem':'delete:item',
    'readItem':'read:item',
}

export const permission =[
    {
        "role":"admin",
        "right":[
            systemRight.testRight,
            systemRight.readSettings,
            systemRight.createItem
        ]
    }
]