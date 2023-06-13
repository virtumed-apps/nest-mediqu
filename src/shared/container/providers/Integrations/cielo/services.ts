import { GetCardType } from 'src/common/utils/utils';
import api from './api';

export const pagamento = ({
  cartaocodigoseguranca,
  cartaonome,
  cartaonumero = '',
  identificator,
  paciente,
  valor,
  cartaovencimento,
}) =>
  api.post('/creditCardPayment', {
    id: identificator,
    customer: cartaonome,
    creditCardNumber: cartaonumero.replace(/ /g, ''),
    creditCardCVV: cartaocodigoseguranca,
    creditCardFlag: GetCardType(cartaonumero.replace(/ /g, '')),
    creditCardHolder: paciente.nome,
    value: valor,
    expirationDate: cartaovencimento,
  });

export default {
  pagamento,
};
