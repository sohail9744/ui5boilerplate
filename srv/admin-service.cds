using {sap.capire.bookshop as my} from '../db/schema';

// service AdminService @(requires: 'admin') {
//   entity Authors as projection on my.Authors;
// }

service MyService {
  entity Authors as projection on my.Authors;
}
