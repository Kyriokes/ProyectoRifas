import { NextResponse } from "next/server";
import {
    getUsuarios,
    addUsuario,
    getUsuarioById,
    updateUsuario,
    deleteUsuario,
} from "../../../../lib/usuarios";

// Obtener todos los usuarios
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (id) {
            const usuario = await getUsuarioById(id);
            return NextResponse.json(usuario);
        }

        const usuarios = await getUsuarios();
        return NextResponse.json(usuarios);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
// Crear un nuevo usuario
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { message, id } = await addUsuario(body);

        return NextResponse.json({ message, id });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Actualizar un usuario
export async function PUT(request: Request) {
    try {
        const body = await request.json();
        // Obtener el ID de la URL y asegurarse de que no es undefined
        const urlSegments = request.url.split("/");
        const id = urlSegments.pop() || ""; // Obtén el último segmento

        if (!id) throw new Error("ID de usuario no proporcionado");

        const { message } = await updateUsuario(id, body);
        return NextResponse.json({ message });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Eliminar un usuario
export async function DELETE(request: Request) {
    try {
        // Obtener el ID de la URL y asegurarse de que no es undefined
        const urlSegments = request.url.split("/");
        const id = urlSegments.pop() || ""; // Obtén el último segmento

        if (!id) throw new Error("ID de usuario no proporcionado");

        const { message } = await deleteUsuario(id);
        return NextResponse.json({ message });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
