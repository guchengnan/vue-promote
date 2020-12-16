/* eslint-disable @typescript-eslint/no-var-requires */
const Mock = require('mockjs')
const userLogin = require('./userLogin')
const userLogout = require('./userLogout')
const getVideos = require('./getVideos')
const getNews = require('./getNews')

module.exports = (app/* , server */) => {
    app.post(/user\/login/, (req, res) => {
        res.json(Mock.mock(userLogin(req)))
    })
    app.post(/user\/logout/, (req, res) => {
        res.json(Mock.mock(userLogout))
    })
    app.get(/user\/getVideos/, (req, res) => {
        res.json(Mock.mock(getVideos(req)))
    })
	app.get(/user\/getNews/, (req, res) => {
	    res.json(Mock.mock(getNews(req)))
	})
}