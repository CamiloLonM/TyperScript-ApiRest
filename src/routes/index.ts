import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

// ( Cargador dinamico de rutas) Scanea cuantos archivos que existen dentro de ese directorio
// OJO!!! El nombre del archivo es el nombre de la ruta
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    // Importacion dinamica
    import(`./${cleanName}`).then((moduleRouter) => {
      // rutas
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
