import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  is_active: yup.boolean().required(),
  user_id: yup.string().nullable().required(),
});
