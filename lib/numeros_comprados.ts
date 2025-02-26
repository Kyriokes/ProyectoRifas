import { db } from "./firebase";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

// Obtener todos los números comprados
export const getNumerosComprados = async () => {
    try {
        const numerosCompradosSnapshot = await getDocs(
            collection(db, "numeros_comprados")
        );
        const numerosList = numerosCompradosSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return numerosList;
    } catch (error: any) {
        throw new Error(
            "Error al obtener los números comprados: " + error.message
        );
    }
};

// Obtener un número comprado por ID
export const getNumeroCompradoById = async (id: string) => {
    try {
        const docRef = doc(db, "numeros_comprados", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("Número comprado no encontrado");
        }
    } catch (error: any) {
        throw new Error(
            "Error al obtener el número comprado: " + error.message
        );
    }
};

// Agregar un nuevo número comprado
export const addNumeroComprado = async (data: any) => {
    try {
        const docRef = await addDoc(collection(db, "numeros_comprados"), data);
        return { message: "Número comprado creado", id: docRef.id };
    } catch (error: any) {
        throw new Error("Error al crear número comprado: " + error.message);
    }
};

// Actualizar un número comprado
export const updateNumeroComprado = async (id: string, data: any) => {
    try {
        const docRef = doc(db, "numeros_comprados", id);
        await updateDoc(docRef, data);
        return { message: "Número comprado actualizado" };
    } catch (error: any) {
        throw new Error(
            "Error al actualizar número comprado: " + error.message
        );
    }
};

// Eliminar un número comprado
export const deleteNumeroComprado = async (id: string) => {
    try {
        const docRef = doc(db, "numeros_comprados", id);
        await deleteDoc(docRef);
        return { message: "Número comprado eliminado" };
    } catch (error: any) {
        throw new Error("Error al eliminar número comprado: " + error.message);
    }
};
