import request from 'supertest';
import app from "./index.js";

var id = "";

describe('Categorie test', function() 
{
    describe('POST /categorie', function() {
        it("categorie created", function(done) {
            request(app)
            .post('/categorie')
            .send({
                name: 'js'
            }).expect(201, done);
        });
    });

    describe("GET /categories", function() {
        it("categories get", function(done) {
            request(app)
            .get('/categories')
        .expect(200, done);
        });
    });

})