import { NextResponse } from "next/server";
import {
    getMetodosPago,
    getMetodoPagoById,
    addMetodoPago,
    updateMetodoPago,
    deleteMetodoPago,
} from "../../../../../lib/metodos_pago";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (id) {
            const metodoPago = await getMetodoPagoById(id);
            return NextResponse.json(metodoPago);
        }

        const metodosPago = await getMetodosPago();
        return NextResponse.json(metodosPago);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { message, id } = await addMetodoPago(body);
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
            throw new Error("ID de método de pago no proporcionado o inválido");
        }

        const { message } = await updateMetodoPago(id, body);
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
            throw new Error("ID de método de pago no proporcionado o inválido");
        }

        const { message } = await deleteMetodoPago(id);
        return NextResponse.json({ message });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
