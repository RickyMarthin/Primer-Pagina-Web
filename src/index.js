import express from 'express';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';

// Inicializacion
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.engine('.hbs');

// Run Server
app.listen(app.get('port'), () =>
    console.log('Server listening on port', app.get('port')));