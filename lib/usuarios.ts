import { db } from "./firebase";
import {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import bcrypt from "bcryptjs";

// Obtener todos los usuarios
export const getUsuarios = async () => {
    try {
        const usuariosSnapshot = await getDocs(collection(db, "usuarios"));
        const usuariosList = usuariosSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return usuariosList;
    } catch (error:any) {
        throw new Error("Error al obtener los usuarios: " + error.message);
    }
};

// Agregar un nuevo usuario
export const addUsuario = async (data: any) => {
    try {
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(data.password, 10);

        const docRef = await addDoc(collection(db, "usuarios"), {
            username: data.username,
            password_hash: hashedPassword,
        });

        return { message: "Usuario creado", id: docRef.id };
    } catch (error:any) {
        throw new Error("Error al crear usuario: " + error.message);
    }
};

// Obtener un usuario por ID
export const getUsuarioById = async (id: string) => {
    try {
        const docRef = doc(db, "usuarios", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("Usuario no encontrado");
        }
    } catch (error:any) {
        throw new Error("Error al obtener el usuario: " + error.message);
    }
};

// Actualizar un usuario
export const updateUsuario = async (id: string, data: any) => {
    try {
        const docRef = doc(db, "usuarios", id);
        await updateDoc(docRef, data);
        return { message: "Usuario actualizado" };
    } catch (error:any) {
        throw new Error("Error al actualizar el usuario: " + error.message);
    }
};

// Eliminar un usuario
export const deleteUsuario = async (id: string) => {
    try {
        const docRef = doc(db, "usuarios", id);
        await deleteDoc(docRef);
        return { message: "Usuario eliminado" };
    } catch (error:any) {
        throw new Error("Error al eliminar el usuario: " + error.message);
    }
};
