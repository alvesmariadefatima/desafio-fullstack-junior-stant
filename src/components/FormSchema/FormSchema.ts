import * as yup from 'yup';

const FormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('O primeiro nome é obrigatório')
    .min(3, 'O nome deve ter pelo menos 3 caracteres'),

  email: yup
    .string()
    .required('O e-mail é obrigatório')
    .email('Digite um e-mail válido'),

  message: yup
    .string()
    .required('A mensagem é obrigatória')
    .min(3, 'A mensagem deve ter pelo menos 3 caracteres'),
});

export default FormSchema;