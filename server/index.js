const express = require(`express`);
const cors = require(`cors`);
const ctrl = require('./controller')

console.log(ctrl.name)

const app = express();

app.use(cors());
app.use(express.json());


app.get(`/api/movies`, ctrl.getMovies)
app.delete(`/api/movies/:id`, ctrl.deleteMovie)
app.post(`api/movies`, ctrl.addMovie)


 





app.listen(4004, () => console.log(`Server is listening on 4004`))