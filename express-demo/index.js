const express = require('express');
const app = express();
require('dotenv');

const courses = [
    {
        id: 1, name: 'course1'
    },
    {
        id: 2, name: 'course2'
    },
    {
        id: 3, name: 'course3'
    },
];

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

// api/courses/id
app.get('/api/posts/:year/:month', (req, res) => {
   res.send(req.query);
});

app.get('/api/courses/1', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
const course = courses.find(c => c.id  === parseInt(req.params.id));
if(!course) {
    // 404
    res.status(404).send('The course with the given ID was not found on the server. ');
    res.send(course);
}
});

const port = process.env.PORT || 3000;

app.listen(port,() => console.log(`Listening on port ${port}...`));
