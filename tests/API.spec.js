import { test, expect } from '@playwright/test';


test("Get request", async({request}) =>{
   var respond = await request.get("https://fake-json-api.mock.beeceptor.com/users")
   console.log(await respond.json())
   expect(await respond.status()).toBe(200)

})

test("post request", async({request}) =>{
    var respond = await request.get("https://fake-json-api.mock.beeceptor.com/users",
        {
            data:{"name": "suprithh", "company": "Noush", "username": "suprih", "email": "Annalises_Veum@yahoo.com",
                "address": "1656 Wallasce Unions",
                "zip": "954753",
                "state": "Arkanrsas",
                "country": "Nicarragua",
                "phone": "1-993-985-6176 x248",
                "photo": "https://json-server.dev/ai-profiles/69.png"}
        }

    )
    var res = respond.json()
    var resultID=res.id
    console.log(resultID,"resultID");
    


})