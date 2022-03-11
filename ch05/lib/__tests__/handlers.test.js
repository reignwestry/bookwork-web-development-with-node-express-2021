/*
    # Jest: How to test?
     

*/

//? 1) import code
const handlers = require('../handlers')



//? 2) CREATE handlers === Describe what's being tested ==> 'home page renders'
//# HOME HANDLER
test('home page renders', () => {
    const req = {}
    const res = { render: jest.fn() }
    handlers.home(req, res)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

//# ABOUT HANDLER
test('about page renders with fortune', () => {
const req = {}
const res = { render: jest.fn() }
    handlers.about(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('about')
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
        fortune: expect.stringMatching(/\W/),
    }))
})

//# 404 HANDLER
test('404 handler renders', () => {
const req = {}
const res = { render: jest.fn() }
    handlers.notFound(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
})

//# 500 HANDLER
test('500 handler renders', () => {
const err = new Error('some error')
const req = {}
const res = { render: jest.fn() }
const next = jest.fn()
    handlers.serverError(err, req, res, next)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('500')
})