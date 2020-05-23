const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const { initiateConnection } = require('./connector');
const port = process.env.PORT || 3000;
const { loginUser, getAllUsers, getUser, getAllEvents, getEvent, getEventRegistration, getAllEventRegistrations } = require('./getters');
const { editUser, editEvent, editEventRegistration } = require('./updater');
const { deleteUser, deleteEvent, deleteEventRegistration } = require('./remover');
const { saveUser, saveEvent, saveEventRegistration } = require('./savers');
app.use(bodyParser.json())
app.use(cors())

// GET Endpoints

app.get('/', (_, res) => {
    res.send('StackHack v1 Backend Express Server');
});

app.post('/login', (req, res) => {
    loginUser(req.body).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
})

app.get('/users/:email', (req, res) => {
    getUser(req.params.email).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/users', (_, res) => {
    getAllUsers().then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/events/:eventId', (req, res) => {
    getEvent(req.params.eventId).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/events', (_, res) => {
    getAllEvents().then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/registrations/:regId', (req, res) => {
    getEventRegistration(req.params.regId).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/registrations', (_, res) => {
    getAllEventRegistrations().then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

// POST Endpoints

app.post('/users', (req, res) => {
    saveUser(req.body).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    }).catch(err => {
        res.send(err);
    });
});

app.post('/events', (req, res) => {
    saveEvent(req.body).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.post('/registrations', (req, res) => {
    saveEventRegistration(req.body).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

// PUT Endpoints

app.put('/users', (req, res) => {
    editUser(req.body).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.put('/events', (req, res) => {
    editEvent(req.body).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.put('/registrations', (req, res) => {
    editEventRegistration(req.body).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

// DELETE Endpoints

app.delete('/users/:email', (req, res) => {
    deleteUser(req.params.email).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.delete('/events/:eventId', (req, res) => {
    deleteEvent(req.params.eventId).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.delete('/registrations/:regId', (req, res) => {
    deleteEventRegistration(req.params.regId).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

app.listen(port, () => initiateConnection());