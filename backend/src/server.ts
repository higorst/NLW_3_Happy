import express, { response } from 'express'
import path from 'path'
import cors from 'cors'

import 'express-async-errors'
import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333)

/*  ANOTAÇÕES

    yarn add express
    yarn add typescript -D
    yarn tsc --init

    tsconfig.json:
        "target": "es5" -> "target": "es2017"

    yarn add ts-node-dev -D

    package.json
        "scripts": {
            "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
        },

    yarn add typeorm sqlite3

    ormconfig.json

    package.json
        "scripts": {
            ...
            "typeorm": "ts-node-dev ./ndode_modules/typeorm/cli.js"
        },

    yarn typeorm migration:create -n create_orphanages
    yarn typeorm migration:run

    {
        "name": "Lar das Meninas",
        "latitude": -12.657990,
        "longitude": -39.103202,
        "about": "About",
        "instructions": "venha visitar",
        "opening_hours": "Das 8h às 18h",
        "open_on_weekends": true
    }

    yarn add express-async-errors
    yarn add yup
    yarn add cors
*/