<template>
    <div>
        <h1>Listado de reservas</h1>


        <label>Producto: </label>
        <input type="text" v-model="cajaProducto"/>
        <br/>
        <label>Cantidad: </label>
        <input type="number" v-model="cajaCantidad"/>
        <br />
        <button @click="insertarProducto" style="margin-top: 2em; margin-bottom: 2em;">
            Insertar producto
        </button>

        <button @click="modificarProducto" style="margin-top: 2em; margin-bottom: 2em;">
            Modificar
        </button>

        <table>
            <thead>
                <tr>
                    <th>PRODUCTO</th>
                    <th>CANTIDAD</th>
                    <th>MODIFICAR</th>
                    <th>ELIMINAR</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(producto,index) in productos" :key="index">
                    <td>{{producto.data().nombre}}</td>
                    <td>{{producto.data().cantidad}}</td>
                    <td>
                        <button @click="cargarDatos(producto.data().nombre, producto.data().cantidad)">
                            Modificar
                        </button>
                    </td>
                    <td>
                        <button @click="eliminarProducto(producto.data().nombre)">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import firebase from "./../utils/firebase.js";
const db = firebase.collection("listaCompra");
export default {
    name : "AdminCRUD" ,
    data() {
        return {
            reservas : [],
            nombre : "" ,
            apellidos : 0 ,
        }
    } , mounted() {
       this.getAll()
    } , methods : {
        getAll() {
            db.get().then(querySnapshot => {
                this.reservas = querySnapshot.docs;
            });
        } ,
        insertarProducto() {
            db.doc(this.cajaProducto).set({
                nombre : this.cajaProducto ,
                cantidad : this.cajaCantidad
            });
            this.getAll();
        } ,
        cargarDatos(producto, cantidad) {
            this.cajaProducto = producto;
            this.cajaCantidad = cantidad;
        } ,
        modificarProducto() {
            db.doc(this.cajaProducto).update({
                cantidad : this.cajaCantidad
            });
            this.getAll();
        } ,
        eliminarProducto(producto) {
            db.doc(producto).delete();
            this.getAll();
        }
    }
}
</script>

<style scoped>
table {
    display: table;
    width: 50%;
    margin: 0 auto;
}
table, th, td {
    border: 1px solid black;
}
</style>