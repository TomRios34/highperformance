import Sequelize from 'sequelize'
import db from '../config/db.js'

export const Suscrito = db.define('suscriptor', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    telefono: {
        type: Sequelize.BIGINT(10)
    },
    comentarios: {
        type: Sequelize.STRING
    }
})