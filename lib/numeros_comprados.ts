import { db } from "./firebase";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
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
        const { rifaId, numero, comprador_id } = data;

        if (!rifaId || numero === undefined || !comprador_id) {
            throw new Error(
                "Faltan datos obligatorios (rifaId, numero, comprador_id)"
            );
        }

        // 1️⃣ Obtener la rifa para validar el rango de números
        const rifaRef = doc(db, "rifas", rifaId);
        const rifaSnap = await getDoc(rifaRef);

        if (!rifaSnap.exists()) {
            throw new Error("La rifa no existe");
        }

        const rifaData = rifaSnap.data();
        const cantidadMaxima = rifaData?.cantidad || 0; // Máximo de números disponibles en la rifa

        // 2️⃣ Validar que el número comprado esté dentro del rango permitido
        if (numero < 0 || numero > cantidadMaxima) {
            throw new Error(`El número debe estar entre 0 y ${cantidadMaxima}`);
        }

        // 3️⃣ Verificar si el número ya está comprado
        const q = query(
            collection(db, "numeros_comprados"),
            where("rifaId", "==", rifaId),
            where("numero", "==", numero)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            throw new Error(
                `El número ${numero} ya ha sido comprado en esta rifa`
            );
        }

        // 4️⃣ Si todo está correcto, registrar la compra
        const docRef = await addDoc(collection(db, "numeros_comprados"), data);
        return { message: "Número comprado con éxito", id: docRef.id };
    } catch (error: any) {
        throw new Error("Error al comprar número: " + error.message);
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
