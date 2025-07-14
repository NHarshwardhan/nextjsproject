// app/api/revenue/[storeId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { checkApiKey } from '@/app/lib/auth';

const fakeDB = {
  nike: 15000,
  adidas: 12000,
  puma: 9000,
};

export async function GET(req, context) {
  // Middleware check
  const auth = checkApiKey(req);
  if (auth) return auth;

  const { storeId } = context.params;
  const storeRevenue = fakeDB[storeId.toLowerCase()] || 0;

  return NextResponse.json({
    storeId,
    revenue: storeRevenue,
    currency: 'USD'
  });
}
