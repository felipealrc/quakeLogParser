module.exports = app =>{

    app.get('/', (req,res) => {
        res.sendFile('/app/views/index.html');
    })
}