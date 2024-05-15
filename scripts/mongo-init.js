print('START #################################################################');
db = db.getSiblingDB('sales')
print('CREATE DATABASE-SALES #################################################');
db.createUser({
  user: 'sales',
  pwd: '$SALES_PASSWORD',
  roles: [{ role: 'readWrite', db: 'sales' }],
});
print('CREATE USER-SALES #####################################################');
db.createCollection('receipts')
print('CREATE COLLECTION-RECEIPTS ############################################');
db.createCollection('documents')
print('CREATE COLLECTION-DOCUMENTS ###########################################');
db.createCollection('invoices')
print('CREATE COLLECTION-INVOICES ############################################');
print('END ###################################################################');