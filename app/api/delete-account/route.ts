import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, reason } = await request.json();

    if (!email || !reason) {
      return NextResponse.json(
        { error: 'El correo electrónico y la razón son requeridos' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Store the deletion request in your database
    // 2. Send a notification to your admin team
    // 3. Log the request for manual processing
    
    return NextResponse.json({ 
      success: true,
      message: 'Tu solicitud de eliminación de cuenta ha sido recibida. Nuestro equipo la procesará en breve.'
    });
  } catch (error) {
    console.error('Error procesando la solicitud de eliminación:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud de eliminación' },
      { status: 500 }
    );
  }
} 