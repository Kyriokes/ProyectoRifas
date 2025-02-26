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

// Obtener todas las rifas
export const getRifas = async () => {
    try {
        const rifasSnapshot = await getDocs(collection(db, "rifas"));
        const rifasList = rifasSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return rifasList;
    } catch (error: any) {
        throw new Error("Error al obtener las rifas: " + error.message);
    }
};

// Agregar una nueva rifa
export const addRifa = async (data: any) => {
    try {
        const docRef = await addDoc(collection(db, "rifas"), data);
        return { message: "Rifa creada", id: docRef.id };
    } catch (error: any) {
        throw new Error("Error al crear rifa: " + error.message);
    }
};

// Obtener una rifa por ID
export const getRifaById = async (id: string) => {
    try {
        const docRef = doc(db, "rifas", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("Rifa no encontrada");
        }
    } catch (error: any) {
        throw new Error("Error al obtener la rifa: " + error.message);
    }
};

// Actualizar una rifa
export const updateRifa = async (id: string, data: any) => {
    try {
        const docRef = doc(db, "rifas", id);
        await updateDoc(docRef, data);
        return { message: "Rifa actualizada" };
    } catch (error: any) {
        throw new Error("Error al actualizar la rifa: " + error.message);
    }
};

// Eliminar una rifa
export const deleteRifa = async (id: string) => {
    try {
        const docRef = doc(db, "rifas", id);
        await deleteDoc(docRef);
        return { message: "Rifa eliminada" };
    } catch (error: any) {
        throw new Error("Error al eliminar la rifa: " + error.message);
    }
};
