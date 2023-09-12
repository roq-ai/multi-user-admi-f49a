import * as yup from 'yup';

export const couponValidationSchema = yup.object().shape({
  code: yup.string().required(),
  discount: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
