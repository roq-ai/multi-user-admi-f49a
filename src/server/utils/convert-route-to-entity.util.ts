const mapping: Record<string, string> = {
  coupons: 'coupon',
  invoices: 'invoice',
  organizations: 'organization',
  services: 'service',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
