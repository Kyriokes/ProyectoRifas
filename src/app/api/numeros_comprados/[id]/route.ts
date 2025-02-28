import { NextResponse } from "next/server";
import {
    getNumerosComprados,
    getNumeroCompradoById,
    addNumeroComprado,
    updateNumeroComprado,
    deleteNumeroComprado,
} from "../../../../../lib/numeros_comprados";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (id) {
            const numeroComprado = await getNumeroCompradoById(id);
            return NextResponse.json(numeroComprado);
        }

        const numerosComprados = await getNumerosComprados();
        return NextResponse.json(numerosComprados);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { message, id } = await addNumeroComprado(body);
        return NextResponse.json({ message, id });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const urlParts = request.url.split("/");
        const id = urlParts[urlParts.length - 1]; // Obtener el último valor de la URL como ID

        if (!id || typeof id !== "string") {
            throw new Error(
                "ID de número comprado no proporcionado o inválido"
            );
        }

        const { message } = await updateNumeroComprado(id, body);
        return NextResponse.json({ message });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const urlParts = request.url.split("/");
        const id = urlParts[urlParts.length - 1]; // Obtener el último valor de la URL como ID

        if (!id || typeof id !== "string") {
            throw new Error(
                "ID de número comprado no proporcionado o inválido"
            );
        }

        const { message } = await deleteNumeroComprado(id);
        return NextResponse.json({ message });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
