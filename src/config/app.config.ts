interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Customer'],
  tenantRoles: ['Admin', 'Employee', 'Team Member', 'Service Provider'],
  tenantName: 'Organization',
  applicationName: ' multi user admin portal ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Register and login to the application',
    'Request services from the organization',
    'Manage service requests',
  ],
  ownerAbilities: [
    "Manage the organization's details",
    'Invite Employees, Team Members, and Service Providers to join the organization',
    'Manage discount coupons',
    'Export data related to the organization, employees, teams, service providers, and customers',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/d51d5296-b8f4-49ba-97e8-e82d08e7e5b5',
};
