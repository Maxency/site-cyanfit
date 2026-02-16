import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { focusRing } from './ui/utils';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm({ onClose }: { onClose?: () => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {},
  });

  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const nameRegister = register('name', { required: 'Nome e obrigatorio' });

  useEffect(() => {
    // Focus name field when modal opens.
    nameRef.current?.focus();
  }, []);

  async function onSubmit(data: FormValues) {
    setSent(false);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: data.name,
          email: data.email,
          mensagem: `Assunto: ${data.subject}\n\n${data.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar mensagem');
      }

      setSent(true);
      reset();
    } catch (error) {
      console.error(error);
      setSubmitError('Nao foi possivel enviar. Tente novamente em alguns minutos.');
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto text-white"
      aria-label="Formulario de contato Alenya"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold">Fale com a Alenya</h3>
          <p className="text-sm text-gray-400 mt-1">Nos conte sobre seu projeto ou necessidade.</p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-colors flex-shrink-0"
            aria-label="Fechar formulario"
          >
            x
          </button>
        )}
      </div>

      {sent && (
        <div className="mb-6 p-4 rounded-lg bg-green-600/20 border border-green-600/30 text-green-200">
          Mensagem enviada com sucesso. Entraremos em contato em breve.
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 rounded-lg bg-red-600/20 border border-red-600/30 text-red-200">
          {submitError}
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm text-gray-300 mb-1">Nome</span>
          <input
            {...nameRegister}
            ref={(el) => {
              nameRegister.ref(el);
              nameRef.current = el;
            }}
            className={`bg-white/3 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none ${focusRing}`}
            placeholder="Seu nome"
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && <span className="text-xs text-red-400 mt-2">{errors.name.message}</span>}
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-gray-300 mb-2">E-mail</span>
          <input
            {...register('email', {
              required: 'E-mail e obrigatorio',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail invalido' },
            })}
            className={`bg-white/3 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none ${focusRing}`}
            placeholder="seu@exemplo.com"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <span className="text-xs text-red-400 mt-2">{errors.email.message}</span>}
        </label>
      </div>

      <div className="mt-6">
        <label className="flex flex-col">
          <span className="text-sm text-gray-300 mb-2">Assunto</span>
          <input
            {...register('subject', { required: 'Assunto e obrigatorio' })}
            className={`w-full bg-white/3 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none ${focusRing}`}
            placeholder="Ex: Interesse em CyanFit"
            aria-invalid={errors.subject ? 'true' : 'false'}
          />
          {errors.subject && <span className="text-xs text-red-400 mt-2">{errors.subject.message}</span>}
        </label>
      </div>

      <div className="mt-6">
        <label className="flex flex-col">
          <span className="text-sm text-gray-300 mb-2">Mensagem</span>
          <textarea
            {...register('message', {
              required: 'Mensagem e obrigatoria',
              minLength: { value: 10, message: 'Mensagem muito curta' },
            })}
            className={`w-full min-h-[120px] bg-white/3 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none ${focusRing}`}
            placeholder="Descreva seu projeto, duvidas ou orcamento desejado"
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && <span className="text-xs text-red-400 mt-2">{errors.message.message}</span>}
        </label>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-10 items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 rounded-lg font-semibold whitespace-nowrap hover:shadow-lg focus-visible:outline-none focus-visible:scale-105 active:scale-95 transition-transform duration-150 disabled:opacity-60"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        <button
          type="button"
          onClick={() => reset()}
          className={`inline-flex h-10 items-center justify-center bg-white/5 border border-white/10 text-white text-sm px-4 rounded-lg hover:bg-white/10 focus-visible:outline-none ${focusRing}`}
        >
          Limpar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

