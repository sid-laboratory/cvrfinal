const home = async(req,res) => {
    try{
        res.send('Welcome to the Home page');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = home;