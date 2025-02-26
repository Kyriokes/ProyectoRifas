import { db } from "./firebase"; // Importa la instancia de Firestore
import {
    collection,
    getDocs,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";

// Obtener todos los compradores
export const getCompradores = async () => {
    try {
        const compradoresSnapshot = await getDocs(
            collection(db, "compradores")
        );
        const compradoresList = compradoresSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return compradoresList;
    } catch (error: any) {
        throw new Error("Error al obtener los compradores: " + error.message);
    }
};

// Agregar un nuevo comprador
export const addComprador = async (data: any) => {
    try {
        const docRef = await addDoc(collection(db, "compradores"), data);
        return { message: "Comprador creado", id: docRef.id };
    } catch (error: any) {
        throw new Error("Error al crear comprador: " + error.message);
    }
};

// Obtener un comprador por ID
export const getCompradorById = async (id: string) => {
    try {
        const docRef = doc(db, "compradores", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("Comprador no encontrado");
        }
    } catch (error: any) {
        throw new Error("Error al obtener el comprador: " + error.message);
    }
};

// Actualizar un comprador
export const updateComprador = async (id: string, data: any) => {
    try {
        const docRef = doc(db, "compradores", id);
        await updateDoc(docRef, data);
        return { message: "Comprador actualizado" };
    } catch (error: any) {
        throw new Error("Error al actualizar el comprador: " + error.message);
    }
};

// Eliminar un comprador
export const deleteComprador = async (id: string) => {
    try {
        const docRef = doc(db, "compradores", id);
        await deleteDoc(docRef);
        return { message: "Comprador eliminado" };
    } catch (error: any) {
        throw new Error("Error al eliminar el comprador: " + error.message);
    }
};
