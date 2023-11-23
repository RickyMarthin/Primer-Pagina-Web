USE paginaWeb;

SELECT * FROM paginaWeb.usuarios;

UPDATE paginaWeb.usuarios 
SET correo = 'juan@gmail.com' WHERE nombres = 'Juan' AND apellidos = 'Gómez';

UPDATE paginaWeb.usuarios 
SET correo = 'mari@gmail.com' WHERE nombres = 'María' AND apellidos = 'López';

UPDATE paginaWeb.usuarios 
SET correo = 'carlin@gmail.com' WHERE nombres = 'Carlos' AND apellidos = 'Rodríguez';

UPDATE paginaWeb.usuarios 
SET correo = 'ani@gmail.com' WHERE nombres = 'Ana' AND apellidos = 'Martínez';

UPDATE paginaWeb.usuarios 
SET correo = 'pepe@gmail.com' WHERE nombres = 'Pedro' AND apellidos = 'Sánchez';
