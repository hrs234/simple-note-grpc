const client = require('./client');
client.list({}, (error, notes) => {

    if(!error) {
        console.log('success fetch note');
        console.log(notes);
    } else {
        console.log(error);
    }
    
});
