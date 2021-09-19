describe('API Testing',function(){

    it('GET Methid',function(){
        cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
        })
    })

    it('POST Methid',function(){
        var user= {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })

    it('PUT Methid',function(){
        var user= {
            "name": "marta",
            "job": "tester"
        }
        cy.request('PUT','https://reqres.in/api/users/2',user).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })

    it('DELETE Methid',function(){
        cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
            expect(response.status).equal(204)
        })
    })
})