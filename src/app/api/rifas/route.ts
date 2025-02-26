import { NextResponse } from "next/server";
import {
    getRifas,
    getRifaById,
    addRifa,
    updateRifa,
    deleteRifa,
} from "../../../../lib/rifas";

export async function GET(request: Request) {
    try {
        // Si no se pasa ID, obtener todos las rifas
        const rifas = await getRifas();
        return NextResponse.json(rifas);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET_BY_ID(request: Request) {
    try {
        // Obtener el ID de la URL de la forma más segura
        const urlParts = request.url.split("/");
        const id = urlParts[urlParts.length - 1]; // Tomamos el último valor como el ID de la rifa

        if (!id || typeof id !== "string") {
            throw new Error("ID de rifa no proporcionado o inválido");
        }

        const rifa = await getRifaById(id);
        return NextResponse.json(rifa);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { message, id } = await addRifa(body);

        return NextResponse.json({ message, id });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const urlParts = request.url.split("/");
        const id = urlParts[urlParts.length - 1]; // Tomamos el último valor como el ID de la rifa

        if (!id || typeof id !== "string") {
            throw new Error("ID de rifa no proporcionado o inválido");
        }

        const { message } = await updateRifa(id, body);
        return NextResponse.json({ message });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const urlParts = request.url.split("/");
        const id = urlParts[urlParts.length - 1]; // Tomamos el último valor como el ID de la rifa

        if (!id || typeof id !== "string") {
            throw new Error("ID de rifa no proporcionado o inválido");
        }

        const { message } = await deleteRifa(id);
        return NextResponse.json({ message });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
