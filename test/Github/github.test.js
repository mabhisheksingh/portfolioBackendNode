import request from 'supertest';
import app from '../../src/app.mjs';
import {StatusCodes} from 'http-status-codes'

describe("GitHub Endpoint ", ()=>{
    let agent; // Create a variable to store the request agent

    beforeAll(() => {
      agent = request.agent(app); // Create the request agent once before all tests
      console.log("***************testing Start**************")

    });

    afterAll(() => {
        agent = null; // Close the request agent after all tests
        console.log("***************testing End**************")
      });
  

    test("Get All request", async ()=>{
        const res = await agent
                        .get("/v1/github/getAllRepo")
                        .set('username','mabhisheksingh')
                        .set('token','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')
        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    test("User name not valid", async()=>{
        // const res = await request()
        const res = await agent
                        .get('/v1/github/getAllRepo')
                        .set('username','mabhisheksingh');
        
        expect(res.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res.body.Response).toEqual("Error: Not Valid token");
    });

    test("username not valid", async()=>{
        // const res = await request()
        const res = await agent
                        .get('/v1/github/getAllRepo')
                        .set('token','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');
                        
        expect(res.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res.body.Response).toEqual("Error: Not Valid userName");
    })
})