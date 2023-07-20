import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "../src/components/NavBar/NavBar";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "../src/components/Error404/Error404";


function App() {
  return (
        <div >      
          <BrowserRouter >
            <NavBar/>
            <Routes>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
              <Route path={"*"} element={<Error404 />} />
            </Routes>           
          </BrowserRouter>
          


         
        </div>
  );
}

export default App;



// [
//   {"id":1, "nombre":"iPhone 13 pro", "descripcion":"iPhone 13 Pro 512 GB - Grafito (Graphite)", "imagen":"https://www.macstation.com.ar/img/productos/2594-1.jpg", "precio":220000, "stock":10, "categoria":"celulares"},
//   {"id":2, "nombre":"Samsung S23 ", "descripcion":"Celular Galaxy S23 Phantom black", "imagen":"https://samsungar.vtexassets.com/arquivos/ids/186560-800-auto?width=800&height=auto&aspect=true", "precio":50000, "stock":10, "categoria":"celulares"},
//   {"id":3, "nombre":"Motorola G52", "descripcion":"Celular libre Motorola moto G52 6GB 128GB azul", "imagen":"https://carrefourar.vtexassets.com/arquivos/ids/250996-1600-auto?v=637933178054400000&width=1600&height=auto&aspect=true", "precio":120000, "stock":10, "categoria":"celulares" },
//   {"id":4, "nombre":"Macbook air pro", "descripcion":"MACBOOK PRO 16' M1 PRO CHIP 10-CORE CPU 16-CORE GPU - 1TB SSD – SILVER - APPLE", "imagen":"https://www.megatone.net/images/Articulos/zoom2x/200/01/MKT0274ETC.jpg", "precio":2000, "stock":10, "categoria":"notebooks"},
//   {"id":5, "nombre":"Notebook Dell Inspiron", "descripcion":"NOTEBOOK DELL INSPIRON 15-3511 INTEL CORE I3", "imagen":"https://medias.musimundo.com/medias/00677002-147995-147995-01-147995-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w0MTgwNnxpbWFnZS9qcGVnfGhmMC9oMWMvMTA0NDk4NDAxNzcxODIvMDA2NzcwMDItMTQ3OTk1LTE0Nzk5NV8wMS0xNDc5OTVfMDEuanBnX3NpemU1MTV8N2Y5YmJlNmZmZDY0MzFjNTEwNWM4MTgyYWM5MjFkZTgwM2NmZDY1YzBkZjQ3YTkyNjM3ZjQzZTMzNDJiNGRjOQ", "precio":1300, "stock":10, "categoria":"notebooks"},
//   {"id":6, "nombre":"Auricular Bluetooth Samsung", "descripcion":"AURICULAR BLUETOOTH SAMSUNG SM-R177NZKAARO", "imagen":"https://medias.musimundo.com/medias/00432008-177681-177681-01.png-177681-01.png-size515?context=bWFzdGVyfGltYWdlc3w0NjY1MjB8aW1hZ2UvcG5nfGg5ZC9oN2YvMTA0MzQwNTk1NjcxMzQvMDA0MzIwMDgtMTc3NjgxLTE3NzY4MV8wMS5wbmctMTc3NjgxXzAxLnBuZ19zaXplNTE1fGU5OTg4ODBlOTAzNDBjNTJmYjQzZTQzNDc1ZDhmZjYwODc2ZjFiNmY2ZmUxMWNjMjBhMGQ2Nzk3NjcyZDViNmI", "precio":100, "stock":10, "categoria":"auriculares"},
//   {"id":7, "nombre":"Auriculares Logitech Gamer ", "descripcion":"AURICULAR GAMER LOGITECH G635", "imagen":"https://medias.musimundo.com/medias/00317174-140546-140546-01-140546-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wzODkyN3xpbWFnZS9qcGVnfGg2My9oYjAvMTAzNzk4MDMxOTc0NzAvMDAzMTcxNzQtMTQwNTQ2LTE0MDU0Nl8wMS0xNDA1NDZfMDEuanBnX3NpemU1MTV8YjExZmRlYTBkM2Y0ZGFiOTQ5YjU5OTdlYzE2ZTBhOTFjM2M3YmIzZjJiYmZjYWZhNWI5ZjgxZmY1MTc4YzNmNw", "precio":80, "stock":10, "categoria":"auriculares"},
//   {"id":8, "nombre":"Apple AirPods", "descripcion":"Apple Airpods 2", "imagen":"https://www.macstation.com.ar/img/productos/1407-apple-airpods-2.jpg", "precio":500, "stock":10, "categoria":"auriculares"}
//   ]
