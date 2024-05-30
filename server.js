const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class Usuario {
    constructor() {
        this.id = faker.string.uuid();
        this.primerNombre = faker.person.firstName();
        this.apellido = faker.person.lastName();
        this.telefono = faker.phone.number();
        this.email = faker.internet.email();
        this.contraseña = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this.id = faker.string.uuid();
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.location.street(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            codigoPostal: faker.location.zipCode(),
            pais: faker.location.country()
        };
    }
}

app.get('/api/users/new', (req, res) => {
    const nuevoUsuario = new Usuario();
    res.json(nuevoUsuario)
});

app.get('/api/companies/new', (req, res) => {
    const nuevaEmpresa = new Empresa();
    res.json(nuevaEmpresa);
});

app.get('/api/user/company', (req, res) => {
    const nuevoUsuario = new Usuario();
    const nuevaEmpresa = new Empresa();
    res.json({ usuario: nuevoUsuario, empresa: nuevaEmpresa });
});

app.listen(8000, () => {
    console.log('Servidor iniciado en http://localhost:8000');
});