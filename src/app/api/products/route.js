import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      'SELECT * FROM products ORDER BY created_at DESC'
    );

    return NextResponse.json(result.rows, { status: 200 });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Ошибка загрузки товаров' },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}

export async function POST(request) {
  const client = await pool.connect();
  
  try {
    const { name, description, price, image_url, category } = await request.json();
    
    if (!name || !price) {
      return NextResponse.json(
        { error: 'Название и цена обязательны' },
        { status: 400 }
      );
    }
    
    const result = await client.query(
      `INSERT INTO products (name, description, price, image_url, category) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [name, description, price, image_url, category]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Ошибка создания товара' },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}