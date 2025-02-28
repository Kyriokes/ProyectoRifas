import { NextResponse } from "next/server";
import {
    getCompradores,
    addComprador,
    getCompradorById,
    updateComprador,
    deleteComprador,
} from "../../../../lib/compradores";

// Ruta GET para obtener todos los compradores
export async function GET(request: Request): Promise<NextResponse> {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (id) {
            const comprador = await getCompradorById(id);
            return NextResponse.json(comprador);
        }

        const compradores = await getCompradores();
        return NextResponse.json(compradores);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 500 });
    }
}

// Ruta POST para agregar un nuevo comprador
export async function POST(request: Request) {
    try {
        const data = await request.json(); // Obtener los datos del cuerpo de la solicitud
        const response = await addComprador(data);
        return NextResponse.json(response, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


// Ruta PUT para actualizar un comprador
export async function PUT(request: Request) {
    try {
        const { id } = await request.json();
        const data = await request.json();
        const response = await updateComprador(id, data);
        return NextResponse.json(response);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Ruta DELETE para eliminar un comprador
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        if (!id) {
            throw new Error("ID del comprador es necesario");
        }
        const response = await deleteComprador(id);
        return NextResponse.json(response);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
