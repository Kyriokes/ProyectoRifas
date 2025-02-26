import { db } from "./firebase"; // Importa la instancia de Firestore
import {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";

// Obtener todos los métodos de pago
export const getMetodosPago = async () => {
    try {
        const metodosPagoSnapshot = await getDocs(
            collection(db, "metodos_pago")
        );
        const metodosPagoList = metodosPagoSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return metodosPagoList;
    } catch (error:any) {
        throw new Error(
            "Error al obtener los métodos de pago: " + error.message
        );
    }
};

// Obtener un método de pago por ID
export const getMetodoPagoById = async (id: string) => {
    try {
        const docRef = doc(db, "metodos_pago", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("Método de pago no encontrado");
        }
    } catch (error:any) {
        throw new Error("Error al obtener el método de pago: " + error.message);
    }
};

// Crear un nuevo método de pago
export const addMetodoPago = async (data: any) => {
    try {
        const docRef = await addDoc(collection(db, "metodos_pago"), data);
        return { message: "Método de pago creado", id: docRef.id };
    } catch (error:any) {
        throw new Error("Error al crear método de pago: " + error.message);
    }
};

// Actualizar un método de pago
export const updateMetodoPago = async (id: string, data: any) => {
    try {
        const docRef = doc(db, "metodos_pago", id);
        await updateDoc(docRef, data);
        return { message: "Método de pago actualizado" };
    } catch (error:any) {
        throw new Error(
            "Error al actualizar el método de pago: " + error.message
        );
    }
};

// Eliminar un método de pago
export const deleteMetodoPago = async (id: string) => {
    try {
        const docRef = doc(db, "metodos_pago", id);
        await deleteDoc(docRef);
        return { message: "Método de pago eliminado" };
    } catch (error:any) {
        throw new Error(
            "Error al eliminar el método de pago: " + error.message
        );
    }
};
