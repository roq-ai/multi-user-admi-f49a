import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
